import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import { ValueProps, HowItWorks, DemoGallery, Modes } from './components/Sections';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ziro_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const handleGenerate = async (prompt) => {
    if (!user) {
      setModalOpen(true);
      return;
    }
    if (!prompt || prompt.trim().length === 0) return;
    try {
      const res = await fetch(`${backend}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      const jobId = data.jobId || data.job_id || Math.random().toString(36).slice(2);
      navigate(`/editor?jobId=${encodeURIComponent(jobId)}`);
    } catch (e) {
      const jobId = Math.random().toString(36).slice(2);
      navigate(`/editor?jobId=${encodeURIComponent(jobId)}`);
    }
  };

  const onSignInClick = () => setModalOpen(true);
  const handleGoogleSignIn = () => {
    const fake = {
      name: 'Ziro User',
      email: 'user@example.com',
      avatar: 'https://i.pravatar.cc/100?img=12',
    };
    localStorage.setItem('ziro_user', JSON.stringify(fake));
    setUser(fake);
    setModalOpen(false);
  };
  const handleSignOut = () => {
    localStorage.removeItem('ziro_user');
    setUser(null);
  };

  const openDemo = (name) => {
    if (!user) {
      setModalOpen(true);
    } else {
      const id = `${name.toLowerCase().replace(/\s+/g, '-')}-${Math.random().toString(36).slice(2,7)}`;
      navigate(`/editor?demo=${encodeURIComponent(id)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-24 -left-32 w-[540px] h-[540px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(26,115,232,0.15), transparent 60%)' }} />
        <div className="absolute top-1/3 -right-24 w-[520px] h-[520px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18), transparent 60%)' }} />
      </div>

      <Header onSignInClick={onSignInClick} user={user} onSignOut={handleSignOut} />

      <main className="relative">
        <Hero onGenerate={handleGenerate} onFocusRequireAuth={() => {}} isAuthed={!!user} />
        <ValueProps />
        <HowItWorks />
        <DemoGallery onOpen={openDemo} isAuthed={!!user} />
        <Modes />
      </main>

      <Footer />

      <SignInModal open={modalOpen} onClose={() => setModalOpen(false)} onGoogle={handleGoogleSignIn} />
    </div>
  );
}

export default App;
