import React from 'react';
import { LogOut } from './Icons';
import { User as FirebaseUser } from 'firebase/auth';

interface CommonHeaderProps {
    title: string;
    subtitle: string;
    user: FirebaseUser | null;
    onLogout: () => void;
    onNavigateProfile: () => void;
    children?: React.ReactNode;
}

export const CommonHeader: React.FC<CommonHeaderProps> = ({ 
    title, 
    subtitle, 
    user, 
    onLogout, 
    onNavigateProfile, 
    children 
}) => {
    return (
      <header className="h-20 flex items-center justify-between px-8 z-10 shrink-0 backdrop-blur-sm bg-white/50 sticky top-0">
        <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h1>
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        
        <div className="flex items-center gap-4">
            {children}
            
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <button onClick={onNavigateProfile} className="group flex items-center gap-2 outline-none">
                    {user?.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName || 'User'} className="w-10 h-10 rounded-full border border-gray-200 group-hover:ring-2 ring-gray-200 transition-all object-cover" />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors">
                            {user?.email?.charAt(0).toUpperCase() || 'U'}
                        </div>
                    )}
                    <div className="text-left hidden md:block">
                        <p className="text-sm font-bold text-gray-700 leading-none">{user?.displayName || 'User'}</p>
                        <p className="text-[10px] text-gray-400 mt-1">프로필 관리</p>
                    </div>
                </button>

                <button onClick={onLogout} className="text-gray-400 hover:text-red-600 transition-colors p-2 ml-2" title="로그아웃">
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        </div>
    </header>
  );
};
