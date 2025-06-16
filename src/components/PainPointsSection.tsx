"use client";

import { motion } from "framer-motion";
import {
  Truck,
  FileSearch,
  BarChart2,
  LineChart,
  Boxes,
  CreditCard,
} from "lucide-react";

const painPoints = [
  {
    title: "Logistics & Returns",
    before: "Scattered tracking, no control over returns",
    after: "Integrated system with return automation",
    icon: Truck,
  },
  {
    title: "Order Reconciliation",
    before: "Manual matching, frequent payout delays",
    after: "Auto-reconciled orders and payouts",
    icon: FileSearch,
  },
  {
    title: "Ads Data",
    before: "Data scattered across channels",
    after: "Unified performance dashboard",
    icon: BarChart2,
  },
  {
    title: "Sales Insights",
    before: "Outdated reports, delayed decisions",
    after: "Real-time analytics and insights",
    icon: LineChart,
  },
  {
    title: "Inventory Tracking",
    before: "Out-of-sync stock data",
    after: "Live inventory visibility",
    icon: Boxes,
  },
  {
    title: "Payment Tracking",
    before: "Lack of transparency in dues & refunds",
    after: "Clear visibility on settlements and refunds",
    icon: CreditCard,
  },
];

export default function PainPointsSection() {
  return (
    <section className="bg-neutral-950 py-24 px-6 md:px-16 text-white">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          TrackD2C Solves Real Problems
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Discover how we transform outdated workflows into streamlined operations.
        </p>
      </div>

      <div className="relative flex flex-col items-center space-y-16 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-gray-800">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative w-full md:w-1/2 flex ${index % 2 === 0 ? 'justify-start pr-16' : 'justify-end pl-16'}`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 top-1 z-10 -translate-x-1/2">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border-2 border-[#141414]" />
                </span>
              </div>

              {/* Card */}
              <div className="bg-[#1c1c1c] p-4 rounded-md shadow-sm border border-gray-800 max-w-xs w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                </div>
                <div className="text-sm text-red-300 mb-2">
                  <span className="text-red-400 font-semibold">Before:</span> {point.before}
                </div>
                <div className="text-sm text-green-300">
                  <span className="text-green-400 font-semibold">After:</span> {point.after}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Final CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative flex flex-col items-center text-center mt-20"
        >
          <div className="absolute left-1/2 top-1 -translate-x-1/2 z-10">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-600 border-2 border-[#141414]" />
            </span>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8 rounded-lg shadow-lg max-w-2xl w-full mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Simplify Your D2C Business?</h3>
            <p className="text-sm text-white/90 mb-6">Join hundreds of modern founders using TrackD2C to grow faster, smarter, and stress-free.</p>
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition">
              Book a Free Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
