/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls | null>(null);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (!scope.current) return;

        animation.current = animate(
            scope.current,
            { x: "-50%" },
            {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
            }
        );
    }, [scope, animate]);

    useEffect(() => {
        if (animation.current) {
            animation.current.speed = isHovered ? 1 : 3;
        }
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-6xl md:text-7xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl group-hover:text-white">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">
                                Try a demo
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
