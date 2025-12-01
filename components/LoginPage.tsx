
import React, { useState } from 'react';
import { authService } from '../services/authService';
import { FirebaseError } from 'firebase/app';
import { User, Mail, Lock, Chrome, Loader2, ArrowRight, X } from 'lucide-react';
import { User as UserType } from '../types'; // Import UserType

export const LoginPage = ({ onProfileComplete }: { onProfileComplete?: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Login Inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Modals
  const [showSignup, setShowSignup] = useState(false);
  const [showReset, setShowReset] = useState(false);
  
  // Google Profile Completion
  const [showGoogleProfile, setShowGoogleProfile] = useState(false);
  const [googleUser, setGoogleUser] = useState<any>(null); // Temp store for Google User

  // --- Handlers ---

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    try {
      await authService.loginEmail(email, password);
      // Login success handled by onAuthStateChanged in App.tsx
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
        setErrorMsg('이메일 또는 비밀번호가 올바르지 않습니다.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMsg('비밀번호가 올바르지 않습니다.');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMsg('올바른 이메일 형식이 아닙니다.');
      } else {
        setErrorMsg('로그인 중 오류가 발생했습니다: ' + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrorMsg('');
    try {
      const result = await authService.loginGoogle();
      // Check if this is a new user (or existing but no profile)
      const userProfile = await authService.getUserProfile(result.user.uid);
      
      // If profile incomplete (e.g. just email/name but no extended fields), or we want to force check:
      // For now, let's assume if it's a new user (metadata.creationTime == lastSignInTime approx) OR
      // simply check if 'team/position' is missing?
      // Since Google login auto-creates doc in authService if missing, let's check if we need more info.
      
      // We'll check if specific fields are empty.
      if (!userProfile || !userProfile.department || !userProfile.team) {
          setGoogleUser(result.user);
          setShowGoogleProfile(true);
      } else {
          // All good
      }

    } catch (error: any) {
      console.error(error);
      setErrorMsg('Google 로그인 실패: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-8 animate-fade-in">
        {/* Logo Section */}
        <div className="text-center mb-8">
            <img src="/logo.png" alt="Logo" className="h-10 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-sm text-gray-500 mt-2">업무 효율의 시작, Nexus AI와 함께하세요.</p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm">
                <div className="w-1 h-8 bg-red-400 rounded-full"></div>
                {errorMsg}
            </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 ml-1">이메일</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="name@company.com"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <div className="flex justify-between items-center ml-1">
                    <label className="text-xs font-bold text-gray-500">비밀번호</label>
                    <button type="button" onClick={() => setShowReset(true)} className="text-xs text-blue-600 hover:underline">
                        비밀번호를 잊으셨나요?
                    </button>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                        type="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="••••••••"
                    />
                </div>
            </div>

            <button 
                type="submit" 
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200 disabled:opacity-70"
            >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>로그인</span>}
                {!isLoading && <ArrowRight className="w-4 h-4" />}
            </button>
        </form>

        <div className="my-8 flex items-center gap-4">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <button 
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 active:scale-95 transition-all"
        >
            <Chrome className="w-5 h-5 text-blue-500" />
            <span>Google 계정으로 계속하기</span>
        </button>

        <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
                계정이 없으신가요?{' '}
                <button onClick={() => setShowSignup(true)} className="text-blue-600 font-bold hover:underline">
                    회원가입
                </button>
            </p>
        </div>
      </div>

      {/* --- Modals --- */}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
      {showReset && <PasswordResetModal onClose={() => setShowReset(false)} />}
      {showGoogleProfile && googleUser && (
        <GoogleProfileModal 
            user={googleUser} 
            onClose={() => { 
                setShowGoogleProfile(false); 
                if(onProfileComplete) onProfileComplete();
            }} 
        />
      )}
    </div>
  );
};

// --- Sub Components: Google Profile Completion Modal ---
const GoogleProfileModal = ({ user, onClose }: { user: any, onClose: () => void }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: user.displayName || '',
        department: '', 
        team: '', 
        position: '', 
        jobTitle: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await authService.updateUserProfile(user.uid, formData);
            alert("정보가 저장되었습니다.");
            onClose();
        } catch (error: any) {
            console.error(error);
            alert("저장 실패: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
             <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="text-lg font-bold text-gray-900">추가 정보 입력</h3>
                </div>
                <form onSubmit={handleSave} className="p-6 space-y-4">
                    <div className="p-4 bg-blue-50 rounded-xl text-blue-600 text-sm mb-4">
                        원활한 서비스 이용을 위해 추가 정보를 입력해주세요.
                    </div>

                    <div className="space-y-3">
                         <h4 className="text-xs font-bold text-gray-400 uppercase">필수 정보</h4>
                         <input name="name" type="text" placeholder="이름" required value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                    </div>

                    <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold text-gray-400 uppercase">부가 정보 (선택)</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <input name="department" type="text" placeholder="본부" onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                            <input name="team" type="text" placeholder="팀" onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                            <input name="position" type="text" placeholder="직급" onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                            <input name="jobTitle" type="text" placeholder="직책" onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="w-full py-3.5 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70">
                        {loading ? '저장 후 시작하기' : '완료'}
                    </button>
                </form>
             </div>
        </div>
    );
}

// --- Sub Components: Signup Modal ---
const SignupModal = ({ onClose }: { onClose: () => void }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '', password: '', confirmPassword: '', name: '', 
        department: '', team: '', position: '', jobTitle: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        if (formData.password.length < 6) {
            alert("비밀번호는 6자 이상이어야 합니다.");
            return;
        }
        
        setLoading(true);
        try {
            await authService.signup(formData.email, formData.password, formData.name, {
                department: formData.department,
                team: formData.team,
                position: formData.position,
                jobTitle: formData.jobTitle
            });
            alert("회원가입이 완료되었습니다.");
            onClose();
        } catch (error: any) {
            console.error(error);
            if (error.code === 'auth/email-already-in-use') {
                alert("이미 사용 중인 이메일입니다.");
            } else if (error.code === 'auth/invalid-email') {
                alert("올바른 이메일 형식이 아닙니다.");
            } else {
                alert("회원가입 실패: " + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="text-lg font-bold text-gray-900">회원가입</h3>
                    <button onClick={onClose}><X className="w-5 h-5 text-gray-400 hover:text-gray-600" /></button>
                </div>
                <form onSubmit={handleSignup} className="p-6 space-y-4">
                    {/* Mandatory */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-gray-400 uppercase">필수 정보</h4>
                        <input name="email" type="email" placeholder="이메일 (ID)" required onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                        <input name="password" type="password" placeholder="비밀번호 (6자 이상)" required onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                        <input name="confirmPassword" type="password" placeholder="비밀번호 확인" required onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                        <input name="name" type="text" placeholder="이름" required onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                    </div>
                    
                    {/* Optional */}
                    <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold text-gray-400 uppercase">부가 정보 (선택)</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <input name="department" type="text" placeholder="본부" onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                            <input name="team" type="text" placeholder="팀" onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                            <input name="position" type="text" placeholder="직급" onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                            <input name="jobTitle" type="text" placeholder="직책" onChange={handleChange} className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="w-full py-3.5 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70">
                        {loading ? '처리 중...' : '가입하기'}
                    </button>
                </form>
            </div>
        </div>
    );
};

// --- Sub Components: Password Reset Modal ---
const PasswordResetModal = ({ onClose }: { onClose: () => void }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await authService.resetPassword(email);
            setSent(true);
        } catch (error: any) {
            alert("전송 실패: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center">
                <div className="flex justify-end mb-2">
                    <button onClick={onClose}><X className="w-5 h-5 text-gray-400" /></button>
                </div>
                
                {!sent ? (
                    <>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">비밀번호 재설정</h3>
                        <p className="text-sm text-gray-500 mb-6">가입하신 이메일 주소를 입력하시면<br/>비밀번호 재설정 링크를 보내드립니다.</p>
                        <form onSubmit={handleReset} className="space-y-4">
                            <input 
                                type="email" 
                                placeholder="name@company.com" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-center" 
                            />
                            <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70">
                                {loading ? '전송 중...' : '재설정 링크 보내기'}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="py-6">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">이메일 전송 완료</h3>
                        <p className="text-sm text-gray-500 mb-6">메일함을 확인하여 비밀번호를 재설정해주세요.</p>
                        <button onClick={onClose} className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200">
                            닫기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
