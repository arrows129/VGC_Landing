/* eslint-disable react/no-unescaped-entities */
"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What is VGC and who is it for?",
        answer: "VGC is a powerful D2C dashboard designed for direct-to-consumer brands. It helps you track performance, manage sales, understand your customers, and grow your business — all from one intuitive platform.",
    },
    {
        question: "What can I track with the VGC dashboard?",
        answer: "With VGC, you can monitor real-time sales, website traffic, customer lifetime value, repeat purchase rates, campaign performance, and more. Our insights are designed to drive actionable decisions.",
    },
    {
        question: "Do I need any technical skills to use VGC?",
        answer: "Not at all. VGC is built to be user-friendly for founders, marketers, and operators. No coding or technical setup is required — just connect your tools and start getting insights immediately.",
    },
    {
        question: "Can I integrate VGC with my existing tools?",
        answer: "Yes! VGC integrates with popular e-commerce platforms, ad networks, email tools, and CRMs. Setup is quick and our team is available to assist if needed.",
    },
    {
        question: "Is my data secure with VGC?",
        answer: "Absolutely. We use industry-standard encryption and best practices to ensure your data is secure, private, and only accessible to authorized users within your organization.",
    },
];


export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex items-center justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got{" "}
                    <span className="text-lime-400">answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer"
                            onClick={() => toggleIndex(faqIndex)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex && "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{ height: 0, marginTop: 0 }}
                                        animate={{ height: "auto", marginTop: 24 }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
