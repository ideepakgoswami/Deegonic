import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import HeroVisual from "@/components/hero/HeroVisual";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Rocket,
  Shield,
  Star,
  Calendar,
  Globe,
  Code2,
  Mail,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-[120px] lg:pt-[72px] pb-20 lg:pb-0 flex items-center overflow-hidden bg-white">
        {/* Architectural Guide Lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center z-0">
          <div className="w-full max-w-7xl h-full border-x border-slate-900/[0.04] grid grid-cols-4 lg:grid-cols-12">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`border-r border-slate-900/[0.04] ${i > 2 && i < 11 ? "hidden lg:block" : ""} ${i === 11 ? "hidden lg:block border-none" : ""}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Dynamic Soft Radial Glows */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/[0.05] rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-center lg:text-left">
            <div className="lg:col-span-7 z-10 order-1 lg:order-1">
              {/* Refined Studio Tag */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="w-12 h-px bg-indigo-500/30 hidden sm:block"></div>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50 shadow-sm backdrop-blur-sm">
                  Strategy-led Web Studio — Delhi / Global
                </span>
              </div>

              {/* Headline with dynamic contrast */}
              <h1 className="text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.25rem] font-display font-extrabold text-slate-950 mb-6 leading-[1.1] tracking-tight w-full mx-auto lg:mx-0">
                Websites engineered for{" "}
                <br className="hidden md:block lg:hidden xl:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  serious growth.
                </span>
              </h1>

              <p className="text-[17px] md:text-[19px] text-slate-500 mb-10 max-w-[580px] mx-auto lg:mx-0 leading-[1.6] lg:leading-[1.65] font-medium">
                We partner with ambitious brands to build custom web platforms
                that drive leads, scale operations, and increase revenue.
              </p>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="group bg-slate-900 text-white px-10 py-5 rounded-lg text-[16px] font-bold hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    Start a project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/work"
                    className="bg-white border-2 border-slate-200/80 text-slate-700 px-10 py-5 rounded-lg text-[16px] font-bold hover:bg-slate-50 hover:border-slate-300 transition-all text-center active:scale-[0.98] shadow-sm"
                  >
                    View work
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 self-center lg:translate-x-4 z-10 order-2 lg:order-2 ">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Editorial Layout */}
      <section className="py-32 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column: Positioning */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                  <div className="w-12 h-px bg-indigo-500/30 hidden sm:block"></div>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-indigo-600 bg-indigo-100/50 px-3 py-1 rounded-full border border-indigo-200/50 shadow-sm backdrop-blur-sm">
                    Our Expertise
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 mb-8 leading-[1.1]">
                  Focused services. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-400">Clear outcomes.</span>
                </h2>
                <p className="text-[18px] text-slate-600 leading-[1.65] font-medium mb-12 max-w-md">
                  We don't offer everything. We specialize in building strategic
                  digital platforms that drive conversion, authority, and scale.
                </p>
                <Link
                  href="/contact"
                  className="group bg-slate-900 text-white px-10 py-5 rounded-lg text-[16px] font-bold hover:bg-indigo-600 transition-all inline-flex items-center justify-center gap-3 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Discuss your project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Numbered Services */}
            <div className="lg:col-span-7">
              <div className="flex flex-col">
                {[
                  {
                    num: "01",
                    title: "Custom Platform Architecture",
                    desc: "Built for ambitious brands needing a digital foundation that commands authority. We architect custom platforms from the ground up to convert traffic into measurable pipeline.",
                    bullets: [
                      "Conversion-led design",
                      "Scalable infrastructure",
                      "Sub-second load times",
                    ],
                  },
                  {
                    num: "02",
                    title: "Strategic Redesign",
                    desc: "For established businesses losing deals to poorly structured sites. We diagnose friction points and rebuild your entire user journey to instantly increase trust and conversions.",
                    bullets: [
                      "UX/UI overhaul",
                      "Technical SEO fix",
                      "Journey mapping",
                    ],
                  },
                  {
                    num: "03",
                    title: "High-Converting Landing Pages",
                    desc: "For targeted campaigns that need to perform immediately. We build hyper-focused pages stripped of distractions, designed solely to drive aggressive lead generation and sales.",
                    bullets: [
                      "Direct response copy",
                      "A/B test ready",
                      "Campaign specific",
                    ],
                  },
                  {
                    num: "04",
                    title: "Technical Growth Partner",
                    desc: "A website is a living asset. We act as your retained technical team, continuously monitoring performance, pushing structural updates, and ensuring zero downtime as you scale.",
                    bullets: [
                      "Proactive monitoring",
                      "Priority execution",
                      "Iterative scaling",
                    ],
                  },
                ].map((service, idx) => (
                  <div
                    key={idx}
                    className={`group border p-8 sm:p-10 rounded-2xl transition-all duration-300 mb-6 last:mb-0 ${
                      idx === 0
                        ? "bg-slate-950 border-indigo-500/30 shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)] hover:-translate-y-1 text-white relative overflow-hidden"
                        : "bg-white border-slate-200 shadow-sm hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:border-indigo-200 hover:-translate-y-1 text-slate-900"
                    }`}
                  >
                    {idx === 0 && <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[60px] pointer-events-none" />}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start relative z-10">
                      <span
                        className={`text-4xl font-display font-bold shrink-0 transition-colors ${idx === 0 ? "text-indigo-400 group-hover:text-indigo-300" : "text-slate-300 group-hover:text-indigo-500"}`}
                      >
                        {service.num}
                      </span>
                      <div>
                        <h3
                          className={`text-[24px] font-display font-bold mb-3 ${idx === 0 ? "text-white" : "text-slate-900"}`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`text-[17px] leading-[1.6] font-medium max-w-lg mb-6 ${idx === 0 ? "text-slate-400" : "text-slate-600"}`}
                        >
                          {service.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.bullets.map((bullet, i) => (
                            <span
                              key={i}
                              className={`text-[13px] font-bold px-3 py-1.5 rounded-lg border ${
                                idx === 0
                                  ? "bg-slate-900/50 text-slate-300 border-slate-800"
                                  : "bg-slate-100 text-slate-600 border-slate-200/60"
                              }`}
                            >
                              {bullet}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work - Editorial Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center justify-start gap-4 mb-6">
                <div className="w-12 h-px bg-indigo-500/30 hidden sm:block"></div>
                <span className="text-[10.5px] font-bold uppercase tracking-[0.25em] text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50 shadow-sm backdrop-blur-sm">
                  Selected Work
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-slate-900 mb-6 leading-[1.1]">
                Work that delivered.
              </h2>
              <p className="text-[18px] text-slate-500 leading-[1.65] font-medium">
                Built for growth-focused brands that needed clarity and
                measurable results.
              </p>
            </div>
            <Link
              href="/work"
              className="group mb-2 bg-white border-2 border-slate-200/80 text-slate-900 px-8 py-4 rounded-lg text-[15px] font-bold hover:bg-slate-50 hover:border-indigo-200 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-3 shadow-sm active:scale-[0.98]"
            >
              Explore all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-12 lg:gap-16">
            {[
              {
                num: "01",
                name: "Global Logistics Co.",
                context: "Enterprise Shipping & Supply Chain",
                result:
                  "Reduced booking drop-offs by 40% with a streamlined custom portal.",
                tags: ["Enterprise", "UX/UI Redesign", "Next.js Platform"],
              },
              {
                num: "02",
                name: "FinTech Platform",
                context: "B2B Financial Services & Lending",
                result:
                  "Increased qualified lead engagement by 24% in the first quarter.",
                tags: ["Startup", "Conversion Strategy", "Landing Pages"],
              },
            ].map((w, idx) => (
              <div
                key={idx}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center border-b border-slate-200/60 pb-12 lg:pb-16 last:border-0 last:pb-0"
              >
                <div className="lg:w-5/12 flex flex-col lg:pr-8">
                  <span className="text-5xl md:text-6xl font-display font-bold text-slate-200 mb-8 block group-hover:text-primary transition-colors duration-500">
                    {w.num}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {w.name}
                  </h3>

                  <div className="flex flex-col gap-5 mb-8">
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Context
                      </p>
                      <p className="text-slate-600 font-medium text-[16px]">
                        {w.context}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Impact
                      </p>
                      <p className="text-slate-800 font-semibold text-[16px]">
                        {w.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {w.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[12px] font-bold text-slate-500 bg-white px-3 py-1.5 rounded-md border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-7/12 w-full">
                  <div
                    className="aspect-[4/3] bg-white rounded-xl overflow-hidden relative border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 transition-all duration-500"
                    role="img"
                    aria-label={`Mockup for ${w.name}`}
                  >
                    {/* Minimal Browser Header */}
                    <div className="absolute inset-x-0 top-0 h-10 bg-slate-50/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 gap-2 z-10">
                      <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                      </div>
                    </div>

                    {/* Inner Mockup Visual */}
                    <div className="flex items-center justify-center h-full pt-10 px-6 pb-0">
                      <div className="w-full h-full bg-slate-50 rounded-t-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center text-slate-400 font-display text-[12px] uppercase tracking-widest font-bold overflow-hidden relative">
                        {/* Subtle placeholder content for depth */}
                        <div className="absolute top-8 left-8 right-8 h-4 bg-slate-200/50 rounded-sm w-1/3"></div>
                        <div className="absolute top-16 left-8 right-8 h-32 bg-white border border-slate-100 rounded-md shadow-sm"></div>
                        <span className="opacity-50 z-10">Project Mockup</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-28 md:mt-32 pt-16 md:pt-20 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Need a strategic assessment?
              </h3>
              <p className="text-[17px] text-slate-500 font-medium leading-[1.6] mb-0">
                Stop guessing what your website needs. We'll audit your current
                setup and provide a clear, actionable roadmap for growth.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="group bg-slate-900 text-white px-8 py-4 rounded-lg text-[15px] font-bold hover:bg-indigo-600 transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center gap-2"
              >
                Request an audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative border-y border-slate-900">
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-500/5 opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="w-10 h-px bg-indigo-500/50 hidden sm:block"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-400">
                  The Deegonic Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold mb-12 leading-tight text-white">
                The Deegonic Standard. <br /> No compromises.
              </h2>
              <div className="space-y-10">
                {[
                  {
                    t: "Strategic execution.",
                    d: "We start with business goals, not templates. Every technical decision maps to measurable growth.",
                  },
                  {
                    t: "Engineered to scale.",
                    d: "Clean architecture designed for the long term. Your platform won't break when your traffic spikes.",
                  },
                  {
                    t: "Direct partnership.",
                    d: "No account managers. You work directly with the senior developer building your platform.",
                  },
                  {
                    t: "Conversion-focused design.",
                    d: "Aesthetics are important, but usability drives revenue. We design interfaces that actually convert.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 transition-transform group-hover:scale-110 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[17px] mb-2 text-white/95">
                        {item.t}
                      </h4>
                      <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm font-medium">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 max-w-115 mx-auto lg:ml-auto lg:mr-0">
              {/* Testimonial 1 */}
              <div className="bg-slate-900/40 border border-slate-800 p-12 sm:p-14 rounded-2xl backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors" />
                <div className="flex gap-1 text-indigo-400 mb-8 opacity-60">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-indigo-400 border-none"
                    />
                  ))}
                </div>
                <p className="text-[18px] leading-[1.7] text-slate-300 mb-10 font-medium relative z-10">
                  &quot;Deegonic completely transformed our enterprise portal.
                  We struggled with a 40% drop-off rate on our booking flow.
                  After the strategic rebuild, our conversions skyrocketed and
                  user complaints dropped to zero. The engineering quality is
                  simply unmatched.&quot;
                </p>
                <div className="flex items-center gap-4 border-t border-slate-800 pt-8 relative z-10">
                  <div
                    className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-300 text-xs border border-indigo-500/30"
                    role="img"
                    aria-label="Amara Khan avatar"
                  >
                    AK
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-200">
                      Amara Khan
                    </p>
                    <p className="text-[13px] font-medium text-slate-500">
                      Founder, NexaPay
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-slate-900/40 border border-slate-800 p-12 sm:p-14 rounded-2xl backdrop-blur-md relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-blue-500/20 transition-colors" />
                <div className="flex gap-1 text-blue-400 mb-8 opacity-60">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-blue-400 border-none"
                    />
                  ))}
                </div>
                <p className="text-[18px] leading-[1.7] text-slate-300 mb-10 font-medium relative z-10">
                  &quot;We needed a web platform that reflected our market
                  position. Deegonic delivered a blazing-fast, secure site that
                  increased our inbound qualified leads by 24% in the first
                  quarter alone. Highly strategic, zero fluff.&quot;
                </p>
                <div className="flex items-center gap-4 border-t border-slate-800 pt-8 relative z-10">
                  <div
                    className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-300 text-xs border border-blue-500/30"
                    role="img"
                    aria-label="Rahul Dogra avatar"
                  >
                    RD
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-200">
                      Rahul Dogra
                    </p>
                    <p className="text-[13px] font-medium text-slate-500">
                      MD, Urban Health
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[2.5rem] py-24 px-8 md:px-16 text-center text-white relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6 tracking-tight">
                Ready to build a website that performs?
              </h2>
              <p className="text-[19px] text-slate-300 mb-10 max-w-3xl mx-auto leading-[1.6] font-medium">
                Free consultation to discuss your project and see if we&apos;re
                a good fit. No pressure, no sales pitch — just an honest
                conversation about your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="mailto:hello@deegonic.com"
                  className="group bg-white text-slate-950 px-8 py-[18px] rounded-lg text-[16px] font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <Mail className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                  Email me
                </a>
                <Link
                  href="/contact"
                  className="group bg-slate-900/50 backdrop-blur-md border border-slate-700/50 text-white px-8 py-[18px] rounded-lg text-[16px] font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  Schedule a call
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[14px] text-slate-400 font-medium">
                <span className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> Response within 24 hours
                </span>
                <span className="hidden md:inline-block w-1 h-1 rounded-full bg-slate-600"></span>
                <span className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> Free initial consultation
                </span>
                <span className="hidden md:inline-block w-1 h-1 rounded-full bg-slate-600"></span>
                <span className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> Clear, honest pricing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
