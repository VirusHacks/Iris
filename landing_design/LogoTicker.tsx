"use client"

import { motion } from "framer-motion";
import Image from 'next/image';

const logos = [
    { src: '/assets/logo-acme.png', alt: 'Acme Logo' },
    { src: '/assets/logo-apex.png', alt: 'Apex Logo' },
    { src: '/assets/logo-celestial.png', alt: 'Celestial Logo' },
    { src: '/assets/logo-quantum.png', alt: 'Quantum Logo' },
    { src: '/assets/logo-pulse.png', alt: 'Pulse Logo' },
    { src: '/assets/logo-echo.png', alt: 'Echo Logo' },
];

export const LogoTicker = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='py-20 md:py-24'
        >
            <div className="container mx-auto">
                <div className='flex items-center justify-center gap-5'>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold whitespace-nowrap text-white"
                        >
                            Trusted by top innovative teams
                        </motion.h2>
                        <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                            <motion.div 
                                className="flex gap-14 items-center"
                                animate={{
                                    x: [0, -1200],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 25,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {[...logos, ...logos, ...logos].map((logo, index) => (
                                    <Image
                                        key={index}
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-6 w-auto flex-shrink-0"
                                        width={100}
                                        height={24}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}
