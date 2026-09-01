import { contributions } from '../data';
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal';
import { Merge, Star } from '../components/icons';

export default function OpenSource() {
  return (
    <section id="open-source" className="section">
      <div className="shell">
        <Reveal>
          <div className="eyebrow">Open source</div>
          <h2 className="h2">
            Merged into other
            <br />
            people&rsquo;s codebases.
          </h2>
          <p className="lede">
            Shipping in a repository you do not own means reading unfamiliar code, matching its
            conventions, and defending the change in review. Every pull request below is merged.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 flex flex-col gap-3 md:mt-14">
          {contributions.map((c) => (
            <RevealItem key={c.url}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-1 items-center gap-4 rounded-2xl border border-hairline
                           bg-surface p-6 transition-colors duration-[350ms] hover:border-hairline2
                           hover:bg-[#131318] lg:grid-cols-[270px_1fr_auto] lg:gap-7 lg:px-8"
              >
                <div className="flex flex-row items-center gap-3 lg:flex-col lg:items-start lg:gap-2.5">
                  <span className="flex items-center gap-2 font-mono text-sm text-ink">
                    {c.org === c.repo ? c.repo : `${c.org}/${c.repo}`}
                    <span className="flex items-center gap-1 font-mono text-[11px] text-dim">
                      <Star />
                      {c.stars}
                    </span>
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px]"
                    style={{
                      color: 'oklch(0.74 0.15 305)',
                      background: 'oklch(0.74 0.15 305 / 0.12)',
                      border: '1px solid oklch(0.74 0.15 305 / 0.25)',
                    }}
                  >
                    <Merge />
                    Merged
                  </span>
                </div>

                <div className="text-[15px] leading-[1.55] text-mid">
                  <span className="font-medium text-ink">{c.title}</span>{' '}
                  <span className="text-dim">#{c.number}</span>
                  <br />
                  {c.body}
                  {c.downloads && (
                    <span className="mt-2 block font-mono text-[11px] text-dim">
                      {c.downloads}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 font-mono text-xs">
                  <span style={{ color: 'oklch(0.78 0.16 150)' }}>+{c.additions}</span>
                  <span style={{ color: 'oklch(0.68 0.17 25)' }}>&minus;{c.deletions}</span>
                  <span className="text-dim">{c.date}</span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
