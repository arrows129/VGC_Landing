"use client";

import { BarChart3, Rocket, Zap } from "lucide-react";
import Tag from "@/components/Tag";
import Button from "@/components/Button";

export default function WhyTrackD2C() {
    return (
        <section className="py-24 bg-neutal-950 text-white">
            <div className="container max-w-6xl mx-auto px-6 text-center">
                <Tag className="mb-6">Why TrackD2C?</Tag>

                <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-6 leading-tight">
                    No spreadsheets. No chaos.
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl mx-auto">
                    Built for D2C — not generic ERP. Affordable, simple & quick
                    to onboard.
                </p>

                <div className="grid gap-8 md:grid-cols-3 text-left">
                    <div className="bg-[#1c1c1c] border border-gray-800 rounded-2xl p-6">
                        <div className="mb-4 bg-blue-600 p-3 inline-flex rounded-xl">
                            <Zap className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Purpose-built for D2C
                        </h3>
                        <p className="text-white/70">
                            TrackD2C is designed from the ground up for D2C
                            brands — not bloated legacy ERPs.
                        </p>
                    </div>

                    <div className="bg-[#1c1c1c] border border-gray-800 rounded-2xl p-6">
                        <div className="mb-4 bg-green-600 p-3 inline-flex rounded-xl">
                            <BarChart3 className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            All-in-one Dashboard
                        </h3>
                        <p className="text-white/70">
                            From returns to reconciliations, get full visibility
                            in one intuitive platform.
                        </p>
                    </div>

                    <div className="bg-[#1c1c1c] border border-gray-800 rounded-2xl p-6">
                        <div className="mb-4 bg-purple-600 p-3 inline-flex rounded-xl">
                            <Rocket className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Fast Onboarding
                        </h3>
                        <p className="text-white/70">
                            Go live in days, not months. No tech teams or ERP
                            consultants required.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <Button
                        variant="primary"
                        onClick={() => {
                            const contact = document.getElementById("contact");
                            if (contact) {
                                contact.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Book a Free Demo
                    </Button>
                </div>
            </div>
        </section>
    );
}
