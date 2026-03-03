import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Check, ArrowRight, Smartphone, Search, MessageSquare, Edit3, Shield, Rocket, Code2, Cpu } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services | Deegonic - Independent Web Studio",
  description: "High-performance digital products for growing brands. Custom Design, Development, and Technical Strategy.",
};

const services = [
  {
    title: "One-page Technical Site",
    for: "For: Rapid launches, landing pages, and professional digital cards.",
    price: "Starts at ₹14,999",
    features: [
      "Custom responsive interface",
      "Essential brand narrative",
      "WhatsApp & Lead integration",
      "Performance optimization",
      "One-click hosting setup",
    ],
    icon: <Cpu className="h-6 w-6" />,
    accent: "bg-blue-50 text-blue-600",
  },
  {
    title: "Website Design & Development",
    for: "For: Scaling brands needing a custom multi-page digital platform.",
    price: "Starts at ₹34,999",
    features: [
      "Up to 5 custom-engineered pages",
      "Component-driven design system",
      "Advanced technical SEO architecture",
      "Dynamic project/service showcase",
      "CMS integration available",
      "Analytics & Tracking setup",
    ],
    icon: <Code2 className="h-6 w-6" />,
    accent: "bg-indigo-50 text-primary",
    featured: true,
  },
  {
    title: "Redesign & Optimization",
    for: "For: Established businesses outgrowing their current tech stack.",
    price: "Starts at ₹19,999",
    features: [
      "Full UI/UX technical overhaul",
      "Core Web Vitals remediation",
      "Mobile-first architecture",
      "Conversion flow engineering",
      "Database & System upgrades",
    ],
    icon: <Rocket className="h-6 w-6" />,
    accent: "bg-orange-50 text-accent",
  },
  {
    title: "Technical Support & Growth",
    for: "For: Dedicated technical partnership for long-term scalability.",
    price: "Starts at ₹4,999/mo",
    features: [
      "Weekly performance monitoring",
      "Security & Dependecy audits",
      "Continuous UI/UX iterations",
      "Priority technical consulting",
      "Scalable infrastructure management",
    ],
    icon: <Shield className="h-6 w-6" />,
    accent: "bg-green-50 text-green-600",
  },
];

const included = [
  { title: "Mobile-First Design", icon: <Smartphone className="h-6 w-6" />, desc: "High-precision interfaces that excel on any device or screen size." },
  { title: "Technical SEO", icon: <Search className="h-6 w-6" />, desc: "Semantic HTML and meta-architecture for superior search engine crawling." },
  { title: "Global Scaling", icon: <MessageSquare className="h-6 w-6" />, desc: "Integrated communication channels for both local and global reach." },
  { title: "Precise Engineering", icon: <Edit3 className="h-6 w-6" />, desc: "Clean, type-safe code using the most modern web technologies." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title="Digital solutions with precision" 
            subtitle="We build more than just websites. We build technical foundations that allow brands to compete on a global scale."
            badge="Studio Capabilities"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {services.map((s, i) => (
              <div 
                key={i} 
                id={s.title.toLowerCase().replace(/\s+/g, '-')}
                className={`relative flex flex-col p-8 sm:p-10 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  s.featured 
                    ? 'bg-slate-950 border-indigo-500/30 shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] hover:-translate-y-1 text-white z-10' 
                    : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1'
                }`}
              >
                {s.featured && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
                )}
                {s.featured && (
                  <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full w-fit mb-8 shadow-sm relative z-10">
                    Most Selected
                  </span>
                )}
                
                <div className={`p-4 rounded-2xl w-fit mb-8 relative z-10 ${
                  s.featured ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-50 text-indigo-500 border border-slate-100'
                }`}>
                  {s.icon}
                </div>
                
                <h3 className={`text-2xl font-display font-bold mb-3 relative z-10 ${s.featured ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
                <p className={`text-xs font-bold uppercase tracking-wide mb-8 leading-relaxed relative z-10 ${s.featured ? 'text-indigo-200/70' : 'text-slate-400'}`}>{s.for}</p>
                
                <div className={`text-xl font-bold mb-8 pb-8 border-b relative z-10 ${s.featured ? 'text-white border-white/10' : 'text-slate-900 border-slate-100'}`}>
                  {s.price}
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                  {s.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm font-medium ${s.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${s.featured ? 'text-indigo-400' : 'text-indigo-500'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={`w-full py-4 rounded-xl text-center font-bold text-[15px] transition-all relative z-10 active:scale-[0.98] flex items-center justify-center gap-2 ${
                    s.featured 
                      ? 'bg-white text-slate-950 hover:bg-indigo-50 shadow-md hover:shadow-lg' 
                      : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,44,212,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title="Studio standards" 
            subtitle="We don't cut corners. Every project originates from a foundation of engineering excellence."
            badge="Infrastructure"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            {included.map((item, i) => (
              <div key={i} className="text-center group p-8 rounded-[2rem] hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-500">
                <div className="h-16 w-16 bg-white shadow-sm border border-slate-100 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:shadow-md group-hover:border-indigo-100 group-hover:bg-indigo-50/50 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-xl mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to grow?</h2>
          <p className="text-[19px] text-slate-300 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
            Every business has a specific technical objective. Let's find the most efficient architectural path for your growth.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-xl text-lg font-bold hover:bg-slate-100 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] active:scale-[0.98]"
          >
            Start a Conversation
            <ArrowRight className="h-5 w-5 text-indigo-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
