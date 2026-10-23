import { useEffect, useMemo, useRef, useState } from 'react';
import { landmarks, WORLD_W, WORLD_H, GROUND } from './landmarks';
import { Home, Works, Tower, Lab, Hall, Shed, Pad, Tree, Lamp, Car, Boy } from './art';

const art = { about: Home, projects: Works, opensource: Tower, experience: Lab, education: Hall, skills: Shed, contact: Pad };

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// Tiny seeded random so the skyline and stars are stable between renders.
function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const birds = [
  { top: 12, size: 26, dur: 34, delay: -4 },
  { top: 18, size: 20, dur: 42, delay: -17 },
  { top: 9, size: 16, dur: 52, delay: -30 },
  { top: 24, size: 22, dur: 38, delay: -9 },
  { top: 15, size: 14, dur: 60, delay: -45 },
];

function Bird({ size }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 28 14" className="flap" aria-hidden="true">
      <path d="M1 9 Q7 -1 14 8 Q21 -1 27 9" fill="none" stroke="#27406e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Sky() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {birds.map((b, i) => (
        <div key={i} className="fly absolute left-0" style={{ top: `${b.top}%`, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}>
          <div className="bob-y" style={{ animationDelay: `${i * 0.23}s` }}>
            <Bird size={b.size} />
          </div>
        </div>
      ))}
      <div className="drone absolute left-0" style={{ top: '30%' }}>
        <svg width="54" height="30" viewBox="0 0 54 30">
          <rect x="17" y="12" width="20" height="8" rx="4" fill="#27406e" />
          <circle cx="27" cy="16" r="2.4" fill="#4fd1ff" />
          <circle className="blink" cx="35" cy="14" r="1.6" fill="#ff5a4f" />
          <line x1="8" y1="8" x2="19" y2="13" stroke="#27406e" strokeWidth="2.2" />
          <line x1="46" y1="8" x2="35" y2="13" stroke="#27406e" strokeWidth="2.2" />
          <ellipse className="prop" cx="8" cy="7" rx="9" ry="1.8" fill="#27406e" />
          <ellipse className="prop" cx="46" cy="7" rx="9" ry="1.8" fill="#27406e" />
        </svg>
      </div>
    </div>
  );
}

