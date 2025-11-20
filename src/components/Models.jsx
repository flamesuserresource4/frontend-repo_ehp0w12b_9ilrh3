export default function Models() {
  const models = [
    {
      name: 'GT-RX',
      desc: 'Twin-turbo V8 • 0-60 in 2.9s • AWD',
      price: 'From $98,900',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'E-Drive S',
      desc: 'Dual-motor electric • 400mi range • 800V',
      price: 'From $79,500',
      image: 'https://images.unsplash.com/photo-1734412513254-6f365dee30a8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLURyaXZlJTIwU3xlbnwwfDB8fHwxNzYzNjQyMzIxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      name: 'Roadster R',
      desc: 'Carbon chassis • Open-top • Track pack',
      price: 'From $126,400',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section id="models" className="relative w-full py-16 md:py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Performance lineup</h2>
            <p className="text-white/70 mt-2">Engineered for thrill. Designed for life.</p>
          </div>
          <a href="#" className="text-white/80 hover:text-white underline underline-offset-4">View all models</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m) => (
            <div key={m.name} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                  <span className="text-white/70 text-sm">{m.price}</span>
                </div>
                <p className="mt-2 text-white/60 text-sm">{m.desc}</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium">Build</button>
                  <button className="px-4 py-2 rounded-lg border border-white/20 text-white/90 text-sm">Compare</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
