import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Teacher from './components/Teacher';
import Flow from './components/Flow';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Schedule />
        <Pricing />
        <Teacher />
        <Flow />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}

export default App;
