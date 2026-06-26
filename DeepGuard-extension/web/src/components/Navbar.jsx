import { Link, useLocation } from 'react-router-dom';
import { Download, Sparkles } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Detect Image', path: '/detect-image' },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-aiBase/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Left — Brand */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-semibold text-lg text-white tracking-tight">RealEyes</span>
        </Link>

        {/* Center — Nav Links */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {navLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-textMuted hover:text-white hover:bg-white/5'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right — Extension */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="/realeyes-extension-v1.zip"
            download
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-aiAccent" />
            Extension
          </a>
        </div>

      </div>
    </nav>
  );
}
