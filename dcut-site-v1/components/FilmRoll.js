'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

export default function FilmRoll() {
  const wrapRef = useRef(null);
  const reelRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(reelRef.current, {
        rotate: 1080, ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.6 }
      });
      gsap.fromTo(stripRef.current, { yPercent: -34 }, {
        yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.5 }
      });
      gsap.to(wrapRef.current, {
        xPercent: 8, ease: 'none',
        scrollTrigger: { trigger: '#archive', start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="film-system" ref={wrapRef} aria-hidden="true">
      <div className="reel" ref={reelRef}>
        <div className="reel-hole reel-hole-a"/><div className="reel-hole reel-hole-b"/>
        <div className="reel-hole reel-hole-c"/><div className="reel-hole reel-hole-d"/><div className="reel-center"/>
      </div>
      <div className="film-strip" ref={stripRef}>
        {Array.from({ length: 12 }).map((_, index) => {
          const p = projects[index % projects.length];
          return <div className="film-frame" key={`${p.id}-${index}`}>
            <div className="sprockets sprockets-left"/><img src={p.image} alt=""/>
            <div className="frame-label">DCUT // {String(index + 1).padStart(3, '0')}</div>
            <div className="sprockets sprockets-right"/>
          </div>;
        })}
      </div>
    </div>
  );
}
