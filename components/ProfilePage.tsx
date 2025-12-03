
import React, { useState, useEffect, useRef } from 'react';
import { authService } from '../services/authService';
import { User, Lock, Save, Loader2, UserCircle, Camera, Trash2 } from 'lucide-react';
import { User as UserType } from '../types';
import { INITIAL_ORGANIZATION_DATA } from '../firebase-dropdown-config';

interface ProfilePageProps {
  currentUser: any;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ currentUser }) => {
  const [profile, setProfile] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Image Upload State
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  // Password Change State
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pwMsg, setPwMsg] = useState('');

  // Dynamic Team Options
  const [availableTeams, setAvailableTeams] = useState<string[]>([]);

  useEffect(() => {
    loadProfile();
  }, [currentUser]);

  // Update available teams when profile department changes
  useEffect(() => {
      if (profile?.department && INITIAL_ORGANIZATION_DATA.departments.팀매핑[profile.department]) {
          setAvailableTeams(INITIAL_ORGANIZATION_DATA.departments.팀매핑[profile.department]);
      } else {
          setAvailableTeams([]);
      }
  }, [profile?.department]);

  const loadProfile = async () => {
    if (!currentUser) return;
    try {
        const data = await authService.getUserProfile(currentUser.uid);
        if (data) {
            setProfile(data);
            // Set initial preview if exists
            if (data.profileImageUrl) setPreviewImage(data.profileImageUrl);
        }
    } catch (e) {
        console.error(e);
    } finally {
        setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      if (profile) {
          const { name, value } = e.target;
          if (name === 'department') {
               setProfile({ ...profile, [name]: value, team: '' }); // Reset team on dept change
          } else {
               setProfile({ ...profile, [name]: value });
          }
      }
  };

  // Image Handlers
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          setSelectedFile(file);
          
          // Create preview URL
          const reader = new FileReader();
          reader.onloadend = () => {
              setPreviewImage(reader.result as string);
          };
          reader.readAsDataURL(file);
      }
  };

  const handleDeleteImage = async () => {
      if (!confirm("프로필 이미지를 삭제하시겠습니까?")) return;
      if (!currentUser || !profile) return;

      setUploading(true);
      try {
          await authService.deleteProfileImage(currentUser.uid);
          // Update Firestore
          await authService.updateUserProfile(currentUser.uid, { ...profile, profileImageUrl: '' });
          
          setProfile({ ...profile, profileImageUrl: '' });
          setPreviewImage(null);
          setSelectedFile(null);
          alert("이미지가 삭제되었습니다.");
      } catch (e: any) {
          alert("삭제 실패: " + e.message);
      } finally {
          setUploading(false);
      }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!profile || !currentUser) return;
      
      // Validation Check
      if (!profile.name?.trim() || !profile.department || !profile.team || !profile.position || !profile.jobTitle) {
          alert("모든 필수 항목을 입력/선택해주세요.");
          return;
      }

      setSaving(true);
      try {
          let downloadURL = profile.profileImageUrl;

          // 1. Upload Image if selected
          if (selectedFile) {
              downloadURL = await authService.uploadProfileImage(currentUser.uid, selectedFile);
          }

          // 2. Update Firestore
          await authService.updateUserProfile(currentUser.uid, {
              ...profile,
              profileImageUrl: downloadURL
          });
          
          // Update local state
          setProfile({ ...profile, profileImageUrl: downloadURL });
          setSelectedFile(null); // Reset file selection

          alert("프로필이 업데이트되었습니다.");
          
          // Go back to previous page
          window.history.back();

      } catch (e: any) {
          alert("업데이트 실패: " + e.message);
      } finally {
          setSaving(false);
      }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
      e.preventDefault();
      if (newPassword !== confirmPassword) {
          setPwMsg("비밀번호가 일치하지 않습니다.");
          return;
      }
      if (newPassword.length < 6) {
          setPwMsg("비밀번호는 6자 이상이어야 합니다.");
          return;
      }

      try {
          await authService.changePassword(newPassword);
          setPwMsg("비밀번호가 변경되었습니다.");
          setNewPassword('');
          setConfirmPassword('');
      } catch (e: any) {
          setPwMsg("변경 실패: " + e.message);
      }
  };

  if (loading) return <div className="flex h-full items-center justify-center"><Loader2 className="animate-spin text-gray-400"/></div>;
  if (!profile) return <div className="p-8 text-center text-gray-500">프로필 정보를 불러올 수 없습니다.</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 animate-fade-in">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <UserCircle className="w-8 h-8 text-blue-600"/>
            프로필 관리
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Basic Info Form */}
            <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    
                    {/* Image Upload Section */}
                    <div className="flex flex-col items-center mb-8 pb-8 border-b border-gray-100">
                        <div className="relative group mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
                                {previewImage ? (
                                    <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <User className="w-16 h-16" />
                                    </div>
                                )}
                            </div>
                            <button 
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 p-2.5 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all group-hover:scale-110"
                                title="이미지 변경"
                            >
                                <Camera className="w-5 h-5" />
                            </button>
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleImageSelect} 
                                accept="image/*" 
                                className="hidden" 
                            />
                        </div>
                        <div className="flex gap-3">
                            <button 
                                type="button" 
                                onClick={() => fileInputRef.current?.click()}
                                className="text-sm font-bold text-blue-600 hover:underline"
                            >
                                이미지 선택
                            </button>
                            {previewImage && (
                                <>
                                    <span className="text-gray-300">|</span>
                                    <button 
                                        type="button" 
                                        onClick={handleDeleteImage}
                                        disabled={uploading}
                                        className="text-sm font-bold text-red-500 hover:underline flex items-center gap-1"
                                    >
                                        <Trash2 className="w-3 h-3"/> 삭제
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <User className="w-5 h-5 text-gray-400"/>
                        기본 정보
                    </h2>
                    <form onSubmit={handleSaveProfile} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500">이메일 (변경 불가)</label>
                                <input type="email" value={profile.email} disabled className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500">이름 <span className="text-red-500">*</span></label>
                                <input name="name" type="text" required value={profile.name} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors" />
                            </div>
                            
                            {/* 본부 */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500">본부 <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        name="department" 
                                        required 
                                        value={profile.department || ''} 
                                        onChange={handleChange} 
                                        className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors appearance-none bg-white"
                                    >
                                        <option value="">본부 선택</option>
                                        {INITIAL_ORGANIZATION_DATA.departments.본부.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                                </div>
                            </div>

                            {/* 팀 */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500">팀 <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        name="team" 
                                        required 
                                        value={profile.team || ''} 
                                        onChange={handleChange}
                                        disabled={!profile.department} // Disable if no department selected
                                        className={`w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors appearance-none bg-white ${!profile.department ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''}`}
                                    >
                                        <option value="">
                                            {profile.department ? "팀 선택" : "본부를 먼저 선택하세요"}
                                        </option>
                                        {availableTeams.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                                </div>
                            </div>

                            {/* 직급 */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500">직급 <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        name="position" 
                                        required 
                                        value={profile.position || ''} 
                                        onChange={handleChange} 
                                        className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors appearance-none bg-white"
                                    >
                                        <option value="">직급 선택</option>
                                        {INITIAL_ORGANIZATION_DATA.positions.직급.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                                </div>
                            </div>

                            {/* 직책 */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500">직책 <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        name="jobTitle" 
                                        required 
                                        value={profile.jobTitle || ''} 
                                        onChange={handleChange} 
                                        className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors appearance-none bg-white"
                                    >
                                        <option value="">직책 선택</option>
                                        {INITIAL_ORGANIZATION_DATA.positions.직책.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-4 flex justify-end">
                            <button type="submit" disabled={saving || uploading} className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-colors disabled:opacity-70">
                                {saving ? <Loader2 className="w-4 h-4 animate-spin"/> : <Save className="w-4 h-4"/>}
                                <span>변경사항 저장</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right: Password Change */}
            <div className="space-y-6">
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-gray-400"/>
                        비밀번호 변경
                    </h2>
                    <form onSubmit={handleChangePassword} className="space-y-4">
                        <input 
                            type="password" 
                            placeholder="새 비밀번호" 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors" 
                        />
                        <input 
                            type="password" 
                            placeholder="새 비밀번호 확인" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 transition-colors" 
                        />
                        
                        {pwMsg && <p className={`text-xs font-bold ${pwMsg.includes('실패') || pwMsg.includes('일치하지') ? 'text-red-500' : 'text-green-500'}`}>{pwMsg}</p>}

                        <button type="submit" className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                            비밀번호 변경
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};
