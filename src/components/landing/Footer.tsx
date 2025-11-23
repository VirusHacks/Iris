"use client"

import { motion } from "framer-motion";

const footerLinks = ["Features", "Analytics", "Customers", "Campaigns", "AI Workspace"];
const socialIcons = [
    { src: "/assets/social-x.svg", name: "X" },
    { src: "/assets/social-instagram.svg", name: "Instagram" },
    { src: "/assets/social-youtube.svg", name: "YouTube" },
];

export const Footer = () => {
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className='py-5 border-t border-white/15'
        >
            <div className='container px-4 mx-auto'>
                <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='flex gap-2 items-center'
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img src="/assets/logo.svg" alt="Logo" className="h-6 w-6" />
                        </motion.div>
                        <div className='font-medium'>AI-Powered CRM Platform</div>
                    </motion.div>
                    <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
                        {footerLinks.map((link, index) => (
                            <motion.a 
                                key={link}
                                href={`#${link.toLowerCase()}`} 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -2 }}
                                className='text-white/70 hover:text-white text-xs md:text-sm transition'
                            >
                                {link}
                            </motion.a>
                        ))}
                    </nav>
                    <div className='flex gap-5 lg:flex-1 lg:justify-end'>
                        {socialIcons.map(({ src, name }, index) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img src={src} alt={name} className="h-6 w-6 text-white/40 hover:text-white transition cursor-pointer" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};
