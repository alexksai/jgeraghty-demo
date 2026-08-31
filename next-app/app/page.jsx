import Link from 'next/link';
import { Header, Footer, CTA, asset } from './components';
import { services } from './data';

export default function Home(){
  return <main>
    <Header/>
    <section className="homeHero" style={{'--hero':`url(${asset('/images/home.jpg')})`}}><div className="heroShade"/><div className="heroCopy"><span>Expert Solutions</span><h1>MULTI-UTILITY<br/>CONNECTIONS</h1><p>Water · Gas · Electricity · BT · Grab Wagon Hire · New Builds</p><Link href="/contact">Talk to our team ↗</Link></div></section>
    <section className="intro"><span>01 / Our Services</span><h2>EVERY SERVICE.<br/>ONE TEAM.</h2><p>One experienced team managing utility infrastructure and connections from planning through delivery.</p></section>
    <section className="serviceGrid">{Object.entries(services).map(([slug,s],i)=><Link key={slug} href={`/${slug}`} className="serviceCard" style={{'--bg':`url(${asset(s.image)})`}}><div className="shade"/><span>{String(i+1).padStart(2,'0')} / {s.title}</span><h3>{s.title}</h3><b>↗</b></Link>)}</section>
    <section className="split dark"><div><span>02 / Our Core Values</span><h2>BUILT ON<br/>HOW WE WORK.</h2></div><div><p>Safety & Wellbeing. Client-First Delivery. Teamwork & Collaboration. Technical Excellence. Accountability & Transparency. Integrity & Compliance.</p><Link href="/values">Explore our values ↗</Link></div></section>
    <section className="split"><div><span>03 / Company Overview</span><h2>J. GERAGHTY<br/>UTILITIES.</h2></div><div><p>Founded in 2014, J. Geraghty Utility Services supports commercial organisations and domestic clients across the UK with complete multi-utility infrastructure management.</p><Link href="/about">About the company ↗</Link></div></section>
    <CTA/><Footer/>
  </main>
}
