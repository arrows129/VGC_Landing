import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 px-6 md:px-12 relative overflow-hidden">
            {/* Subtle Background Effect */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute left-0 top-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute right-0 bottom-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-white text-2xl font-bold tracking-tight mb-4">
                            TrackD2C
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering D2C brands with a sleek, all-in-one
                            intelligent dashboard.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-8 md:col-span-2">
                        <div>
                            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
                                Product
                            </h3>
                            <ul className="space-y-3 text-sm">
                                {[
                                    { name: "Features", href: "#features" },
                                    { name: "Pricing", href: "#pricing" },
                                    { name: "Demo", href: "#demo" },
                                    { name: "FAQs", href: "#faqs" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="relative text-gray-400 hover:text-white transition-colors duration-300 group"
                                        >
                                            {item.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
                                Company
                            </h3>
                            <ul className="space-y-3 text-sm">
                                {[
                                    { name: "About", href: "#about" },
                                    { name: "Blog", href: "#blog" },
                                    { name: "Careers", href: "#careers" },
                                    { name: "Contact", href: "#contact" },
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="relative text-gray-400 hover:text-white transition-colors duration-300 group"
                                        >
                                            {item.name}
                                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
                            Get in Touch
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="mailto:support@trackd2c.com"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    support@trackd2c.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+919000012345"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    +91-90000-12345
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-white font-medium">TrackD2C</span>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
