import { profile, metrics } from '../data';
import { ArrowRight, Download } from '../components/icons';
import CountUp from '../components/CountUp';

export default function Hero() {
  const [before, accent, after] = profile.headline;

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-20 md:pb-24 md:pt-28 lg:pt-32">
      {/* Ambient wash and masked grid, both purely decorative. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[620px] w-[1100px]
                   -translate-x-1/2 blur-[20px]"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, oklch(0.74 0.15 232 / 0.20), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(58% 52% at 50% 30%, #000, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(58% 52% at 50% 30%, #000, transparent 72%)',
        }}
      />

      <div className="shell relative text-center">
        <div
          className="rise rise-1 inline-flex items-center gap-2.5 rounded-full border border-hairline2
                     bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] tracking-[0.05em]
                     text-mid md:text-xs"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: 'oklch(0.78 0.16 150)',
              boxShadow: '0 0 0 3px oklch(0.78 0.16 150 / 0.18)',
            }}
          />
          {profile.availability}
        </div>

        <h1
          className="rise rise-2 mx-auto mt-7 max-w-[15ch] text-[46px] font-semibold leading-[0.98]
                     tracking-[-0.045em] md:mt-8 md:text-7xl lg:text-[104px]"
        >
          {before}{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(100deg, oklch(0.74 0.15 232), oklch(0.74 0.15 305))',
            }}
          >
            {accent}
          </span>{' '}
          {after}
        </h1>

        <p className="rise rise-3 mx-auto mt-6 max-w-[660px] text-base leading-relaxed text-mid md:mt-7 md:text-xl">
          {profile.summary}
        </p>

        <div className="rise rise-4 mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:mt-10">
          <a href="#work" className="pill-primary">
            See the work
            <ArrowRight />
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="pill-ghost">
            <Download />
            Download résumé
          </a>
        </div>
      </div>

      <div className="rise rise-5 shell relative mt-16 md:mt-24">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-hairline
                        bg-hairline lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-surface px-5 py-6 md:px-7 md:py-8">
              <b className="block font-mono text-[26px] font-semibold tracking-[-0.03em] md:text-[38px]">
                <CountUp to={m.to} decimals={m.decimals} suffix={m.suffix} />
              </b>
              <span className="mt-1.5 block text-xs leading-snug text-dim md:text-[13px]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
