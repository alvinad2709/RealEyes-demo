import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-aiBase/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 w-fit group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-base font-display font-semibold text-white tracking-tight">RealEyes</span>
            </Link>
            <p className="text-sm text-textMuted max-w-xs leading-relaxed">
              AI-powered image deepfake detection for modern KYC and media verification workflows.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h4>
              <ul className="space-y-3 text-sm text-textMuted">
                <li><Link to="/detect-image" className="hover:text-white transition-colors">Image Detect</Link></li>
                <li><Link to="/detect-image" className="hover:text-white transition-colors">Get Started</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm text-textMuted">
                <li><span className="hover:text-white cursor-pointer transition-colors">About</span></li>
                <li><span className="hover:text-white cursor-pointer transition-colors">Privacy</span></li>
                <li><span className="hover:text-white cursor-pointer transition-colors">Terms</span></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-textMuted">© {new Date().getFullYear()} RealEyes. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-textMuted">
            <span>Powered by</span>
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-medium">Vision Transformers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
