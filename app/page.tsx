import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-stone-900 dark:text-slate-100 selection:bg-amber-500 selection:text-slate-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Achievements />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
