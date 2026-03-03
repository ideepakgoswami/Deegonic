import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio | Deegonic - Independent Web Studio",
  description: "A showcase of high-performance digital products and technical websites built for brands globally.",
};

const projects = [
  {
    name: "NexaPay Solutions",
    category: "FinTech Platform",
    problem: "A high-growth startup needing a professional platform to build trust with enterprise partners.",
    solution: "A custom Next.js application with optimized data visualization and institutional-grade security.",
    result: "Secured Series A funding with the new digital presence cited as a key credibility driver.",
    image: "/nexapay-mockup.jpg",
  },
  {
    name: "Urban Health Clinic",
    category: "Medical Services",
    problem: "Patients found it hard to find clinic info and trust the brand due to a fragmented online presence.",
    solution: "A high-performance medical site with integrated booking hooks and technical SEO for competitive markets.",
    result: "40% increase in qualified patient inquiries within 60 days of launch.",
    image: "/health-mockup.jpg",
  },
  {
    name: "Global Logistics Co.",
    category: "Supply Chain",
    problem: "Complex logistics data needed to be presented clearly to global clients.",
    solution: "A precision-engineered dashboard and marketing site with focus on load-speed and mobile delivery.",
    result: "Reduced bounce rate by 55% and improved mobile engagement by 3x.",
    image: "/logistics-mockup.jpg",
  },
  {
    name: "Studio Arc",
    category: "Architecture",
    problem: "Portfolio imagery was slow to load, frustrating potential high-value leads.",
    solution: "Advanced image optimization and pre-rendering techniques for a zero-latency visual experience.",
    result: "Site performance reached 100/100 on Lighthouse with zero accessibility errors.",
    image: "/arc-mockup.jpg",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Selected technical case studies" 
            subtitle="Explore how we apply engineering logic to solve specific business problems."
            badge="Case Studies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            {projects.map((p, i) => (
              <div key={i} className="group flex flex-col">
                <div className="aspect-[16/10] bg-slate-50 rounded-[2rem] overflow-hidden mb-8 relative border border-slate-200 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] group-hover:border-indigo-200 transition-all duration-500">
                  <div className="absolute inset-x-0 top-0 h-10 bg-white/80 backdrop-blur-md border-b border-slate-200/60 flex items-center px-4 gap-1.5 z-10 transition-colors group-hover:bg-white">
                     <div className="h-2.5 w-2.5 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors" />
                     <div className="h-2.5 w-2.5 rounded-full bg-slate-200 group-hover:bg-amber-400 transition-colors" />
                     <div className="h-2.5 w-2.5 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors" />
                  </div>
                  <div className="flex items-center justify-center h-full text-slate-300 font-display text-[10px] sm:text-xs uppercase tracking-[0.4em] px-12 text-center bg-white italic relative overflow-hidden group-hover:bg-indigo-50/30 transition-colors">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.03)_0%,transparent_100%)] pointer-events-none" />
                    {p.name} Engineering
                  </div>
                </div>
                
                <div className="px-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100/50">{p.category}</span>
                    <Link href="#" className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:border-indigo-200 hover:text-indigo-600 transition-all text-slate-400">
                       <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-8 text-slate-900 group-hover:text-indigo-600 transition-colors">{p.name}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 border-t border-slate-100 pt-8">
                    <div>
                      <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-widest mb-3 opacity-60">Objective</h4>
                      <p className="text-[15px] leading-relaxed text-slate-500 font-medium">{p.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-widest mb-3 opacity-60">Outcome</h4>
                      <p className="text-[15px] leading-relaxed text-indigo-600 font-bold">{p.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950 text-white text-center rounded-[3rem] mx-4 md:mx-10 mb-20 overflow-hidden relative shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 leading-tight">Ready to start a high-performance project?</h2>
          <p className="text-lg text-slate-300 mb-14 max-w-2xl mx-auto font-medium">
            Contact the studio to discuss your technical requirements and business objectives.
          </p>
          <Link
            href="/contact"
            className="group bg-white text-slate-950 px-12 py-5 rounded-xl font-bold hover:bg-slate-50 transition-all inline-flex items-center gap-3 shadow-lg active:scale-[0.98]"
          >
            Discuss Your Project
            <ArrowRight className="h-5 w-5 text-indigo-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
