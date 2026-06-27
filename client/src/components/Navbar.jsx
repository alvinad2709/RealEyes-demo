import { Shield, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-deepBase/90 backdrop-blur-md sticky top-0 z-50 border-b border-deepBorder">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="p-2 border border-deepRed/30 rounded-lg group-hover:glow-red transition-all duration-300">
          <Shield className="w-5 h-5 text-deepRed" />
        </div>
        <span className="font-display font-bold text-xl tracking-wider uppercase text-white group-hover:glow-text-red transition-all duration-300">
          Deepguard <span className="text-deepRed">AI</span>
        </span>
      </Link>

      {/* Install Extension CTA */}
      <a
        href="#install"
        className="flex items-center gap-2 px-6 py-2.5 bg-deepCard border border-deepRed/50 rounded-lg text-deepRed text-sm font-semibold hover:bg-deepRed/10 hover:glow-red transition-all duration-300 group whitespace-nowrap"
      >
        <Download className="w-4 h-4 group-hover:animate-bounce" />
        INSTALL EXTENSION
      </a>

    </nav>
  );
}
