import { experience, leadership } from '../data';
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">Experience</div>
          <h2 className="h2">Where I have worked.</h2>
        </Reveal>

        <RevealGroup className="mt-12 flex flex-col gap-12 border-l border-hairline pl-8 md:mt-16 md:pl-10">
          {experience.map((job) => (
            <RevealItem key={job.role}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute top-2 h-2.5 w-2.5 rounded-full bg-canvas"
                  style={{
                    left: 'calc(-2rem - 5px)',
                    border: '1px solid oklch(0.74 0.15 232)',
                  }}
                />
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-5">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] md:text-[23px]">
                    {job.role}
                  </h3>
                  <span className="whitespace-nowrap font-mono text-xs text-dim">{job.when}</span>
                </div>
                <p className="mt-2 text-[15px]" style={{ color: 'oklch(0.74 0.15 232)' }}>
                  {job.org} · {job.place} · {job.stack}
                </p>
                <ul className="mt-3.5 flex list-disc flex-col gap-2 pl-5">
                  {job.points.map((pt) => (
                    <li key={pt} className="text-[15px] leading-relaxed text-mid">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-24">
          <div className="eyebrow">Leadership</div>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {leadership.map((l) => (
            <RevealItem key={l.org}>
              <div className="surface h-full p-7">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{l.role}</h3>
                  <span className="whitespace-nowrap font-mono text-xs text-dim">{l.when}</span>
                </div>
                <p className="mt-2 text-[15px]" style={{ color: 'oklch(0.74 0.15 232)' }}>
                  {l.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mid">{l.note}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
