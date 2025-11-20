import { useEffect, useMemo, useState } from 'react';

export default function ColorControls({ spline, nodeNames = ['Body', 'Paint', 'Car', 'car', 'body'] }) {
  const presets = useMemo(() => ([
    { name: 'Obsidian Black', color: '#0b0b0b' },
    { name: 'Arctic White', color: '#f5f5f7' },
    { name: 'Crimson Red', color: '#ef4444' },
    { name: 'Neon Blue', color: '#3b82f6' },
    { name: 'Emerald', color: '#10b981' },
    { name: 'Graphite', color: '#4b5563' },
    { name: 'Sunset Orange', color: '#f97316' },
    { name: 'Royal Purple', color: '#8b5cf6' },
  ]), []);

  const [active, setActive] = useState(presets[0].color);

  useEffect(() => {
    if (!spline) return;
    const applyColor = async (hex) => {
      try {
        for (const name of nodeNames) {
          const obj = spline.findObjectByName(name);
          if (obj && obj.material) {
            obj.material.color = hex;
          }
        }
      } catch (e) {
        // fail silently if node not found
      }
    };

    applyColor(active);
  }, [active, spline, nodeNames]);

  return (
    <section id="customize" className="relative w-full py-10 md:py-14 bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Choose your finish</h2>
            <p className="text-white/70 text-sm md:text-base">Tap a color to update the car instantly.</p>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {presets.map((p) => (
            <button
              key={p.name}
              onClick={() => setActive(p.color)}
              className={`group relative h-14 rounded-xl border transition focus:outline-none focus:ring-2 focus:ring-white/40 ${active === p.color ? 'border-white/80 ring-2 ring-white/30' : 'border-white/10 hover:border-white/30'}`}
              aria-label={p.name}
              title={p.name}
            >
              <span
                className="absolute inset-0 rounded-xl"
                style={{ background: p.color }}
              />
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-white/70 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {p.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
