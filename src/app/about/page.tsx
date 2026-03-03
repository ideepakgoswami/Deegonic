import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Music, Code2, Rocket, Heart, Coffee, Globe } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Deegonic - Independent Web Studio",
  description: "Independent web studio based in Delhi, building high-performance digital products for brands globally.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-background overflow-hidden font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] bg-slate-50 rounded-[2.5rem] overflow-hidden relative border border-slate-200 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                 {/* Visual for "The Lead" */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05)_0%,transparent_100%)] pointer-events-none z-0" />
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-950 text-white/5 font-display text-8xl font-black uppercase tracking-tighter leading-none select-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <span className="relative z-10 text-center">Studio <br /> Logic</span>
                 </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-500 to-blue-600 p-8 rounded-2xl shadow-[0_15px_30px_rgba(79,70,229,0.3)] text-white transform rotate-3 group-hover:rotate-6 transition-transform duration-500 z-10 border border-white/10">
                <p className="font-black text-sm uppercase tracking-widest mb-1">Since 2024</p>
                <p className="text-[10.5px] text-indigo-100 font-bold tracking-wider">NEW DELHI, IN</p>
              </div>
            </div>

            <div>
              <SectionHeader 
                title="Behind the studio" 
                subtitle="Independent engineering meets strategic design. We build digital tools that act as brand foundations."
                badge="The Founder"
              />
              
              <div className="space-y-6 text-slate-500 leading-relaxed mb-12 text-sm italic md:text-base">
                <p>
                  I&apos;m Deepak, an independent developer and designer. I founded <strong>Deegonic</strong> to provide 
                  growing brands with the technical precision usually reserved for large-scale agencies—without the overhead or complexity.
                </p>
                <p>
                  My focus is on <strong>Core Web Vitals, clean architecture, and conversion-centric UI</strong>. 
                  Whether you&apos;re a local business in Delhi or a startup in San Francisco, I build websites that perform 
                  at the highest technical standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Code2 className="h-4 w-4 text-indigo-500" /> Stack
                  </h4>
                  <ul className="text-sm space-y-3 font-medium text-slate-500">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Next.js / TypeScript</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Tailwind CSS / V4</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Framer Motion</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Node.js / API Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Rocket className="h-4 w-4 text-blue-500" /> Strategy
                  </h4>
                  <ul className="text-sm space-y-3 font-medium text-slate-500">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-200" /> Technical SEO</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-200" /> Conversion Engineering</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-200" /> Performance Audits</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-200" /> Scalable Systems</li>
                  </ul>
                </div>
              </div>

              <div className="p-10 bg-indigo-50/50 rounded-2xl border border-indigo-100 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 text-indigo-900">
                    <Music className="h-32 w-32 -mt-10 -mr-10" />
                 </div>
                 <h4 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-indigo-500" /> Human Focus
                 </h4>
                 <p className="text-[15px] text-slate-600 leading-relaxed font-medium relative z-10">
                   Great engineering is about solving human problems. I work directly with founders to ensure their 
                   digital presence aligns perfectly with their business objectives, regardless of their location.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,44,212,0.02)_0%,transparent_100%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader 
            title="Beyond the code" 
            subtitle="Working with Deegonic means partnering with a technical expert who is invested in your long-term success."
            centered
            badge="Partnership"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { title: "Transparent Collaboration", desc: "Direct access to the lead developer. No project managers, no delays, and total technical clarity.", icon: <Coffee className="h-8 w-8 text-indigo-500" /> },
              { title: "Iterative Support", desc: "Digital products need to evolve. I provide ongoing technical support to ensure your site stays ahead.", icon: <Heart className="h-8 w-8 text-blue-500" /> },
              { title: "Global Standard", desc: "Global design principles and engineering standards that work for businesses in any market.", icon: <Globe className="h-8 w-8 text-indigo-400" /> }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-indigo-200 hover:shadow-[0_15px_30px_-15px_rgba(79,70,229,0.15)] transition-all duration-500 group">
                <div className="mb-8 group-hover:scale-110 transition-transform bg-white shadow-sm w-fit mx-auto p-4 rounded-2xl border border-slate-100 group-hover:bg-indigo-50 duration-300">{item.icon}</div>
                <h4 className="font-display font-bold text-xl mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
