import React, { useRef } from 'react';
import { Building2, Home, Sun, Moon } from 'lucide-react';
import { HoushranEmblem } from './HoushranEmblem';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  completedModulesCount?: number;
  totalModulesCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* =======================================================================
          TOP FIXED HEADER — هدر شیشه‌ای متناسب با حالت شب یا روز
         ======================================================================= */}
      <header 
        ref={navRef}
        id="main-sticky-navigation-header" 
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b print:hidden transition-all duration-300 ${
          theme === 'light'
            ? 'bg-white/95 border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.06)]'
            : 'bg-[#0B1120]/95 border-slate-800/80 shadow-[0_4px_25px_rgba(0,0,0,0.45)]'
        }`}
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* لوگوی رسمی هوشران */}
          <div 
            id="header-logo-container"
            className="flex items-center cursor-pointer select-none shrink-0" 
            onClick={() => handleSelectTab('dashboard')}
          >
            <HoushranEmblem 
              className="h-7 sm:h-9 md:h-10 w-auto" 
              alt="لوگوی رسمی هوشران" 
              invert={theme === 'dark'}
            />
          </div>

          {/* کپسول ناوبری متناسب با اندازه صفحه */}
          <nav 
            id="top-nav-tabs-container"
            className={`p-1 sm:p-1.5 rounded-2xl border shadow-inner flex items-center justify-center gap-1 sm:gap-2 transition-colors duration-200 shrink-0 ${
              theme === 'light'
                ? 'bg-slate-100/90 border-slate-200/70'
                : 'bg-slate-900/90 border-slate-800'
            }`}
            aria-label="منوی اصلی"
          >
            {/* دکمه ۱: صفحه اصلی */}
            <button
              id="top-nav-home"
              onClick={() => handleSelectTab('dashboard')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 py-1.5 sm:py-2.5 px-2.5 sm:px-4 rounded-xl text-xs sm:text-base font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'dashboard'
                  ? theme === 'light'
                    ? 'bg-white text-blue-600 shadow-sm border border-slate-200/80 font-black'
                    : 'bg-slate-800 text-blue-400 shadow-sm border border-slate-700 font-black'
                  : theme === 'light'
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`}
            >
              <Home className={`w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 transition-colors ${
                activeTab === 'dashboard' 
                  ? theme === 'light' ? 'text-blue-600' : 'text-blue-400' 
                  : 'text-slate-400'
              }`} />
              <span className="whitespace-nowrap">صفحه اصلی</span>
            </button>

            {/* دکمه ۲: ارزیابی سازمانی */}
            <button
              id="top-nav-diagnostic"
              onClick={() => handleSelectTab('diagnostic')}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 py-1.5 sm:py-2.5 px-2.5 sm:px-4 rounded-xl text-xs sm:text-base font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'diagnostic'
                  ? theme === 'light'
                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/80 font-black'
                    : 'bg-slate-800 text-indigo-400 shadow-sm border border-slate-700 font-black'
                  : theme === 'light'
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`}
            >
              <Building2 className={`w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 transition-colors ${
                activeTab === 'diagnostic' 
                  ? theme === 'light' ? 'text-indigo-600' : 'text-indigo-400' 
                  : 'text-slate-400'
              }`} />
              <span className="hidden sm:inline whitespace-nowrap">ارزیابی سازمانی</span>
              <span className="sm:hidden whitespace-nowrap">ارزیابی</span>
            </button>
          </nav>

          {/* سوئیچر حالت شب و روز */}
          <div className="flex items-center shrink-0">
            {/* ۱. نسخه موبایل: دکمه اختصاصی، بسیار مشخص و لمس‌پذیر */}
            <button
              id="mobile-theme-toggle-btn"
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              title={theme === 'light' ? 'حالت روز (برای تغییر به حالت شب لمس کنید)' : 'حالت شب (برای تغییر به حالت روز لمس کنید)'}
              aria-label={theme === 'light' ? 'تغییر به حالت شب' : 'تغییر به حالت روز'}
              className={`sm:hidden w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs ${
                theme === 'light'
                  ? 'bg-amber-50 border-amber-300/80 text-amber-600 hover:bg-amber-100 active:scale-95'
                  : 'bg-slate-800/90 border-slate-700 text-blue-400 hover:bg-slate-700 active:scale-95'
              }`}
            >
              {theme === 'light' ? (
                <Sun className="w-5 h-5 text-amber-500 animate-in fade-in zoom-in-75 duration-200" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400 animate-in fade-in zoom-in-75 duration-200" />
              )}
            </button>

            {/* ۲. نسخه تبلت و دسکتاپ: کپسول دوتایی روز و شب */}
            <div 
              id="desktop-theme-switcher"
              className={`hidden sm:flex p-1 rounded-2xl border shadow-inner items-center gap-1 transition-colors duration-200 ${
                theme === 'light' 
                  ? 'bg-slate-100/90 border-slate-200/80' 
                  : 'bg-slate-900/90 border-slate-800'
              }`}
              role="radiogroup"
              aria-label="انتخاب پوسته شب یا روز"
            >
              <button
                type="button"
                id="desktop-theme-light"
                onClick={() => setTheme('light')}
                title="تغییر به حالت روز (روشن)"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  theme === 'light'
                    ? 'bg-white text-amber-600 shadow-sm border border-slate-200/80 font-black'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sun className={`w-4 h-4 shrink-0 transition-colors ${theme === 'light' ? 'text-amber-500' : 'text-slate-400'}`} />
                <span>روز</span>
              </button>

              <button
                type="button"
                id="desktop-theme-dark"
                onClick={() => setTheme('dark')}
                title="تغییر به حالت شب (تیره)"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-slate-800 text-blue-400 shadow-sm border border-slate-700 font-black'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                <Moon className={`w-4 h-4 shrink-0 transition-colors ${theme === 'dark' ? 'text-blue-400' : 'text-slate-400'}`} />
                <span>شب</span>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* اسپیسر زیر هدر متناسب با ارتفاع */}
      <div className="h-16 sm:h-20 w-full print:hidden" aria-hidden="true" />
    </>
  );
};