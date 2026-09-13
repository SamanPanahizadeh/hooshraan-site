import React, { useState } from 'react';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface BenchmarkTab {
  id: string;
  label: string;
  title: string;
  description: string;
  items: {
    name: string;
    value: string;
    percentage: number;
    isHoushraan?: boolean;
    note?: string;
  }[];
}

export const BenchmarkChartCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: BenchmarkTab[] = [
    {
      id: 'reporting',
      label: 'تحلیل داده و گزارش‌نویسی',
      title: 'تهیه و بازبینی گزارش‌های جامع مدیریتی',
      description:
        'با پیاده‌سازی متدولوژی پرامپت‌نویسی سیستماتیک هوشران، زمان جمع‌آوری داده، تحلیل الگوها و نگارش گزارش‌های تحلیلی تا ۷۵٪ کاهش یافته و خطاهای تایپی و آماری به حداقل می‌رسد.',
      items: [
        {
          name: 'با مدل اجرایی هوشران (Human + AI)',
          value: '۱.۵ ساعت',
          percentage: 15,
          isHoushraan: true,
          note: 'همراه با اعتبارسنجی شواهد و تأیید انسانی',
        },
        {
          name: 'استفاده غیرتخصصی و فردی از ChatGPT',
          value: '۶.۵ ساعت',
          percentage: 45,
          note: 'نیازمند اصلاحات مکرر، خطر توهم مدل و داده نامعتبر',
        },
        {
          name: 'روش‌های سنتی بدون ابزارهای هوشمند',
          value: '۱۸ ساعت',
          percentage: 95,
          note: 'ورود دستی اطلاعات و اتلاف زمان بالای تیم کارشناسی',
        },
      ],
    },
    {
      id: 'sales',
      label: 'فرآیند فروش B2B',
      title: 'شناخت مشتری سازمانی و آماده‌سازی پیشنهاد تجاری',
      description:
        'تحلیل پیشینه شرکت‌های هدف، شناسایی افراد کلیدی در لینکدین، و تنظیم پروپوزال متناسب با نیاز دقیق سازمان طرف قرارداد در کمترین زمان ممکن.',
      items: [
        {
          name: 'فروش مجهز به دستیار هوشمند هوشران',
          value: '۳۵ دقیقه',
          percentage: 18,
          isHoushraan: true,
          note: 'شخصی‌سازی شده، ذخیره داده در CRM و آماده‌سازی سناریو',
        },
        {
          name: 'جستجوی عمومی در گوگل و ابزارهای متفرقه',
          value: '۳ ساعت',
          percentage: 50,
          note: 'اطلاعات پراکنده و بدون چارچوب یکپارچه فروش',
        },
        {
          name: 'فرآیند مرسوم فروش سازمانی',
          value: '۸ ساعت',
          percentage: 90,
          note: 'پژوهش سنتی دستی و طراحی طولانی‌مدت اسلایدها',
        },
      ],
    },
    {
      id: 'executive',
      label: 'تصمیم‌گیری استراتژیک',
      title: 'ارزیابی سناریوهای رقابتی و تحلیل ریسک بازار',
      description:
        'چارچوب تصمیم‌گیری هوشران به مدیران اجازه می‌دهد شبیه‌سازی تصمیم، ارزیابی نقادانه پیش‌فرض‌ها و تحلیل ریسک را بدون سوگیری ذهنی ارزیابی کنند.',
      items: [
        {
          name: 'چارچوب ارزیابی استراتژیک هوشران',
          value: '۲ ساعت',
          percentage: 20,
          isHoushraan: true,
          note: 'سنجش چندبُعدی با پرامپت‌های تفکر انتقادی',
        },
        {
          name: 'مشاوره‌های عمومی یا پرامپت‌های ساده',
          value: '۷ ساعت',
          percentage: 55,
          note: 'پاسخ‌های کلیشه‌ای و فاقد درک شرایط بومی بازار',
        },
        {
          name: 'جلسات تحلیل سنتی بدون مدل‌سازی',
          value: '۳ روز کاری',
          percentage: 92,
          note: 'وابستگی کامل به نظرات فردی و اتلاف زمان جلسات',
        },
      ],
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <div className="cr-benchmark-card rounded-2xl border border-slate-800/80 bg-[#101625] p-6 sm:p-8 shadow-xl">
      {/* Segmented Controls (Cerebrium Style) */}
      <div className="flex flex-wrap items-center justify-start gap-2 p-1.5 rounded-xl bg-[#0b0f19] border border-slate-800/70 mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === idx
                ? 'bg-[#1e273c] text-white shadow-md border border-slate-700/60'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Title & Description */}
      <div className="mb-8">
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{currentTab.title}</h4>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{currentTab.description}</p>
      </div>

      {/* Range Chart Items */}
      <div className="space-y-6">
        {currentTab.items.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                {item.isHoushraan && (
                  <Sparkles size={15} className="text-cyan-400 flex-shrink-0 animate-pulse" />
                )}
                <span
                  className={`font-medium ${
                    item.isHoushraan ? 'text-cyan-300 font-bold' : 'text-slate-300'
                  }`}
                >
                  {item.name}
                </span>
              </div>
              <span
                className={`font-mono font-bold px-2 py-0.5 rounded text-xs ${
                  item.isHoushraan
                    ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-800/60'
                    : 'text-slate-400 bg-slate-900/60'
                }`}
              >
                {item.value}
              </span>
            </div>

            {/* Horizontal bar track */}
            <div className="h-3 w-full rounded-full bg-[#090d16] p-0.5 overflow-hidden border border-slate-800/40">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  item.isHoushraan
                    ? 'bg-gradient-to-l from-cyan-400 to-teal-400 shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'bg-slate-700'
                }`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>

            {item.note && (
              <p className="text-[11px] text-slate-500 font-light pr-1">{item.note}</p>
            )}
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-cyan-400" />
          <span>سنجش میانگین بر پایه سناریوهای واقعی در شرکت‌های همکار</span>
        </div>
        <span className="text-[11px] text-slate-400">منبع: متدولوژی آموزشی هوشران</span>
      </div>
    </div>
  );
};
