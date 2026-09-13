import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowDown,
  Check,
  ChevronLeft,
} from 'lucide-react';
import { CerebriumDotsCanvas } from './CerebriumDotsCanvas';
import { BenchmarkChartCard } from './BenchmarkChartCard';
import { TerminalWorkflowCard } from './TerminalWorkflowCard';
import { FutureSection } from './LandingContent';

export function LandingPage() {
  const [activeSection, setActiveSection] = useState('benchmark');

  const navItems = [
    { id: 'benchmark', title: 'سنجش و ارتقای بهره‌وری', num: '۰۱' },
    { id: 'workflow', title: 'شبیه‌ساز پایپ‌لاین کاری', num: '۰۲' },
    { id: 'courses', title: 'دوره‌های تخصصی سازمانی', num: '۰۳' },
    { id: 'diagnostic', title: 'ارزیابی تشخیصی ۴۰ مؤلفه', num: '۰۴' },
  ];

  const courses = [
    {
      id: 'exec',
      number: '۰۱',
      badge: 'مدیران ارشد و استراتژی',
      title: 'هوش مصنوعی برای مدیران و تصمیم‌گیری استراتژیک',
      subtitle: 'AI for Executives & Decision Makers',
      description:
        'چارچوب‌های تصمیم‌گیری مبتنی بر داده، سنجش بازگشت سرمایه ابزارهای هوشمند (ROI)، تدوین نقشه راه سازمانی و مدیریت ریسک‌های پذیرش فناوری.',
      meta: '۴ جلسه فشرده · سناریوهای مدیریتی واقعی',
      topics: [
        'شناسایی گلوگاه‌های سازمان و اولویت‌بندی AI',
        'چارچوب انتخاب ابزارها و مدل‌های هوش مصنوعی',
        'حاکمیت داده، امنیت محرمانگی و ملاحظات حقوقی',
      ],
    },
    {
      id: 'prompt',
      number: '۰۲',
      badge: 'بهره‌وری عملیاتی و پرامپتینگ',
      title: 'پرامپت‌نویسی پیشرفته و خودکارسازی فرآیندها',
      subtitle: 'Advanced Prompting & Workflow Automation',
      description:
        'تسلط کامل بر مهندسی زمینه (Context Engineering)، چارچوب‌های سیستماتیک SCOOV و ساخت دستیاران اختصاصی برای تسریع چندبرابری امور تکراری.',
      meta: '۶ جلسه کارگاهی · تمرین بر چالش‌های کاری تیم',
      topics: [
        'مهندسی پرامپت ساختاریافته با چارچوب SCOOV',
        'تکنیک‌های زنجیره تفکر (CoT) و حذف توهم مدل',
        'اتصال هوش مصنوعی به جریان‌های کاری اداری و اکسل',
      ],
    },
    {
      id: 'sales',
      number: '۰۳',
      badge: 'فروش و توسعه بازار B2B',
      title: 'پیاده‌سازی ابزارهای AI در بخش فروش و بازاریابی',
      subtitle: 'AI-Powered B2B Sales & Marketing',
      description:
        'بازطراحی کامل قیف فروش سازمانی؛ از پروسپکتینگ و تحلیل رقبا تا شخصی‌سازی پیام‌های ارتباطی و ذخیره حافظه تعامل مشتری در CRM.',
      meta: '۵ جلسه تخصصی · ویژه تیم‌های فروش و مارکتینگ',
      topics: [
        'شناسایی و اولویت‌بندی هوشمند سرنخ‌های B2B',
        'تولید خودکار پیشنهادهای ارزش سفارشی برای مشتری',
        'استفاده از هوش مصنوعی در جلسات مذاکره و CRM',
      ],
    },
    {
      id: 'human-ai',
      number: '۰۴',
      badge: 'مهارت‌های بنیادین همکاری',
      title: 'انسان هوشران: تسلط بر همکاری انسان و AI',
      subtitle: 'Human + AI Collaborative Intelligence',
      description:
        'یادگیری مدل ذهنی تعامل اثربخش با هوش مصنوعی مولد؛ نحوه حفظ تفکر انتقادی، اعتبارسنجی مستقل شواهد و تضمین قضاوت نهایی توسط انسان.',
      meta: '۳ جلسه پایه · توانمندسازی عمومی تمام پرسنل',
      topics: [
        'مدل ذهنی درست کار با هوش مصنوعی مولد',
        'روش‌های اعتبارسنجی (Fact-checking) خروجی‌ها',
        'حفظ تفکر انتقادی و قضاوت مستقل انسانی',
      ],
    },
  ];

  const scrollToId = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="cr-page bg-slate-50 dark:bg-[#0a0e17] text-slate-900 dark:text-slate-100 min-h-screen relative selection:bg-cyan-500/20 selection:text-cyan-800 dark:selection:bg-cyan-500/30 dark:selection:text-cyan-200 transition-colors duration-300">
      {/* Interactive Dots Canvas */}
      <CerebriumDotsCanvas className="opacity-75" />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-200/80 dark:border-cyan-500/30 bg-cyan-50/90 dark:bg-[#0e1526] text-cyan-800 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>پلتفرم تخصصی آموزش و توانمندسازی سازمانی با هوش مصنوعی</span>
            </div>

            {/* Split Title with High-Contrast Typography */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.35] mb-6">
              توانمندسازی هوشمند سازمان‌ها، <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 via-teal-600 to-slate-950 dark:from-cyan-400 dark:via-teal-300 dark:to-white">
                همگام با هوش انسان.
              </span>
            </h1>

            {/* Subtitle with Perfect Contrast */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4 max-w-2xl">
              طراحی و پیاده‌سازی کاربردی هوش مصنوعی در فرآیندهای عملیاتی، تصمیم‌گیری استراتژیک و تیم‌های سازمانی.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
              هوشران به سازمان‌ها کمک می‌کند تا استفاده از هوش مصنوعی را از یک هیجان زودگذر به یک قابلیت واقعی، ایمن و قابل تکرار در کارهای روزمره تبدیل کنند.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white dark:text-slate-950 bg-slate-900 hover:bg-slate-800 dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-all duration-200 shadow-md dark:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-[1.02]"
                href="https://t.me/HoushRaan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>درخواست مشاوره سازمانی</span>
                <ArrowLeft size={17} />
              </a>

              <a
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/80 bg-white hover:bg-slate-100 dark:bg-[#121828]/70 dark:hover:bg-[#1c243a] transition-all duration-200 shadow-sm"
                href="#/assessment"
              >
                <span>ورود به ارزیابی سازمان</span>
                <ChevronLeft size={17} />
              </a>

              <a
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors py-2 px-2"
                href="#features"
              >
                <span>بررسی قابلیت‌ها</span>
                <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Principles Marquee */}
      <div className="relative z-10 py-5 border-b border-slate-200 dark:border-slate-800/60 bg-white/80 dark:bg-[#080b13]/60 backdrop-blur-sm overflow-hidden transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
            <span>همکاری پایدار انسان و هوش مصنوعی (Human + AI)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
            <span>متدولوژی مبتنی بر شواهد گزارش مشاغل WEF</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            <span>تضمین محرمانگی و حاکمیت داده‌های سازمانی</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
            <span>ارائه نقشه راه ۹۰ روزه عملیاتی</span>
          </div>
        </div>
      </div>

      {/* Sticky 2-Column Feature Section */}
      <section id="features" className="relative z-10 py-16 md:py-24 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Right Column (Sticky Navigator on Desktop in RTL) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-800 dark:text-cyan-400 text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                <span>چرا هوشران؟</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white leading-snug mb-4">
                سرعت و کیفیت عملیاتی، <br />
                <span className="text-slate-500 dark:text-slate-400 font-normal">بدون پیچیدگی‌های فنی.</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                از توانمندی‌های عمومی تا خودکارسازی تخصصی در دپارتمان‌های فروش، مالی و استراتژی سازمان.
              </p>
            </div>

            {/* Vertical Navigator Links */}
            <nav className="space-y-1.5 border-r border-slate-200 dark:border-slate-800 pr-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className={`w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-white dark:bg-[#121929] text-cyan-700 dark:text-cyan-300 font-bold border-r-2 border-cyan-600 dark:border-cyan-400 shadow-sm dark:shadow-none -mr-[17px]'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <span>{item.title}</span>
                  <span className="font-mono text-xs opacity-60" dir="ltr">
                    {item.num}
                  </span>
                </button>
              ))}
            </nav>

            {/* Direct CTA link */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <a
                href="https://t.me/HoushRaan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:underline transition-colors"
              >
                <span>دریافت کاتالوگ سازمانی</span>
                <ArrowLeft size={14} />
              </a>
            </div>
          </div>

          {/* Left Column (Rich Interactive Feature Cards in RTL) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Feature 1: Performance Benchmark Chart */}
            <div id="benchmark" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider">
                <span>01</span>
                <span>/</span>
                <span>BENCHMARKING</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                صرفه‌جویی ملموس زمان و ارتقای استاندارد خروجی‌ها
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                بررسی زمان انجام کارهای پرتکرار سازمانی با متدولوژی هوشران در مقایسه با روش‌های سنتی و استفاده غیرحرفه‌ای از هوش مصنوعی:
              </p>
              <BenchmarkChartCard />
            </div>

            {/* Feature 2: Terminal Execution Workflow Card */}
            <div id="workflow" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider">
                <span>02</span>
                <span>/</span>
                <span>SYSTEMATIC PIPELINE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                پایپ‌لاین کاری استاندارد؛ فراتر از یک پرامپت ساده
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                در هوشران، استفاده از هوش مصنوعی بر اساس متدولوژی مهندسی زمینه (Context Engineering) و فکت‌چک انسانی اجرا می‌شود تا امنیت و دقت تضمین گردد:
              </p>
              <TerminalWorkflowCard />
            </div>

            {/* Feature 3: Enterprise Courses Dossier */}
            <div id="courses" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider">
                <span>03</span>
                <span>/</span>
                <span>TRAINING PROGRAMS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                مسیرهای یادگیری تخصصی برای سطوح مختلف سازمان
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                هر دوره آموزشی متناسب با اهداف اختصاصی، ابزارهای موجود و فرهنگ سازمان شما شخصی‌سازی و اجرا می‌شود:
              </p>

              {/* 4 Clean Course Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#101625] hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-[#0b0f19] text-cyan-700 dark:text-cyan-400 border border-slate-200 dark:border-slate-800">
                          {course.badge}
                        </span>
                        <span className="font-mono text-xs text-slate-400" dir="ltr">
                          {course.number}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                        {course.title}
                      </h4>
                      <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mb-3" dir="ltr">
                        {course.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {course.description}
                      </p>

                      <ul className="space-y-1.5 border-t border-slate-100 dark:border-slate-800/80 pt-3 mb-4">
                        {course.topics.map((t, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <span className="w-1 h-1 rounded-full bg-cyan-600 dark:bg-cyan-400 flex-shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400">{course.meta}</span>
                      <a
                        href="https://t.me/HoushRaan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 inline-flex items-center gap-1"
                      >
                        <span>ثبت‌نام</span>
                        <ArrowLeft size={13} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature 4: 40-Factor Diagnostic Assessment */}
            <div id="diagnostic" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider">
                <span>04</span>
                <span>/</span>
                <span>ORGANIZATIONAL DIAGNOSTIC</span>
              </div>

              <div className="p-8 sm:p-10 rounded-2xl border border-cyan-200 dark:border-cyan-500/30 bg-gradient-to-br from-cyan-50/80 via-white to-slate-50 dark:from-[#101728] dark:via-[#0d1322] dark:to-[#0a0e18] shadow-md dark:shadow-2xl transition-colors duration-300">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-300 text-xs font-semibold mb-4">
                    <Check size={14} />
                    <span>سنجش دقیق و داده‌محور وضعیت امروز</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-3 leading-snug">
                    سامانه ارزیابی ۴۰ مؤلفه‌ای هوشران
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    این ارزیابی در ۷ بُعد سازمانی، فاصله وضعیت کنونی شما تا اهداف هوشمندسازی را مشخص کرده و در پایان نقشه راه ۹۰ روزه اجرایی به همراه تحلیل گلوگاه‌ها ارائه می‌دهد.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs">
                    <div className="p-3 rounded-lg bg-white dark:bg-[#080c14] border border-slate-200 dark:border-slate-800 text-center shadow-sm">
                      <strong className="block text-xl font-bold text-cyan-700 dark:text-cyan-400 font-mono">۴۰</strong>
                      <span className="text-slate-500 dark:text-slate-400">مؤلفه رفتاری</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#080c14] border border-slate-200 dark:border-slate-800 text-center shadow-sm">
                      <strong className="block text-xl font-bold text-teal-700 dark:text-teal-400 font-mono">۷</strong>
                      <span className="text-slate-500 dark:text-slate-400">بُعد سازمانی</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#080c14] border border-slate-200 dark:border-slate-800 text-center shadow-sm col-span-2 sm:col-span-1">
                      <strong className="block text-xl font-bold text-purple-700 dark:text-purple-400 font-mono">۹۰</strong>
                      <span className="text-slate-500 dark:text-slate-400">روز نقشه راه</span>
                    </div>
                  </div>

                  <a
                    href="#/assessment"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white dark:text-slate-950 bg-slate-900 hover:bg-slate-800 dark:bg-cyan-400 dark:hover:bg-cyan-300 transition-all shadow-md dark:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-[1.02]"
                  >
                    <span>شروع ارزیابی سازمانی هوشران</span>
                    <ArrowLeft size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEF Future Outlook Evidence Section */}
      <section className="relative z-10 py-16 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#080b14] transition-colors duration-300">
        <FutureSection />
      </section>
    </div>
  );
}