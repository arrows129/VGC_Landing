/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointers";
import { easeInOut, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -200 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: easeInOut },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 270, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, []);

    return (
        <section
            className="py-24 md:py-16 sm:py-14 overflow-x-clip"
            style={{
                cursor: `url(${cursorYouImage.src}), auto`,
            }}
        >
            <div className="container relative">
                {/* Left image */}
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-64 top-16 hidden lg:block"
                >
                    <Image
                        src={designExample1Image}
                        alt="design1"
                        className="w-[300px]"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -290 }}
                    className="absolute left-56 top-96 hidden lg:block "
                >
                    <Pointer name="Amrit" />
                </motion.div>

                {/* Right image */}
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    drag
                    className="absolute -right-64 -top-16 hidden lg:block"
                >
                    <Image
                        src={designExample2Image}
                        alt="design2"
                        className="w-[300px]"
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 400, y: 200 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Sauptik" color="red" />
                </motion.div>

                {/* Hero Content */}
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold ">
                        40000+ happy users ✨
                    </div>
                </div>

                <h4 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Run Your D2C Brand Like a Pro <br/>All from One Dashboard
                </h4>

                <p className="text-center text-white/70 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
                    From logistics to ad performance, our platform centralizes your brand’s entire backend with data
driven insights — so you can focus on growth.
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
