import { useState } from 'react';
import { ArrowRight, Download } from '../components/icons';
import { profile, links, projects, openSource, experience, education, skills } from '../data';

const Title = ({ children }) => (
  <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[32px]">{children}</h2>
);

const Link = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
  >
    {children} <ArrowRight />
  </a>
);

const Card = ({ children }) => <div className="rounded-2xl border border-hairline bg-white p-5">{children}</div>;

const Tags = ({ items }) => (
  <div className="mt-3 flex flex-wrap gap-1.5">
    {items.map((s) => (
      <span key={s} className="tag">
        {s}
      </span>
    ))}
  </div>
);

function About() {
  return (
    <>
      <Title>Hi, I'm Sunny.</Title>
      <p className="mt-4 leading-relaxed text-mid">{profile.intro}</p>
      <p className="mt-3 leading-relaxed text-mid">{profile.lookingFor}</p>
      <a className="btn-primary mt-6" href={profile.resume} download>
        <Download /> Download resume
      </a>
    </>
  );
}

function Projects() {
  return (
    <>
      <Title>Projects</Title>
      <div className="mt-6 space-y-3">
        {projects.map((p) => (
          <Card key={p.title}>
            <h3 className="font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mid">{p.body}</p>
            <Tags items={p.stack} />
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              <Link href={p.github}>GitHub</Link>
              {p.live && <Link href={p.live}>Live site</Link>}
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-5 text-sm text-dim">Each repo has a README with the full write up.</p>
    </>
  );
}

function OpenSource() {
  return (
    <>
      <Title>Open Source</Title>
      <div className="mt-6">
        <Card>
          <h3 className="font-semibold">{openSource.repo}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mid">{openSource.body}</p>
          <Tags items={openSource.stack} />
          <div className="mt-4">
            <Link href={openSource.pr}>View the pull request</Link>
          </div>
        </Card>
      </div>
      <div className="mt-5">
        <Link href={links.github}>More on GitHub</Link>
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <Title>Experience</Title>
      <div className="mt-6 space-y-6">
        {experience.map((e) => (
          <div key={e.role} className="border-l-2 border-accent/40 pl-5">
            <div className="font-mono text-xs text-dim">{e.when}</div>
            <h3 className="mt-1 font-semibold leading-snug">{e.role}</h3>
            <div className="text-sm text-accent">{e.org}</div>
            <p className="mt-2 text-sm leading-relaxed text-mid">{e.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function Education() {
  return (
    <>
      <Title>Education</Title>
      <div className="mt-6">
        <Card>
          <div className="font-mono text-xs text-dim">{education.when}</div>
          <h3 className="mt-1 font-semibold leading-snug">{education.degree}</h3>
          <div className="text-sm text-accent">{education.school}</div>
          <p className="mt-3 text-sm leading-relaxed text-mid">{education.note}</p>
        </Card>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <Title>Skills</Title>
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
  return (
    <>
      <Title>Let's talk</Title>
      <p className="mt-3 leading-relaxed text-mid">{profile.lookingFor}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <button className="btn-ghost" onClick={copy}>
          {copied ? 'Copied' : 'Copy email'}
        </button>
      </div>
      <div className="mt-6 divide-y divide-hairline rounded-2xl border border-hairline bg-white">
        {[
          ['GitHub', links.github],
          ['LinkedIn', links.linkedin],
        ].map(([name, url]) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-5 py-4 transition hover:bg-ink/[0.04]"
          >
            <span>{name}</span>
            <ArrowRight className="text-dim" />
          </a>
        ))}
        <a href={profile.resume} download className="flex items-center justify-between px-5 py-4 transition hover:bg-ink/[0.04]">
          <span>Resume (PDF)</span>
          <Download className="text-dim" />
        </a>
      </div>
    </>
  );
}

const views = { about: About, projects: Projects, opensource: OpenSource, experience: Experience, education: Education, skills: Skills, contact: Contact };

export default function PanelBody({ id }) {
  const View = views[id];
  return <View />;
}
