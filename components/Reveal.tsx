"use client";
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({children, delay=0}:{children:React.ReactNode;delay?:number}){
  const reduced = useReducedMotion();
  const initial = reduced ? {} : {opacity:0,y:24};
  const animate = reduced ? {} : {opacity:1,y:0};
  return <motion.div initial={initial} whileInView={animate} viewport={{once:true,amount:.15}} transition={{duration:.75,delay}}>{children}</motion.div>;
}
