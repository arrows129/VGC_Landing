/* eslint-disable react/no-unescaped-entities */
"use client";

import Tag from "@/components/Tag";
import Image from "next/image";
import IntroductionImage from "@/assets/images/introduction.png";
import Button from "@/components/Button";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-20 lg:py-40">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Introducing VGC</Tag>
                </div>
                <div className="mt-10 px-4 text-center max-w-4xl mx-auto">
                    <div className="text-lime-400 text-lg font-semibold">
                        VGC: Track Better, Scale Faster!
                    </div>
                    <p className="text-white/70 mt-4 leading-relaxed">
                        Now AI-Powered VGC{" "}
                        <span className="text-lime-400 font-medium">
                            'Tracks'
                        </span>{" "}
                        success to you! We're the pioneers in attribution
                        analytics, designed to capture data from platforms like{" "}
                        <span className="text-lime-400">Facebook</span>,{" "}
                        <span className="text-lime-400">Google</span>,{" "}
                        <span className="text-lime-400">YouTube</span>, and{" "}
                        <span className="text-lime-400">Instagram</span>, and
                        funnel it into actionable insights for your business!
                    </p>
                    <p className="text-white/70 mt-4 leading-relaxed">
                        Ever looked at an ad in your platform dashboard and
                        questioned its accuracy? To be doubly sure, connect your
                        ad platform with{" "}
                        <span className="text-lime-400">VGC's</span> intelligent
                        analytics. We give you the real picture, so you can make
                        real progress.
                    </p>
                </div>

                <div className="mt-16">
                    <Image src={IntroductionImage} alt="introductionimage" />
                </div>
                <div className="sticky top-20 md:top-28">
                    <div className="flex justify-center">
                        <Button variant="primary">Book a call</Button>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-6xl text-center font-medium mt-10">
                        <span>Your Creative process deserves better.</span>{" "}
                        <span className="text-white/15">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white"
                                    )}
                                >
                                    {`${word} `}{" "}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            That's why we build VGC.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
