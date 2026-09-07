import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, ChevronLeft, ChevronRight, Zap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface VisualComparisonSectionProps {
  onNavigate?: (tab: string, subTab?: string) => void;
  onStartDiagnostic?: () => void;
}

interface ComparisonPair {
  id: string;
  number: string;
  question: string;
  without: {
    headline: string;
    subline: string;
    tag: string;
    flow?: string[];
  };
  withHoushran: {
    headline: string;
    subline: string;
    tag: string;
    flow?: string[];
    note?: string;
  };
}

const COMPARISON_PAIRS: ComparisonPair[] = [
  {
    id: 'tool-vs-problem',
    number: '۰۱',
    question: 'ابزار یا مسئله؟',
    without: {
      headline: 'ابزارمحور',
      subline: '«با این ابزار AI چه کار می‌توانم بکنم؟»',
      tag: 'استفاده پراکنده',
    },
    withHoushran: {
      headline: 'مسئله‌محور',
      subline: '«این مسئله را چطور بهتر حل کنم؟»',
      tag: 'استفاده هدفمند',
    },
  },
  {
    id: 'workflow-integration',
    number: '۰۲',
    question: 'AI کنار کار یا داخل کار؟',
    without: {
      headline: 'AI یک ابزار جانبی است.',
      subline: 'کار موازی و منفک از روند اصلی کار',
      tag: 'AI خارج از Workflow',
      flow: ['کار', 'AI', 'خروجی', 'ادامه کار'],
    },
    withHoushran: {
      headline: 'AI بخشی از Workflow است.',
      subline: 'پایپ‌لاین پیوسته از مسئله تا تصمیم و اقدام',
      tag: 'AI در Workflow',
      flow: ['Problem', 'AI', 'Review', 'Decision', 'Action'],
    },
  },
  {
    id: 'answer-vs-thinking',
    number: '۰۳',
    question: 'جواب گرفتن یا بهتر فکر کردن؟',
    without: {
      headline: 'AI جواب می‌دهد.',
      subline: 'تکیه بر پاسخ‌های آماده بدون غنابخشی به تفکر',
      tag: 'خروجی نیازمند بررسی',
    },
    withHoushran: {
      headline: 'AI به فرایند فکر کردن و تصمیم‌سازی کمک می‌کند.',
      subline: 'ارتقای داوری انسانی، گسترش گزینه‌ها و تحلیل نقادانه',
      tag: 'خروجی قابل ارزیابی',
      note: 'AI به جای انسان تصمیم نمی‌گیرد؛ به انسان کمک می‌کند بهتر تصمیم بگیرد.',
    },
  },
  {
    id: 'prompt-vs-skill',
    number: '۰۴',
    question: 'Prompt یا مهارت؟',
    without: {
      headline: 'دنبال Prompt آماده',
      subline: 'کپی‌کردن فرمول‌های ایستا بدون درک بافتار سازمان',
      tag: 'ابزارمحور',
    },
    withHoushran: {
      headline: 'توانایی تعامل حرفه‌ای با AI',
      subline: 'مسئله + زمینه + هدف + محدودیت + ارزیابی',
      tag: 'مسئله‌محور',
    },
  },
  {
    id: 'individual-vs-org',
    number: '۰۵',
    question: 'مهارت فردی یا قابلیت سازمانی؟',
    without: {
      headline: 'چند نفر بلدند.',
      subline: 'استفاده از AI وابسته به افراد و تجربه‌های شخصی است.',
      tag: 'وابسته به افراد',
    },
    withHoushran: {
      headline: 'تیم می‌داند چگونه استفاده کند.',
      subline: 'AI به یک قابلیت قابل توسعه در شیوه کار تیم تبدیل می‌شود.',
      tag: 'قابل توسعه در تیم',
    },
  },
];

