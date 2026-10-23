import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import World from './world/World';
import PanelBody from './world/Panel';
import { landmarks } from './world/landmarks';
import { Menu, Close } from './components/icons';

export default function App() {
  const [openId, setOpenId] = useState(null);
  const [menu, setMenu] = useState(false);
  const [moved, setMoved] = useState(false);
  const onMoved = useCallback(() => setMoved(true), []);

  useEffect(() => {
    const esc = (e) => {
      if (e.key === 'Escape') {
        setOpenId(null);
        setMenu(false);
      }
    };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);

  const open = (id) => {
    setMenu(false);
    setOpenId(id);
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <World onOpen={open} openId={openId} onMoved={onMoved} />

      <p
        className={`pointer-events-none absolute inset-x-0 top-5 z-10 hidden text-center font-mono text-[11px] uppercase tracking-[0.16em] text-mid transition-opacity duration-700 md:block ${
          moved ? 'opacity-40' : 'opacity-100'
        }`}
      >
        Glide your mouse over the town · click a landmark to visit
      </p>
      <p
        className={`pointer-events-none absolute inset-x-0 top-7 z-10 px-16 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-mid transition-opacity duration-700 md:hidden ${
          moved ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Drag to roam · tap a landmark
      </p>

      <button
        className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-hairline2 bg-canvas/70 backdrop-blur transition hover:bg-canvas md:right-8 md:top-7"
        aria-label={menu ? 'Close menu' : 'Open menu'}
        aria-expanded={menu}
        onClick={() => setMenu(!menu)}
      >
        {menu ? <Close /> : <Menu />}
      </button>

      <AnimatePresence>
        {menu && (
          <motion.nav
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute right-5 top-[68px] z-20 w-60 rounded-2xl border border-hairline2 bg-canvas/90 p-2 backdrop-blur-xl md:right-8 md:top-[76px]"
          >
            {landmarks.map((l) => (
              <button
                key={l.id}
                onClick={() => open(l.id)}
                className="flex w-full items-baseline justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-ink/[0.06]"
              >
                <span className="font-medium">{l.label}</span>
                <span className="text-xs text-dim">{l.hint}</span>
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openId && (
          <>
            <motion.div
              key="scrim"
              className="absolute inset-0 z-30 bg-[#14213d]/30 md:bg-[#14213d]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenId(null)}
            />
            <motion.aside
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label={landmarks.find((l) => l.id === openId).label}
              className="panel absolute z-40 flex flex-col bg-canvas max-md:inset-x-0 max-md:bottom-0 max-md:max-h-[86vh] max-md:rounded-t-3xl md:bottom-4 md:right-4 md:top-4 md:w-[440px] md:rounded-3xl md:border md:border-hairline2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <button
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-hairline2 bg-ink/5 transition hover:bg-ink/10"
                aria-label="Close"
                onClick={() => setOpenId(null)}
                autoFocus
              >
                <Close />
              </button>
              <div className="overflow-y-auto overscroll-contain px-6 pb-10 pt-8 md:px-8" key={openId}>
                <PanelBody id={openId} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
