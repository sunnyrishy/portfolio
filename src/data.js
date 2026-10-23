// Single source of truth for the copy. Kept short on purpose: every card points to
// GitHub, where each project's README carries the full detail.
// Source: Sunny Rishy Vardhan's resume.

export const profile = {
  name: 'Sunny Rishy Vardhan',
  role: 'Software Engineer',
  email: 'sunnyrishyvardhan@gmail.com',
  resume: '/Sunny_Rishy_Vardhan_Resume.pdf',
  intro:
    'I am a software engineer with an M.S. in Computer Science. I like building in modern C++, Python and Linux, and I enjoy concurrent systems, performance work and a good debugging session.',
  lookingFor: 'Open to software engineer and C++ developer roles.',
};

export const links = {
  github: 'https://github.com/sunnyrishy',
  linkedin: 'https://www.linkedin.com/in/sunny-rishy-vardhan-0b8ab6221/',
};

export const projects = [
  {
    title: 'High Frequency Trading Simulation Engine',
    body: 'A C++17 trading engine simulation built around a lock free order book, with benchmarks and a full test suite.',
    stack: ['C++17', 'CMake', 'Python'],
    github: 'https://github.com/sunnyrishy/high-frequency-trading-engine',
  },
  {
    title: 'File Search Engine',
    body: 'Full text search in C++17 using an inverted index and TF-IDF ranking, with no external dependencies.',
    stack: ['C++17', 'GCC', 'Linux'],
    github: 'https://github.com/sunnyrishy/file-search-engine-cpp',
  },
  {
    title: 'Adaptive Learning Platform',
    body: 'A full stack learning app whose FastAPI backend adapts content to each learner. Live in production.',
    stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/sunnyrishy/adaptive-learning-platform',
    live: 'https://adaptive-learning-platform-dun.vercel.app',
  },
];

export const openSource = {
  repo: 'express-rate-limit',
  body: 'A merged feature contribution to a popular Node.js package with over 49 million weekly npm downloads.',
  stack: ['TypeScript', 'Node.js'],
  pr: 'https://github.com/express-rate-limit/express-rate-limit/pull/661',
};

export const experience = [
  {
    role: 'Graduate Research Assistant',
    org: 'Adelphi University',
    when: 'Nov 2024 to Present',
    body: 'Research in algorithm design and optimization, with Python experiments, benchmarking and analysis.',
  },
  {
    role: 'Open Source Contributor',
    org: 'express-rate-limit',
    when: 'Jun 2026 to Aug 2026',
    body: 'Shipped a merged upstream feature in TypeScript, with tests and CI kept green.',
  },
];

export const education = {
  degree: 'M.S. in Computer Science',
  school: 'Adelphi University',
  when: 'Aug 2024 to May 2026',
  note: 'GPA 3.84 / 4.0. Member of Upsilon Pi Epsilon, the international honor society for computing.',
};

export const skills = [
  { group: 'Languages', items: ['C++17/20', 'Python', 'Java', 'SQL', 'TypeScript', 'Bash'] },
  { group: 'C++ and systems', items: ['STL', 'OOP', 'RAII', 'Smart pointers', 'Multithreading', 'Atomics', 'Memory management'] },
  { group: 'Tools and platforms', items: ['CMake', 'GCC', 'MSVC', 'Linux', 'Windows', 'Git', 'Docker'] },
  { group: 'Engineering', items: ['Data structures', 'Algorithms', 'Debugging', 'Unit testing', 'Profiling', 'Benchmarking', 'CI/CD'] },
];
