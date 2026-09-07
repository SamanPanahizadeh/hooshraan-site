import React, { lazy, Suspense, useEffect, useState } from 'react';
import { ArrowUpLeft, Moon, Sun, Mail, Send } from 'lucide-react';
import { LandingPage } from './components/LandingPage';
import { useTheme } from './context/ThemeContext';
import './landing.css';
const OrganizationalDiagnostic = lazy(() => import('./components/OrganizationalDiagnostic').then(m => ({ default: m.OrganizationalDiagnostic })));
const isAssessment = () => window.location.hash === '#/assessment';
export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [assessment, setAssessment] = useState(isAssessment);
  useEffect(() => {
    const route = () => { if (['#/', '#/assessment', ''].includes(window.location.hash)) { setAssessment(isAssessment()); window.scrollTo({ top: 0 }); } };
    window.addEventListener('hashchange', route);
    return () => window.removeEventListener('hashchange', route);
  }, []);
  useEffect(() => { document.title = assessment ? 'ارزیابی سازمانی | هوشران' : 'هوشران | ظرفیت بیشتر برای انسان، با هوش مصنوعی'; }, [assessment]);
  return <div className="hr-site" data-mode={theme} dir="rtl">
    <a className="hr-skip" href="#main-content">رفتن به محتوای اصلی</a>
    <header className="hr-header"><div className="hr-shell hr-header-inner">
      <a className="hr-logo" href="#/" aria-label="هوشران — صفحه اصلی"><img src="/houshraan-official.svg" alt="هوشران" width="132" height="52" /></a>
      <nav aria-label="منوی اصلی" className="hr-nav"><a href="#/" aria-current={!assessment ? 'page' : undefined}>معرفی هوشران</a><a href="#/assessment" aria-current={assessment ? 'page' : undefined}>ارزیابی سازمانی</a></nav>
      <button className="hr-theme" onClick={toggleTheme} aria-label={theme === 'light' ? 'تغییر به حالت تیره' : 'تغییر به حالت روشن'}>{theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}</button>
    </div></header>
    <main id="main-content" tabIndex={-1}>{assessment ? <div className="hr-assessment hr-shell"><Suspense fallback={<p role="status" className="hr-loading">در حال آماده‌سازی ارزیابی سازمانی…</p>}><OrganizationalDiagnostic /></Suspense></div> : <LandingPage />}</main>
    <footer className="hr-footer hr-shell"><div><a className="hr-footer-name" href="#/">هوشران</a><p>همکاری انسان و هوش مصنوعی، در کار واقعی.</p></div><div className="hr-footer-links"><a href="mailto:info@houshraan.ir"><Mail size={16} /><span dir="ltr">info@houshraan.ir</span></a><a href="https://t.me/HooshRaan" target="_blank" rel="noopener noreferrer"><Send size={16} />تلگرام<ArrowUpLeft size={14} /></a></div><span className="hr-copyright" dir="ltr">© {new Date().getFullYear()} Houshraan</span></footer>
  </div>;
}
