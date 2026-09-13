import React, { useEffect } from 'react';
import { ArrowLeft, ArrowDown, Check } from 'lucide-react';
import { FutureSection, CoursesSection } from './LandingContent';
import { CerebriumDotsCanvas } from './CerebriumDotsCanvas';

export function LandingPage() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll(
        '.hr-landing section, .hr-landing article, .hr-landing .hr-stat, .hr-landing .hr-learning-card'
      )
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        }),
      { threshold: 0.12 }
    );
    items.forEach((item) => {
      item.classList.add('scroll-reveal');
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hr-landing relative">
      {/* Subtle Interactive Cerebrium Dots Canvas - Calm, non-distracting background */}
      <CerebriumDotsCanvas className="opacity-35 dark:opacity-40 pointer-events-none" />

      {/* Hero Section */}
      <section className="hr-hero hr-shell relative z-10" aria-labelledby="hero-title">
        <div className="hr-hero-copy">
          <p className="hr-eyebrow">
            <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 inline-block animate-pulse" />
            <span>هوش مصنوعی در کار واقعی</span>
          </p>

          <h1 id="hero-title">
            ظرفیت بیشتر
            <br />
            برای <em>انسان.</em>
          </h1>

          <div className="hr-hero-support">
            <p className="hr-hero-description">
              با کمک هوش مصنوعی، کار را دوباره ببینیم؛
              <br className="hr-desktop-break" /> و برای فکر کردن، تصمیم گرفتن و خلق ارزش، جا باز کنیم.
            </p>
            <p className="hr-hero-detail">
              هوشران به سازمان‌ها کمک می‌کند استفاده از هوش مصنوعی را به روشی عملی، آگاهانه و تکرارپذیر در کار تیم تبدیل کنند.
            </p>
            <div className="hr-actions">
              <a className="hr-button hr-button-primary" href="#/assessment">
                <span>شروع ارزیابی سازمان</span>
                <ArrowLeft size={18} />
              </a>
              <a className="hr-text-link" href="#courses">
                <span>آشنایی با دوره‌ها</span>
                <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="hr-hero-bottom">
          <span>از ظرفیت فردی، تا قابلیت سازمانی</span>
          <span dir="ltr">HUMAN + AI</span>
        </div>
      </section>

      {/* Reflection / AI Learning Quote */}
      <section className="hr-reflection hr-shell relative z-10" aria-label="هزینه یادگیری هوش مصنوعی">
        <span className="hr-quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote>
          هزینه‌ی یادگیری هوش مصنوعی، زمان است.
          <br className="hr-quote-break" />{' '}
          <strong>هزینه‌ی یادنگرفتنش، جایگاه است.</strong>
        </blockquote>
        <span className="hr-quote-rule" aria-hidden="true" />
      </section>

      {/* Future Section (Authentic WEF Evidence & Work Distribution) */}
      <FutureSection />

      {/* Courses Section (Authentic 2 Courses with Expandable Syllabi) */}
      <CoursesSection />

      {/* Assessment Intro Section */}
      <section className="hr-assessment-intro hr-shell relative z-10" aria-labelledby="assessment-title">
        <div className="hr-assessment-card">
          <div className="hr-assessment-copy">
            <h2 id="assessment-title">
              از کجا شروع کنیم؟
              <br />
              <em>با شناخت وضعیت امروز.</em>
            </h2>
            <p>
              ارزیابی هوشران کمک می‌کند تصویری از وضعیت فعلی سازمان و فاصله آن با هدفی که در نظر دارید به دست آورید.
            </p>
            <a className="hr-button hr-button-primary" href="#/assessment">
              <span>ورود به ارزیابی سازمانی</span>
              <ArrowLeft size={18} />
            </a>
          </div>

          <div className="hr-assessment-expectations">
            <div className="hr-assessment-count">
              <strong>۴۰</strong>
              <span>
                مؤلفه رفتاری
                <br />
                در ۷ بُعد سازمانی
              </span>
            </div>
            <ul>
              <li>
                <Check size={17} />
                <span>بررسی وضعیت فعلی و تعیین سطح هدف</span>
              </li>
              <li>
                <Check size={17} />
                <span>شناخت نقاط قوت و شکاف‌های اولویت‌دار</span>
              </li>
              <li>
                <Check size={17} />
                <span>گزارش و نقشه راه پیشنهادی ۹۰روزه</span>
              </li>
            </ul>
            <p>
              نتیجه بر پایه پاسخ‌های شماست و نقطه شروعی برای بررسی دقیق‌تر سازمان محسوب می‌شود.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}