"use client";

import { motion } from "framer-motion";
import { Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[450px] lg:h-[480px] xl:h-[550px] flex items-center justify-center">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Main Minimal Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[90%] lg:w-[95%] max-w-[420px] bg-slate-50 border border-slate-200/60 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.15)] rounded-xl overflow-hidden flex flex-col ring-1 ring-slate-900/5 group"
      >
        {/* Browser Top Bar */}
        <div className="h-[42px] bg-white border-b border-slate-100 flex items-center px-4 justify-between">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-amber-400 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors" />
          </div>
          <div className="w-1/2 max-w-[200px] h-5 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center">
            <div className="w-1/2 h-1.5 bg-slate-200 rounded-full opacity-50" />
          </div>
          <div className="w-8 h-4" /> {/* Spacer */}
        </div>

        {/* Clean UI Content */}
        <div className="p-8 h-[340px] flex flex-col bg-white overflow-hidden relative">
          {/* Subtle grid background inside mockup */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="space-y-3 w-2/3">
              <div className="h-7 w-3/4 bg-slate-100 rounded-md overflow-hidden relative">
                 <motion.div 
                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full"
                   animate={{ translateX: ['-100%', '200%'] }}
                   transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
                 />
              </div>
              <div className="h-3 w-full bg-slate-50 rounded-sm" />
              <div className="h-3 w-5/6 bg-slate-50 rounded-sm" />
            </div>
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100/50 shadow-sm">
              <Zap className="w-6 h-6 text-indigo-500" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
            <div className="h-28 bg-gradient-to-br from-indigo-50/50 to-white border border-indigo-100/50 rounded-lg shadow-sm flex flex-col justify-between p-3">
               <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
               </div>
               <div className="space-y-1.5 mt-auto">
                 <div className="h-2 w-1/2 bg-indigo-200/50 rounded-sm" />
                 <div className="h-1.5 w-3/4 bg-slate-100 rounded-sm" />
               </div>
            </div>
            <div className="h-28 bg-gradient-to-br from-blue-50/50 to-white border border-blue-100/50 rounded-lg shadow-sm flex flex-col justify-between p-3">
               <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
               </div>
               <div className="space-y-1.5 mt-auto">
                 <div className="h-2 w-1/2 bg-blue-200/50 rounded-sm" />
                 <div className="h-1.5 w-3/4 bg-slate-100 rounded-sm" />
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Lighthouse Score */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 top-[20%] left-0 lg:left-2 bg-white p-4 rounded-xl border border-slate-200/60 shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center gap-3.5 w-[210px] backdrop-blur-md"
      >
        <div className="w-10 h-10 relative flex items-center justify-center bg-white rounded-full">
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 40 40"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="3"
            />
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="113"
              strokeDashoffset="11"
              strokeLinecap="round"
              className="text-emerald-500"
            />
          </svg>
          <span className="text-[12px] font-bold text-slate-800 relative z-10">
            99
          </span>
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
            Performance
          </p>
          <p className="text-[12px] font-semibold text-emerald-600">
            Lightning Fast
          </p>
        </div>
      </motion.div>

      {/* Floating Card 2: Massive Conversion Uplift (DOMINANT ELEMENT) */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-30 bottom-[5%] lg:bottom-[8%] right-2 lg:right-4 xl:right-0 bg-slate-950 p-8 rounded-xl border border-slate-800 shadow-[0_40px_80px_rgba(0,0,0,0.5)] w-[250px] lg:w-[300px] rotate-[1.5deg]"
      >
        <div className="flex items-center justify-between mb-6">
          <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
            Pipeline Growth
          </p>
          <div className="bg-emerald-500/20 text-emerald-400 rounded-full p-2">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        <p className="text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight mb-2">
          +42%
        </p>
        <p className="text-[14px] text-slate-400 font-medium">
          Average conversion lift
        </p>
      </motion.div>

      {/* Floating Card 3: Quality Check (Reduced/Moved) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 top-[15%] right-2 lg:right-6 bg-white backdrop-blur-md text-slate-900 py-3 px-5 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.1)] flex items-center gap-2.5 border border-slate-200"
      >
        <CheckCircle2 className="w-4 h-4 text-primary" />
        <p className="text-[13px] font-bold tracking-wide">Enterprise Grade</p>
      </motion.div>
    </div>
  );
}