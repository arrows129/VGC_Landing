"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import Button from "@/components/Button";
import { useCallback } from "react";

const features = [
    "Realtime Sync",
    "Auto-Reconciliation",
    "Omni-channel Tracking",
    "Insightful Reports",
    "Smart Attribution",
    "Unified Dashboard",
    "Fast Settlements",
];

export default function Features() {
    const scrollToContact = useCallback(() => {
        const contact = document.getElementById("contact");
        if (contact) contact.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Power-packed features for <span className="text-[#ffd900]">modern D2C growth</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 ">
                    <FeatureCard
                        title="Team-wide Transparency"
                        description="Empower your entire D2C team with a single source of truth."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center ">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-800  z-30">
                                <Image
                                    src={avatar2}
                                    alt="avatar2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="avatar3"
                                    className="rounded-full"
                                />
                            </Avatar>

                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image
                                        src={avatar4}
                                        alt="avatar4"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Automated Analytics"
                        description="Real-time insights that tell the full story — no spreadsheets required."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition text-center duration-500">
                                Your data,{' '}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>decoded</span>
                                    <video
                                        src="/assets/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition duration-500"
                                    />
                                </span>
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Smart Order Management"
                        description="Easily filter, track, and manage orders across platforms with full clarity."
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">Orders</Key>
                            <Key>Status</Key>
                            <Key>Track</Key>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <Button variant="primary" onClick={scrollToContact}>Book a Free Demo</Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-[#ffd900] text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-180 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
