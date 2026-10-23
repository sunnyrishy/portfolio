// Hand drawn SVG landmarks. Each one is drawn around x = 0 with the ground at y = 0
// and grows upward (negative y). The wrapper in World.jsx positions them.

const windowLit = '#bfe6ff';
const windowDim = '#8fb8e0';

export function Home() {
  return (
    <g>
      <rect x="-110" y="-120" width="220" height="120" rx="4" fill="#fbf1de" />
      <path d="M-125 -118 L0 -190 L125 -118 Z" fill="#e0643a" />
      <path d="M-125 -118 L125 -118 L125 -108 L-125 -108 Z" fill="#b94a28" />
      {/* garage door */}
      <rect x="-82" y="-84" width="100" height="84" fill="#9bb0d6" />
      {[-66, -48, -30, -12].map((y) => (
        <line key={y} x1="-82" x2="18" y1={y + 12} y2={y + 12} stroke="#7f95c2" strokeWidth="3" />
      ))}
      {/* window with laptop glow */}
      <rect x="38" y="-92" width="48" height="40" rx="3" fill={windowLit} />
      <line x1="62" x2="62" y1="-92" y2="-52" stroke="#fbf1de" strokeWidth="3" />
      <line x1="38" x2="86" y1="-72" y2="-72" stroke="#fbf1de" strokeWidth="3" />
      {/* neon sign */}
      <rect x="-48" y="-158" width="96" height="26" rx="6" fill="#0b1230" stroke="#4fd1ff" strokeWidth="2" />
      <text x="0" y="-139" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="#4fd1ff">
        ~/home
      </text>
      {/* mailbox */}
      <rect x="128" y="-34" width="4" height="34" fill="#9aa9c8" />
      <rect x="118" y="-52" width="24" height="18" rx="4" fill="#e0643a" />
    </g>
  );
}

export function Works() {
  return (
    <g>
      <rect x="-130" y="-120" width="260" height="120" fill="#e9d7ba" />
      {/* sawtooth roof */}
      <path d="M-130 -120 L-130 -160 L-65 -120 L-65 -160 L0 -120 L0 -160 L65 -120 L65 -120 Z" fill="#d4bd98" />
      {/* chimney */}
      <rect x="78" y="-250" width="34" height="132" fill="#bfa57c" />
      <rect x="74" y="-258" width="42" height="12" fill="#e0643a" />
      <g fill="#b9c6ff">
        <circle className="smoke s1" cx="95" cy="-270" r="12" />
        <circle className="smoke s2" cx="95" cy="-270" r="12" />
        <circle className="smoke s3" cx="95" cy="-270" r="12" />
      </g>
      {/* screen with throughput */}
      <rect x="-108" y="-100" width="112" height="58" rx="5" fill="#0b1230" stroke="#4fd1ff" strokeWidth="2" />
      <text x="-52" y="-72" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="18" fill="#4fd1ff">
        1.4M/s
      </text>
      <text x="-52" y="-54" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#7fa0d8">
        400ns / op
      </text>
      {/* big gear */}
      <g transform="translate(60 -62)">
        <g className="spin">
          <circle r="26" fill="#e0643a" />
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x="-5" y="-34" width="10" height="14" fill="#e0643a" transform={`rotate(${i * 45})`} />
          ))}
          <circle r="10" fill="#e9d7ba" />
        </g>
      </g>
      <rect x="-20" y="-22" width="40" height="22" fill="#9bb0d6" />
    </g>
  );
}

