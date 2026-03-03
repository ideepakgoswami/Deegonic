import Link from "next/link";
import { Mail, MapPin, Instagram, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-primary tracking-tight mb-6 block"
            >
              DEEGONIC<span className="text-accent">.</span>
            </Link>
            <p className="text-slate-600 text-pretty max-w-sm mb-8 leading-relaxed text-base font-medium">
              A modern web studio building custom websites for growing
              businesses.
            </p>
            <div className="flex space-x-3 opacity-80 hover:opacity-100 transition-opacity">
              <a
                href="#"
                className="p-2.5 bg-slate-50 border border-border rounded-lg hover:bg-primary/5 transition-colors text-muted hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-50 border border-border rounded-lg hover:bg-primary/5 transition-colors text-muted hover:text-primary"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-8">
              Studio
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-slate-600 hover:text-primary transition-colors text-[15px] font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-slate-600 hover:text-primary transition-colors text-[15px] font-medium"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-slate-600 hover:text-primary transition-colors text-[15px] font-medium"
                >
                  How we work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-primary transition-colors text-[15px] font-medium"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-8">
              Connect
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center space-x-3 text-[15px] text-slate-600 font-medium">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@deegonic.com</span>
              </li>
              <li className="flex items-center space-x-3 text-[15px] text-slate-600 font-medium">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <a
                  href="https://wa.me/919625454463"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  +91 9625454463
                </a>
              </li>
              <li className="flex items-center space-x-3 text-[15px] text-slate-600 font-medium italic">
                <MapPin className="h-4 w-4 text-primary" />
                <span>New Delhi, India </span>
              </li>
              <li className="pt-4">
                <Link
                  href="/contact"
                  className="text-primary font-bold text-xs uppercase tracking-wider border-b-2 border-primary/10 hover:border-primary transition-all pb-1"
                >
                  Start a project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-bold uppercase tracking-wide text-slate-500">
          <p>© {new Date().getFullYear()} Deegonic. Built with precision.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
