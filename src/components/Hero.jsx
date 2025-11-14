import { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onGenerate, onFocusRequireAuth, isAuthed }) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const tooltip = !isAuthed && focused && value.length > 0;

  return (
    <section className="pt-28 pb-24 relative">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1A73E8] to-[#8B5CF6]">Build Electronic Circuits</span> by Just Prompting.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-[var(--text-secondary)] text-lg"
          >
            No dragging wires. No picking components. Just describe the circuit — Ziro builds, routes, and simulates it instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8"
          >
            <div className="relative">
              <div className="rounded-full bg-white/5 border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.3)] p-2 pl-5 flex items-center gap-3">
                <textarea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={() => { setFocused(true); if(!isAuthed) onFocusRequireAuth?.(); }}
                  placeholder="Make a 555 Timer blinking LED circuit"
                  className="flex-1 bg-transparent outline-none text-white resize-none max-h-28 min-h-[56px] py-3 placeholder:text-white/40"
                />
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 22px rgba(139,92,246,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onGenerate(value)}
                  className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] border border-white/10"
                >
                  Generate
                </motion.button>
              </div>
              {tooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 -bottom-10 text-sm text-white/80 bg-[#1A1A1A]/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg"
                >
                  Sign in with Google to continue
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
        <div className="h-[420px] md:h-[520px] lg:h-[640px] rounded-3xl overflow-hidden border border-white/10 bg-[#151515] shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
