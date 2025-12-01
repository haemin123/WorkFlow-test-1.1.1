
import React, { useState } from 'react';
import { authService } from '../services/authService';

interface GoogleProfileModalProps {
    user: any;
    onClose: () => void;
}

export const GoogleProfileModal: React.FC<GoogleProfileModalProps> = ({ user, onClose }) => {
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
        
        if (!formData.name.trim()) {
            alert("이름은 필수 입력 항목입니다.");
            return;
        }

        setLoading(true);
        try {
            // Create or Update Profile
            // Note: signupGoogle in authService will handle the creation properly
            // But here we are just updating an existing auth user with firestore data
            // Since we disabled auto-creation in loginGoogle, we use setDoc/update logic here.
            // Actually we will expose a method in authService to finalize google login
            
            await authService.updateUserProfile(user.uid, {
                ...formData,
                email: user.email,
                id: user.uid,
                role: 'REQUESTER', // Default role
                createdAt: Date.now(), // Will be ignored if update
            });
            
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
             <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-gray-200">
                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="text-lg font-bold text-gray-900">추가 정보 입력</h3>
                </div>
                <form onSubmit={handleSave} className="p-6 space-y-5">
                    <div className="p-4 bg-blue-50 rounded-xl text-blue-700 text-sm font-medium flex flex-col gap-1">
                        <span>👋 환영합니다!</span>
                        <span className="opacity-80">원활한 서비스 이용을 위해 필수 정보를 입력해주세요.</span>
                    </div>

                    <div className="space-y-3">
                         <label className="text-xs font-bold text-gray-500 uppercase ml-1">필수 정보 <span className="text-red-500">*</span></label>
                         <input 
                            name="name" 
                            type="text" 
                            placeholder="이름을 입력하세요" 
                            required 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">부가 정보 (선택)</label>
                        <div className="grid grid-cols-2 gap-3">
                            <input name="department" type="text" placeholder="본부" onChange={handleChange} className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                            <input name="team" type="text" placeholder="팀" onChange={handleChange} className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                            <input name="position" type="text" placeholder="직급" onChange={handleChange} className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                            <input name="jobTitle" type="text" placeholder="직책" onChange={handleChange} className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full py-4 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95 disabled:opacity-70 disabled:scale-100 transition-all shadow-lg shadow-blue-100"
                    >
                        {loading ? '저장 중...' : '저장하고 시작하기'}
                    </button>
                </form>
             </div>
        </div>
    );
}
