"use client";

import Lottie from "lottie-react";
import animationData from "@/data/animation.json";
import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <section
            id="contact"
            className="relative bg-gradient-to-b from-neutral-950 to-gray-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 text-white overflow-hidden"
        >
            <div className="absolute inset-0 -z-10">
                {/* Background Particle Shapes */}
                <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500 opacity-20 rounded-full blur-2xl animate-ping" />
            </div>

            <div className="max-w-6xl mx-auto relative min-h-[700px] sm:min-h-[650px]">
                <div className="absolute inset-0 z-0">
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        className="w-full h-full object-cover opacity-20 scale-125"
                    />
                </div>

                {/* Form Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 bg-[#1a1a1a]/80 border border-gray-800 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-xl mx-auto"
                >
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 text-center">
                        Book a Free Demo 🚀
                    </h3>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="bg-[#121212]/80 border border-gray-700 text-white p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffd900] placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="bg-[#121212]/80 border border-gray-700 text-white p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffd900] placeholder-gray-400"
                        />
                        <input
                            type="email"
                            placeholder="Business Mail ID"
                            className="bg-[#121212]/80 border border-gray-700 text-white p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffd900] placeholder-gray-400"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="bg-[#121212]/80 border border-gray-700 text-white p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffd900] placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="Brand / Website Name"
                            className="sm:col-span-2 bg-[#121212]/80 border border-gray-700 text-white p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffd900] placeholder-gray-400"
                        />
                        <input
                            type="date"
                            className="bg-[#121212]/80 border border-gray-700 text-white p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffd900] placeholder-gray-400"
                        />
                        <input
                            type="time"
                            className="bg-[#121212]/80 border border-gray-700 text-white p-3 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffd900] placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="sm:col-span-2 bg-gradient-to-r from-[#ffd900] to-[#013e95] transition text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg"
                        >
                            Book Demo
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
