import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const subjects = ["英語", "数学", "国語", "理科", "社会"];
  const specialSupports = ["AI授業", "小論文・面接対策", "推薦入試対策", "看護師国家試験対策"];

  return (
    <AnimatedSection id="services" className="reveal">
      <div className="container">
        <h2>授業内容（すべてオンライン）</h2>
        <div className="service-grid">
          {subjects.map((subject, index) => (
            <motion.div 
              key={subject}
              className="subject"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {subject}
            </motion.div>
          ))}
        </div>
        <div className="special-support">
          <motion.h3 
            className="support-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            特別サポート
          </motion.h3>
          <div className="support-grid">
            {specialSupports.map((support, index) => (
              <motion.div 
                key={support}
                className="support-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {support}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          className="highlight-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <p>宿題サポートも充実</p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
