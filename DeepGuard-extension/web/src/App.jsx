import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import ImageDetect from './pages/ImageDetect';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-aiBase text-white font-sans selection:bg-aiAccent/30 flex flex-col relative overflow-hidden">
        {/* Global ambient background glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-sky-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <Navbar />
        
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/detect-image" element={<ImageDetect />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
