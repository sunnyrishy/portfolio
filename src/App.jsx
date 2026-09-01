import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Work from './sections/Work';
import OpenSource from './sections/OpenSource';
import Experience from './sections/Experience';
import Stack from './sections/Stack';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <OpenSource />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
