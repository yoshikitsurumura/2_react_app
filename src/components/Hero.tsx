import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.1,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/images/josikousei.jpg" 
              alt="オンライン授業を受ける女子高生" 
              className="hero-image"
            />
            <div className="hero-overlay">
              <motion.div 
                className="hero-akita-marker"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="akita-badge">秋田発</span>
              </motion.div>
              <motion.div 
                className="hero-campaign-marker"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="campaign-badge-small">特別キャンペーン実施中</div>
              </motion.div>
            </div>
            <div className="hero-icon-marker">
              <img src="/images/icon.png" alt="塾のロゴ" className="hero-icon" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeInOut"
            }}
          >
            秋田発。AI×個別で、最短で伸ばすオンライン塾
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: "easeInOut"
            }}
          >
            <a href="https://line.me/R/ti/p/@akita_online_juku" target="_blank" rel="noopener noreferrer" className="btn btn-primary">LINEで体験授業を申し込む</a>
            <a href="#features" className="btn btn-secondary">特徴を見る</a>
          </motion.div>

          <motion.div 
            className="value-chips" 
            aria-label="主なメリット"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: "easeInOut"
            }}
          >
            <span className="chip">今だけ入会金無料</span>
            <span className="chip">体験授業0円</span>
            <span className="chip">全授業録画つき</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
