import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Pricing = () => {
  return (
    <AnimatedSection id="pricing" className="reveal">
      <div className="container">
        <h2>料金</h2>
        <motion.div 
          className="price-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="price">月額20,000円<span className="tax-note">（税込）</span></p>
          <p className="note">追加費用は一切ありません</p>
          <motion.span 
            className="badge"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
            viewport={{ once: true }}
          >
            今なら入会金（通常10,000円）無料
          </motion.span>
        </motion.div>
        <motion.ul 
          className="included-list" 
          aria-label="料金に含まれる内容"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <li>オンライン個別指導</li>
          <li>全授業の録画視聴</li>
          <li>振替対応</li>
          <li>LINEでのご質問OK</li>
        </motion.ul>
        <motion.div 
          className="payment-methods"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>お支払い方法：銀行振込・QR決済（順次、口座振替対応予定）</p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Pricing;