export function Tower() {
  return (
    <g>
      {/* lattice legs */}
      <path d="M-58 0 L-8 -300 M58 0 L8 -300" stroke="#6f86b8" strokeWidth="5" fill="none" />
      {[-60, -120, -180, -240].map((y) => {
        const w = 58 - ((-y) / 300) * 50;
        return (
          <g key={y} stroke="#6f86b8" strokeWidth="3">
            <line x1={-w} x2={w} y1={y} y2={y} />
            <line x1={-w} x2={w - 14 * Math.sign(w)} y1={y} y2={y - 60} opacity="0.7" />
          </g>
        );
      })}
      <rect x="-30" y="-52" width="60" height="52" fill="#e9d7ba" />
      <rect x="-12" y="-36" width="24" height="36" fill="#9bb0d6" />
      {/* dish */}
      <path d="M-34 -230 q34 30 68 0 z" fill="#eef3fc" />
      {/* beacon */}
      <g transform="translate(0 -312)">
        <circle className="ping p1" r="14" fill="none" stroke="#4fd1ff" strokeWidth="3" />
        <circle className="ping p2" r="14" fill="none" stroke="#4fd1ff" strokeWidth="3" />
        <circle r="9" fill="#4fd1ff" />
      </g>
      {/* merged tag */}
      <g transform="translate(-130 -150)">
        <rect width="86" height="28" rx="14" fill="#1f8a5b" />
        <text x="43" y="19" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#eafff3">
          4 merged
        </text>
      </g>
    </g>
  );
}

export function Lab() {
  return (
    <g>
      <rect x="-110" y="-190" width="220" height="190" rx="4" fill="#dfe9f7" />
      <rect x="-110" y="-200" width="220" height="14" fill="#b8cbe8" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => {
          const lit = (r * 4 + c * 3 + r) % 3 !== 0;
          return (
            <rect
              key={`${r}${c}`}
              x={-90 + c * 46}
              y={-170 + r * 36}
              width="30"
              height="22"
              rx="2"
              fill={lit ? windowLit : windowDim}
              className={lit ? 'flicker' : undefined}
              style={{ animationDelay: `${(r * 4 + c) * 0.37}s` }}
            />
          );
        })
      )}
      <rect x="-18" y="-34" width="36" height="34" fill="#7f95c2" />
      {/* roof dish and antenna */}
      <line x1="60" x2="60" y1="-200" y2="-250" stroke="#6f86b8" strokeWidth="4" />
      <circle cx="60" cy="-254" r="5" fill="#ff6b6b" className="blink" />
      <g transform="translate(-50 -204)">
        <path d="M-22 -30 q22 34 44 0 z" fill="#eef3fc" transform="rotate(-25)" />
        <line x1="0" x2="0" y1="-8" y2="0" stroke="#6f86b8" strokeWidth="4" />
      </g>
    </g>
  );
}

export function Hall() {
  return (
    <g>
      <rect x="-150" y="-12" width="300" height="12" fill="#9aa9c8" />
      <rect x="-134" y="-24" width="268" height="12" fill="#d8cfba" />
      <rect x="-124" y="-136" width="248" height="112" fill="#f3eee2" />
      {[-100, -50, 0, 50, 100].map((x) => (
        <rect key={x} x={x - 9} y="-136" width="18" height="112" fill="#fffdf7" stroke="#bfb49a" strokeWidth="1.5" />
      ))}
      <path d="M-140 -136 L0 -206 L140 -136 Z" fill="#faf6ec" stroke="#bfb49a" strokeWidth="2" />
      <circle cx="0" cy="-158" r="10" fill="#27406e" />
      {/* clock tower behind */}
      <rect x="-26" y="-290" width="52" height="90" fill="#e4dccb" />
      <path d="M-34 -290 L0 -330 L34 -290 Z" fill="#e0643a" />
      <circle cx="0" cy="-258" r="17" fill="#fff6dc" stroke="#27406e" strokeWidth="3" />
      <g transform="translate(0 -258)" stroke="#27406e" strokeWidth="3" strokeLinecap="round">
        <line className="hand slow" x1="0" y1="0" x2="0" y2="-10" />
        <line className="hand fast" x1="0" y1="0" x2="0" y2="-14" strokeWidth="2" />
      </g>
      {/* mortarboard flag */}
      <line x1="0" x2="0" y1="-330" y2="-362" stroke="#6f86b8" strokeWidth="3" />
      <path d="M0 -362 l30 8 l-30 8 z" fill="#4fd1ff" />
    </g>
  );
}

