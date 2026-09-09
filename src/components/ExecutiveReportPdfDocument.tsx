import React from 'react';
import { HOOSHRAAN_DIMENSIONS_V11, HOOSHRAAN_MATURITY_LEVELS_V11 } from '../data/diagnosticDataV11';
import { toPersianDigits } from '../utils/jalaliDate';
import './report.css';
export interface ExecutiveReportProps {
  ambition?: { outcome: string; constraint: string };
  orgProfile: {
    companyName: string;
    industry: string;
    employeeCount: string;
    assessorName: string;
    assessorRole: string;
  };
  calculationResults: {
    overallScore1to5: number;
    overallScore0to100: number;
    finalLevel: number;
    levelInfo: (typeof HOOSHRAAN_MATURITY_LEVELS_V11)[0];
    unconstrainedLevel: number;
    isGated: boolean;
    gateExplanation: string;
    hasScaleRisk: boolean;
    totalValidResponses: number;
    isCompletionGateMet: boolean;
    dimensionStats: Record<string, {
      score: number;
      validCount: number;
      naCount: number;
      missingCount: number;
      isLowConfidence: boolean;
      target: number;
      gap: number;
      weight: number;
    }>;
    topStrengths: Array<{
      dimension: (typeof HOOSHRAAN_DIMENSIONS_V11)[0];
      score: number;
    }>;
    topGaps: Array<{
      dimension: (typeof HOOSHRAAN_DIMENSIONS_V11)[0];
      gap: number;
    }>;
  };
  reportJalaliDate: string;
}


