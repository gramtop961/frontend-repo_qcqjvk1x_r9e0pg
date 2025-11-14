import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Editor(){
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 18);
      setProgress(p);
      if (p >= 100) clearInterval(id);
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-[1200px] mx-auto px-4 pt-28 pb-20">
        <h1 className="text-3xl font-semibold mb-6">Editor</h1>
        <div className="h-[520px] rounded-2xl border border-white/10 bg-[#151515] relative overflow-hidden">
          <AnimatePresence>
            {progress < 100 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 grid place-items-center bg-black/50 backdrop-blur-sm">
                <div className="w-full max-w-md p-6 rounded-xl bg-[#1A1A1A] border border-white/10">
                  <div className="text-white/80 mb-3">Generating circuit...</div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ ease: 'easeOut' }} className="h-full bg-gradient-to-r from-[#1A73E8] to-[#8B5CF6]" />
                  </div>
                  <div className="mt-2 text-white/60 text-sm">{Math.floor(progress)}%</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
