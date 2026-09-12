(() => {
  const data = window.DCUT_DATA || { categories: [] };
  document.documentElement.style.setProperty('--accent', data.accent || '#83ff77');
  const categories = data.categories || [];
  const grid = document.getElementById('featuredGrid');
  const list = document.getElementById('archiveList');
  const strip = document.getElementById('filmStrip');
  document.getElementById('archiveCount').textContent = `${String(categories.length).padStart(3,'0')} CATEGORIES`;

  function categoryCard(c){
    const style = c.image ? `style="background-image:url('${c.image.replace(/'/g, "\\'")}')"` : '';
    return `<a class="project-card" data-has-image="${!!c.image}" href="${c.href}" target="_blank" rel="noreferrer">
      <div class="project-media" ${style}></div>
      <div class="project-overlay">
        <div class="project-top"><span class="project-tag">CATEGORY_${c.id}</span><span class="project-id">DCUT_${c.id}</span></div>
        <div class="project-bottom"><div><div class="project-title">${c.title}</div><div class="project-sub">${c.subtitle}</div></div><span>↗</span></div>
      </div>
    </a>`;
  }
  grid.innerHTML = categories.map(categoryCard).join('');

  list.innerHTML = categories.map(c => `<a class="archive-row" href="${c.href}" target="_blank" rel="noreferrer">
    <span class="meta">${c.id}</span><span class="name">${c.title}</span><span class="meta type">CATEGORY</span><span class="meta year">OPEN</span><span>↗</span>
  </a>`).join('');

  strip.innerHTML = categories.map(c => `<div class="film-frame">${c.image ? `<img src="${c.image}" alt="${c.title}">` : `<div class="blank-frame">${c.id}</div>`}</div>`).join('');

  const reel = document.getElementById('reel');
  function onScroll(){
    const scrollY = window.scrollY;
    reel.style.transform = `rotate(${scrollY * 0.13}deg) rotateX(8deg)`;
    const archive = document.getElementById('archive');
    const r = archive.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight - r.top) / (window.innerHeight + r.height)));
    strip.style.setProperty('--filmY', `${-progress * Math.max(0, strip.scrollHeight - (window.innerHeight*.5))}px`);
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  const cursor = document.getElementById('cursorFrame');
  window.addEventListener('mousemove', e => { cursor.style.left = e.clientX+'px'; cursor.style.top = e.clientY+'px'; });

  const canvas = document.getElementById('noise');
  const ctx = canvas.getContext('2d', { alpha: true });
  function resize(){ canvas.width = Math.max(1, Math.floor(innerWidth/3)); canvas.height = Math.max(1, Math.floor(innerHeight/3)); }
  resize(); addEventListener('resize', resize);
  function drawNoise(){
    const img = ctx.createImageData(canvas.width, canvas.height); const d = img.data;
    for(let i=0;i<d.length;i+=4){ const v=Math.random()*255; d[i]=d[i+1]=d[i+2]=v; d[i+3]=Math.random()*85; }
    ctx.putImageData(img,0,0); requestAnimationFrame(drawNoise);
  } drawNoise();

  let soundOn=false; const soundBtn=document.getElementById('soundToggle');
  soundBtn.addEventListener('click',()=>{soundOn=!soundOn;soundBtn.textContent=`SFX: ${soundOn?'ON':'OFF'}`;soundBtn.setAttribute('aria-pressed',String(soundOn));});

  const mail = document.querySelector('a[href^="mailto:"]'); if(mail && data.contactEmail) mail.href = `mailto:${data.contactEmail}`;
})();
