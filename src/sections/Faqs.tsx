/* eslint-disable react/no-unescaped-entities */
"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Who should use TrackD2C?",
    answer:
      "TrackD2C is built specifically for direct-to-consumer (D2C) brands looking to unify operations, marketing, logistics, and payments into one streamlined dashboard.",
  },
  {
    question: "What kind of data can I track?",
    answer:
      "You can track everything from ad performance, real-time orders, returns, payouts, RTOs, customer journeys, to inventory sync — all in one place.",
  },
  {
    question: "Do I need technical knowledge to get started?",
    answer:
      "Not at all. TrackD2C is built for founders, marketers, and ops teams — no coding or technical setup needed. Just connect your tools and you're ready.",
  },
  {
    question: "Which tools does TrackD2C integrate with?",
    answer:
      "TrackD2C integrates with Shopify, Razorpay, Shiprocket, Google Ads, Meta Ads, Wix, WordPress, and more. We're adding new integrations regularly.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most brands go live within 2-5 days. Our team assists you throughout, ensuring a smooth setup — no ERP consultants or long timelines required.",
  },
  {
    question: "Is my brand’s data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption, tokenized API access, and adhere to the highest security standards to protect your business data.",
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
                    <span className="text-[#ffd900]">answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className={twMerge("bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer text-[#ffd900]", selectedIndex=== faqIndex && "text-[#013e95]")}
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
                                        "feather feather-plus text-[#ffd900] flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex && "rotate-45 text-[#013e95]"
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
