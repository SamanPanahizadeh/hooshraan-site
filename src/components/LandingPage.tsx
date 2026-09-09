import React from 'react';
import { ArrowLeft, ArrowDown, Check } from 'lucide-react';

import { FutureSection, CoursesSection, followPointer } from './LandingContent';

export function LandingPage() {
  return <div className="hr-landing">
    <section className="hr-hero hr-shell hr-hero-alive" aria-labelledby="hero-title" onPointerMove={followPointer} onPointerLeave={event => { event.currentTarget.style.setProperty("--rx", "0deg"); event.currentTarget.style.setProperty("--ry", "0deg"); event.currentTarget.style.setProperty("--mx", "30%"); event.currentTarget.style.setProperty("--my", "35%"); }}>
      <div className="hr-hero-copy"><p className="hr-eyebrow"><span />هوش مصنوعی در کار واقعی</p><h1 id="hero-title">ظرفیت بیشتر<br />برای <em>انسان.</em></h1><div className="hr-hero-support"><p className="hr-hero-description">با کمک هوش مصنوعی، کار را دوباره ببینیم؛<br className="hr-desktop-break" /> و برای فکر کردن، تصمیم گرفتن و خلق ارزش، جا باز کنیم.</p><p className="hr-hero-detail">هوشران به سازمان‌ها کمک می‌کند استفاده از هوش مصنوعی را به روشی عملی، آگاهانه و تکرارپذیر در کار تیم تبدیل کنند.</p><div className="hr-actions"><a className="hr-button" href="#/assessment">شروع ارزیابی سازمان<ArrowLeft size={19} /></a><a className="hr-text-link" href="#courses">آشنایی با دوره‌ها<ArrowDown size={16} /></a></div></div></div>
      
      <div className="hr-hero-bottom"><span>از ظرفیت فردی، تا قابلیت سازمانی</span><span dir="ltr">HUMAN + AI</span></div>
    </section>
    <FutureSection />
    <CoursesSection />
    <section className="hr-assessment-intro hr-shell" aria-labelledby="assessment-title"><div className="hr-assessment-card"><div className="hr-assessment-copy"><h2 id="assessment-title">از کجا شروع کنیم؟<br /><em>با شناخت وضعیت امروز.</em></h2><p>ارزیابی هوشران کمک می‌کند تصویری از وضعیت فعلی سازمان و فاصله آن با هدفی که در نظر دارید به دست آورید.</p><a className="hr-button" href="#/assessment">ورود به ارزیابی سازمانی<ArrowLeft size={19} /></a></div><div className="hr-assessment-expectations"><div className="hr-assessment-count"><strong>۴۰</strong><span>مؤلفه رفتاری<br />در ۷ بُعد سازمانی</span></div><ul><li><Check size={17} />بررسی وضعیت فعلی و تعیین سطح هدف</li><li><Check size={17} />شناخت نقاط قوت و شکاف‌های اولویت‌دار</li><li><Check size={17} />گزارش و نقشه راه پیشنهادی ۹۰روزه</li></ul><p>نتیجه بر پایه پاسخ‌های شماست و نقطه شروعی برای بررسی دقیق‌تر سازمان محسوب می‌شود.</p></div></div></section>
  </div>;
}
