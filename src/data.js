// Single source of truth for every piece of copy on the page.
// Sourced from Sunny Rishy Vardhan's resume and from the GitHub API for merged PRs.

export const profile = {
  name: 'Sunny Rishy Vardhan',
  role: 'C and C++ Systems Engineer',
  location: 'Jersey City, NJ',
  phone: '+1 860 997 9603',
  email: 'sunnyrishyvardhan@gmail.com',
  resume: '/Sunny_Rishy_Vardhan_Resume.pdf',
  availability: 'Open to Summer 2026 internships and new grad roles',
  headline: ['Nanoseconds are a', 'design', 'decision.'],
  summary:
    'Software engineer with an M.S. in Computer Science and strong C and C++ skills on Linux. I build real time multi threaded systems, and I care about what the profiler says more than what the design doc promises.',
};

export const links = {
  github: 'https://github.com/sunnyrishy',
  linkedin: 'https://linkedin.com/in/sunny-rishy-vardhan-0b8ab6221',
  leetcode: 'https://leetcode.com/u/sunnyrishyvardhan',
  codeforces: 'https://codeforces.com/profile/sunnyrishyvardhan',
};

export const metrics = [
  { to: 1.4, decimals: 1, suffix: 'M', label: 'events per second, systems engine' },
  { to: 400, decimals: 0, suffix: 'ns', label: 'operation latency at that throughput' },
  { to: 49.8, decimals: 1, suffix: 'M', label: 'weekly downloads on a package I ship to' },
  { to: 3.84, decimals: 2, suffix: '', label: 'GPA, M.S. Computer Science' },
];

export const projects = [
  {
    span: 'wide',
    title: 'Real Time Multi Threaded Systems Engine',
    stack: ['C', 'C++17', 'Linux', 'perf', 'gdb'],
    body: 'A real time multi threaded engine built from scratch on Linux, processing 1.4M events per second at 400ns operation latency. Lock free queues, atomics and cache line aware memory layouts, designed around how the kernel actually schedules and manages memory rather than around an abstraction.',
    detail:
      'Kernel level profiling with perf plus elimination of heap allocations on the critical path drove a 25x throughput improvement, validated by microbenchmarks at every step. Race conditions, memory corruption and latency spikes were traced across the user space and kernel boundary with gdb and strace until each root cause was isolated.',
    kpis: ['1.4M events/sec', '400ns per operation', '25x throughput', 'zero hot path allocations'],
  },
  {
    span: 'half',
    title: 'Linux Network Service and Protocol Stack Handler',
    stack: ['C++17', 'PostgreSQL', 'Docker', 'TCP/IP'],
    body: 'A multi threaded network service on Linux built directly on TCP and IP socket programming. Async IO, connection pooling and thread safe request routing hold response times under 50ms across concurrent clients.',
    detail:
      'Deadlocks and protocol level failures were debugged with gdb and strace backed by structured logging, with unit and integration coverage across all modules. Containerized with Docker and released through automated CI and CD pipelines.',
    kpis: ['under 50ms response', 'concurrent clients', 'full module test coverage'],
  },
  {
    span: 'half',
    title: 'High Performance Indexing and Data Structures Engine',
    stack: ['C++', 'STL'],
    body: 'An indexing and retrieval engine built on deliberate data structure design. It processes 136K tokens across 1,005 documents in under a second at 145K tokens per second, answering queries in 2.36ms on average.',
    detail:
      'Container selection and allocation strategy tuning cut the memory footprint by 30% while holding sub millisecond response under concurrent load.',
    kpis: ['145K tokens/sec', '2.36ms query latency', '30% less memory'],
  },
];

// Merged pull requests, read from the GitHub API for github.com/sunnyrishy.
export const contributions = [
  {
    repo: 'express-rate-limit',
    org: 'express-rate-limit',
    stars: '3.3k',
    downloads: '49.8M weekly downloads',
    number: 661,
    title: 'feat: add retryAfter option',
    body: 'Lets consumers set the Retry-After header independently of the rate limit window, across the middleware and the type system. Merged after maintainer review.',
    additions: 80,
    deletions: 2,
    date: 'Aug 2026',
    url: 'https://github.com/express-rate-limit/express-rate-limit/pull/661',
  },
  {
    repo: 'ebuild',
    org: 'embeddedos-org',
    stars: '7',
    number: 45,
    title: "fix(cli): report ninja's diagnostics when a build fails",
    body: "The build tool swallowed ninja's stderr, so a failed build surfaced as a bare exit code with nothing to act on.",
    additions: 117,
    deletions: 2,
    date: 'Aug 2026',
    url: 'https://github.com/embeddedos-org/ebuild/pull/45',
  },
  {
    repo: 'eos',
    org: 'embeddedos-org',
    stars: '8',
    number: 48,
    title: 'fix(tests): stop test_package overflowing the stack on small stack hosts',
    body: 'Moved a large fixture off the stack so the suite passes on constrained CI runners instead of crashing on them.',
    additions: 13,
    deletions: 6,
    date: 'Aug 2026',
    url: 'https://github.com/embeddedos-org/eos/pull/48',
  },
  {
    repo: 'eBoot',
    org: 'embeddedos-org',
    stars: '6',
    number: 36,
    title: 'fix(runtime): pass a reset type, not a reason, to reset_system',
    body: "Corrected an argument mismatch in the bootloader's reset path.",
    additions: 21,
    deletions: 2,
    date: 'Aug 2026',
    url: 'https://github.com/embeddedos-org/eBoot/pull/36',
  },
];

