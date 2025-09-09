import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>秋田オンライン塾｜AI×個別で伸ばすオンライン専門塾</title>
        <meta name="description" content="秋田発のオンライン専門塾。AI×個別指導で効率よく伸ばす。入会金無料キャンペーン実施中。小学生〜高校生・大学受験・社会人まで幅広く対応。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0D47A1" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="秋田オンライン塾｜AI×個別で伸ばすオンライン専門塾" />
        <meta property="og:description" content="AI×個別指導で効率よく伸ばす。入会金無料キャンペーン実施中。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoshikitsurumura.github.io/akita_online_juku/" />
        <meta property="og:image" content="/images/josikousei.jpg" />
        <meta property="og:site_name" content="秋田オンライン塾" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="秋田オンライン塾｜AI×個別で伸ばすオンライン専門塾" />
        <meta name="twitter:description" content="AI×個別指導で効率よく伸ばす。入会金無料キャンペーン実施中。" />
        <meta name="twitter:image" content="/images/josikousei.jpg" />
        <link rel="icon" href="/images/icon.png" type="image/png" />
        <link rel="canonical" href="https://yoshikitsurumura.github.io/akita_online_juku/" />
        <script type="application/ld+json">
          {`
          {\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"LocalBusiness\",\n  \"name\": \"秋田オンライン塾\",\n  \"url\": \"https://yoshikitsurumura.github.io/akita_online_juku/\",\n  \"image\": \"/images/josikousei.jpg\",\n  \"description\": \"AI×個別で伸ばすオンライン専門塾。入会金無料キャンペーン実施中。\",\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"addressLocality\": \"秋田市\",\n    \"addressRegion\": \"秋田県\",\n    \"addressCountry\": \"JP\"\n  },\n  \"sameAs\": [\n    \"https://line.me/R/ti/p/@akita_online_juku\"\n  ]\n}\n          `}
        </script>
      </Helmet>
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