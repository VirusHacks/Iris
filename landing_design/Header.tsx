"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./Button";

export const Header = () => {
    return (
    <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 bg-black/50 backdrop-blur-md"
    >
        <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
        <div className="container px-4 mx-auto">
            <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
            <div className="absolute inset-0 backdrop-blur -z-10"></div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/" className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
                        <img src="/assets/logo.svg" alt="Logo" className="h-8 w-8" />
                    </Link>
                </motion.div>
                <div className="hidden md:block">
                    <nav className="flex gap-8 text-sm">
                        {["Features", "Analytics", "Customers", "Campaigns"].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.4 }}
                                whileHover={{ y: -2 }}
                                className="text-white/70 hover:text-white transition"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>
                </div>
                <div className="flex gap-2 sm:gap-3 items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="relative py-2 px-3 sm:px-4 rounded-lg font-medium text-xs sm:text-sm border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-all whitespace-nowrap"
                    >
                        <Link href="/sign-in">Sign In</Link>
                    </motion.button>
                    <Button>
                        <Link href="/sign-up" className="text-xs sm:text-sm">Get Started Free</Link>
                    </Button>
                </div>
            </div>
        </div>
    </motion.header>
    )
}

