import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, asset } from '../components';
import { services, genericPages } from '../data';

export function generateStaticParams(){return [...Object.keys(services),...Object.keys(genericPages)].map(slug=>({slug}));}

export default async function Page({params}){
  const {slug}=await params;
  const s=services[slug];
  const g=genericPages[slug];
  if(!s && !g) notFound();
  if(g) return <main><Header/><section className="pageHero simple"><div><span>{g.kicker}</span><h1>{g.title}</h1></div></section><section className="content single"><p>{g.body}</p>{slug==='contact'&&<Link className="inlineCTA" href="tel:01422419980">Call 01422 419980 ↗</Link>}</section><CTA/><Footer/></main>;
  return <main>
    <Header/>
    <section className="pageHero" style={{'--hero':`url(${asset(s.image)})`}}><div className="heroShade"/><div className="pageHeroCopy"><span>{s.eyebrow}</span><h1>{s.title}</h1><i/><p>{s.subtitle}</p><div className="heroBtns"><Link href="/contact">Get a quote ↗</Link><a href="#overview">Explore service ↓</a></div></div></section>
    <section className="content" id="overview"><div><span>01 / Overview</span><h2>{s.subtitle}</h2></div><div><p>{s.intro}</p></div></section>
    <section className="content dark"><div><span>02 / Infrastructure & Connection</span><h2>{s.title}<br/>Infrastructure.</h2></div><div><ul>{s.bullets.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="content"><div><span>03 / Accreditation</span><h2>{s.accreditation}</h2></div><div><p>Our experienced team combines technical knowledge, compliant delivery and complete project coordination to provide a reliable utility solution.</p></div></section>
    <CTA/><Footer/>
  </main>;
}
