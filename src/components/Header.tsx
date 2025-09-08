import { useEffect, useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('#hero');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
        setIsNavOpen(false); // モバイルメニューを閉じる
      }
    }
  };

  // スクロールスパイ（現在地ハイライト）
  useEffect(() => {
    const sectionIds = ['#hero', '#features', '#services', '#schedule', '#pricing', '#flow', '#faq', '#cta'];
    const elements = sectionIds
      .map((id) => document.querySelector(id))
      .filter((el): el is Element => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActiveId(id);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header" role="banner">
      <div className="container nav-container">
        <a href="#hero" className="brand" aria-label="秋田オンライン塾 トップへ" onClick={handleNavClick}>
          <span className="brand-mark">
            <img src="/images/logo.png" alt="秋田オンライン塾 ロゴ" width="36" height="36" decoding="async" />
          </span>
          <span className="brand-name">秋田オンライン塾</span>
        </a>
        <button 
          className="nav-toggle" 
          aria-expanded={isNavOpen} 
          aria-controls="site-nav" 
          aria-label="メニューを開閉"
          onClick={toggleNav}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav 
          id="site-nav" 
          className={`site-nav ${isNavOpen ? 'is-active' : ''}`} 
          role="navigation"
        >
          <ul>
            <li><a href="#features" onClick={handleNavClick} className={activeId === '#features' ? 'active' : ''}>特徴</a></li>
            <li><a href="#services" onClick={handleNavClick} className={activeId === '#services' ? 'active' : ''}>授業内容</a></li>
            <li><a href="#schedule" onClick={handleNavClick} className={activeId === '#schedule' ? 'active' : ''}>時間割</a></li>
            <li><a href="#pricing" onClick={handleNavClick} className={activeId === '#pricing' ? 'active' : ''}>料金</a></li>
            <li><a href="#flow" onClick={handleNavClick} className={activeId === '#flow' ? 'active' : ''}>流れ</a></li>
            <li><a href="#faq" onClick={handleNavClick} className={activeId === '#faq' ? 'active' : ''}>FAQ</a></li>
            <li><a className="nav-cta" href="#cta" onClick={handleNavClick}>体験申込</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
