import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowDown,
  Check,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ChevronLeft,
  BookOpen,
  Sliders,
  Award,
  Layers,
  FileText,
  ExternalLink,
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
    <div className="cr-page bg-[#0a0e17] text-slate-100 min-h-screen relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle Interactive Dots Canvas (Cerebrium Signature Background) */}
      <CerebriumDotsCanvas className="opacity-70" />

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            {/* Top Badge (Cerebrium Style) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-[#0e1526] text-cyan-300 text-xs sm:text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>پلتفرم تخصصی آموزش و توانمندسازی سازمانی با هوش مصنوعی</span>
            </div>

            {/* Split Title with Gradient (Cerebrium Split Headline) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.35] mb-6">
              توانمندسازی هوشمند سازمان‌ها، <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-teal-300 to-white">
                همگام با هوش انسان.
              </span>
            </h1>

            {/* Subtitle with High Readability */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-4 max-w-2xl">
              طراحی و پیاده‌سازی کاربردی هوش مصنوعی در فرآیندهای عملیاتی، تصمیم‌گیری استراتژیک و تیم‌های سازمانی.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-10 max-w-2xl">
              هوشران به سازمان‌ها کمک می‌کند تا استفاده از هوش مصنوعی را از یک هیجان زودگذر به یک قابلیت واقعی، ایمن و قابل تکرار در کارهای روزمره تبدیل کنند.
            </p>

            {/* Actions (Cerebrium Style Dual Buttons) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-[1.02]"
                href="https://t.me/HoushRaan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>درخواست مشاوره سازمانی</span>
                <ArrowLeft size={17} />
              </a>

              <a
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm sm:text-base font-medium text-slate-200 border border-slate-700/80 bg-[#121828]/70 hover:bg-[#1c243a] hover:border-slate-600 transition-all duration-200"
                href="#/assessment"
              >
                <span>ورود به ارزیابی سازمان</span>
                <ChevronLeft size={17} />
              </a>

              <a
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-cyan-300 transition-colors py-2 px-2"
                href="#features"
              >
                <span>بررسی قابلیت‌ها</span>
                <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Principles Marquee (Cerebrium Rail Style) */}
      <div className="relative z-10 py-6 border-b border-slate-800/60 bg-[#080b13]/60 backdrop-blur-sm overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>همکاری پایدار انسان و هوش مصنوعی (Human + AI)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>متدولوژی مبتنی بر شواهد گزارش مشاغل WEF</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>تضمین محرمانگی و حاکمیت داده‌های سازمانی</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>ارائه نقشه راه ۹۰ روزه عملیاتی</span>
          </div>
        </div>
      </div>

      {/* Sticky 2-Column Feature Section (Cerebrium Signature Layout) */}
      <section id="features" className="relative z-10 py-20 md:py-28 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Right Column (Sticky Navigator on Desktop in RTL) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>چرا هوشران؟</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-4">
                سرعت و کیفیت عملیاتی، <br />
                <span className="text-slate-400 font-normal">بدون پیچیدگی‌های فنی.</span>
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                از توانمندی‌های عمومی تا خودکارسازی تخصصی در دپارتمان‌های فروش، مالی و استراتژی سازمان.
              </p>
            </div>

            {/* Vertical Navigator Links */}
            <nav className="space-y-2 border-r border-slate-800 pr-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className={`w-full text-right py-2.5 px-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-[#121929] text-cyan-300 font-bold border-r-2 border-cyan-400 -mr-[17px]'
                      : 'text-slate-400 hover:text-slate-200'
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
            <div className="pt-4 border-t border-slate-800/80">
              <a
                href="https://t.me/HoushRaan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
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
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
                <span>01</span>
                <span>/</span>
                <span>BENCHMARKING</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                صرفه‌جویی ملموس زمان و ارتقای استاندارد خروجی‌ها
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                بررسی زمان انجام کارهای پرتکرار سازمانی با متدولوژی هوشران در مقایسه با روش‌های سنتی و استفاده غیرحرفه‌ای از هوش مصنوعی:
              </p>
              <BenchmarkChartCard />
            </div>

            {/* Feature 2: Terminal Execution Workflow Card */}
            <div id="workflow" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
                <span>02</span>
                <span>/</span>
                <span>SYSTEMATIC PIPELINE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                پایپ‌لاین کاری استاندارد؛ فراتر از یک پرامپت ساده
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                در هوشران، استفاده از هوش مصنوعی بر اساس متدولوژی مهندسی زمینه (Context Engineering) و فکت‌چک انسانی اجرا می‌شود تا امنیت و دقت تضمین گردد:
              </p>
              <TerminalWorkflowCard />
            </div>

            {/* Feature 3: Enterprise Courses Dossier */}
            <div id="courses" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
                <span>03</span>
                <span>/</span>
                <span>TRAINING PROGRAMS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                مسیرهای یادگیری تخصصی برای سطوح مختلف سازمان
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                هر دوره آموزشی متناسب با اهداف اختصاصی، ابزارهای موجود و فرهنگ سازمان شما شخصی‌سازی و اجرا می‌شود:
              </p>

              {/* 4 Clean Course Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="p-6 rounded-2xl border border-slate-800/80 bg-[#101625] hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[#0b0f19] text-cyan-400 border border-slate-800">
                          {course.badge}
                        </span>
                        <span className="font-mono text-xs text-slate-400" dir="ltr">
                          {course.number}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                        {course.title}
                      </h4>
                      <p className="font-mono text-[11px] text-slate-400 mb-3" dir="ltr">
                        {course.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {course.description}
                      </p>

                      <ul className="space-y-1.5 border-t border-slate-800/80 pt-3 mb-4">
                        {course.topics.map((t, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                      <span className="text-slate-400">{course.meta}</span>
                      <a
                        href="https://t.me/HoushRaan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
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
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
                <span>04</span>
                <span>/</span>
                <span>ORGANIZATIONAL DIAGNOSTIC</span>
              </div>

              <div className="p-8 sm:p-10 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#101728] via-[#0d1322] to-[#0a0e18] shadow-2xl">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/60 text-cyan-300 text-xs font-semibold mb-4">
                    <Check size={14} />
                    <span>سنجش دقیق و داده‌محور وضعیت امروز</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                    سامانه ارزیابی ۴۰ مؤلفه‌ای هوشران
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    این ارزیابی در ۷ بُعد سازمانی، فاصله وضعیت کنونی شما تا اهداف هوشمندسازی را مشخص کرده و در پایان نقشه راه ۹۰ روزه اجرایی به همراه تحلیل گلوگاه‌ها ارائه می‌دهد.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs">
                    <div className="p-3 rounded-lg bg-[#080c14] border border-slate-800 text-center">
                      <strong className="block text-xl font-bold text-cyan-400 font-mono">۴۰</strong>
                      <span className="text-slate-400">مؤلفه رفتاری</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#080c14] border border-slate-800 text-center">
                      <strong className="block text-xl font-bold text-teal-400 font-mono">۷</strong>
                      <span className="text-slate-400">بُعد سازمانی</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#080c14] border border-slate-800 text-center col-span-2 sm:col-span-1">
                      <strong className="block text-xl font-bold text-purple-400 font-mono">۹۰</strong>
                      <span className="text-slate-400">روز نقشه راه</span>
                    </div>
                  </div>

                  <a
                    href="#/assessment"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
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

      {/* WEF Future Outlook Evidence Section (Retained & Cleaned) */}
      <section className="relative z-10 py-16 border-t border-slate-800/80 bg-[#080b14]">
        <FutureSection />
      </section>
    </div>
  );
}