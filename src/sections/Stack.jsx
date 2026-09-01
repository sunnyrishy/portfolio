import { skills, education } from '../data';
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal';

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">Stack</div>
          <h2 className="h2">What I reach for.</h2>
        </Reveal>

        <RevealGroup step={0.07} className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
          {skills.map((group) => (
            <RevealItem key={group.group}>
              <div className="surface h-full p-7">
                <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-dim">
                  {group.group}
                </h4>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-24">
          <div className="eyebrow">Education</div>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {education.map((e) => (
            <RevealItem key={e.school}>
              <div className="surface h-full p-7">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{e.degree}</h3>
                  <span className="whitespace-nowrap font-mono text-xs text-dim">{e.when}</span>
                </div>
                <p className="mt-2 text-[15px]" style={{ color: 'oklch(0.74 0.15 232)' }}>
                  {e.school} · {e.detail}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mid">{e.note}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
