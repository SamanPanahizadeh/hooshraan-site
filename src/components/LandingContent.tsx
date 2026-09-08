import React from 'react';
import courseData from './courseData.json';

const jobs = 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf';
const risks = 'https://reports.weforum.org/docs/WEF_Global_Risks_Report_2026.pdf';
const fa = (n: number) => n.toLocaleString('fa-IR');
function Source({ page, risk = false, figure }: { page: number; risk?: boolean; figure?: string }) {
  return <a className="hr-source" href={`${risk ? risks : jobs}#page=${page}`} target="_blank" rel="noopener noreferrer">WEF · {risk ? 'Global Risks 2026' : 'Future of Jobs 2025'} · صفحه {fa(page)}{figure ? ` · شکل ${figure}` : ''} ↗</a>;
}
export function FutureSection() {
  return <section className="hr-evidence hr-shell hr-outlook-alive" onPointerMove={followPointer} onPointerLeave={event => { event.currentTarget.style.setProperty("--rx", "0deg"); event.currentTarget.style.setProperty("--ry", "0deg"); event.currentTarget.style.setProperty("--mx", "30%"); event.currentTarget.style.setProperty("--my", "35%"); }} id="ai-outlook" aria-labelledby="outlook-title">
    <p className="hr-eyebrow">۰۲ / آینده کار و استفاده آگاهانه</p>
    <h2 id="outlook-title">کار تغییر می‌کند.<br /><em>آمادگی را از امروز بسازیم.</em></h2>
    <p className="hr-section-lead">نگاهی به فرصت‌ها، نیازهای مهارتی و مخاطرات هوش مصنوعی بر پایه گزارش‌های مجمع جهانی اقتصاد.</p>
    <div className="hr-evidence-grid">
      <article className="hr-stat"><strong className="hr-big-stat">۸۶٪</strong><h3>انتظار تحول در کسب‌وکار</h3><p>کارفرمایان پاسخ‌دهنده انتظار دارند هوش مصنوعی و پردازش اطلاعات تا ۲۰۳۰ کسب‌وکارشان را متحول کند.</p><Source page={11} figure="۱.۲" /></article>
      <article className="hr-stat"><strong className="hr-big-stat">۷۷٪</strong><h3>آموزش برای همکاری با AI</h3><p>کارفرمایان پاسخ‌دهنده قصد دارند تا ۲۰۳۰ کارکنان فعلی را برای کار مؤثرتر در کنار هوش مصنوعی آموزش دهند.</p><Source page={63} figure="۴.۱۴" /></article>
      <article className="hr-stat"><h3>موانع پذیرش هوش مصنوعی</h3><p>دو مانع مطرح‌شده در پیمایش مدیران درباره پذیرش AI در کسب‌وکارهای محلی:</p>{[[50, 'کمبود مهارت'], [43, 'نبود چشم‌انداز مدیریتی']].map(([value, label]) => <div className="hr-bar-row" key={label}><div><span>{label}</span><strong>{fa(Number(value))}٪</strong></div><div className="hr-bar-track" aria-hidden="true"><span style={{ width: `${value}%` }} /></div></div>)}<Source page={63} figure="۴.۱۳" /></article>
    </div>
    <div className="hr-outlook-bottom">
      <figure className="hr-task-chart"><h3>آینده انجام کار: انسان، فناوری و همکاری</h3><p>سهم وظایف بر اساس برآورد کارفرمایان؛ مقایسه ۲۰۲۵ با انتظار آن‌ها برای ۲۰۳۰.</p>{[{year:'۲۰۲۵',values:[47,30,22]},{year:'۲۰۳۰',values:[33,33,34]}].map(row=><div className="hr-stack-row" key={row.year}><strong>{row.year}</strong><div className="hr-stack" role="img" aria-label={`${row.year}: انسان ${fa(row.values[0])} درصد، همکاری ${fa(row.values[1])} درصد، فناوری ${fa(row.values[2])} درصد`}>{row.values.map((v,i)=><span key={i} className={`hr-segment-${i}`} style={{flex:v}} aria-hidden="true">{fa(v)}٪</span>)}</div></div>)}<div className="hr-chart-key">{['انسان','همکاری انسان و فناوری','فناوری'].map((s,i)=><span key={s}><i className={`hr-segment-${i}`} />{s}</span>)}</div><figcaption>فناوری شامل ماشین‌ها و الگوریتم‌هاست؛ این نمودار سهم وظایف را نشان می‌دهد، نه تعداد شغل‌ها. مجموع اعداد ۲۰۲۵ به‌دلیل گرد کردن ۹۹٪ است.</figcaption><Source page={26} figure="۲.۷" /></figure>
      <article className="hr-risk"><p className="hr-eyebrow">یک ملاحظه انسانی</p><h3>قضاوت خودمان را حفظ کنیم.</h3><p>گزارش ریسک‌های جهانی ۲۰۲۶ به خطر وابستگی بیش‌ازحد به AI و تضعیف تفکر انتقادی و مهارت‌های انسانی می‌پردازد.</p><p>در رویکرد هوشران، تعریف مسئله، بررسی شواهد و تأیید خروجی بخشی از کار انسان می‌ماند.</p><Source page={64} risk /></article>
    </div>
    <p className="hr-method-note">این داده‌ها انتظارات و ارزیابی‌های پاسخ‌دهندگان‌اند؛ آمار اختصاصی ایران یا سنجش اثربخشی دوره‌های هوشران نیستند. گزارش مشاغل عمدتاً بر سازمان‌های بزرگ تمرکز دارد.</p>
  </section>;
}

