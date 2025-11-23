"use client"

import { motion } from "framer-motion";
import { useState } from "react";


const tabs = [
    {
        icon: "/assets/lottie/vroom.lottie",
        title: "Sales Forecasting & Analytics",
        isNew: false,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backrgroundSizeX: 150,
    },
    {
        icon: "/assets/lottie/click.lottie",
        title: "Customer 360 & Loyalty",
        isNew: false,
        backgroundPositionX: 98,
        backgroundPositionY: 100,
        backrgroundSizeX: 135,
    },
    {
        icon: "/assets/lottie/stars.lottie",
        title: "Automated Campaigns",
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backrgroundSizeX: 177,
    },

]


export const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="py-20 md:py-24"
        >
            <div className="container mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-5xl md:text-6xl font-medium text-center tracking-tighter text-white'
                >
                    Your Ultimate AI-Powered CRM
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5'
                >
                    From small startups to large enterprises, our AI-driven CRM has revolutionized the way businesses manage sales, customers, and revenue growth.
                </motion.p>
                <div className='mt-10 flex flex-col lg:flex-row gap-3'>
                    {tabs.map((tab, index) => (
                        <motion.div 
                            key={tab.title} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            onClick={() => setActiveTab(index)}
                            className={`border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 cursor-pointer transition-colors ${
                                activeTab === index ? 'border-white/40 bg-white/5' : ''
                            }`}
                        >
                            <motion.div 
                                className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center'
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >

                            </motion.div>
                            <div className='font-medium text-white'>
                                {tab.title}
                            </div>
                            {tab.isNew && (
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                    className='text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold'
                                >
                                    new
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className='border border-white/20 p-2.5 rounded-xl mt-3'
                >
                    <motion.div 
                        className="aspect-video bg-cover border border-white/20 rounded-lg" 
                        style={{ backgroundImage: `url(/assets/product-image.png)` }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                    </motion.div>
                </motion.div>

            </div>
        </motion.section>
    )
}

