import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Features = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0v-2a3 3 0 0 0-3-3Z"/>
          <path d="M12 14a3 3 0 0 0-3 3v2"/>
          <path d="M12 2a3 3 0 0 0-3 3"/>
          <path d="M12 22a3 3 0 0 0 3-3"/>
          <path d="M2 12a3 3 0 0 0 3 3h2a3 3 0 0 0 0-6H5a3 3 0 0 0-3 3Z"/>
          <path d="M22 12a3 3 0 0 0-3-3h-2a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3Z"/>
        </svg>
      ),
      title: "AI＋人のハイブリッド",
      description: "AIによる最適な学習計画と、経験豊富な講師による個別指導を組み合わせ、効率的に学力を伸ばします。"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2"/>
          <line x1="8" x2="16" y1="21" y2="21"/>
          <line x1="12" x2="12" y1="17" y2="21"/>
        </svg>
      ),
      title: "完全オンライン・通塾不要",
      description: "全国どこからでも受講可能。通塾の必要がなく、部活動や他の習い事とも両立しやすい環境です。"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
          <line x1="16" x2="16" y1="2" y2="6"/>
          <line x1="8" x2="8" y1="2" y2="6"/>
          <line x1="3" x2="21" y1="10" y2="10"/>
          <path d="m9 16 2 2 4-4"/>
        </svg>
      ),
      title: "固定時間割＋振替OK",
      description: "学習リズムを作りやすい固定時間割制。急な予定が入っても、柔軟に振替対応が可能です。"
    }
  ];

  return (
    <AnimatedSection id="features" className="reveal">
      <div className="container">
        <h2>当塾の3つの特徴</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Features;
