'use client';
import { useState } from 'react';
import Link from 'next/link';
import { nav } from './data';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';
const asset = (p) => `${B}${p}`;

export function Header(){
  const [open,setOpen]=useState(false);
  return <>
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="J. Geraghty Utilities home"><img src={asset('/images/logo.png')} alt="J. Geraghty Utilities"/></Link>
      <nav className="desktopNav">{nav.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav>
      <Link className="quote" href="/contact">Request a callback ↗</Link>
      <button className="burger" onClick={()=>setOpen(true)} aria-label="Open menu" aria-expanded={open}><span/><span/><span/></button>
    </header>
    <div className={`mobileMenu ${open?'open':''}`} onClick={(e)=>{if(e.target===e.currentTarget)setOpen(false)}}>
      <div className="mobilePanel">
        <div className="mobileHead"><img src={asset('/images/logo.png')} alt="J. Geraghty Utilities"/><button onClick={()=>setOpen(false)} aria-label="Close menu">×</button></div>
        <nav>{nav.map(([n,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}<Link href="/about" onClick={()=>setOpen(false)}>About</Link><Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link></nav>
        <Link className="mobileQuote" href="/contact" onClick={()=>setOpen(false)}>Request a callback ↗</Link>
      </div>
    </div>
  </>;
}

export function Footer(){return <footer><div>J. GERAGHTY LTD · Multi-Utility Connections Contractor</div><div>01422 419980 · sales@jgeraghty.co.uk</div></footer>}

export function CTA(){return <section className="ctaBand"><div><span>Start your project</span><h2>LET'S GET YOUR<br/>UTILITIES MOVING.</h2><p>Talk to our team about your requirements and we’ll help plan the next step.</p></div><div className="ctaButtons"><Link href="/contact">Request a callback ↗</Link><a href="tel:01422419980">01422 419980</a></div></section>}
