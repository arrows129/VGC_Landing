"use client";

import {
    BarChart3,
    Truck,
    DollarSign,
    ShoppingCart,
    Boxes,
    Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Founders Dashboard",
        description:
            "Get a bird’s eye view of your business with real-time insights, helping you make smarter decisions faster.",
        icon: BarChart3,
    },
    {
        title: "Logistics, Returns & Refunds",
        description:
            "Track every shipment and automate returns/refunds from one unified panel.",
        icon: Truck,
    },
    {
        title: "Payment Tracking",
        description:
            "Stay on top of settlements, payouts, and pending dues across platforms.",
        icon: DollarSign,
    },
    {
        title: "Sales Insights",
        description:
            "Monitor trends, conversion rates, and revenue with powerful visual analytics.",
        icon: ShoppingCart,
    },
    {
        title: "Inventory Tracking",
        description:
            "Keep stock data updated in real-time to avoid over-selling or out-of-stock errors.",
        icon: Boxes,
    },
    {
        title: "Ads Data",
        description:
            "Unify data from all ad channels into one dashboard — finally, full clarity on ROI.",
        icon: Megaphone,
    },
];

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="relative bg-neutral-950 text-white py-24 px-6 md:px-16 overflow-hidden"
        >
            {/* Background Glow Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500 opacity-20 rounded-full blur-2xl -z-10 animate-ping"></div>

            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Powerful Features for D2C Founders
                </h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    Everything you need to run your business, scale faster, and
                    simplify operations — all in one place.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="relative bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transform-gpu hover:scale-105 hover:rotate-1 transition duration-300 backdrop-blur"
                            >
                                <div className="absolute -top-5 -left-5 w-20 h-20 bg-blue-600 opacity-20 rounded-full blur-2xl"></div>
                                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl inline-flex mb-4 shadow-md border border-white/10">
                                    <Icon className="text-white" size={26} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