export function Shed() {
  return (
    <g>
      <rect x="-100" y="-110" width="200" height="110" fill="#c98f5a" />
      <path d="M-116 -108 L-100 -150 L100 -150 L116 -108 Z" fill="#8c5a3a" />
      {/* pegboard */}
      <rect x="-82" y="-96" width="108" height="64" rx="4" fill="#7a5334" />
      {/* wrench */}
      <g stroke="#ffcf6a" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M-66 -44 L-48 -84" />
        <circle cx="-46" cy="-88" r="6" />
      </g>
      {/* hammer */}
      <g stroke="#e0643a" strokeWidth="5" strokeLinecap="round">
        <line x1="-20" y1="-46" x2="-4" y2="-84" />
        <line x1="-16" y1="-90" x2="2" y2="-80" strokeWidth="8" stroke="#eef3fc" />
      </g>
      {/* screwdriver */}
      <g stroke="#4fd1ff" strokeWidth="5" strokeLinecap="round">
        <line x1="14" y1="-46" x2="14" y2="-84" />
      </g>
      {/* door */}
      <rect x="42" y="-78" width="40" height="78" fill="#5c3b25" />
      <circle cx="74" cy="-40" r="3" fill="#ffcf6a" />
      {/* gear sign */}
      <g transform="translate(0 -130)">
        <g className="spin slowspin">
          <circle r="11" fill="#4fd1ff" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x="-3" y="-17" width="6" height="8" fill="#4fd1ff" transform={`rotate(${i * 60})`} />
          ))}
          <circle r="4" fill="#8c5a3a" />
        </g>
      </g>
    </g>
  );
}

export function Pad() {
  return (
    <g>
      <rect x="-90" y="-14" width="180" height="14" rx="3" fill="#9aa9c8" />
      {/* scaffold */}
      <g stroke="#6f86b8" strokeWidth="4">
        <line x1="62" x2="62" y1="-14" y2="-250" />
        <line x1="86" x2="86" y1="-14" y2="-250" />
        {[-60, -110, -160, -210].map((y) => (
          <line key={y} x1="62" x2="86" y1={y} y2={y + 24} strokeWidth="3" />
        ))}
        <line x1="28" x2="62" y1="-190" y2="-190" />
      </g>
      {/* rocket */}
      <g className="rocket">
        <path d="M-22 -40 L-22 -190 Q0 -250 22 -190 L22 -40 Z" fill="#fffdf7" />
        <path d="M-22 -190 Q0 -250 22 -190 Z" fill="#e0643a" />
        <circle cx="0" cy="-150" r="12" fill="#4fd1ff" stroke="#27406e" strokeWidth="4" />
        <path d="M-22 -80 L-46 -30 L-22 -44 Z M22 -80 L46 -30 L22 -44 Z" fill="#e0643a" />
        <g className="flame">
          <path d="M-12 -40 Q0 10 12 -40 Z" fill="#ffb347" />
          <path d="M-6 -40 Q0 -10 6 -40 Z" fill="#fff3c4" />
        </g>
      </g>
      {/* envelope sign */}
      <g transform="translate(-92 -74)">
        <rect width="46" height="32" rx="4" fill="#fff6dc" />
        <path d="M2 4 L23 20 L44 4" fill="none" stroke="#e0643a" strokeWidth="3" />
      </g>
    </g>
  );
}

export function Tree({ s = 1 }) {
  return (
    <g transform={`scale(${s})`}>
      <rect x="-4" y="-18" width="8" height="18" fill="#8a5a3a" />
      <path d="M-24 -16 L0 -64 L24 -16 Z" fill="#2f9e6a" />
      <path d="M-19 -42 L0 -86 L19 -42 Z" fill="#3fb87d" />
    </g>
  );
}

