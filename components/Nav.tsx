"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/content';

export function Nav(){
  const pathname=usePathname();
  const[scrolled,setScrolled]=useState(false);
  const[open,setOpen]=useState(false);
  const startsOnDark=pathname==='/'||pathname==='/work-with-me';
  const elevated=scrolled||open||!startsOnDark;

  useEffect(()=>{
    const on=()=>setScrolled(scrollY>60);
    on();
    addEventListener('scroll',on);
    return()=>removeEventListener('scroll',on)
  },[]);

  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${elevated?'bg-cream/92 py-3 shadow-sm backdrop-blur text-forest':'bg-transparent py-6 text-cream'}`}><nav className="container flex items-center justify-between"><Link href="/" className="font-display text-3xl tracking-wide">Alexis Lyon</Link><div className="hidden items-center gap-7 text-sm font-medium tracking-[.12em] uppercase lg:flex">{navItems.map(i=><Link key={i.href} href={i.href} className="hover:text-gold">{i.label}</Link>)}<Link className="btn btn-gold !py-2 !px-5" href="/connect">Begin</Link></div><button className="lg:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu"><span className="block h-px w-7 bg-current mb-2"/><span className="block h-px w-7 bg-current mb-2"/><span className="block h-px w-7 bg-current"/></button></nav>{open&&<div className="lg:hidden bg-cream text-forest border-t border-warm-dk mt-3"><div className="container py-8 flex flex-col gap-5">{navItems.map(i=><Link onClick={()=>setOpen(false)} key={i.href} href={i.href} className="font-display text-3xl">{i.label}</Link>)}<Link onClick={()=>setOpen(false)} className="btn btn-forest mt-3" href="/connect">Schedule a Free Consultation</Link></div></div>}</header>}
