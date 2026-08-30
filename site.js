document.addEventListener('DOMContentLoaded',()=>{
  const logoSrc='assets/GERAGHTY-OFFICIAL-LOGO-WHITE-PNG-scaled.png';
  document.querySelectorAll('.brand img,.homeNav img').forEach(img=>img.src=logoSrc);
  document.querySelectorAll('a.logo').forEach(a=>{a.innerHTML=`<img src="${logoSrc}" alt="J. Geraghty Utility Services">`;a.classList.add('logoImg')});

  const nav=document.querySelector('.navin')||document.querySelector('.homeNav .in');
  if(nav){
    let existing=nav.querySelector('.menu,.hamb');
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