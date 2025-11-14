import { motion, AnimatePresence } from 'framer-motion';

export default function SignInModal({ open, onClose, onGoogle }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60]">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-[12px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center p-6"
          >
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              <h3 className="text-white text-2xl font-semibold">Sign in to continue</h3>
              <p className="text-white/70 mt-2">Use Google to generate and save circuits.</p>
              <button onClick={onGoogle} className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#1A73E8] to-[#8B5CF6] border border-white/10 hover:shadow-[0_0_22px_rgba(139,92,246,0.4)]">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" />
                Sign in with Google
              </button>
              <button onClick={onClose} className="mt-3 w-full text-sm text-white/60 hover:text-white">Maybe later</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
