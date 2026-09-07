import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowDown, Check, FileText, Search, Mail, RotateCcw, Pause, Play, Focus, MessageCircle, Lightbulb } from 'lucide-react';

const stages = ['کارهای روزمره', 'همکاری انسان و AI', 'ظرفیت برای کار ارزشمندتر'];
function CapacityVisual() {
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => { setReduced(query.matches); if (query.matches) setStage(2); };
    sync(); query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    if (paused || reduced || stage === 2) return;
    const timeout = window.setTimeout(() => setStage(s => s + 1), 2800);
    return () => window.clearTimeout(timeout);
  }, [paused, reduced, stage]);
  return <figure className="hr-capacity" data-stage={stage} aria-label="نمایش مفهومی آزادسازی ظرفیت انسان با کمک هوش مصنوعی">
    <div className="hr-visual-top"><span>یک نگاه تازه به کار</span><span className="hr-visual-index" dir="ltr">0{stage + 1} / 03</span></div>
    <div className="hr-work-items">
      <div className="hr-work-item"><Search size={18} /><span>جمع‌آوری اطلاعات</span><span className="hr-task-line" /></div>
      <div className="hr-work-item"><FileText size={18} /><span>آماده‌سازی گزارش</span><span className="hr-task-line" /></div>
      <div className="hr-work-item"><Mail size={18} /><span>نوشتن و پیگیری</span><span className="hr-task-line" /></div>
    </div>
    <div className="hr-connector" aria-hidden="true"><span /><ArrowDown size={17} /><span /></div>
    <div className="hr-human-ai"><span className="hr-ai-label">کمک هوش مصنوعی</span><span className="hr-review"><Check size={15} />بازبینی و هدایت انسان</span></div>
    <div className="hr-connector" aria-hidden="true"><span /><ArrowDown size={17} /><span /></div>
    <div className="hr-capacity-result"><div className="hr-result-heading"><span className="hr-small-diamond" aria-hidden="true" /><span>جا برای کارهای ارزشمندتر</span></div><div className="hr-result-items"><span><Focus size={18} />تمرکز</span><span><Lightbulb size={18} />تصمیم بهتر</span><span><MessageCircle size={18} />ارتباط انسانی</span></div></div>
    <figcaption className="hr-visual-caption"><div className="hr-stage-controls" aria-label="مراحل نمایش">{stages.map((label, i) => <button key={label} aria-label={label} aria-pressed={stage === i} onClick={() => { setStage(i); setPaused(true); }} className={stage === i ? 'is-active' : ''}><span /></button>)}</div><span>{stages[stage]}</span><button className="hr-replay" onClick={() => { if (stage === 2) { setStage(0); setPaused(reduced); } else setPaused(!paused); }} aria-label={stage === 2 ? 'بازپخش نمایش' : paused ? 'ادامه نمایش' : 'توقف نمایش'}>{stage === 2 ? <RotateCcw size={16} /> : paused ? <Play size={16} /> : <Pause size={16} />}</button></figcaption>
  </figure>;
}
export function LandingPage() {
  return <div className="hr-landing">
    <section className="hr-hero hr-shell" aria-labelledby="hero-title">
      <div className="hr-hero-copy"><p className="hr-eyebrow"><span />هوش مصنوعی در کار واقعی</p><h1 id="hero-title">ظرفیت بیشتر<br />برای <em>انسان.</em></h1><p className="hr-hero-description">با کمک هوش مصنوعی، کار را دوباره ببینیم؛<br className="hr-desktop-break" /> و برای فکر کردن، تصمیم گرفتن و خلق ارزش، جا باز کنیم.</p><p className="hr-hero-detail">هوشران به سازمان‌ها کمک می‌کند استفاده از هوش مصنوعی را به روشی عملی، آگاهانه و تکرارپذیر در کار تیم تبدیل کنند.</p><div className="hr-actions"><a className="hr-button" href="#/assessment">شروع ارزیابی سازمان<ArrowLeft size={19} /></a><a className="hr-text-link" href="#our-approach">آشنایی با رویکرد ما<ArrowDown size={16} /></a></div></div>
      <CapacityVisual />
      <div className="hr-hero-bottom"><span>از ظرفیت فردی، تا قابلیت سازمانی</span><span dir="ltr">HUMAN + AI</span></div>
    </section>
    <section className="hr-approach hr-shell" id="our-approach" aria-labelledby="approach-title">
      <div className="hr-section-heading"><p className="hr-eyebrow">۰۱ / رویکرد هوشران</p><h2 id="approach-title">از شناخت کار،<br />تا ساختن یک روش بهتر.</h2><p>نقطه شروع، کار واقعی تیم شماست. بررسی می‌کنیم هوش مصنوعی کجا کمک می‌کند و قضاوت و تصمیم انسان کجا ضروری است.</p></div>
      <div className="hr-principles"><article><span className="hr-number">۰۱</span><div><h3>کار را بشناسیم</h3><p>فعالیت‌ها، گلوگاه‌ها و فرصت‌های بهبود را در فرایندهای واقعی سازمان پیدا می‌کنیم.</p></div></article><article><span className="hr-number">۰۲</span><div><h3>همکاری را طراحی کنیم</h3><p>نقش انسان و AI را روشن می‌کنیم؛ از انجام فعالیت‌ها تا تحلیل گزینه‌ها و بازبینی خروجی.</p></div></article><article><span className="hr-number">۰۳</span><div><h3>تمرین کنیم و بسنجیم</h3><p>روش جدید را با تیم تمرین می‌کنیم و تغییر در زمان، کیفیت و شیوه انجام کار را می‌سنجیم.</p></div></article></div>
    </section>
    <section className="hr-assessment-intro hr-shell" aria-labelledby="assessment-title"><div className="hr-assessment-card"><div className="hr-assessment-copy"><p className="hr-eyebrow">۰۲ / قدم اول برای سازمان شما</p><h2 id="assessment-title">از کجا شروع کنیم؟<br /><em>با شناخت وضعیت امروز.</em></h2><p>ارزیابی هوشران کمک می‌کند تصویری از وضعیت فعلی سازمان و فاصله آن با هدفی که در نظر دارید به دست آورید.</p><a className="hr-button" href="#/assessment">ورود به ارزیابی سازمانی<ArrowLeft size={19} /></a></div><div className="hr-assessment-expectations"><div className="hr-assessment-count"><strong>۴۰</strong><span>مؤلفه رفتاری<br />در ۷ بُعد سازمانی</span></div><ul><li><Check size={17} />بررسی وضعیت فعلی و تعیین سطح هدف</li><li><Check size={17} />شناخت نقاط قوت و شکاف‌های اولویت‌دار</li><li><Check size={17} />گزارش و نقشه راه پیشنهادی ۹۰روزه</li></ul><p>نتیجه بر پایه پاسخ‌های شماست و نقطه شروعی برای بررسی دقیق‌تر سازمان محسوب می‌شود.</p></div></div></section>
  </div>;
}
