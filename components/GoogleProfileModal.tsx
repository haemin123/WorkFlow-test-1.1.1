
import React, { useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { INITIAL_ORGANIZATION_DATA } from '../firebase-dropdown-config';

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

    const [availableTeams, setAvailableTeams] = useState<string[]>([]);

    // Update available teams when department changes
    useEffect(() => {
        if (formData.department && INITIAL_ORGANIZATION_DATA.departments.팀매핑[formData.department]) {
            setAvailableTeams(INITIAL_ORGANIZATION_DATA.departments.팀매핑[formData.department]);
        } else {
            setAvailableTeams([]);
        }
    }, [formData.department]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        if (name === 'department') {
            // Reset team when department changes
            setFormData({ ...formData, [name]: value, team: '' });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // 모든 필드가 채워져 있는지 확인
        if (!formData.name.trim() || !formData.department || !formData.team || !formData.position || !formData.jobTitle) {
            alert("모든 항목을 선택/입력해주세요.");
            return;
        }

        setLoading(true);
        try {
            await authService.updateUserProfile(user.uid, {
                ...formData,
                email: user.email,
                id: user.uid,
                role: 'REQUESTER', // Default role
                createdAt: Date.now(),
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
                            placeholder="이름" 
                            required 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">추가 정보 <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-2 gap-3">
                            {/* 본부 */}
                            <div className="relative">
                                <select 
                                    name="department" 
                                    required 
                                    value={formData.department} 
                                    onChange={handleChange} 
                                    className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none bg-white"
                                >
                                    <option value="">본부 선택</option>
                                    {INITIAL_ORGANIZATION_DATA.departments.본부.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                            </div>

                            {/* 팀 */}
                            <div className="relative">
                                <select 
                                    name="team" 
                                    required 
                                    value={formData.team} 
                                    onChange={handleChange}
                                    disabled={!formData.department} // Disable if no department selected
                                    className={`w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none bg-white ${!formData.department ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''}`}
                                >
                                    <option value="">
                                        {formData.department ? "팀 선택" : "본부를 먼저 선택하세요"}
                                    </option>
                                    {availableTeams.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                            </div>

                            {/* 직급 */}
                            <div className="relative">
                                <select 
                                    name="position" 
                                    required 
                                    value={formData.position} 
                                    onChange={handleChange} 
                                    className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none bg-white"
                                >
                                    <option value="">직급 선택</option>
                                    {INITIAL_ORGANIZATION_DATA.positions.직급.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                            </div>

                            {/* 직책 */}
                            <div className="relative">
                                <select 
                                    name="jobTitle" 
                                    required 
                                    value={formData.jobTitle} 
                                    onChange={handleChange} 
                                    className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none bg-white"
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
