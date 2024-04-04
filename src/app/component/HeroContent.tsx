"use client"
import {motion ,AnimatePresence } from "framer-motion"
import { slideFromBottom, slideFromTop } from "../motion/motion";


function HeroContent() {
  return (
    <AnimatePresence>
    <div className='w-full h-full flex flex-col text-white z-10 justify-center items-center'>
        <motion.h1
        initial="hidden"
        animate="visible"
        exit={"exit"}
        variants={slideFromTop}
        className="text-[60px] md:text-[86px] z-60 font-bold mb-45 text-transparent bg-clip-text  bg-gradient-to-r from-yellow-500 yellow-shadow"
        
        >
            Zafran Khan Khattak
        </motion.h1>
        <motion.h1
        initial="hidden"
        animate="visible"
        exit={"exit"}
        variants={slideFromBottom}
        className="text-[60px] md:text-[86px] z-60 font-bold mb-45 text-transparent bg-clip-text  bg-gradient-to-r from-yellow-500 yellow-shadow"
        
        >
            Zafran Khan Khattak
        </motion.h1>
    </div>
    </AnimatePresence>
  )
}

export default HeroContent;