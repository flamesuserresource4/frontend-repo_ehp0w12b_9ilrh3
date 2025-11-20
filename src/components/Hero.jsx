import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onSplineLoad }) {
  const loadedRef = useRef(false);

  const handleLoad = (splineApp) => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    if (onSplineLoad) onSplineLoad(splineApp);
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          onLoad={handleLoad}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 mb-4 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-white/80 tracking-wide">Live 3D Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Drive the Future.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-purple-400">
              Sleek. Powerful. Yours.
            </span>
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-white/80 max-w-xl">
            Explore our performance lineup in real‑time 3D. Rotate, zoom, and customize the finish to make it truly yours.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#models" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-black font-semibold shadow/50 shadow-black/20 hover:shadow-black/40 transition">
              Explore Models
            </a>
            <a href="#customize" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              Customize Color
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