export const ExecutiveReportPdfDocument: React.FC<ExecutiveReportProps> = ({orgProfile, calculationResults: result, reportJalaliDate, ambition}) => {
  const sections = ['خلاصه مدیریتی', 'نتایج هفت محور', 'هدف و اولویت‌های بهبود', 'پیشنهاد مسیر ۹۰ روزه و روش محاسبه'];
  const n = (value: number) => toPersianDigits(value.toFixed(1));
  const total = 6;
  const Page = ({index, children}: {index: number; children: React.ReactNode}) => <section className="pdf-page hr-report-page" data-page={index}>
    <header><img src="/houshraan-official.svg" alt="هوشران"/><span>گزارش خودارزیابی هوش مصنوعی سازمان</span></header>
    <div className="hr-report-content">{children}</div>
    <footer>صفحه {toPersianDigits(index)} از {toPersianDigits(total)}<span>تاریخ تنظیم: {reportJalaliDate}</span></footer>
  </section>;
  const Heading = ({index}: {index: number}) => <h1><span>{toPersianDigits(index + 1)}</span>{sections[index]}</h1>;
  return <div id="diagnostic-luxury-executive-pdf-document" className="hr-report" dir="rtl">
    <section className="pdf-page hr-report-page hr-report-cover" data-page="1">
      <div className="hr-report-cover-top"><p dir="ltr">HOUSHRAAN · ORGANIZATIONAL AI ASSESSMENT</p><h1>گزارش خودارزیابی<br/>هوش مصنوعی سازمان</h1><h2>{orgProfile.companyName}</h2><p>Organizational AI Readiness & Development Roadmap</p></div>
      <div className="hr-report-cover-bottom"><div><p>گزارش تا: {reportJalaliDate}</p><p>تاریخ تنظیم: {reportJalaliDate}</p><p>بر اساس پاسخ‌های ثبت‌شده سازمان</p></div><img src="/houshraan-official.svg" alt="هوشران"/></div>
    </section>
    <Page index={2}><h1>فهرست مطالب</h1>{sections.map((title,i) => <div className="hr-report-toc" key={title}><strong>{toPersianDigits(i+1)}</strong><span>{title}</span><i/><span>{toPersianDigits(i+3)}</span></div>)}<div className="hr-report-callout">این گزارش حاصل خوداظهاری پاسخ‌دهنده است. انتخاب «مستندات» یا «مشاهده مستقیم» به معنی بررسی آن شواهد توسط هوشران نیست.</div><p>گزارش برای شناخت وضعیت موجود و شروع گفت‌وگو درباره گام بعدی تهیه شده است؛ گواهی بلوغ، تعهد به نتیجه یا پیشنهاد قیمت خدمات نیست.</p></Page>
    <Page index={3}><Heading index={0}/><div className="hr-report-callout">امتیاز کلی: {n(result.overallScore0to100)} از ۱۰۰ · سطح بلوغ: {toPersianDigits(result.finalLevel)} از ۵</div>
      <h2>مشخصات ارزیابی</h2><table><tbody>{[['سازمان',orgProfile.companyName],['حوزه فعالیت',orgProfile.industry],['تعداد کارکنان',orgProfile.employeeCount],['پاسخ‌دهنده',orgProfile.assessorName || 'ثبت نشده'],['سمت',orgProfile.assessorRole]].map(([k,v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
      <h2>تفسیر نتیجه</h2><p>میانگین وزنی وضعیت فعلی {n(result.overallScore1to5)} از ۵ است. {result.gateExplanation || 'محدودیت گلوگاه، سطح کلی محاسبه‌شده را تغییر نداده است.'}</p>{result.hasScaleRisk && <div className="hr-report-callout">پیش از گسترش کاربردها، حاکمیت، ریسک و نظارت انسانی نیاز به توجه دارند.</div>}
      <h2>محورهای دارای امتیاز بالاتر در این ارزیابی</h2>{result.topStrengths.map(s => <p key={s.dimension.key}>{s.dimension.titleFa}: {n(s.score)} از ۵</p>)}
    </Page>
    <Page index={4}><Heading index={1}/><table><thead><tr><th>محور</th><th>وزن</th><th>فعلی</th><th>هدف</th><th>پوشش</th></tr></thead><tbody>{HOOSHRAAN_DIMENSIONS_V11.map(d => {const v=result.dimensionStats[d.key]; return <tr key={d.key}><td>{d.titleFa}</td><td>{toPersianDigits(d.weight)}٪</td><td>{n(v.score)}</td><td>{n(v.target)}</td><td>{toPersianDigits(v.validCount)} از {toPersianDigits(d.questionCodes.length)}</td></tr>})}</tbody></table><p>پوشش، تعداد پاسخ‌های امتیازدار را نشان می‌دهد. سؤال‌های «قابل‌اعمال نیست» در میانگین همان محور وارد نشده‌اند.</p><h2>کیفیت و پوشش پاسخ‌ها</h2>{HOOSHRAAN_DIMENSIONS_V11.map(d => {const v=result.dimensionStats[d.key]; return <p key={d.key}>{d.titleFa}: {toPersianDigits(v.naCount)} مورد قابل‌اعمال نیست؛ {v.isLowConfidence ? 'پوشش محدود؛ نتیجه با احتیاط تفسیر شود.' : 'پوشش پاسخ‌ها کافی است.'}</p>})}</Page>
    <Page index={5}><Heading index={2}/><h2>اولویت‌های دارای فاصله تا هدف</h2>{result.topGaps.length ? <table><thead><tr><th>محور</th><th>فاصله تا هدف</th></tr></thead><tbody>{result.topGaps.map(g => <tr key={g.dimension.key}><td>{g.dimension.titleFa}</td><td>{n(g.gap)} پله</td></tr>)}</tbody></table> : <p>با هدف‌های انتخاب‌شده، شکاف مثبت ثبت نشده است؛ حفظ کیفیت و بازبینی دوره‌ای پیشنهاد می‌شود.</p>}<p>اولویت‌ها بر اساس فاصله عددی تا هدف مرتب شده‌اند. تصمیم اجرایی به ارزش مورد انتظار، منابع و ریسک سازمان نیز وابسته است.</p><h2>نتیجه مورد انتظار سازمان</h2><p>{ambition?.outcome || 'توسط پاسخ‌دهنده ثبت نشده است.'}</p><h2>محدودیت اصلی</h2><p>{ambition?.constraint || 'توسط پاسخ‌دهنده ثبت نشده است.'}</p></Page>
    <Page index={6}><Heading index={3}/><p>این مسیر، پیشنهاد اولیه برای گفت‌وگو و برنامه‌ریزی است و برنامه اجرایی مصوب سازمان محسوب نمی‌شود.</p><h2>روزهای ۱ تا ۳۰ · شناخت و انتخاب</h2><p>پاسخ‌ها و شواهد را با مسئولان واحدها مرور کنید. یک مسئله واقعی و محدود را انتخاب کنید و وضعیت اولیه، مسئول پیگیری و معیار موفقیت را مشخص کنید.</p><h2>روزهای ۳۱ تا ۶۰ · اجرای محدود</h2><p>یک کاربرد کوچک را با داده مجاز و بازبینی انسانی آزمایش کنید. زمان صرف‌شده، کیفیت خروجی و خطاها را با وضعیت اولیه مقایسه کنید.</p><h2>روزهای ۶۱ تا ۹۰ · بازبینی و تصمیم</h2><p>بر اساس نتیجه آزمایش، درباره ادامه، اصلاح یا توقف تصمیم بگیرید. نقش‌ها، دستورالعمل‌ها و آموزش لازم را ثبت و ارزیابی را تکرار کنید.</p><h2>روش محاسبه</h2><p>امتیاز هر محور میانگین پاسخ‌های ۱ تا ۵ آن محور است. میانگین کل با وزن‌های جدول محاسبه و با فرمول «(میانگین − ۱) × ۲۵» به مقیاس ۱۰۰ تبدیل می‌شود. مرز سطح‌ها ۲، ۳، ۴ و ۴٫۷ است. سطح نهایی حداکثر یک سطح بالاتر از ضعیف‌ترین محور قرار می‌گیرد.</p><p>«اطلاع ندارم» بی‌پاسخ باقی می‌ماند؛ «قابل‌اعمال نیست» با دلیل ثبت می‌شود. صدور گزارش به تکمیل سؤال‌ها، انتخاب هدف‌ها و وجود حداقل یک پاسخ امتیازدار در هر محور نیاز دارد.</p><div className="hr-report-closing">برای مرور پاسخ‌ها و انتخاب گام بعدی با هوشران در ارتباط باشید.<br/><span dir="ltr">www.houshraan.ir · t.me/HoushRaan</span></div></Page>
  </div>;
};
