/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Button from "@/components/Button";
import Pointer from "@/components/Pointers";
import { motion } from "framer-motion";

import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    return (
        <section
            className="py-24 md:py-16 sm:py-14 overflow-x-clip"
            style={{
                cursor: `url(${cursorYouImage.src}), auto`,
            }}
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-2xl animate-ping" />
            </div>

            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, x: 400, y: 200 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Sauptik" color="red" />
                </motion.div>

                {/* Hero Content */}
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-[#ffd900] to-[#013e95] rounded-full text-neutral-950 font-semibold ">
                        40000+ happy users ✨
                    </div>
                </div>

                <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#ffd900] to-[#013e95] bg-clip-text text-transparent mt-8">
                    Run Your D2C Brand Like a Pro <br />
                    All from One Dashboard
                </h1>

                <p className="text-center text-gray-300 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
                    From logistics to ad performance, our platform centralizes
                    your brand’s entire backend with data-driven insights — so
                    you can focus on growth.
                </p>

                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto gap-6">
                    <input
                        className="bg-transparent px-4 md:flex-1 w-full focus:outline-none focus:ring-0 focus:border-transparent"
                        type="email"
                        placeholder="Enter your email"
                    />

                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
}