export function followPointer(event: React.PointerEvent<HTMLElement>) {
 if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 const card = event.currentTarget, box = card.getBoundingClientRect();
 const x = (event.clientX-box.left)/box.width, y = (event.clientY-box.top)/box.height;
 card.style.setProperty('--mx', `${x*100}%`); card.style.setProperty('--my', `${y*100}%`);
 card.style.setProperty('--rx', `${(0.5-y)*3}deg`); card.style.setProperty('--ry', `${(x-0.5)*3}deg`);
}
export function CoursesSection() {
 const courses = [
 {title:'انسان هوشران', label:'توانمندی فردی و حرفه‌ای', english:'HUMAN + AI', description:'پایه‌ای برای کار حرفه‌ای با هوش مصنوعی؛ از مدل ذهنی و مهندسی زمینه تا ارزیابی خروجی و ساخت دستیار. مبنای ورود به مسیرهای تخصصی دپارتمانی.', meta:'۱۲ سرفصل · ۴ ساعت · ۲ جلسه', result:'دستیار تخصصی، گردش‌کار یا طرح Agent برای یک مسئله واقعی', path:['فکر کردن با AI','کار کردن با AI','ساختن با AI'], note:'جلسه اول: سرفصل‌های ۱ تا ۶ — Think with AI. جلسه دوم: سرفصل‌های ۷ تا ۱۲ — Work with AI & Build with AI.'},
 {title:'فروش با هوش مصنوعی', label:'توانمندی تخصصی فروش B2B', english:'SALES + AI', description:'بازطراحی فرایند فروش B2B با کمک هوش مصنوعی؛ از شناسایی حساب‌های هدف و شناخت مشتری تا جلسه فروش، ارزیابی فرصت و حافظه سازمانی در CRM.', meta:'۱۲ سرفصل · مسیر تخصصی دپارتمان فروش', result:'نقشه گردش‌کار Sales AI؛ از حساب هدف تا بهترین اقدام بعدی', path:['یافتن','شناختن','تعامل','پیشبرد','ثبت دانش','توسعه'], note:'بر پایه توانمندی‌های «انسان هوشران»؛ بدون تکرار پرامپت‌نویسی عمومی. برای زمان‌بندی و مدت برگزاری این مسیر با هوشران هماهنگ کنید.'}
 ];
 return <section className="hr-courses hr-shell" id="courses" aria-labelledby="courses-title">
 <p className="hr-eyebrow">۰۳ / دو مسیر برای توانمند شدن</p><h2 id="courses-title">یادگیری، وقتی به <em>کار می‌آید.</em></h2>
 <p className="hr-section-lead">از توانمندی‌های مشترک برای همکاری انسان و AI، تا کاربرد تخصصی در فروش سازمانی. هر سرفصل با یک تمرین واقعی و خروجی مشخص همراه است.</p>
 <div className="hr-learning-grid">{courses.map((course,index)=><article key={course.title} className="hr-learning-card" onPointerMove={followPointer} onPointerLeave={event=>{event.currentTarget.style.setProperty('--rx','0deg');event.currentTarget.style.setProperty('--ry','0deg');}}>
 <div className="hr-learning-cover"><div className="hr-learning-top"><span>{course.label}</span><span dir="ltr">0{index+1}</span></div><div className="hr-learning-word" dir="ltr" aria-hidden="true">{course.english}</div><h3>{course.title}</h3><p>{course.description}</p><span className="hr-learning-meta">{course.meta}</span>
 <ol className="hr-learning-path">{course.path.map(step=><li key={step}>{step}</li>)}</ol></div>
 <div className="hr-learning-body"><div className="hr-learning-output"><span>آنچه با خود می‌برید</span><strong>{course.result}</strong></div><p className="hr-learning-note">{course.note}</p>
 <div className="hr-syllabus">{courseData[index].map((lesson,i)=><details key={lesson.title}><summary><span className="hr-number">{fa(i+1).padStart(2,'۰')}</span><span>{lesson.title}</span><span className="hr-details-plus" aria-hidden="true">+</span></summary><ul>{lesson.items.map(item=><li key={item}>{item}</li>)}</ul></details>)}</div>
 <a className="hr-button" href="https://t.me/HooshRaan" target="_blank" rel="noopener noreferrer">{index===0?'اطلاعات دوره انسان هوشران':'هماهنگی دوره فروش سازمانی'} ↗</a></div></article>)}</div>
 <div className="hr-teaching-method"><strong>از مفهوم تا توانمندی عملی</strong><p>در هر بخش: آشنایی با مفهوم، نمایش زنده، تمرین هدایت‌شده، مسئله واقعی و ارزیابی خروجی.</p></div>
 </section>;
}
