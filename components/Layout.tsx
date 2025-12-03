import React, { useState } from 'react';
import { ViewMode } from '../types';
import { LayoutDashboard, Sparkles, Bot, BarChart3, Settings, Archive, ChevronLeft, ChevronRight, BookOpen } from './Icons'; // BookOpen added

interface LayoutProps { 
    children: React.ReactNode; 
    currentView: ViewMode; 
    onNavigate: (view: ViewMode) => void; 
}

const NavButton = ({ icon, label, active, onClick, collapsed }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void, collapsed: boolean }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center ${collapsed ? 'justify-center px-2' : 'justify-start px-4'} py-3 rounded-full transition-all duration-200 group relative
    ${active ? 'bg-blue-100/50 text-blue-700 font-medium' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
    title={collapsed ? label : undefined}
  >
     {React.cloneElement(icon as React.ReactElement<any>, { className: `w-5 h-5 flex-shrink-0 ${active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}` })}
     
     {/* Text Label - Hidden when collapsed */}
     {!collapsed && (
        <span className="ml-3 text-sm truncate transition-opacity duration-200">{label}</span>
     )}
  </button>
);

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex font-sans bg-white text-gray-900">
      {/* Sidebar */}
      <aside 
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} 
        transition-all duration-300 ease-in-out border-r border-gray-200 flex flex-col bg-gray-50/80 backdrop-blur-md fixed h-full z-20`}
      >
        {/* Toggle Button - Centered Vertically */}
        <button 
            onClick={toggleSidebar}
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-gray-600 z-50 hover:scale-110 transition-transform"
        >
            {isSidebarOpen ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        </button>

        <div className={`h-20 flex items-center ${isSidebarOpen ? 'px-8 justify-start' : 'justify-center'} transition-all duration-300`}>
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate('INSIGHT')}>
              {isSidebarOpen ? (
                  <img src="/logo.png" alt="Baro.ai Logo" className="w-auto h-8 object-contain" />
              ) : (
                  // Simple Logo Icon for collapsed state (Just using part of logo or different styling)
                  <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" /> 
              )}
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1">
          <NavButton 
              icon={<BarChart3 />} 
              label="인사이트" 
              active={currentView === 'INSIGHT'} 
              onClick={() => onNavigate('INSIGHT')}
              collapsed={!isSidebarOpen}
          />
          <NavButton 
              icon={<LayoutDashboard />} 
              label="보드" 
              active={currentView === 'BOARD'} 
              onClick={() => onNavigate('BOARD')}
              collapsed={!isSidebarOpen}
          />
          
          {/* Knowledge Hub Tab */}
          <NavButton 
              icon={<BookOpen />} 
              label="지식 허브" 
              active={currentView === 'KNOWLEDGE'} 
              onClick={() => onNavigate('KNOWLEDGE')}
              collapsed={!isSidebarOpen}
          />

          <NavButton 
              icon={<Bot />} 
              label="Gemini Pro" 
              active={currentView === 'GEMINI'} 
              onClick={() => onNavigate('GEMINI')}
              collapsed={!isSidebarOpen}
          />
          
          <div className="pt-2"></div>
          <NavButton 
              icon={<Archive />} 
              label="보관함" 
              active={currentView === 'ARCHIVE'} 
              onClick={() => onNavigate('ARCHIVE')}
              collapsed={!isSidebarOpen}
          />
          <NavButton 
              icon={<Settings />} 
              label="설정" 
              active={currentView === 'SETTINGS'} 
              onClick={() => onNavigate('SETTINGS')}
              collapsed={!isSidebarOpen}
          />
        </nav>

        <div className={`p-6 border-t border-gray-100 transition-all duration-300 ${!isSidebarOpen && 'px-2'}`}>
           {isSidebarOpen ? (
               <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <p className="text-xs font-semibold text-gray-600">AI 크레딧</p>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                     <div className="bg-blue-600 h-1.5 rounded-full w-[45%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 font-medium">
                     <span>450 사용</span>
                     <span>1000 한도</span>
                  </div>
               </div>
           ) : (
               // Collapsed Credit View
                <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center gap-1 group relative cursor-help">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <div className="w-full bg-gray-100 rounded-full h-1 w-8">
                         <div className="bg-blue-600 h-1 rounded-full w-[45%]"></div>
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute left-full ml-2 bottom-0 w-32 bg-gray-800 text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none z-50">
                        AI 크레딧: 450/1000
                    </div>
                </div>
           )}
        </div>
      </aside>

      {/* Main Content */}
      <main 
        className={`flex-1 flex flex-col h-screen overflow-hidden relative transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}
      >
          {currentView === 'BOARD' && (
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          )}
          {children}
      </main>
    </div>
  );
};
