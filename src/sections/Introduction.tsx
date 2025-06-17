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

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag className="bg-blue-500/10 text-blue-400 border border-blue-400">
            Introducing TrackD2C
          </Tag>
        </div>

        <div className="mt-10 px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Track Smarter. Scale Faster.
          </h2>

          <p className="text-white/80 mt-6 text-base md:text-lg leading-relaxed">
            TrackD2C is a powerful analytics & operations platform built specifically for fast-growing D2C brands. Whether it’s logistics, reconciliation, payments, or marketing performance — TrackD2C centralizes all your data into a single, intelligent view.
          </p>

          <p className="text-white/80 mt-4 text-base md:text-lg leading-relaxed">
            From <span className="text-blue-400">Facebook</span>, <span className="text-blue-400">Google</span>, and <span className="text-blue-400">YouTube</span> to <span className="text-blue-400">Instagram</span>, TrackD2C syncs your multi-channel signals and transforms them into actionable insights that actually move the needle.
          </p>

          <p className="text-white/80 mt-4 text-base md:text-lg leading-relaxed">
            No more scattered reports or gut-based decisions. With TrackD2C, you finally get the clarity, speed, and accuracy your brand needs to scale — confidently.
          </p>
        </div>

        <div className="mt-16">
          <Image
            src={IntroductionImage}
            alt="Founders using TrackD2C dashboard"
          />
        </div>

        <div className="sticky top-20 md:top-28">
          <div className="flex justify-center mt-10">
            <Button variant="primary" onClick={handleScrollToContact}>
              Book a Free Demo
            </Button>
          </div>

          <div className="text-4xl md:text-6xl lg:text-6xl text-center font-medium mt-12 leading-tight">
            <span className="block text-white mb-4">
              Your backend shouldn’t hold you back.
            </span>

            <span className="text-white/15 block mt-2">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "inline-block transition duration-500 px-1",
                    wordIndex < currentWord && "text-white font-semibold"
                  )}
                >
                  {`${word} `}
                </span>
              ))}
            </span>

            <span className="block mt-10 text-4xl md:text-6xl font-semibold text-white">
              That’s why we built{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-4xl md:text-5xl font-extrabold tracking-tight animate-pulse">
                TrackD2C
              </span>
              .
            </span>
          </div>
        </div>

        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