export const experience = [
  {
    role: 'Merged Contributor, express-rate-limit',
    org: 'Open Source',
    place: 'Remote',
    when: 'Jun 2026 to Aug 2026',
    stack: 'TypeScript, Node.js, Express',
    points: [
      "Implemented and shipped a retryAfter configuration feature across express-rate-limit's middleware and type system, landing a production PR merged after maintainer review on a package with 49.8M weekly npm downloads.",
      'Built an isolated reproduction harness with a live Dockerized Redis instance to diagnose a suspected store recovery bug, validating real failure behavior and correcting an initial hypothesis before shipping a fix.',
    ],
  },
  {
    role: 'Graduate Research Assistant in Algorithms and Systems',
    org: 'Adelphi University',
    place: 'Garden City, NY',
    when: 'Nov 2025 to May 2026',
    stack: 'Python, shell, graph optimization',
    points: [
      'Research under Dr. Sixia Chen. Designed and implemented 3 novel optimization algorithms on a 1.8M edge real world dataset, improving solution quality 0.293% over the state of the art baseline with provable performance guarantees.',
      'Built automated benchmarking infrastructure across 100+ randomized trials in Python and shell, then analyzed the results to isolate bottlenecks and drive measurable improvements.',
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['C', 'C++17', 'Python', 'Bash', 'Java', 'SQL'] },
  {
    group: 'Operating systems',
    items: ['Linux', 'UNIX', 'Kernel concepts', 'Process scheduling', 'Memory management', 'IPC', 'Concurrency'],
  },
  {
    group: 'Embedded and platform',
    items: ['Embedded systems', 'Real time software', 'Hardware software integration', 'IoT'],
  },
  {
    group: 'Networking',
    items: ['TCP', 'UDP', 'IP', 'Socket programming', 'Protocol handling', 'Computer networks'],
  },
  {
    group: 'Core fundamentals',
    items: ['Object oriented design', 'Algorithms', 'Complexity analysis', 'Compiler construction', 'Software architecture'],
  },
  {
    group: 'Debugging and tools',
    items: ['gdb', 'strace', 'perf', 'Structured logging', 'Root cause analysis', 'Git', 'Docker', 'CMake', 'CI and CD'],
  },
];

export const education = [
  {
    degree: "Master's, Computer and Information Sciences",
    school: 'Adelphi University',
    when: 'Aug 2024 to May 2026',
    place: 'Garden City, NY',
    detail: 'GPA 3.84 / 4.0',
    note: 'Inducted into Upsilon Pi Epsilon, the international honor society for computing. Coursework in Advanced Operating Systems, Compiler Construction, Advanced Algorithms and Database Management Systems.',
  },
  {
    degree: "Bachelor's, Computer Science and Engineering",
    school: 'National Institute of Technology, Andhra Pradesh',
    when: 'Aug 2020 to May 2024',
    place: 'Andhra Pradesh, India',
    detail: 'GPA 7.4 / 10.0',
    note: 'Coursework in Operating Systems, Data Structures and Algorithms, Object Oriented Programming, Computer Networks, and Microprocessors and Embedded Systems.',
  },
];

export const leadership = [
  {
    role: 'Mentor and Student Judge',
    org: 'Women in STEM Event, Adelphi University',
    when: 'Apr 2026',
    note: 'Evaluated participant projects and guided aspiring students in computing and engineering.',
  },
  {
    role: 'Joint Secretary',
    org: 'E-Yantra Robotics Club, NIT Andhra Pradesh',
    when: 'Aug 2023 to May 2024',
    note: 'Led 10+ hands on workshops on robotics, IoT and embedded systems for 50+ students, and coordinated a robotics competition attracting 200+ participants.',
  },
];

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];
