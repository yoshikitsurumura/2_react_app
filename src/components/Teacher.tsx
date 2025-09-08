import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Teacher = () => {
  return (
    <AnimatedSection id="teacher" className="reveal">
      <div className="container">
        <h2>講師紹介</h2>
        <div className="teacher-profile">
          <motion.div 
            className="teacher-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src="/images/teacher_profile.jpg" alt="プロフェッショナルな男性講師" width="160" height="160" loading="lazy" decoding="async" />
          </motion.div>
          <motion.div 
            className="teacher-details"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>当塾の指導講師</h3>
            <ul>
              <li>✔ 大学受験指導歴 6年</li>
              <li>✔ 看護師国家試験合格指導経験多数</li>
              <li>✔ 秋田大学教育文化学部卒業</li>
            </ul>
            <p>
              「生徒一人ひとりの目標に合わせて、丁寧に指導します。わからないをそのままにせず、根本から理解を促すことを心がけています。」
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Teacher;
