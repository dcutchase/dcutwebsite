import FilmRoll from '../components/FilmRoll';
import ProjectCard from '../components/ProjectCard';
import { projects, siteConfig } from '../data/site';

export default function HomePage() {
  return <main>
    <FilmRoll />
    <header className="topbar">
      <a className="brand" href="#top">{siteConfig.brand.name}</a>
      <nav><a href="#work">Work</a><a href="#archive">Archive</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    </header>

    <section className="hero" id="top">
      <div className="grain"/>
      <div className="hero-copy">
        <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
        <h1>{siteConfig.brand.name}</h1>
        <p className="hero-longname">{siteConfig.brand.longName}</p>
        <h2>{siteConfig.hero.headline}</h2>
        <p className="hero-subhead">{siteConfig.hero.subhead}</p>
      </div>
      <div className="hero-footer"><span>{siteConfig.brand.location}</span><span>EST. {siteConfig.brand.established}</span><span>SCROLL TO DEVELOP FILM ↓</span></div>
    </section>

    <section className="statement" id="about">
      <p className="section-kicker">DCUT / 000</p>
      <h2>A creative archive for artists, films, events, and ideas that deserve to exist beyond a feed.</h2>
    </section>

    <section className="featured" id="work">
      <div className="section-heading"><p>01 / SELECTED WORK</p><span>CURATED PROJECTS</span></div>
      <div className="featured-grid">{projects.slice(0,2).map(p => <ProjectCard project={p} key={p.id}/>)}</div>
    </section>

    <section className="archive" id="archive">
      <div className="archive-title-wrap">
        <p>02 / ROLL INDEX</p><h2>{siteConfig.archiveLabel}</h2>
        <p>Every project receives an archive number. The site becomes a living record of DCUT instead of a conventional portfolio.</p>
      </div>
      <div className="archive-list">{projects.map(p => <div className="archive-row" key={p.id}><span>{p.id}</span><span>{p.title}</span><span>{p.type}</span><span>{p.year}</span></div>)}</div>
    </section>

    <section className="manifesto"><p className="section-kicker">03 / WHY DCUT</p><div className="manifesto-copy"><h2>NOT JUST A PRODUCTION COMPANY.</h2><p>DCUT is built around documenting creative culture, connecting underground talent, and giving each project a world of its own.</p></div></section>

    <footer id="contact"><div><span>DCUT</span><p>Driven Creatives United Together</p></div><div><p>READY TO BUILD SOMETHING?</p><a href="mailto:hello@dcutcollective.com">hello@dcutcollective.com</a></div></footer>
  </main>;
}