export function Lamp() {
  return (
    <g>
      <rect x="-2" y="-70" width="4" height="70" fill="#9aa9c8" />
      <circle cx="0" cy="-74" r="30" fill="#ffd479" opacity="0" />
      <circle cx="0" cy="-74" r="6" fill="#ffd479" />
    </g>
  );
}

export function Car() {
  return (
    <g>
      <rect x="-30" y="-20" width="60" height="14" rx="5" fill="#e0643a" />
      <path d="M-16 -20 L-8 -33 L12 -33 L20 -20 Z" fill="#f08a5d" />
      <circle cx="-16" cy="-6" r="6" fill="#7f95c2" />
      <circle cx="16" cy="-6" r="6" fill="#7f95c2" />
      <path d="M30 -16 L74 -26 L74 -6 Z" fill="#ffd479" opacity="0" />
    </g>
  );
}

// The little guy who follows the cursor: a coder with a hoodie, headphones and a laptop.
export function Boy() {
  return (
    <g>
      <ellipse cx="0" cy="0" rx="17" ry="4" fill="#14213d" opacity="0.18" />
      <rect x="-20" y="-52" width="12" height="26" rx="5" fill="#27406e" />
      <g className="legs">
        <g className="leg l1">
          <rect x="-8" y="-26" width="8" height="22" rx="3.5" fill="#27406e" />
          <rect x="-10" y="-6" width="13" height="6" rx="3" fill="#f6f6f6" stroke="#14213d" strokeWidth="1.2" />
        </g>
        <g className="leg l2">
          <rect x="1" y="-26" width="8" height="22" rx="3.5" fill="#27406e" />
          <rect x="-1" y="-6" width="13" height="6" rx="3" fill="#f6f6f6" stroke="#14213d" strokeWidth="1.2" />
        </g>
      </g>
      <rect x="-14" y="-54" width="28" height="34" rx="10" fill="#f07a45" />
      <rect x="-5" y="-33" width="10" height="7" rx="3" fill="#d9632f" />
      <text x="0" y="-40" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#fff4e6">
        {'</>'}
      </text>
      <rect x="6" y="-48" width="20" height="9" rx="4.5" fill="#f07a45" />
      <g transform="translate(20 -52) rotate(-8)">
        <rect width="20" height="13" rx="2" fill="#14213d" />
        <rect x="2" y="2" width="16" height="9" rx="1" fill="#4fd1ff" opacity="0.9" />
        <circle cx="10" cy="6.5" r="1.8" fill="#14213d" />
      </g>
      <circle cx="0" cy="-66" r="14" fill="#f4c7a1" />
      <path d="M-15 -68 Q-15 -85 0 -84 Q15 -85 15 -68 Q10 -76 0 -75 Q-10 -76 -15 -68 Z" fill="#2a1d1a" />
      <path d="M-15 -66 Q0 -92 15 -66" stroke="#1f7ae0" strokeWidth="3.5" fill="none" />
      <rect x="-19" y="-70" width="7" height="13" rx="3.5" fill="#1f7ae0" />
      <rect x="12" y="-70" width="7" height="13" rx="3.5" fill="#1f7ae0" />
      <g className="eyes">
        <ellipse cx="-5" cy="-65" rx="2.2" ry="2.8" fill="#14213d" />
        <ellipse cx="5" cy="-65" rx="2.2" ry="2.8" fill="#14213d" />
        <circle cx="-4.4" cy="-66" r="0.8" fill="#fff" />
        <circle cx="5.6" cy="-66" r="0.8" fill="#fff" />
      </g>
      <path d="M-4 -58 Q0 -54 4 -58" stroke="#14213d" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="-9" cy="-59" r="2.2" fill="#f2998a" opacity="0.55" />
      <circle cx="9" cy="-59" r="2.2" fill="#f2998a" opacity="0.55" />
    </g>
  );
}
