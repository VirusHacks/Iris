"use client"

import { motion } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" style={{
            backgroundImage: `url(/assets/stars.png)`,
        }}>
            <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"
            ></motion.div>

            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
            </motion.div>

            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
            ></motion.div>

            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>

            <div className="container relative mt-16 mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center"
                >
                    AI CRM 
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto"
                >
                    From insights to action — manage leads, forecast sales, automate campaigns, and grow revenue effortlessly.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="flex justify-center gap-4 mt-5"
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
        </section>
    );
};

