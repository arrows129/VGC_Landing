"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function FomoSection() {
    return (
        <section className="bg-gradient-to-br from-purple-950/10 via-neutral-950 to-neutral-950 text-white py-28 relative overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-2xl animate-ping z-0" />

            <div className="relative z-10 container max-w-5xl mx-auto text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-white mb-6"
                >
                    Over 5,000 D2C founders are scaling smarter with <br />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        TrackD2C
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    Don’t let your competitors outpace you. Centralize your
                    data, automate your backend, and unlock true growth. Join
                    the fastest-growing D2C movement today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                >
                    <Button
                        variant="primary"
                        onClick={() => {
                            const contact = document.getElementById("contact");
                            if (contact) {
                                contact.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Join the Movement
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
