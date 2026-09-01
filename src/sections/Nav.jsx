import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, profile } from '../data';
import { Menu, Close } from '../components/icons';

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close the drawer if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-4 md:pt-5">
      <div className="shell">
        <nav
          className="rise mx-auto flex w-full items-center justify-between gap-8 rounded-full border
                     border-hairline2 bg-[rgba(14,14,18,0.72)] py-2.5 pl-5 pr-2.5
                     backdrop-blur-xl backdrop-saturate-150 md:w-fit"
        >
          <a href="#top" className="text-sm font-semibold tracking-[-0.01em] text-ink">
            {profile.name}
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {nav.slice(0, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-mid transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-canvas
                       transition-transform duration-300 ease-smooth hover:scale-[1.04] md:block"
          >
            Résumé
          </a>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline2
                       text-ink md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.2, 0.7, 0.3, 1] }}
              className="mt-2 flex flex-col gap-1 rounded-3xl border border-hairline2
                         bg-[rgba(14,14,18,0.94)] p-3 backdrop-blur-xl md:hidden"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[52px] items-center rounded-2xl px-4 text-base text-mid
                             transition-colors hover:bg-white/[0.05] hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 flex min-h-[52px] items-center justify-center rounded-2xl bg-ink
                           px-4 text-base font-medium text-canvas"
              >
                Download résumé
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
