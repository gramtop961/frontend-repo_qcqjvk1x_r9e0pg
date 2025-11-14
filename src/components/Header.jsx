import { useEffect, useState } from 'react';
import { Menu, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header({ onSignInClick, user, onSignOut }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl/80 bg-[#0D0D0D]/60 border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1A73E8] to-[#8B5CF6] shadow-[var(--neon-glow)]" />
          <span className="text-white font-semibold tracking-wide text-lg">ZIRO</span>
        </div>
        <div className="flex items-center gap-3">
          {!user ? (
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 22px rgba(139,92,246,0.4)' }}
              whileTap={{ scale: 0.98 }}
              onClick={onSignInClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-white/10"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="g" className="w-4 h-4" />
              Sign in with Google
            </motion.button>
          ) : (
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-sm text-[var(--text-secondary)]">Hi, {user.name.split(' ')[0]}</div>
              <div className="relative group">
                <img src={user.avatar} className="w-9 h-9 rounded-full ring-2 ring-white/10" />
                <div className="absolute right-0 mt-2 hidden group-hover:block">
                  <div className="min-w-[160px] p-2 rounded-xl bg-[var(--surface)] border border-white/10 shadow-xl">
                    <button onClick={onSignOut} className="w-full text-left px-3 py-2 rounded-lg text-[var(--text-secondary)] hover:bg-white/5">Sign out</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <button className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
            <Menu size={18} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
