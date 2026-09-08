import React from 'react';

const jobs = 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf';
const risks = 'https://reports.weforum.org/docs/WEF_Global_Risks_Report_2026.pdf';
const fa = (n: number) => n.toLocaleString('fa-IR');
function Source({ page, risk = false, figure }: { page: number; risk?: boolean; figure?: string }) {
  return <a className="hr-source" href={`${risk ? risks : jobs}#page=${page}`} target="_blank" rel="noopener noreferrer">WEF · {risk ? 'Global Risks 2026' : 'Future of Jobs 2025'} · صفحه {fa(page)}{figure ? ` · شکل ${figure}` : ''} ↗</a>;
}
export function FutureSection() {
  return <section className="hr-evidence hr-shell" id="ai-outlook" aria-labelledby="outlook-title">
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
const sessions: [string,string[]][] = [
 ['مفهوم انسان هوش‌یار و سواد کار با AI',['آشنایی با نقش هوش مصنوعی در کار و زندگی','معرفی ابزارها و نحوه ثبت‌نام و پیکربندی اولیه','شناخت توانمندی‌ها و محدودیت‌های مدل‌های زبانی']],
 ['مبانی پرامپت‌نویسی؛ Prompting 101',['اجزای استاندارد پرامپت','نقش، زمینه، دستور و قالب خروجی','تبدیل درخواست‌های مبهم به درخواست‌های دقیق']],
 ['طراحی پرامپت‌های حرفه‌ای',['تعیین نقش و شخصیت برای AI','مشخص‌کردن هدف، مخاطب و محدودیت‌ها','طراحی خروجی‌های قابل‌کنترل و قابل‌تکرار']],
 ['پرامپت‌نویسی چندنمونه‌ای و استدلال مرحله‌ای',['تکنیک Few-Shot Prompting','ارائه نمونه برای هدایت مدل','استفاده صحیح از روش‌های تحلیل مرحله‌به‌مرحله']],
 ['ساخت خروجی‌های ساختاریافته',['دریافت خروجی به‌صورت جدول، فهرست و قالب مشخص','طراحی پرامپت برای تحلیل و دسته‌بندی اطلاعات']],
 ['مقابله با خطا و توهم هوش مصنوعی',['مفهوم Hallucination','روش‌های بررسی صحت اطلاعات','طراحی پرامپت‌های Fact-Checking','شناسایی خطاهای منطقی و اطلاعات ساختگی']],
 ['تحلیل، بازنویسی و تولید محتوا با AI',['خلاصه‌سازی متن و فایل‌های PDF','استخراج نکات کلیدی و تبدیل محتوا به اسلاید','تولید، ویرایش و بهبود متن','جست‌وجوی هدفمند و تحلیل اطلاعات']],
 ['ارزیابی و بهینه‌سازی خروجی‌ها',['تعریف معیارهای ارزیابی خروجی','مقایسه نسخه‌های مختلف پرامپت','مدیریت زمان و افزایش بهره‌وری','چرخه اصلاح مسئله و بهبود پاسخ']],
 ['System Prompt و Custom Instructions',['تفاوت پرامپت کاربر، System Prompt و دستورهای سفارشی','طراحی دستورالعمل‌های پایدار برای AI','ساخت دستیار هوشمند با نقش و رفتار مشخص']],
 ['ساخت دستیارهای هوشمند و Agents',['آشنایی با مفهوم Agent','طراحی دستیار تخصصی برای یک حوزه','تعریف وظایف، نقش‌ها و جریان اجرای کار','آشنایی با GPTهای سفارشی و ابزارهای مشابه']],
 ['پایگاه دانش و Workflowهای هوشمند',['ساخت Knowledge Base تخصصی','اتصال دستورالعمل‌ها و منابع به دستیار','طراحی گردش‌کارهای چندمرحله‌ای','خودکارسازی فعالیت‌های تکراری']],
 ['پروژه نهایی و اصول استفاده مسئولانه',['اجرای یک پروژه واقعی از ابتدا تا انتها','طراحی یک دستیار یا جریان کاری تخصصی','بررسی امنیت، حریم خصوصی و داده‌های حساس','ارزیابی خروجی و ارائه پروژه نهایی']],
];
export function CoursesSection() {
 return <section className="hr-courses hr-shell" id="courses" aria-labelledby="courses-title"><p className="hr-eyebrow">۰۳ / مسیرهای یادگیری هوشران</p><h2 id="courses-title">از شناخت ابزار،<br /><em>تا توانمندی در کار واقعی.</em></h2><p className="hr-section-lead">آموزش و تمرین برای استفاده آگاهانه از هوش مصنوعی؛ با تمرکز بر مسئله، کیفیت خروجی و نیاز واقعی فرد یا سازمان.</p>
 <article className="hr-course-main"><div className="hr-course-intro"><span className="hr-course-tag">۱۲ جلسه آموزشی و عملی</span><h3>انسان هوشران</h3><p>مسیری از سواد کار با AI و پرامپت‌نویسی تا ساخت دستیار تخصصی و گردش‌کار هوشمند.</p><div className="hr-course-outcome"><strong>خروجی نهایی دوره</strong><p>هر شرکت‌کننده یک دستیار هوش مصنوعی یا Workflow تخصصی متناسب با نیاز شخصی یا کاری خود طراحی و اجرا می‌کند.</p></div><a className="hr-button" href="https://t.me/HooshRaan" target="_blank" rel="noopener noreferrer">دریافت اطلاعات و شرایط شرکت ↗</a><p className="hr-course-note">برای اطلاع از زمان‌بندی، مدت هر جلسه، هزینه و شیوه برگزاری با هوشران در ارتباط باشید.</p></div>
 <div className="hr-syllabus"><p className="hr-syllabus-guide">سرفصل هر جلسه را باز کنید و جزئیات را ببینید.</p>{sessions.map(([title,items],i)=><details key={title}><summary><span className="hr-number">{fa(i+1).padStart(2,'۰')}</span><span>{title}</span><span className="hr-details-plus" aria-hidden="true">+</span></summary><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></details>)}</div></article>
 <article className="hr-sales-course"><div><span className="hr-course-tag">مسیر ویژه سازمان‌ها · سطح B</span><h3>آمادگی دپارتمان فروش</h3><p>دوره‌ای متمرکز با هدف توانمندشدن کارکنان در انجام کارهای روزمره اداری و کاربردهای پیشرفته منتخب فروش با کمک هوش مصنوعی.</p></div><div className="hr-sales-duration"><strong>۴ ساعت</strong><span>۲ جلسه، هر جلسه ۲ ساعت</span><a className="hr-text-link" href="mailto:info@houshraan.ir">هماهنگی دوره سازمانی ↗</a></div></article>
 </section>;
}
