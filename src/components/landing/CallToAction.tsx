"use client"

import { motion } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";


export const CallToAction = () => {

    return(
     <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 md:py-24 px-4"
     >
        <div className="container mx-auto">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
                className="border border-white/15 py-24 rounded-xl overflow-hidden relative" 
                style={{ backgroundImage: `url(/assets/stars.png)` }}
            >
                <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{ backgroundImage: `url(/assets/grid-lines.png)` }}></div>
                <div className="relative ">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium text-white"
                    >
                        AI-driven CRM for everyone.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight"
                    >
                        Achieve clear, impactful results without the complexity
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center gap-4 mt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="relative py-2.5 px-6 rounded-lg font-medium text-sm border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-all"
                        >
                            <Link href="/sign-in">Sign In</Link>
                        </motion.button>
                        <Button>
                            <Link href="/sign-up">Get Started Free</Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </motion.section>
    );
};

