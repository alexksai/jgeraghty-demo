document.addEventListener('DOMContentLoaded',()=>{
  const logoSrc='assets/GERAGHTY-OFFICIAL-LOGO-WHITE-PNG-scaled.png';
  document.querySelectorAll('.brand img,.logoImg img').forEach(img=>img.src=logoSrc);
  document.querySelectorAll('a.logo').forEach(a=>{a.innerHTML=`<img src="${logoSrc}" alt="J. Geraghty Utility Services">`;a.classList.add('logoImg')});

  const slug=(location.pathname.split('/').pop()||'index.html').replace('.html','');
  document.body.dataset.page=slug;

  const heroPhotos={
    water:'https://www.jgeraghty.co.uk/wp-content/uploads/2019/01/water-1.jpg',
    gas:'https://www.jgeraghty.co.uk/wp-content/uploads/2019/01/gas-1.jpg',
    electricity:'https://www.jgeraghty.co.uk/wp-content/uploads/2019/01/electric-1.jpg',
    bt:'https://demo.jgeraghty.co.uk/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-10-at-15.08.47.jpeg',
    'new-builds':'https://demo.jgeraghty.co.uk/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-10-at-15.08.47.jpeg',
    'grab-wagon-hire':'https://demo.jgeraghty.co.uk/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-10-at-15.09.25.jpeg',
    about:'https://demo.jgeraghty.co.uk/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-10-at-15.08.47.jpeg',
    team:'https://demo.jgeraghty.co.uk/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-10-at-15.08.47.jpeg',
    values:'https://www.jgeraghty.co.uk/wp-content/uploads/2019/01/water-3.jpg',
    news:'https://demo.jgeraghty.co.uk/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-10-at-15.09.25.jpeg',
    recruitment:'https://demo.jgeraghty.co.uk/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-10-at-15.09.25.jpeg',
    testimonials:'https://www.jgeraghty.co.uk/wp-content/uploads/2019/01/gas-1.jpg',
    contact:'https://www.jgeraghty.co.uk/wp-content/uploads/2019/01/electric-1.jpg',
    faq:'https://www.jgeraghty.co.uk/wp-content/uploads/2019/01/water-2.jpg',
    policies:'https://demo.jgeraghty.co.uk/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-10-at-15.08.47.jpeg',
    privacy:'https://demo.jgeraghty.co.uk/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-10-at-15.08.47.jpeg'
  };
  const heroNumbers={water:'01',gas:'02',electricity:'03',bt:'04','new-builds':'05','grab-wagon-hire':'06'};
  const hero=document.querySelector('.hero');
  if(hero && heroPhotos[slug]){
    hero.classList.add('cinematicHero');
    hero.style.setProperty('--hero-image',`url("${heroPhotos[slug]}")`);
    const wrap=hero.querySelector('.wrap');
    if(wrap){
      const originalEy=wrap.querySelector('.ey');
      if(originalEy && heroNumbers[slug]) originalEy.textContent=`${heroNumbers[slug]} / Utility Services`;
      if(!wrap.querySelector('.heroActions')){
        const actions=document.createElement('div');
        actions.className='heroActions';
        actions.innerHTML=`<a class="heroPrimary" href="contact.html">GET A QUOTE <span>↗</span></a><a class="heroSecondary" href="#page-content">EXPLORE SERVICE <span>↓</span></a>`;
        wrap.appendChild(actions);
      }
      const index=document.createElement('div');
      index.className='heroIndex';
      index.innerHTML=`<span>J. GERAGHTY</span><span>${heroNumbers[slug]||'UK'} / 2026</span>`;
      hero.appendChild(index);
    }
    const next=hero.nextElementSibling;
    if(next && next.classList.contains('section')) next.id='page-content';
  }

  const nav=document.querySelector('.navin')||document.querySelector('.homeNav .in');
  if(nav){
    let existing=nav.querySelector('.menu,.hamb,.siteBurger');
    if(existing) existing.remove();
    const btn=document.createElement('button');
    btn.className='siteBurger';btn.type='button';btn.setAttribute('aria-label','Open menu');btn.setAttribute('aria-expanded','false');
    btn.innerHTML='<span></span><span></span><span></span>';
    nav.appendChild(btn);

    const overlay=document.createElement('div');overlay.className='mobileOverlay';
    overlay.innerHTML=`<div class="mobilePanel"><div class="mobileTop"><img src="${logoSrc}" alt="J. Geraghty Utility Services"><button class="mobileClose" aria-label="Close menu">×</button></div><nav class="mobileLinks"><a href="index.html">Home</a><a href="water.html">Water</a><a href="gas.html">Gas</a><a href="electricity.html">Electricity</a><a href="bt.html">BT</a><a href="new-builds.html">New Builds</a><a href="grab-wagon-hire.html">Grab Wagon</a><a href="about.html">About</a><a href="news.html">News</a><a href="faq.html">FAQs</a></nav><a class="mobileCTA" href="contact.html">REQUEST A CALLBACK <span>↗</span></a></div>`;
    document.body.appendChild(overlay);
    const close=()=>{overlay.classList.remove('open');document.body.classList.remove('menuOpen');btn.setAttribute('aria-expanded','false')};
    btn.addEventListener('click',()=>{overlay.classList.add('open');document.body.classList.add('menuOpen');btn.setAttribute('aria-expanded','true')});
    overlay.querySelector('.mobileClose').addEventListener('click',close);
    overlay.addEventListener('click',e=>{if(e.target===overlay)close()});
    overlay.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  }

  if(!document.body.classList.contains('home') && !document.querySelector('.pageCTA')){
    const footer=document.querySelector('footer,.footer');
    if(footer){
      const section=document.createElement('section');
      section.className='pageCTA';
      section.innerHTML=`<div class="wrap pageCTAInner"><div><div class="kicker">Start your project</div><h2>LET'S GET YOUR<br>UTILITIES MOVING.</h2><p>Talk to our team about your project requirements and we'll help you plan the next step.</p></div><div class="pageCTAActions"><a class="primaryCTA" href="contact.html">REQUEST A CALLBACK ↗</a><a class="secondaryCTA" href="tel:01422419980">01422 419980</a></div></div>`;
      footer.parentNode.insertBefore(section,footer);
    }
  }
});