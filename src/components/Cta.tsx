import AnimatedSection from './AnimatedSection';

const Cta = () => {
  return (
    <AnimatedSection id="cta" className="reveal">
      <div className="container">
        <h2>本気で伸ばすなら、今すぐ。</h2>
        <p>入会金無料キャンペーンは先着20名様限定です。お早めにお問い合わせください。</p>
        <a href="https://line.me/R/ti/p/@akita_online_juku" target="_blank" rel="noopener noreferrer" className="btn btn-primary">LINEで体験授業を申し込む</a>
        <div className="qr-code">
          <img src="/images/line-qr.png" alt="LINE公式アカウントQRコード" width="140" height="140" />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Cta;
