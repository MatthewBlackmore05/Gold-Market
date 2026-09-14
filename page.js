'use client';

import { useState } from 'react';

function Mark() {
  return <svg className="mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 5 57 29 32 59 7 29 32 5Zm0 10L19.5 29 32 48.5 44.5 29 32 15Z" fill="currentColor"/><path d="M19.5 29h25M32 15v33.5" fill="none" stroke="currentColor" strokeWidth="2.4"/></svg>;
}

const services = [
  ['✦', 'Sell precious metals', 'Bring in gold, silver, platinum or unwanted jewellery for a clear, on-the-spot offer.'],
  ['◇', 'Fine jewellery', 'Find a remarkable piece, from everyday essentials to something worth celebrating.'],
  ['◌', 'Repairs & restoration', 'Resize, restore or revive the pieces that still mean the world to you.'],
  ['↗', 'Custom design', 'Turn a sketch, a stone or a story into a piece made entirely for you.']
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return <main>
    <div className="announcement">NIAGARA&apos;S TRUSTED JEWELLER <span>•</span> PERSONAL SERVICE, ON SITE</div>
    <header>
      <a className="brand" href="#top" aria-label="Aurum Market home"><Mark /><span>AURUM<small>MARKET</small></span></a>
      <nav className={open ? 'open' : ''}>
        <a href="#services" onClick={() => setOpen(false)}>Services</a><a href="#about" onClick={() => setOpen(false)}>Our story</a><a href="#visit" onClick={() => setOpen(false)}>Visit us</a>
        <a className="nav-cta" href="tel:19059375375">Call us</a>
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu"><i></i><i></i></button>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">ST. CATHARINES, ONTARIO</p><h1>Worth more<br/><em>than gold.</em></h1><p className="intro">A more personal way to buy, sell, create and care for the pieces that matter.</p><div className="actions"><a className="button" href="#visit">Visit the shop <b>→</b></a><a className="text-link" href="#services">Explore our services <b>↓</b></a></div></div>
      <div className="hero-image"><div className="image-shade"></div><p>EST. 1998</p></div>
      <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>01 — 04</span></div>
    </section>

    <section className="promise"><p className="eyebrow">OUR PROMISE</p><h2>Good work. Honest value.<br/>No <em>guesswork.</em></h2><p>Whether you are parting with a family piece or choosing one to begin a new chapter, we make every interaction feel straightforward and considered.</p></section>

    <section className="services" id="services"><div className="section-title"><p className="eyebrow">WHAT WE DO</p><h2>For every kind<br/>of <em>treasure.</em></h2></div><div className="service-list">{services.map(([symbol, title, copy], i) => <article key={title}><span className="service-no">0{i + 1}</span><div className="service-symbol">{symbol}</div><div><h3>{title}</h3><p>{copy}</p></div><a href="#visit" aria-label={`Learn about ${title}`}>↗</a></article>)}</div></section>

    <section className="split" id="about"><div className="split-photo"></div><div className="split-copy"><p className="eyebrow">THE AURUM APPROACH</p><h2>Jewellery is<br/><em>personal.</em></h2><p>We believe the best service leaves you feeling confident—not hurried. Our local team brings decades of knowledge to every purchase, repair and design conversation.</p><a href="#visit" className="text-link">Meet the team <b>→</b></a></div></section>

    <section className="quote"><span>“</span><blockquote>Old-world care,<br/><em>made for today.</em></blockquote></section>

    <section className="visit" id="visit"><div><p className="eyebrow">COME SAY HELLO</p><h2>See it<br/>for <em>yourself.</em></h2><a className="button light" href="https://maps.google.com/?q=600+Ontario+St+St+Catharines+ON+L2N+7H8" target="_blank">Get directions <b>↗</b></a></div><div className="contact"><div><span>VISIT</span><p>600 Ontario St<br/>St. Catharines, ON L2N 7H8</p></div><div><span>CONTACT</span><p><a href="tel:19059375375">(905) 937-5375</a><br/><a href="mailto:thegoldmarket600@gmail.com">thegoldmarket600@gmail.com</a></p></div><div><span>HOURS</span><p>Tuesday–Friday 10–5<br/>Saturday 10–4</p></div></div></section>

    <footer><a className="brand footer-brand" href="#top"><Mark /><span>AURUM<small>MARKET</small></span></a><p>© {new Date().getFullYear()} Aurum Market. Built with care in Niagara.</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
