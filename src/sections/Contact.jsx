import { profile, links } from '../data';
import Reveal from '../components/Reveal';
import { Download } from '../components/icons';

const social = [
  ['GitHub', links.github],
  ['LinkedIn', links.linkedin],
  ['LeetCode', links.leetcode],
  ['Codeforces', links.codeforces],
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-80px] h-[620px] w-[1100px]
                   -translate-x-1/2 blur-[20px]"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, oklch(0.74 0.15 232 / 0.18), transparent 70%)',
        }}
      />

      <div className="shell relative text-center">
        <Reveal>
          <div className="eyebrow justify-center">Contact</div>
          <h2 className="mt-5 text-[40px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl lg:text-[82px]">
            Let&rsquo;s build
            <br />
            something fast.
          </h2>
          <p className="mx-auto mt-6 max-w-[660px] text-base text-mid md:text-xl">
            {profile.location} · {profile.phone}
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            {profile.email}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-11">
            <a href={`mailto:${profile.email}`} className="pill-primary">
              Email me
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="pill-ghost">
              <Download />
              Résumé
            </a>
            {social.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="pill-ghost">
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="shell relative mt-20">
        <div className="flex flex-col items-center gap-2 border-t border-hairline pt-7 font-mono text-xs text-dim sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
