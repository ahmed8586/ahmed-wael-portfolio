import HeroScrollSequence from '@/components/HeroScrollSequence';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import EducationCertifications from '@/components/EducationCertifications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <HeroScrollSequence />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <EducationCertifications />
      <Contact />
    </>
  );
}
