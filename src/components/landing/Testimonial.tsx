"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        text: '"This CRM has completely transformed how we manage our sales pipeline and customer relationships"',
        name: "Sophia Perez",
        title: "Sales Director @ Quantum",
        avatarImg: '/assets/avatar-1.png',
    },
    {
        text: '"The AI forecasting tools have completely revolutionized our revenue predictions and sales strategy"',
        name: "Jamie Lee",
        title: "Revenue Manager @ Pulse",
        avatarImg: '/assets/avatar-2.png',
    },
    {
        text: '"The automated campaigns feature is so intuitive and has saved us countless hours on follow-ups"',
        name: "Alisa Hester",
        title: "Marketing Lead @ Pulse",
        avatarImg: '/assets/avatar-3.png',
    },
    {
        text: '"Our team productivity has increased significantly since we started using this AI-powered CRM"',
        name: "Alex Whitten",
        title: "CTO @ Tech Solutions",
        avatarImg: '/assets/avatar-4.png',
    }
]

export const Testimonial = () => {
    return (
     <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-20 md:py-24 px-4"
     >
        <div className="container mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl text-center tracking-tighter font-medium text-white"
            >
                Beyond Expectations.
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto"
            >
                Our revolutionary AI-powered CRM has transformed our clients&apos; sales and customer management.
            </motion.p>
            <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div 
                    className="flex gap-5"
                    animate={{
                        x: [0, -1200],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <motion.div 
                            key={`${testimonial.name}-${index}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="border border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none"
                        >
                            <div className="text-lg md:text-xl tracking-tight text-white">{testimonial.text}</div>
                            <div className="flex items-center gap-3 mt-5">
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg"
                                >
                                <Image src={testimonial.avatarImg}
                                    alt={`Avatar for ${testimonial.name}`}
                                    className="h-11 w-11 rounded-lg grayscale" 
                                    width={44}
                                    height={44}
                                />
                                 </motion.div>
                                <div>
                                    <div className="text-white">{testimonial.name}</div>
                                    <div className="text-white/50 text-sm">{testimonial.title}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    </motion.section>
    );
};
