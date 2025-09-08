const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>秋田オンライン塾</h3>
            <p>秋田市を拠点に、AIとプロ講師の力で全国の生徒の学力を伸ばすオンライン専門塾です。</p>
          </div>
          <div className="footer-links">
            <h3>メニュー</h3>
            <ul>
              <li><a href="#features">当塾の特徴</a></li>
              <li><a href="#services">授業内容</a></li>
              <li><a href="#pricing">料金</a></li>
              <li><a href="#flow">入会までの流れ</a></li>
              <li><a href="#faq">よくある質問</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>お問い合わせ</h3>
            <p>所在地: 秋田県秋田市</p>
            <p>メール: <a href="mailto:info@akita-online.com">info@akita-online.com</a></p>
            <p>LINE: <a href="https://line.me/R/ti/p/@akita_online_juku" target="_blank" rel="noopener noreferrer">公式LINEで質問する</a></p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 秋田オンライン塾. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
