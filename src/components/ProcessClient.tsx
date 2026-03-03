"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Search, Map, Layout, Code, Rocket, LifeBuoy, Plus, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  { step: "01", title: "Technical Discovery", desc: "We analyze your project goals, business logic, and existing technical debt to define a clear path forward.", icon: <Search className="h-6 w-6" /> },
  { step: "02", title: "Strategic Planning", desc: "Architecture modeling and user-flow mapping to ensure the structure supports your conversion objectives.", icon: <Map className="h-6 w-6" /> },
  { step: "03", title: "Interface Design", desc: "High-fidelity, custom design systems that align perfectly with your brand's digital identity.", icon: <Layout className="h-6 w-6" /> },
  { step: "04", title: "Engineering", desc: "Precision coding using Next.js and TypeScript, focused on performance, accessibility, and SEO.", icon: <Code className="h-6 w-6" /> },
  { step: "05", title: "Deployment", desc: "Technical launch sequence including infrastructure setup, CDN configuration, and domain management.", icon: <Rocket className="h-6 w-6" /> },
  { step: "06", title: "Optimization", desc: "Continuous monitoring and iterative improvements to ensure the site remains technically superior.", icon: <LifeBuoy className="h-6 w-6" /> },
];

const faqs = [
  { q: "What is the typical project timeline?", a: "Most studio projects range from 3 to 6 weeks. Simple technical sites take about 2 weeks, while complex multi-page platforms require 4-6 weeks for full engineering and optimization." },
  { q: "What do I need to prepare before starting?", a: "Ideally, your brand guidelines, core messaging, and specific business objectives. We handle the technical heavy lifting, but clear strategic input ensures the best results." },
  { q: "Can I manage the content independently?", a: "Absolutely. We integrate lightweight, high-performance CMS solutions (like Sanity or Payload) that allow you to manage content without touching the codebase." },
  { q: "What does 'Technical SEO' actually mean?", a: "It means building your site with semantic HTML, lightning-fast load times, proper schema markup, and optimized assets. This makes your site inherently 'readable' for search engines." },
  { q: "What is the typical payment structure?", a: "We work on a 50% technical deposit to secure the studio slot and 50% upon project completion. Ongoing support is billed monthly." },
  { q: "Do you work with existing platforms?", a: "We specialize in custom Next.js builds for maximum performance. If you have an existing site, we usually recommend a technical migration to a modern stack for long-term scalability." },
];

export default function ProcessClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-32 bg-slate-50 relative overflow-hidden leading-relaxed">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title="A logic-driven studio workflow" 
            subtitle="I've refined my process to eliminate agency bureaucracy and focus entirely on technical execution and results."
            badge="Studio Process"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-16 mt-20">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="text-[10rem] font-display font-black text-white absolute -top-24 -left-8 text-stroke-slate-200 group-hover:text-indigo-50 transition-colors duration-500 z-0 select-none">
                  {s.step}
                </div>
                <div className="relative z-10 pl-4">
                  <div className="h-16 w-16 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center mb-8 text-indigo-500 group-hover:border-indigo-300 group-hover:bg-indigo-50 group-hover:scale-110 transition-all duration-500">
                    {s.icon}
                  </div>
                  <h4 className="text-xl font-display font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">{s.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-[15px] font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.03)_0%,transparent_100%)] pointer-events-none" />
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-indigo-500/80 relative z-10">Development Roadmap</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-600 font-bold text-[13px] tracking-wide relative z-10">
               <span className="bg-slate-50 px-6 py-2.5 rounded-xl border border-slate-200 shadow-sm">01. Discovery</span>
               <ArrowRight className="h-4 w-4 hidden md:block text-slate-300" />
               <span className="bg-slate-50 px-6 py-2.5 rounded-xl border border-slate-200 shadow-sm">02. Engineering</span>
               <ArrowRight className="h-4 w-4 hidden md:block text-slate-300" />
               <span className="bg-slate-50 px-6 py-2.5 rounded-xl border border-slate-200 shadow-sm">03. Optimization</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,44,212,0.02)_0%,transparent_100%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <SectionHeader 
            title="Strategic FAQs" 
            subtitle="Clarifying the technical and operational aspects of working with an independent studio."
            badge="FAQ"
            centered
          />

          <div className="mt-20 space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  openFaq === i ? 'bg-indigo-50/50 border-indigo-200 shadow-sm' : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-sm'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-display font-bold text-[17px] transition-colors ${openFaq === i ? 'text-indigo-700' : 'text-slate-900'}`}>{faq.q}</span>
                  <div className={`p-2.5 rounded-xl transition-all duration-300 ${openFaq === i ? 'bg-indigo-600 text-white shadow-md rotate-180' : 'bg-slate-50 text-slate-400 rotate-0'}`}>
                    {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-slate-600 leading-relaxed font-medium text-[15px] animate-in fade-in slide-in-from-top-2 duration-300 border-t border-indigo-100 pt-6 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
