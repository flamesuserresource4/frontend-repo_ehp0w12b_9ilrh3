import { useState } from 'react';
import Hero from './components/Hero';
import ColorControls from './components/ColorControls';
import Models from './components/Models';

function App() {
  const [splineApp, setSplineApp] = useState(null);

  return (
    <div className="min-h-screen w-full bg-black">
      {/* navbar */}
      <header className="fixed top-0 inset-x-0 z-40 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-purple-500" />
            <span className="text-white font-semibold tracking-tight">Velocity Motors</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#models" className="hover:text-white">Models</a>
            <a href="#customize" className="hover:text-white">Customize</a>
            <a href="#" className="hover:text-white">Book a Test</a>
            <button className="ml-4 px-4 py-2 rounded-lg bg-white text-black font-medium">Order</button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero onSplineLoad={setSplineApp} />
        <ColorControls spline={splineApp} />
        <Models />

        {/* CTA */}
        <section className="relative w-full py-16 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to feel the power?</h3>
            <p className="mt-3 text-white/70">Reserve your build today and be first on the track.</p>
            <div className="mt-6 flex justify-center gap-3">
              <button className="px-5 py-3 rounded-xl bg-white text-black font-semibold">Reserve</button>
              <button className="px-5 py-3 rounded-xl border border-white/20 text-white">Find a Dealer</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between text-white/60 text-sm">
          <span>© {new Date().getFullYear()} Velocity Motors</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