function Skyline({ height }) {
  const blocks = useMemo(() => {
    const r = rng(21);
    const out = [];
    let x = 0;
    while (x < 2000) {
      const w = 50 + r() * 70;
      const h = 90 + r() * 190;
      const wins = [];
      for (let wy = 14; wy < h - 10; wy += 20) {
        for (let wx = 10; wx < w - 12; wx += 18) {
          if (r() > 0.62) wins.push([wx, wy]);
        }
      }
      out.push({ x, w, h, wins });
      x += w + 4;
    }
    return out;
  }, []);
  return (
    <svg viewBox="0 0 2000 700" preserveAspectRatio="none" width="100%" height={height} aria-hidden="true">
      <g transform="translate(0 600)">
        {blocks.map((b, i) => (
          <g key={i} transform={`translate(${b.x} ${-b.h})`}>
            <rect width={b.w} height={b.h + 100} fill="#9db9dd" />
            {b.wins.map(([wx, wy], j) => (
              <rect key={j} x={wx} y={wy} width="7" height="9" fill="#e9f4ff" opacity="0.85" />
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}

function Hills({ height }) {
  return (
    <svg viewBox="0 0 1600 700" preserveAspectRatio="none" width="100%" height={height} aria-hidden="true">
      <path d="M0 520 Q200 380 420 470 T820 440 T1220 470 T1600 400 L1600 700 L0 700 Z" fill="#b4d6ee" />
      <path d="M0 560 Q260 470 520 540 T1020 520 T1600 520 L1600 700 L0 700 Z" fill="#9fd3c4" />
    </svg>
  );
}

export default function World({ onOpen, openId, onMoved }) {
  const stage = useRef(null);
  const farRef = useRef(null);
  const midRef = useRef(null);
  const mainRef = useRef(null);
  const boyRef = useRef(null);
  const boyBody = useRef(null);

  const [size, setSize] = useState({ w: 1200, h: 800 });
  const [near, setNear] = useState(null);
  const [hover, setHover] = useState(null);

  // Mutable animation state lives in a ref so the rAF loop never re-renders React.
  const st = useRef({ target: 0.0, cur: 0, mouseX: null, boyX: 300, dir: 1, moving: false, near: null, lastMove: 0, dragging: false, pan: null });

  const H = Math.max(size.h, (size.w * WORLD_H) / WORLD_W);
  const mainW = (H * WORLD_W) / WORLD_H;
  const scale = H / WORLD_H;
  const range = Math.max(0, mainW - size.w);
  const farW = size.w + range * 0.22;
  const midW = size.w + range * 0.5;

  useEffect(() => {
    const read = () => setSize({ w: stage.current.clientWidth, h: stage.current.clientHeight });
    read();
    window.addEventListener('resize', read);
    return () => window.removeEventListener('resize', read);
  }, []);

  // Pointer, touch drag and keyboard all just set a target progress between 0 and 1.
  useEffect(() => {
    const s = st.current;
    const move = (e) => {
      if (e.pointerType === 'touch') return;
      s.mouseX = e.clientX;
      s.pan = e.clientX / window.innerWidth;
      if (!s.lastMove) onMoved?.();
      s.lastMove = performance.now();
    };
    let startX = 0;
    let startT = 0;
    const down = (e) => {
      if (e.pointerType !== 'touch') return;
      startX = e.clientX;
      startT = s.target;
      s.dragging = true;
      s.mouseX = null;
    };
    const drag = (e) => {
      if (!s.dragging || e.pointerType !== 'touch') return;
      const dx = e.clientX - startX;
      s.target = clamp(startT - dx / Math.max(1, mainW - window.innerWidth), 0, 1);
      onMoved?.();
    };
    const up = () => (s.dragging = false);
    const key = (e) => {
      if (e.key === 'ArrowRight') s.target = clamp(s.target + 0.07, 0, 1);
      if (e.key === 'ArrowLeft') s.target = clamp(s.target - 0.07, 0, 1);
      s.mouseX = null;
      s.pan = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') onMoved?.();
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', drag);
    window.addEventListener('pointerup', up);
    window.addEventListener('keydown', key);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointermove', drag);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('keydown', key);
    };
  }, [mainW, onMoved]);

  useEffect(() => {
    st.current.locked = !!openId;
  }, [openId]);

  // Jump the camera to a landmark when it is opened from the menu.
  useEffect(() => {
    if (!openId) return;
    const lm = landmarks.find((l) => l.id === openId);
    if (!lm || range <= 0) return;
    const px = lm.x * scale;
    st.current.target = clamp((px - size.w * (size.w < 768 ? 0.5 : 0.3)) / range, 0, 1);
    st.current.mouseX = null;
    st.current.pan = null;
    st.current.boyX = lm.x - 120;
  }, [openId, range, scale, size.w]);

  useEffect(() => {
    const s = st.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    const tick = () => {
      // Edge scrolling: the camera only drifts while the cursor sits near a screen edge,
      // and speed grows gently with how close it is. The middle 50% is a rest zone.
      if (s.pan != null && !s.dragging && !s.locked) {
        const f = s.pan;
        const v = f < 0.25 ? -(0.25 - f) / 0.25 : f > 0.75 ? (f - 0.75) / 0.25 : 0;
        s.target = clamp(s.target + v * v * Math.sign(v) * 0.0035 * (3000 / Math.max(range, 1)), 0, 1);
      }
      s.cur += (s.target - s.cur) * (reduce ? 1 : 0.05);
      const off = s.cur * range;
      mainRef.current.style.transform = `translate3d(${-off}px,0,0)`;
      midRef.current.style.transform = `translate3d(${-s.cur * (midW - size.w)}px,0,0)`;
      farRef.current.style.transform = `translate3d(${-s.cur * (farW - size.w)}px,0,0)`;

      // The boy walks toward the cursor, or the middle of the screen when there is none.
      const screenX = s.mouseX ?? size.w / 2;
      const goal = clamp((screenX + off) / scale, 90, WORLD_W - 90);
      const dx = goal - s.boyX;
      const step = reduce ? dx : clamp(dx * 0.045, -9, 9);
      s.boyX += step;
      const moving = Math.abs(step) > 0.6;
      if (moving) s.dir = step > 0 ? 1 : -1;
      boyRef.current.setAttribute('transform', `translate(${s.boyX} ${GROUND + 72}) scale(${s.dir * 1.15} 1.15)`);
      boyRef.current.classList.toggle('walking', moving);

      let best = null;
      let bd = 140;
      for (const l of landmarks) {
        const d = Math.abs(l.x - s.boyX);
        if (d < bd) {
          bd = d;
          best = l.id;
        }
      }
      if (best !== s.near) {
        s.near = best;
        setNear(best);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [range, scale, size.w, midW, farW]);

  const active = hover ?? near;

  return (
    <div ref={stage} className="absolute inset-0 overflow-hidden" style={{ touchAction: 'pan-y' }}>
      <div className="sky absolute inset-0" />
      <div className="sun" aria-hidden="true" />
      <Sky />
      <div className="cloud c1" aria-hidden="true" />
      <div className="cloud c2" aria-hidden="true" />

      <div ref={farRef} className="absolute bottom-0 left-0 will-change-transform" style={{ width: farW, height: H }}>
        <Hills height={H} />
      </div>
      <div ref={midRef} className="absolute bottom-0 left-0 will-change-transform" style={{ width: midW, height: H }}>
        <Skyline height={H} />
      </div>

      <div ref={mainRef} className="absolute bottom-0 left-0 will-change-transform" style={{ width: mainW, height: H }}>
        <svg viewBox={`0 0 ${WORLD_W} ${WORLD_H}`} width={mainW} height={H} role="group" aria-label="Interactive town map">
          {/* ground */}
          <rect x="0" y={GROUND} width={WORLD_W} height={WORLD_H - GROUND} fill="#7ccf98" />
          <rect x="0" y={GROUND + 52} width={WORLD_W} height={WORLD_H - GROUND - 52} fill="#66738f" />
          <line x1="0" x2={WORLD_W} y1={GROUND + 52} y2={GROUND + 52} stroke="#4d5a76" strokeWidth="3" />
          <line x1="0" x2={WORLD_W} y1={GROUND + 106} y2={GROUND + 106} stroke="#fff3c4" strokeWidth="3" strokeDasharray="28 24" opacity="0.7" />

          {[80, 520, 1010, 1480, 1940, 2340, 2700, 2960].map((x, i) => (
            <g key={x} transform={`translate(${x} ${GROUND})`}>
              {i % 2 ? <Tree s={1.1} /> : <Lamp />}
            </g>
          ))}

          {landmarks.map((l) => {
            const Art = art[l.id];
            const on = active === l.id;
            const tw = l.label.length * 8 + 30;
            return (
              <g
                key={l.id}
                transform={`translate(${l.x} ${GROUND})`}
                className={`lm ${on ? 'on' : ''}`}
                role="button"
                tabIndex={0}
                aria-label={`${l.label}. ${l.hint}`}
                onClick={() => onOpen(l.id)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onOpen(l.id))}
                onMouseEnter={() => setHover(l.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(l.id)}
                onBlur={() => setHover(null)}
              >
                <rect x="-170" y={-l.top - 10} width="340" height={l.top + 10} fill="transparent" />
                <Art />
                <g className="tip" transform={`translate(0 ${-l.top - 26})`}>
                  <rect x={-tw / 2} y="-22" width={tw} height="30" rx="15" fill="#14213d" />
                  <text x="0" y="-2" textAnchor="middle" fontFamily="Instrument Sans, sans-serif" fontSize="15" fontWeight="600" fill="#ffffff">
                    {l.label}
                  </text>
                  <path d="M-6 8 L0 15 L6 8 Z" fill="#14213d" />
                </g>
              </g>
            );
          })}

          <g ref={boyRef} className="boy" pointerEvents="none">
            <Boy />
          </g>

          <g className="car" pointerEvents="none">
            <Car />
          </g>
        </svg>
      </div>

      {active && !openId && (
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center px-4">
          <div className="rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink shadow-lg">
            {landmarks.find((l) => l.id === active).hint}
            <span className="ml-2 text-accent">click to open</span>
          </div>
        </div>
      )}
    </div>
  );
}
