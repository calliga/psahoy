import Hero from './components/Hero';
import Problem from './components/Problem';
import ForWho from './components/ForWho';
import WhatIncludes from './components/WhatIncludes';
import Benefits from './components/Benefits';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import TopTimerBar from './components/TopTimerBar';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-[60px] sm:pt-[64px]">
      <TopTimerBar />
      <Hero />
      <Problem />
      <ForWho />
      <WhatIncludes />
      <Benefits />
      <Bonuses />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