export const VisualComparisonSection: React.FC<VisualComparisonSectionProps> = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = COMPARISON_PAIRS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % COMPARISON_PAIRS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + COMPARISON_PAIRS.length) % COMPARISON_PAIRS.length);
  };

  return (
    <section 
      id="before-after-comparison-section"
      className="relative space-y-12 sm:space-y-16 py-6 sm:py-10 overflow-hidden"
      aria-label="مقایسه سازمان قبل و بعد از هوشران"
    >
      {/* هاله نور پس‌زمینه */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[550px] h-72 blur-[110px] -z-10 pointer-events-none rounded-full ${
        theme === 'light' ? 'bg-blue-400/10' : 'bg-blue-600/15'
      }`} />

      {/* تیتر بالای بخش */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 px-3">
        <h2 className={`text-xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-snug ${
          theme === 'light' ? 'text-slate-900' : 'text-white'
        }`}>
          سازمان شما در کدام سمت قرار دارد؟
        </h2>
        <p className={`text-xs sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed font-normal ${
          theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'
        }`}>
          تفاوت، فقط در استفاده از AI نیست؛ در شیوه کار کردن سازمان است.
        </p>
      </div>

      {/* ۱. کانتینر آلبوم تعاملی */}
      <div className="max-w-5xl mx-auto relative px-1 sm:px-14">
        
        {/* دکمه فلش سمت راست (قبلی) */}
        <button
          onClick={handlePrev}
          aria-label="مقایسه قبلی"
          className={`absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full backdrop-blur-xl shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer ${
            theme === 'light' 
              ? 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-slate-300/40' 
              : 'bg-slate-900/90 hover:bg-slate-800 text-white border border-white/20'
          }`}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* دکمه فلش سمت چپ (بعدی) */}
        <button
          onClick={handleNext}
          aria-label="مقایسه بعدی"
          className={`absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full backdrop-blur-xl shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer ${
            theme === 'light' 
              ? 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-slate-300/40' 
              : 'bg-slate-900/90 hover:bg-slate-800 text-white border border-white/20'
          }`}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* کارت اسلایدر آلبوم */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className={`rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-3 sm:space-y-6 min-h-[350px] sm:min-h-[400px] flex flex-col justify-between ${
                theme === 'light'
                  ? 'bg-white/95 border-2 border-slate-200/90 shadow-slate-200/60'
                  : 'bg-slate-800/70 border-2 border-white/80'
              }`}
            >
              {/* هدر بالایی کارت */}
              <div className={`flex items-center justify-between pb-2 sm:pb-3.5 border-b shrink-0 ${
                theme === 'light' ? 'border-slate-200' : 'border-slate-700/60'
              }`}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className={`font-mono font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-xl text-[10px] sm:text-sm border ${
                    theme === 'light'
                      ? 'text-blue-700 bg-blue-50 border-blue-200'
                      : 'text-blue-300 bg-blue-500/20 border-blue-400/30'
                  }`}>
                    مقایسه {currentItem.number} از ۰۵
                  </span>
                  <span className={`font-black text-sm sm:text-lg xl:text-xl ${
                    theme === 'light' ? 'text-slate-900' : 'text-white'
                  }`}>
                    {currentItem.question}
                  </span>
                </div>
              </div>

              {/* پنل دوطرفه مقایسه */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-4 items-stretch flex-1 my-auto">
                
                {/* وضعیت بدون هوشران (سمت چپ) */}
                <div className={`lg:col-span-5 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-amber-400 flex flex-col justify-between space-y-2 sm:space-y-4 shadow-sm min-h-[140px] sm:min-h-[250px] ${
                  theme === 'light'
                    ? 'bg-amber-50/40'
                    : 'bg-slate-900/90'
                }`}>
                  <div className="flex items-center justify-between shrink-0">
                    <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg bg-amber-500/15 text-amber-500 border border-amber-500/30">
                      وضعیت آشنا • بدون هوشران
                    </span>
                    <span className={`text-[10px] sm:text-xs font-semibold ${
                      theme === 'light' ? 'text-slate-700' : 'text-slate-400'
                    }`}>
                      {currentItem.without.tag}
                    </span>
                  </div>

                  <div className="space-y-1 sm:space-y-2.5 flex-1 flex flex-col justify-center">
                    <h4 className={`text-sm sm:text-lg xl:text-xl font-bold ${
                      theme === 'light' ? 'text-slate-900' : 'text-slate-100'
                    }`}>
                      {currentItem.without.headline}
                    </h4>
                    <p className={`text-xs sm:text-base leading-relaxed ${
                      theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'
                    }`}>
                      {currentItem.without.subline}
                    </p>
                  </div>

                  {currentItem.without.flow ? (
                    <div className={`pt-2 sm:pt-3.5 border-t shrink-0 ${
                      theme === 'light' ? 'border-slate-200' : 'border-slate-700/50'
                    }`}>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[10px] sm:text-sm font-mono" dir="ltr">
                        {currentItem.without.flow.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded border ${
                              theme === 'light'
                                ? 'bg-white border-slate-300 text-slate-700'
                                : 'bg-slate-800 border-slate-700 text-slate-200'
                            }`}>
                              {step}
                            </span>
                            {sIdx < currentItem.without.flow!.length - 1 && (
                              <span className="text-slate-400">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="h-1 sm:h-4" />
                  )}
                </div>

                {/* نشانگر میانی VS */}
                <div className="lg:col-span-2 flex items-center justify-center py-0.5 sm:py-2 lg:py-0">
                  <div className="flex lg:flex-col items-center gap-1.5 sm:gap-2 text-center">
                    <div className={`h-px lg:h-10 w-8 sm:w-12 lg:w-px ${
                      theme === 'light' ? 'bg-slate-300' : 'bg-slate-700'
                    }`} />
                    <span className={`w-6 h-6 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center text-[9px] sm:text-xs font-black shadow-md shrink-0 ${
                      theme === 'light' 
                        ? 'bg-white border-slate-300 text-slate-700' 
                        : 'bg-slate-900 border-slate-700 text-slate-300'
                    }`}>
                      VS
                    </span>
                    <div className={`h-px lg:h-10 w-8 sm:w-12 lg:w-px ${
                      theme === 'light' ? 'bg-slate-300' : 'bg-slate-700'
                    }`} />
                  </div>
                </div>

                {/* وضعیت با هوشران (سمت راست) */}
                <div className={`lg:col-span-5 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border flex flex-col justify-between space-y-2 sm:space-y-4 shadow-md min-h-[140px] sm:min-h-[250px] ${
                  theme === 'light'
                    ? 'bg-gradient-to-b from-blue-50/70 to-indigo-50/50 border-blue-300'
                    : 'bg-white border-blue-100'
                }`}>
                  <div className="flex items-center justify-between shrink-0">
                    <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1 sm:gap-1.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600 animate-pulse" />
                      وضعیت مطلوب • با هوشران
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-blue-100">
                      {currentItem.withHoushran.tag}
                    </span>
                  </div>

                  <div className="space-y-1 sm:space-y-2.5 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
                      <h4 className="text-sm sm:text-lg xl:text-xl font-black text-slate-900">
                        {currentItem.withHoushran.headline}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-medium">
                      {currentItem.withHoushran.subline}
                    </p>
                  </div>

                  {currentItem.withHoushran.flow && (
                    <div className="pt-2 sm:pt-3.5 border-t border-slate-200 shrink-0">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[10px] sm:text-sm font-mono" dir="ltr">
                        {currentItem.withHoushran.flow.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-blue-600 text-white font-semibold shadow-xs">
                              {step}
                            </span>
                            {sIdx < currentItem.withHoushran.flow!.length - 1 && (
                              <span className="text-blue-500 font-bold">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentItem.withHoushran.note && (
                    <div className="pt-1.5 sm:pt-2.5 border-t border-slate-200 flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-blue-900 font-semibold bg-blue-50/90 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-blue-100 shrink-0">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{currentItem.withHoushran.note}</span>
                    </div>
                  )}
                  {!currentItem.withHoushran.flow && !currentItem.withHoushran.note && (
                    <div className="h-1 sm:h-4" />
                  )}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* نقاط نشانگر مینیمال زیر کارت */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-3">
          {COMPARISON_PAIRS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === dotIdx 
                  ? 'w-6 sm:w-8 bg-blue-600 shadow-sm' 
                  : theme === 'light' 
                    ? 'w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400' 
                    : 'w-1.5 sm:w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`اسلاید ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* بیانیه نهایی با فاصله تنفس باز */}
      <div className="pt-24 sm:pt-36 pb-16 sm:pb-28 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 px-4 relative">
        <div className="w-20 sm:w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mx-auto mb-4 sm:mb-6" />

        <div className="space-y-3 sm:space-y-5">
          <h3 className={`text-base sm:text-3xl lg:text-4xl font-black leading-snug ${
            theme === 'light' ? 'text-slate-700 font-extrabold' : 'text-slate-400'
          }`}>
            مسئله فقط این نیست که AI را بلد باشید.
          </h3>
          <h3 className={`text-xl sm:text-4xl lg:text-5xl font-black leading-snug ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            مسئله این است که آیا سازمان شما می‌داند{' '}
            <span className={`bg-clip-text text-transparent ${
              theme === 'light'
                ? 'bg-gradient-to-l from-blue-600 via-indigo-600 to-slate-900'
                : 'bg-gradient-to-l from-blue-400 via-indigo-300 to-white'
            }`}>
              چطور با AI بهتر کار کند؟
            </span>
          </h3>
        </div>

        <div className="w-20 sm:w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mx-auto mt-4 sm:mt-6" />
      </div>

    </section>
  );
};