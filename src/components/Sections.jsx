import { motion } from 'framer-motion';
import { Zap, LayoutGrid, Activity, MousePointerClick, Sparkles, CircuitBoard } from 'lucide-react';

export function ValueProps() {
  const items = [
    { title: 'AI-Generated Circuits', icon: Sparkles, desc: 'Describe your idea, Ziro chooses components and topology for you.' },
    { title: 'Auto Layout & Auto Routing', icon: LayoutGrid, desc: 'Clean placement and optimal trace routing with neon-accurate DRC.' },
    { title: 'Instant Simulation', icon: Activity, desc: 'Run time-domain and frequency analysis instantly in the cloud.' },
  ];

  return (
    <section className="pt-24 pb-24">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-10">
        {items.map((it, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(139,92,246,0.25)] hover:border-[color:var(--accent-purple)]/40 transition transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#8B5CF6] grid place-items-center mb-4">
              <it.icon className="text-white" size={22} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">{it.title}</h3>
            <p className="text-[var(--text-secondary)]">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { title: 'Describe your circuit', desc: 'Write what you want: specs, components, constraints, goals.' },
    { title: 'Ziro builds schematic + routing', desc: 'We synthesize a schematic, place components, and route traces.' },
    { title: 'Simulate, edit, export', desc: 'Iterate in the browser, then export Gerbers or share links.' },
  ];
  return (
    <section className="pt-24 pb-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="p-8 rounded-2xl bg-[#1A1A1A] border border-white/10 relative overflow-hidden">
              <div className="absolute -left-6 top-10 w-24 h-24 rounded-full blur-2xl opacity-30" style={{ background: 'radial-gradient(closest-side, #8B5CF6, transparent)' }} />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#8B5CF6] grid place-items-center mb-4">
                <span className="text-white text-sm">{i+1}</span>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">{s.title}</h4>
              <p className="text-[var(--text-secondary)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoGallery({ onOpen, isAuthed }) {
  const demos = [
    'LED with resistor','RC low pass','555 timer astable','BJT amplifier','H-bridge driver','Op-amp filter','Buck converter','MOSFET switch'
  ];
  return (
    <section className="pt-24 pb-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {demos.map((d, i) => (
            <motion.button key={i} onClick={() => onOpen(d)} whileHover={{ scale: 1.02 }} className="aspect-video rounded-2xl overflow-hidden bg-[#151515] border border-white/10 relative group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: 'linear-gradient(135deg, rgba(26,115,232,0.25), rgba(139,92,246,0.25))' }} />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="px-3 py-1 rounded-full text-xs text-white/90 bg-white/10 inline-flex">{d}</div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-[#8B5CF6]/50 transition" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Modes() {
  const items = [
    { title: 'Student Mode', badge: 'LAUNCHED', badgeColor: 'from-emerald-400 to-emerald-600', cta: 'Try Now' },
    { title: 'Schematic + PCB', badge: 'COMING SOON', badgeColor: 'from-[#1A73E8] to-[#8B5CF6]', cta: 'Join Waitlist' },
    { title: 'IC/Chip Design', badge: 'COMING SOON', badgeColor: 'from-[#1A73E8] to-[#8B5CF6]', cta: 'Join Waitlist' },
  ];
  return (
    <section className="pt-24 pb-24">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="p-8 rounded-2xl bg-[#1A1A1A] border border-white/10">
            <div className={`inline-flex text-xs text-white px-3 py-1 rounded-full bg-gradient-to-r ${it.badgeColor} mb-4 shadow-[0_0_20px_rgba(16,185,129,0.35)]`}>
              {it.badge}
            </div>
            <div className="text-white text-xl font-semibold mb-2">{it.title}</div>
            <button className="mt-4 px-4 py-2 rounded-full text-white bg-white/10 border border-white/10 hover:bg-white/15">
              {it.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
