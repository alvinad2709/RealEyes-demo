import { Link } from 'react-router-dom';
import { Shield, FileText, Brain, MessageSquare, BookOpen, Lock, Image as ImageIcon, Zap, Target, Cpu, Activity, ArrowRight, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

export default function Landing() {
  const features = [
    {
      title: 'Vision Transformer Models',
      desc: 'Powered by state-of-the-art ViT architecture. Evaluates visual anomalies and synthetic artifacts at the pixel level.',
      icon: <Brain className="w-5 h-5 text-aiAccent" />,
      tag: 'Core'
    },
    {
      title: 'Explainable AI',
      desc: 'Context-aware inference that surfaces Grad-CAM heatmaps and specific reasoning behind every classification.',
      icon: <Sparkles className="w-5 h-5 text-aiSecondary" />,
      tag: 'Analysis'
    },
    {
      title: 'Real-Time Inference',
      desc: 'Hybrid processing: local inference for computer vision transformers and ultra-fast edge routing for real-time results.',
      icon: <Zap className="w-5 h-5 text-aiSuccess" />,
      tag: 'Performance'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">

      {/* Hero Section */}
      <div className="relative w-full flex flex-col pt-32 pb-24 px-6 md:px-12 items-center justify-center overflow-hidden min-h-[85vh]">
        {/* Dynamic Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aiAccent/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-aiSecondary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-aiAccent" />
            <span className="text-sm font-medium text-white/80 tracking-wide">Next-Gen Synthetic Media Detection</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
            Uncover the Truth with <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-aiSecondary via-indigo-400 to-aiAccent bg-clip-text text-transparent">
              AI-Powered Forensics
            </span>
          </h1>

          <p className="text-lg md:text-xl text-textMuted max-w-2xl mb-10 leading-relaxed font-light">
            RealEyes uses advanced Vision Transformers to detect deepfakes, manipulated media, and synthetic content in real-time with full explainability.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link to="/detect-image" className="w-full sm:w-auto px-8 py-4 bg-white text-aiBase rounded-full font-semibold flex items-center justify-center gap-2.5 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
              <Shield className="w-5 h-5" />
              Start Analyzing
            </Link>
            <a href="#features" className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white rounded-full font-semibold flex items-center justify-center gap-2.5 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
              View Capabilities
            </a>
          </div>
        </div>
      </div>

      {/* Feature Grid Section */}
      <div id="features" className="w-full max-w-6xl py-24 px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Intelligent <span className="text-white">Detection Matrix</span></h2>
          <p className="text-textMuted mt-4 max-w-2xl mx-auto">
            A comprehensive suite combining real-time continuous detection, computer vision models, and deep contextual reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all duration-300 group backdrop-blur-xl">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feat.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">{feat.title}</h3>
              <p className="text-sm text-textMuted leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aiAccent/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
            Ready to secure your digital identity?
          </h2>
          <p className="text-textMuted text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Free to use. No sign-up required. Upload an image and run your first forensic analysis in seconds.
          </p>
          <div className="flex items-center justify-center">
            <Link
              to="/detect-image"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-aiAccent to-indigo-600 text-white font-semibold text-base hover:opacity-90 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              Analyze Media Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
