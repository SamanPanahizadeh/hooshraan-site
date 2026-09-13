import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowDown,
  Check,
  Sparkles,
  Bot,
  Zap,
  TrendingUp,
  Award,
  ChevronLeft,
  MessageSquareCode,
  ShieldCheck,
} from 'lucide-react';
import { NeuralSphereCanvas } from './3d/NeuralSphereCanvas';
import { CounterStat } from './CounterStat';
import { FutureSection } from './LandingContent';

export function LandingPage() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll(
        '.hr-landing section, .hr-landing article, .hr-stat, .hr-course-3d-card'
      )
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add('is-visible')
        ),
      { threshold: 0.12 }
    );
    items.forEach((item) => {
      item.classList.add('scroll-reveal');
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: 'exec',
      number: '۰۱',
      badge: 'مدیریت و استراتژی',
      title: 'هوش مصنوعی برای مدیران و تصمیم‌گیری استراتژیک',
      subtitle: 'AI for Executives & Decision Makers',
      description:
        'چارچوب‌های تصمیم‌گیری مبتنی بر داده و هوش مصنوعی، سنجش بازگشت سرمایه (ROI)، تدوین نقشه راه هوشمندسازی و مدیریت ریسک‌های ورود AI به بدنه سازمان.',
      meta: '۴ جلسه فشرده · ویژه مدیران ارشد و میانی',
      topics: [
        'شناسایی گلوگاه‌های سازمان و اولویت‌بندی AI',
        'چارچوب انتخاب ابزارها و مدل‌های هوش مصنوعی',
        'مدیریت تغییر و آمادگی فرهنگ سازمانی',
        'حاکمیت داده، امنیت اطلاعات و ملاحظات حقوقی',
      ],
      icon: TrendingUp,
      color: 'from-cyan-500/20 to-blue-600/20',
      borderGlow: 'hover:shadow-[0_0_30px_rgba(0,245,255,0.25)]',
    },
    {
      id: 'prompt',
      number: '۰۲',
      badge: 'بهره‌وری عملیاتی',
      title: 'پرامپت‌نویسی پیشرفته و خودکارسازی فرآیندها',
      subtitle: 'Advanced Prompting & Workflow Automation',
      description:
        'تسلط بر مهندسی زمینه (Context Engineering)، تکنیک‌های پیشرفته پرامپتینگ و ساخت ایجنت‌ها و پایپ‌لاین‌های خودکار برای تسریع چندبرابری امور تکراری.',
      meta: '۶ جلسه کارگاهی · تمرین عملی بر سناریوهای واقعی',
      topics: [
        'مهندسی پرامپت سیستماتیک با چارچوب‌های SCOOV',
        'زنجیره تفکر (CoT) و تکنیک‌های هدایت دقیق خروجی',
        'اتوماسیون فرآیندهای اداری، مالی و منابع انسانی',
        'ساخت دستیاران اختصاصی با Custom GPTs و API',
      ],
      icon: MessageSquareCode,
      color: 'from-purple-500/20 to-pink-600/20',
      borderGlow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]',
    },
    {
      id: 'sales',
      number: '۰۳',
      badge: 'رشد و توسعه بازار',
      title: 'پیاده‌سازی ابزارهای AI در بخش فروش و بازاریابی',
      subtitle: 'AI-Powered B2B Sales & Marketing',
      description:
        'بازطراحی کامل قیف فروش سازمانی؛ از پروسپکتینگ هوشمند و تحلیل رقبا تا آماده‌سازی سناریوی مذاکره و ثبت حافظه هوشمند مشتریان در CRM.',
      meta: '۵ جلسه تخصصی · ویژه تیم‌های مارکتینگ و فروش',
      topics: [
        'شناسایی و غربالگری هوشمند سرنخ‌های B2B',
        'شخصی‌سازی مقیاس‌پذیر پیام‌ها و ایمیل‌های تجاری',
        'تحلیل رقبا و تولید پیشنهادهای ارزش سفارشی',
        'استفاده از هوش مصنوعی در جلسات مذاکره و CRM',
      ],
      icon: Zap,
      color: 'from-blue-500/20 to-indigo-600/20',
      borderGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]',
    },
    {
      id: 'human-ai',
      number: '۰۴',
      badge: 'مهارت‌های بنیادین',
      title: 'انسان هوشران: تسلط بر همکاری انسان و AI',
      subtitle: 'Human + AI Collaborative Intelligence',
      description:
        'یادگیری مدل ذهنی تعامل اثربخش با مدل‌های زبانی؛ چگونه تعریف مسئله، ارزیابی نقادانه شواهد و مسئولیت تصمیم نهایی در دست انسان باقی بماند.',
      meta: '۳ جلسه پایه · توانمندسازی عمومی تمام پرسنل',
      topics: [
        'مدل ذهنی درست کار با هوش مصنوعی مولد',
        'روش‌های اعتبارسنجی (Fact-checking) و راستی‌آزمایی',
        'حفظ تفکر انتقادی و قضاوت مستقل انسانی',
        'خلق ارزش مشترک و افزایش ظرفیت شناختی فرد',
      ],
      icon: Bot,
      color: 'from-amber-500/20 to-emerald-600/20',
      borderGlow: 'hover:shadow-[0_0_30px_rgba(252,211,77,0.25)]',
    },
  ];

  return (
    <div className="hr-landing relative overflow-hidden">
      {/* 3D Interactive Scroll-Driven Three.js Neural Sphere Canvas */}
      <NeuralSphereCanvas className="opacity-95" />

      {/* Hero Section */}
      <section
        className="hr-hero hr-shell relative z-10 min-h-[85vh] flex flex-col justify-center pt-24 pb-16"
        aria-labelledby="hero-title"
      >
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md mb-6 text-cyan-300 text-sm font-medium shadow-[0_0_15px_rgba(0,245,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>آموزش و توانمندسازی سازمانی با هوش مصنوعی</span>
          </div>

          {/* Main Title */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.3] mb-6"
          >
            توانمندسازی سازمان‌ها <br />
            با <span className="hr-gradient-text">هوش مصنوعی کاربردی.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-normal leading-relaxed mb-4 max-w-2xl">
            ارتقای بهره‌وری عملیاتی، تصمیم‌گیری استراتژیک و توسعه مهارت‌های تیم‌های مدیریتی و کارشناسی.
          </p>

          <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-2xl">
            هوشران به سازمان‌ها کمک می‌کند تا استفاده از هوش مصنوعی را از یک هیجان زودگذر به یک جریان کاری پایدار، ایمن و ارزش‌آفرین در کارهای روزمره تبدیل کنند.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              className="hr-glow-btn inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:shadow-[0_0_35px_rgba(0,245,255,0.6)] transition-all duration-300 hover:scale-[1.03]"
              href="https://t.me/HoushRaan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>درخواست مشاوره سازمانی</span>
              <ArrowLeft size={18} />
            </a>

            <a
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl text-base font-medium text-slate-200 border border-slate-700/80 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800/80 hover:border-slate-500 transition-all duration-200"
              href="#courses"
            >
              <span>مشاهده دوره‌ها</span>
              <ArrowDown size={16} />
            </a>

            <a
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-2 px-3"
              href="#/assessment"
            >
              <span>سنجش وضعیت فعلی سازمان</span>
              <ChevronLeft size={16} />
            </a>
          </div>
        </div>

        {/* Hero bottom metadata banner */}
        <div className="hr-hero-bottom-strip mt-16 pt-6 border-t border-slate-800/80 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>متدولوژی یادگیری مبتنی بر شواهد و سناریوهای واقعی کاری</span>
          </div>
          <div className="font-mono tracking-widest text-slate-400" dir="ltr">
            HUMAN + AI COLLABORATION
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="hr-shell relative z-10 my-16">
        <div className="hr-quote-glass p-8 sm:p-10 rounded-2xl border border-slate-800/90 bg-slate-900/40 backdrop-blur-xl text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 leading-relaxed max-w-4xl mx-auto">
            «هزینه‌ی یادگیری هوش مصنوعی، زمان است.{' '}
            <span className="text-cyan-400 font-extrabold">هزینه‌ی یادنگرفتنش، جایگاه است.»</span>
          </blockquote>
        </div>
      </section>

      {/* Key Metrics Section (Scroll State 2: Expanding Particle Sphere) */}
      <section
        className="hr-metrics-section hr-shell relative z-10 py-20 scroll-mt-20"
        id="metrics"
        aria-labelledby="metrics-title"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 text-xs font-semibold mb-4">
            <TrendingUp size={14} />
            <span>شاخص‌های کلیدی اثربخشی</span>
          </div>
          <h2
            id="metrics-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight"
          >
            تغییر ملموس در <span className="text-cyan-400">عملکرد سازمان</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            استفاده اصولی از ابزارهای هوش مصنوعی توسط تیم‌ها، نتایجی فراتر از اتوماسیون معمولی ایجاد می‌کند.
          </p>
        </div>

        {/* 4 Stats Cards with Counter Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CounterStat
            value={70}
            suffix="٪"
            prefix="+"
            label="افزایش سرعت فرآیندها"
            sublabel="کاهش زمان تولید مستندات، تحلیل داده و گزارش‌نویسی اداری"
            duration={2200}
          />
          <CounterStat
            value={50}
            prefix="+"
            label="سازمان و شرکت آموزش‌دیده"
            sublabel="در صنایع خدمات مالی، بیمه، تولیدی و استارتاپ‌های پیشرو"
            duration={2400}
          />
          <CounterStat
            value={85}
            suffix="٪"
            label="کاهش خطاهای تکراری"
            sublabel="با پیاده‌سازی چک‌لیست‌های هوشمند و نظارت همزمان انسانی"
            duration={2000}
          />
          <CounterStat
            value={4.9}
            decimals={1}
            suffix=" / ۵"
            label="رضایت مدیران و تیم‌ها"
            sublabel="بر اساس ارزیابی‌های کیفی پس از اجرای دوره‌های سازمانی"
            duration={1800}
          />
        </div>
      </section>

      {/* Courses Section (Scroll State 3: Particle Horizon Grid) */}
      <section
        className="hr-courses-section hr-shell relative z-10 py-24 scroll-mt-20"
        id="courses"
        aria-labelledby="courses-title"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-semibold mb-4">
              <Sparkles size={14} />
              <span>مسیرهای یادگیری تخصصی</span>
            </div>
            <h2
              id="courses-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              دوره‌های آموزشی <span className="hr-gradient-text">سازمانی هوشران</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              هر دوره متناسب با ساختار، دپارتمان‌ها و نیازهای اختصاصی سازمان شما شخصی‌سازی و پیاده‌سازی می‌شود.
            </p>
          </div>

          <a
            href="https://t.me/HoushRaan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 text-cyan-300 bg-cyan-950/30 hover:bg-cyan-900/40 backdrop-blur-md transition-all self-start md:self-end text-sm font-medium"
          >
            <span>دریافت کاتالوگ دوره‌های سازمانی</span>
            <ArrowLeft size={16} />
          </a>
        </div>

        {/* 3D Glassmorphic Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <article
                key={course.id}
                className={`hr-course-glass-card group relative rounded-2xl p-8 border border-slate-800/90 bg-slate-900/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${course.borderGlow}`}
              >
                {/* Subtle gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                        {course.badge}
                      </span>
                      <span className="font-mono text-xs text-slate-400" dir="ltr">
                        {course.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                      {course.title}
                    </h3>
                    <div className="font-mono text-xs text-slate-400 tracking-wider mb-4" dir="ltr">
                      {course.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Meta tag */}
                    <div className="text-xs text-slate-400 font-medium pb-4 border-b border-slate-800/80 mb-6 flex items-center gap-2">
                      <ShieldCheck size={15} className="text-cyan-400" />
                      <span>{course.meta}</span>
                    </div>

                    {/* Topics List */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        محورهای کلیدی دوره:
                      </h4>
                      <ul className="space-y-2.5">
                        {course.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <a
                      href="https://t.me/HoushRaan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors group-hover:translate-x-[-4px]"
                    >
                      <span>هماهنگی و ثبت‌نام سازمان</span>
                      <ArrowLeft size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* WEF Future Outlook Evidence Section */}
      <FutureSection />

      {/* Organizational Diagnostic Assessment CTA */}
      <section
        className="hr-assessment-intro hr-shell relative z-10 py-20"
        aria-labelledby="assessment-title"
      >
        <div className="hr-assessment-card rounded-3xl p-8 sm:p-12 md:p-14 border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,245,255,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-semibold mb-4">
                <Check size={14} />
                <span>گام نخست هوشمندسازی</span>
              </div>
              <h2
                id="assessment-title"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4"
              >
                از کجا شروع کنیم؟ <br />
                <span className="text-cyan-400">با شناخت دقیق وضعیت امروز سازمان.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-xl">
                ارزیابی تشخیصی هوشران به شما کمک می‌کند تصویری واضح از وضعیت فعلی استفاده از AI در تیم‌ها، میزان آمادگی فرآیندها و فاصله با اهداف آینده به دست آورید.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="hr-glow-btn inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:scale-[1.02] transition-all"
                  href="#/assessment"
                >
                  <span>ورود به سامانه ارزیابی سازمان</span>
                  <ArrowLeft size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:border-r lg:border-slate-800 lg:pr-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-cyan-400 font-mono">۴۰</span>
                <span className="text-sm text-slate-300 leading-snug">
                  مؤلفه رفتاری و مهارتی <br />
                  <strong className="text-white font-medium">در ۷ بُعد کلیدی سازمان</strong>
                </span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-6">
                <li className="flex items-center gap-2.5">
                  <Check size={17} className="text-cyan-400 flex-shrink-0" />
                  <span>سنجش شکاف مهارتی تیم‌ها و مدیران</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={17} className="text-cyan-400 flex-shrink-0" />
                  <span>اولویت‌بندی گلوگاه‌های دارای پتانسیل اتوماسیون</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={17} className="text-cyan-400 flex-shrink-0" />
                  <span>ارائه نقشه راه ۹۰ روزه اختصاصی</span>
                </li>
              </ul>
              <p className="text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                نتیجه بلافاصله به شکل کارنامه تحلیلی و گزارش جامع قابل دریافت است.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}