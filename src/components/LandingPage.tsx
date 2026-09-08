import React, { useState } from 'react';
import { ArrowLeft, ArrowDown, Check, Pause, Play } from 'lucide-react';

import { FutureSection, CoursesSection } from './LandingContent';

function CapacityVisual() {
  const [paused, setPaused] = useState(false);
  return <figure className="hr-orbit" data-paused={paused} aria-label="تصویر مفهومی پیوند توانمندی انسان و هوش مصنوعی">
    <svg viewBox="0 0 700 700" fill="none" aria-hidden="true">
      <defs><radialGradient id="hr-glow"><stop stopColor="currentColor" stopOpacity=".12"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></radialGradient></defs>
      <circle cx="350" cy="350" r="340" fill="url(#hr-glow)"/>
      <g className="hr-orbit-lines">{Array.from({length: 14}, (_, i) => <ellipse key={i} cx="350" cy="350" rx={120 + i * 10} ry={255 - i * 7} transform={`rotate(${i * 13} 350 350)`} />)}</g>
      <circle cx="350" cy="350" r="66" className="hr-orbit-core"/>
      <path d="M350 323L377 350L350 377L323 350Z" fill="currentColor" opacity=".9"/>
      <g className="hr-orbit-satellite"><circle cx="350" cy="96" r="7" fill="currentColor"/><circle cx="350" cy="96" r="15" stroke="currentColor" opacity=".25"/></g>
    </svg>
    <figcaption><span>انسان، در مرکز تحول</span><button onClick={() => setPaused(!paused)} aria-label={paused ? 'ادامه حرکت تصویر' : 'توقف حرکت تصویر'} aria-pressed={paused}>{paused ? <Play size={16}/> : <Pause size={16}/>}</button></figcaption>
  </figure>;
}
export function LandingPage() {
  return <div className="hr-landing">
    <section className="hr-hero hr-shell" aria-labelledby="hero-title">
      <div className="hr-hero-copy"><p className="hr-eyebrow"><span />هوش مصنوعی در کار واقعی</p><h1 id="hero-title">ظرفیت بیشتر<br />برای <em>انسان.</em></h1><p className="hr-hero-description">با کمک هوش مصنوعی، کار را دوباره ببینیم؛<br className="hr-desktop-break" /> و برای فکر کردن، تصمیم گرفتن و خلق ارزش، جا باز کنیم.</p><p className="hr-hero-detail">هوشران به سازمان‌ها کمک می‌کند استفاده از هوش مصنوعی را به روشی عملی، آگاهانه و تکرارپذیر در کار تیم تبدیل کنند.</p><div className="hr-actions"><a className="hr-button" href="#/assessment">شروع ارزیابی سازمان<ArrowLeft size={19} /></a><a className="hr-text-link" href="#courses">آشنایی با دوره‌ها<ArrowDown size={16} /></a></div></div>
      <CapacityVisual />
      <div className="hr-hero-bottom"><span>از ظرفیت فردی، تا قابلیت سازمانی</span><span dir="ltr">HUMAN + AI</span></div>
    </section>
    <section className="hr-approach hr-shell" id="our-approach" aria-labelledby="approach-title">
      <div className="hr-section-heading"><p className="hr-eyebrow">۰۱ / رویکرد هوشران</p><h2 id="approach-title">از شناخت کار،<br />تا ساختن یک روش بهتر.</h2><p>نقطه شروع، کار واقعی تیم شماست. بررسی می‌کنیم هوش مصنوعی کجا کمک می‌کند و قضاوت و تصمیم انسان کجا ضروری است.</p></div>
      <div className="hr-principles"><article><span className="hr-number">۰۱</span><div><h3>کار را بشناسیم</h3><p>فعالیت‌ها، گلوگاه‌ها و فرصت‌های بهبود را در فرایندهای واقعی سازمان پیدا می‌کنیم.</p></div></article><article><span className="hr-number">۰۲</span><div><h3>همکاری را طراحی کنیم</h3><p>نقش انسان و AI را روشن می‌کنیم؛ از انجام فعالیت‌ها تا تحلیل گزینه‌ها و بازبینی خروجی.</p></div></article><article><span className="hr-number">۰۳</span><div><h3>تمرین کنیم و بسنجیم</h3><p>روش جدید را با تیم تمرین می‌کنیم و تغییر در زمان، کیفیت و شیوه انجام کار را می‌سنجیم.</p></div></article></div>
    </section>
    <FutureSection />
    <CoursesSection />
    <section className="hr-assessment-intro hr-shell" aria-labelledby="assessment-title"><div className="hr-assessment-card"><div className="hr-assessment-copy"><p className="hr-eyebrow">۰۴ / قدم اول برای سازمان شما</p><h2 id="assessment-title">از کجا شروع کنیم؟<br /><em>با شناخت وضعیت امروز.</em></h2><p>ارزیابی هوشران کمک می‌کند تصویری از وضعیت فعلی سازمان و فاصله آن با هدفی که در نظر دارید به دست آورید.</p><a className="hr-button" href="#/assessment">ورود به ارزیابی سازمانی<ArrowLeft size={19} /></a></div><div className="hr-assessment-expectations"><div className="hr-assessment-count"><strong>۴۰</strong><span>مؤلفه رفتاری<br />در ۷ بُعد سازمانی</span></div><ul><li><Check size={17} />بررسی وضعیت فعلی و تعیین سطح هدف</li><li><Check size={17} />شناخت نقاط قوت و شکاف‌های اولویت‌دار</li><li><Check size={17} />گزارش و نقشه راه پیشنهادی ۹۰روزه</li></ul><p>نتیجه بر پایه پاسخ‌های شماست و نقطه شروعی برای بررسی دقیق‌تر سازمان محسوب می‌شود.</p></div></div></section>
  </div>;
}
