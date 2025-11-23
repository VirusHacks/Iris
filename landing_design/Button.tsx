"use client"

import { motion } from "framer-motion";

export const Button = (props: React.PropsWithChildren) => {
    return (
        <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #8c45ff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
        >
            <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
            </div>
            <span className="relative z-10">{props.children}</span>
        </motion.button>
    )
}

