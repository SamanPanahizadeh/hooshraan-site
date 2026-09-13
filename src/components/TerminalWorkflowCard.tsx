import React, { useState } from 'react';
import { Terminal, Check, Play, RotateCcw } from 'lucide-react';

export const TerminalWorkflowCard: React.FC = () => {
  const [activeStep, setActiveStep] = useState(4);

  const steps = [
    {
      cmd: 'houshraan pipeline --dept corporate-strategy --mode cot',
      type: 'input',
    },
    {
      text: '✓ بارگذاری بستر دانشی و مستندات محرمانه سازمانی',
      tag: 'آماده‌سازی داده',
      status: 'success',
    },
    {
      text: '✓ تدوین پرامپت سیستماتیک با مهندسی زمینه (Context Engineering)',
      tag: 'چارچوب SCOOV',
      status: 'success',
    },
    {
      text: '✓ اجرای راستی‌آزمایی و اعتبارسنجی مستقل انسانی (Human-in-the-loop)',
      tag: 'کنترل کیفیت',
      status: 'success',
    },
    {
      text: '✓ خروجی نهایی آماده بهره‌برداری عملیاتی در فرآیند سازمان',
      tag: 'تکمیل فرآیند',
      status: 'highlight',
    },
  ];

  return (
    <div className="cr-terminal-card rounded-2xl border border-slate-800/80 bg-[#0c101b] overflow-hidden shadow-2xl font-mono text-left" dir="ltr">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#080c15] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-slate-400 font-sans ml-3 flex items-center gap-1.5">
            <Terminal size={13} className="text-cyan-400" />
            <span>houshraan-agent-pipeline.sh</span>
          </span>
        </div>
        <span className="text-[11px] text-slate-400 font-sans">Human + AI Execution</span>
      </div>

      {/* Terminal Body */}
      <div className="p-6 space-y-4 text-xs sm:text-sm">
        {/* Command Line */}
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-pink-500 font-bold">$</span>
          <span className="text-cyan-300 font-semibold">{steps[0].cmd}</span>
        </div>

        {/* Separator line */}
        <div className="h-[1px] bg-slate-800/70 my-2" />

        {/* Pipeline Steps in Persian/English clean presentation */}
        <div className="space-y-3 font-sans" dir="rtl">
          {steps.slice(1).map((step, idx) => (
            <div
              key={idx}
              className={`flex items-start justify-between gap-3 p-2.5 rounded-lg border transition-all ${
                step.status === 'highlight'
                  ? 'bg-cyan-950/25 border-cyan-500/30 text-cyan-200'
                  : 'bg-slate-900/40 border-slate-800/60 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Check
                  size={15}
                  className={step.status === 'highlight' ? 'text-cyan-400' : 'text-emerald-400'}
                />
                <span className="text-xs sm:text-sm">{step.text}</span>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded font-mono flex-shrink-0 ${
                  step.status === 'highlight'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-800 text-slate-400'
                }`}
                dir="ltr"
              >
                {step.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Status Metrics footer */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <span>
              STATUS: <strong className="text-emerald-400 font-bold">READY</strong>
            </span>
            <span>
              LATENCY: <strong className="text-cyan-300">0.8s</strong>
            </span>
            <span>
              ACCURACY: <strong className="text-white">99.2%</strong>
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-sans" dir="rtl">
            مبتنی بر استانداردهای امنیت داده
          </span>
        </div>
      </div>
    </div>
  );
};
