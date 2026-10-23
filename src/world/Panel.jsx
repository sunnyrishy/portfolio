import { useState } from 'react';
import CountUp from '../components/CountUp';
import { ArrowRight, Download, Merge, Star } from '../components/icons';
import { profile, links, metrics, projects, contributions, experience, skills, education, leadership } from '../data';

const Eyebrow = ({ children }) => (
  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{children}</p>
);

const Title = ({ children }) => (
  <h2 className="mt-2 text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[34px]">{children}</h2>
);

function About() {
  return (
    <>
      <Eyebrow>Home</Eyebrow>
      <Title>Hey, I'm Sunny. Welcome to my little town.</Title>
      <p className="mt-4 leading-relaxed text-mid">
        I'm a {profile.role.toLowerCase()} based in {profile.location}. I build real time, multi threaded systems on
        Linux and I care more about what the profiler says than what the design doc promises.
      </p>
      <p className="mt-3 leading-relaxed text-mid">
        Instead of a boring page of bullet points I built a town. Each building is a part of my story. Walk around,
        click a landmark, and dig in. You can also use the menu in the corner if you are in a hurry.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-hairline bg-white/[0.03] p-4">
            <div className="font-mono text-2xl font-medium text-ink">
              <CountUp to={m.to} decimals={m.decimals} suffix={m.suffix} />
            </div>
            <div className="mt-1 text-xs leading-snug text-dim">{m.label}</div>
          </div>
        ))}
      </div>
      <p className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-ink">{profile.availability}.</p>
      <a className="btn-primary mt-4" href={profile.resume} download>
        <Download /> Download resume
      </a>
    </>
  );
}

function Projects() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <Eyebrow>Engine Works</Eyebrow>
      <Title>Things I built</Title>
      <p className="mt-3 text-mid">Three systems, each measured instead of guessed at. Tap one to see how it went.</p>
      <div className="mt-6 space-y-3">
        {projects.map((p, i) => (
          <div key={p.title} className="rounded-2xl border border-hairline bg-white/[0.03]">
            <button
              className="flex w-full items-start justify-between gap-4 p-5 text-left"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span className="font-semibold leading-snug">{p.title}</span>
              <span className="mt-1 font-mono text-accent">{open === i ? '−' : '+'}</span>
            </button>
            <div className="px-5 pb-5" hidden={open !== i}>
              <p className="text-sm leading-relaxed text-mid">{p.body}</p>
              <p className="mt-3 text-sm leading-relaxed text-mid">{p.detail}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.kpis.map((k) => (
                  <span key={k} className="kpi">
                    {k}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                View on GitHub <ArrowRight />
              </a>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function OpenSource() {
  return (
    <>
      <Eyebrow>Signal Tower</Eyebrow>
      <Title>Code I got merged into other people's repos</Title>
      <p className="mt-3 text-mid">Real maintainers reviewed these and shipped them.</p>
      <div className="mt-6 space-y-3">
        {contributions.map((c) => (
          <a
            key={c.url}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border border-hairline bg-white/[0.03] p-5 transition hover:border-hairline2 hover:bg-white/[0.06]"
          >
            <div className="flex items-center justify-between gap-3 text-xs text-dim">
              <span className="font-mono">
                {c.org}/{c.repo} #{c.number}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-positive/15 px-2 py-0.5 text-positive">
                <Merge /> merged
              </span>
            </div>
            <div className="mt-2 font-semibold leading-snug">{c.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-mid">{c.body}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-dim">
              <span className="text-positive">+{c.additions}</span>
              <span className="text-negative">-{c.deletions}</span>
              <span className="inline-flex items-center gap-1">
                <Star /> {c.stars}
              </span>
              {c.downloads && <span>{c.downloads}</span>}
              <span className="ml-auto inline-flex items-center gap-1 text-accent transition group-hover:translate-x-0.5">
                View <ArrowRight />
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <Eyebrow>The Lab</Eyebrow>
      <Title>Where I've worked</Title>
      <div className="mt-6 space-y-6">
        {experience.map((e) => (
          <div key={e.role} className="border-l border-hairline2 pl-5">
            <div className="font-mono text-xs text-dim">
              {e.when} · {e.place}
            </div>
            <h3 className="mt-1 font-semibold leading-snug">{e.role}</h3>
            <div className="text-sm text-accent">{e.org}</div>
            <ul className="mt-3 space-y-2.5">
              {e.points.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-mid">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-mono text-xs text-dim">{e.stack}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function Education() {
  return (
    <>
      <Eyebrow>Adelphi Hall</Eyebrow>
      <Title>Degrees and honors</Title>
      <div className="mt-6 space-y-4">
        {education.map((e) => (
          <div key={e.degree} className="rounded-2xl border border-hairline bg-white/[0.03] p-5">
            <div className="font-mono text-xs text-dim">
              {e.when} · {e.place}
            </div>
            <h3 className="mt-1 font-semibold leading-snug">{e.degree}</h3>
            <div className="text-sm text-accent">
              {e.school} · {e.detail}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-mid">{e.note}</p>
          </div>
        ))}
      </div>
      <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Beyond class</h3>
      <div className="mt-3 space-y-4">
        {leadership.map((l) => (
          <div key={l.role} className="border-l border-hairline2 pl-5">
            <div className="font-semibold">{l.role}</div>
            <div className="text-sm text-accent">
              {l.org} · {l.when}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-mid">{l.note}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <Eyebrow>Workbench</Eyebrow>
      <Title>Tools I reach for</Title>
      <div className="mt-6 space-y-5">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="text-sm font-semibold">{g.group}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked, the mailto link still works */
    }
  };
  const rows = [
    ['GitHub', links.github],
    ['LinkedIn', links.linkedin],
  ];
  return (
    <>
      <Eyebrow>Launch Pad</Eyebrow>
      <Title>Let's build something</Title>
      <p className="mt-3 leading-relaxed text-mid">
        {profile.availability}. If you have a hard systems problem, or just want to talk shop, I'd love to hear from
        you.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <button className="btn-ghost" onClick={copy}>
          {copied ? 'Copied' : 'Copy email'}
        </button>
      </div>
      <div className="mt-6 divide-y divide-hairline rounded-2xl border border-hairline">
        {rows.map(([name, url]) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-5 py-4 transition hover:bg-white/[0.05]"
          >
            <span>{name}</span>
            <ArrowRight className="text-dim" />
          </a>
        ))}
        <a href={profile.resume} download className="flex items-center justify-between px-5 py-4 transition hover:bg-white/[0.05]">
          <span>Resume (PDF)</span>
          <Download className="text-dim" />
        </a>
      </div>
      <p className="mt-6 text-sm text-dim">
        Based in {profile.location} · {profile.phone}
      </p>
    </>
  );
}

const views = { about: About, projects: Projects, opensource: OpenSource, experience: Experience, education: Education, skills: Skills, contact: Contact };

export default function PanelBody({ id }) {
  const View = views[id];
  return <View />;
}
