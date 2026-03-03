"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Mail, MessageCircle, Send, Clock, Globe } from "lucide-react";
import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "Website Design & Development",
    budget: "₹25,000 - ₹50,000",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! I will get back to you within 24 hours.");
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-slate-50 overflow-hidden relative font-medium">
        <div className="absolute top-0 right-0 p-24 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader 
                title="Discuss your digital project." 
                subtitle="Provide some initial context about your brand and objectives. I respond to all inquiries within 24 hours."
                badge="Inquiry"
              />

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="h-14 w-14 bg-white shadow-sm border border-slate-200 text-indigo-600 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-200 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] text-slate-500 uppercase tracking-widest mb-1">Technical Support</h4>
                    <p className="text-slate-900 font-bold group-hover:text-indigo-600 transition-colors">hello@deegonic.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="h-14 w-14 bg-white shadow-sm border border-slate-200 text-green-600 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-green-50 group-hover:border-green-200 shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] text-slate-500 uppercase tracking-widest mb-1">Quick Consultation</h4>
                    <a href="https://wa.me/919999999999" target="_blank" className="text-slate-900 font-bold hover:text-green-600 transition-colors">
                      +91 99999 XXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="h-14 w-14 bg-white shadow-sm border border-slate-200 text-blue-600 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] text-slate-500 uppercase tracking-widest mb-1">Studio Hours</h4>
                    <p className="text-slate-900 font-bold group-hover:text-blue-600 transition-colors">09:00 — 18:00 (IST)</p>
                  </div>
                </div>

                <div className="p-10 bg-white border border-slate-200 rounded-[2rem] shadow-sm mt-12 hover:shadow-md hover:border-indigo-200 transition-all duration-500">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.25em] mb-8 text-indigo-500 pb-4 border-b border-slate-100">Studio Engagement</h4>
                  <div className="space-y-10">
                    {[
                      { title: "Technical Discovery", desc: "A brief technical audit of your current digital presence and conversion flow.", icon: <Globe className="h-4 w-4" /> },
                      { title: "Precise Estimations", desc: "Granular breakdown of project phases, timelines, and architectural choices.", icon: <Send className="h-4 w-4" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5 group">
                        <div className="h-8 w-8 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-[11px] font-black shrink-0 border border-indigo-100/50 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold mb-1.5 text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                          <p className="text-slate-500 text-[13px] leading-relaxed max-w-[280px] font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] border border-indigo-100/50 mt-8 lg:mt-0 relative group">
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-indigo-500 to-blue-600 p-4 rounded-xl text-white shadow-lg -rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
                 <Send className="h-6 w-6" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px]">
                  <div className="space-y-2.5">
                    <label className="font-bold text-slate-500 uppercase tracking-widest text-[10px] ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Rahul Dogra"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1rem] focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium" 
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="font-bold text-slate-500 uppercase tracking-widest text-[10px] ml-1">Company / Brand</label>
                    <input 
                      type="text" 
                      placeholder="e.g. NexaPay"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1rem] focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px]">
                  <div className="space-y-2.5">
                    <label className="font-bold text-slate-500 uppercase tracking-widest text-[10px] ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="name@company.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1rem] focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="font-bold text-slate-500 uppercase tracking-widest text-[10px] ml-1">Phone / WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 99XXX XXXXX"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1rem] focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2.5 text-[13px]">
                  <label className="font-bold text-slate-500 uppercase tracking-widest text-[10px] ml-1">Service Requirement</label>
                  <select 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1rem] focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white outline-none transition-all appearance-none cursor-pointer font-medium"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    defaultValue="Website Design & Development"
                  >
                    <option>Technical Landing Page</option>
                    <option>Website Design & Development</option>
                    <option>Technical SEO & Redesign</option>
                    <option>Ongoing Engineering Support</option>
                  </select>
                </div>

                <div className="space-y-2.5 text-[13px]">
                  <label className="font-bold text-slate-500 uppercase tracking-widest text-[10px] ml-1">Strategic Budget</label>
                  <select 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1rem] focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white outline-none transition-all appearance-none cursor-pointer font-medium"
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    defaultValue="₹25,000 - ₹50,000"
                  >
                    <option>₹15,000 - ₹25,000</option>
                    <option>₹25,000 - ₹50,000</option>
                    <option>₹50,000 - ₹1,00,000</option>
                    <option>₹1,00,000+</option>
                  </select>
                </div>

                <div className="space-y-2.5 text-[13px]">
                  <label className="font-bold text-slate-500 uppercase tracking-widest text-[10px] ml-1">Message / Context</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe your business objectives..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-[1.5rem] focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 focus:bg-white outline-none transition-all placeholder:text-slate-400 resize-none font-medium"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-950 text-white py-5 rounded-[1rem] font-bold text-[15px] hover:bg-slate-800 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-3 mt-4"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
