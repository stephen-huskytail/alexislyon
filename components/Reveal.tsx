"use client";
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({children, delay=0}:{children:React.ReactNode;delay?:number}){
  const reduced = useReducedMotion();
  // The server renders opacity 0, so reduced motion must still end visible: drop the slide and the delay, keep the reveal.
  const initial = {opacity:0,y:reduced?0:24};
  const transition = reduced ? {duration:0} : {duration:.75,delay};
  return <motion.div initial={initial} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={transition}>{children}</motion.div>;
}
