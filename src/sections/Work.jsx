import { projects } from '../data';
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal';

const spanClass = {
  wide: 'lg:col-span-6',
  half: 'lg:col-span-3',
};

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">Selected work</div>
          <h2 className="h2">
            Systems measured,
            <br />
            not described.
          </h2>
          <p className="lede">
            Every number below came off a profiler: throughput under load, operation latency, and
            allocation counts before and after the change.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-6 md:mt-16">
          {projects.map((p) => (
            <RevealItem key={p.title} className={spanClass[p.span]}>
              <article
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[22px]
                           border border-hairline bg-card p-7 transition-all duration-[350ms]
                           ease-smooth hover:-translate-y-1 hover:border-hairline2 md:p-8"
              >
                {/* Accent bloom from the top edge on hover. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity
                             duration-[400ms] group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(70% 60% at 50% 0%, oklch(0.74 0.15 232 / 0.09), transparent 60%)',
                  }}
                />

                <div className="relative flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                <h3 className="relative text-xl font-semibold leading-tight tracking-[-0.02em] md:text-2xl">
                  {p.title}
                </h3>

                <p className="relative text-[15px] leading-[1.62] text-mid">{p.body}</p>
                <p className="relative text-[15px] leading-[1.62] text-mid">{p.detail}</p>

                <div className="relative mt-auto flex flex-wrap gap-2 pt-2">
                  {p.kpis.map((k) => (
                    <span key={k} className="kpi">
                      {k}
                    </span>
                  ))}
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
