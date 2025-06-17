"use client"

import Image from "next/image";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Tag from "@/components/Tag";

const testimonials = [
  {
    name: "Ashwin Santiago",
    title: "Co-founder, UrbanNest",
    image: avatar1,
    quote:
      "TrackD2C is a game-changer. We've cut our operational delays by 40% and finally have visibility across all channels.",
  },
  {
    name: "Lula Meyers",
    title: "Marketing Head, Glowup",
    image: avatar2,
    quote:
      "The real-time insights from TrackD2C help us make sharper ad decisions. Attribution has never felt this clear.",
  },
  {
    name: "Florence Shaw",
    title: "Founder, IndieHaus",
    image: avatar3,
    quote:
      "Our entire team relies on TrackD2C daily. It has made logistics, tracking, and payouts effortless and synced.",
  },
  {
    name: "Ravi Khanna",
    title: "CEO, BlinkBasket",
    image: avatar1,
    quote:
      "From fulfilment to finance, TrackD2C simplifies everything for our ops team. Incredible tool!",
  },
  {
    name: "Sara Lewis",
    title: "CMO, BeLeaf",
    image: avatar2,
    quote:
      "Finally a dashboard built for D2C founders. Love the unified view across returns and ad performance.",
  },
  {
    name: "Mohit Bajaj",
    title: "Founder, Kicksly",
    image: avatar3,
    quote:
      "It’s like having a control room for my entire business. TrackD2C makes me feel in control, not reactive.",
  },
  {
    name: "Tanya Verma",
    title: "Ops Lead, JuicyJars",
    image: avatar1,
    quote:
      "Our weekly reconciliations used to be a nightmare — now it’s just a click thanks to TrackD2C.",
  },
  {
    name: "David Choudhury",
    title: "CTO, Growlers",
    image: avatar2,
    quote:
      "API integrations were smooth, and the onboarding team was superb. TrackD2C scales with us.",
  },
  {
    name: "Priya Narang",
    title: "Founder, Skinthentic",
    image: avatar3,
    quote:
      "It’s smart, fast, and beautiful. TrackD2C helped reduce our RTOs and improve ad returns.",
  },
  {
    name: "Manav Sethi",
    title: "Co-founder, Sportigo",
    image: avatar1,
    quote:
      "We've tried so many tools, but nothing comes close to TrackD2C when it comes to D2C intelligence.",
  },
  {
    name: "Ananya Desai",
    title: "CMO, TasteRise",
    image: avatar2,
    quote:
      "The reports are crisp and instantly useful. Every D2C brand should adopt TrackD2C early on.",
  },
  {
    name: "Arjun Mehra",
    title: "Founder, ClipTrendz",
    image: avatar3,
    quote:
      "TrackD2C is now our central nervous system. We don’t operate without it anymore.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-950 text-white relative">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <Tag className="mb-6">What Founders Say</Tag>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Trusted by modern <span className="text-[#013e95]">D2C leaders</span>
        </h2>

        <div className="relative">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

          {/* Scrollable testimonials */}
          <div className="overflow-hidden">
            <div className="inline-flex gap-6 px-1 animate-scroll">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 w-[300px] flex-shrink-0 h-auto flex flex-col"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full border-2 border-blue-500"
                    />
                  </div>
                  <p className="text-white/80 italic mb-4 text-sm break-words flex-grow">“{t.quote}”</p>
                  <h4 className="text-lg font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .animate-scroll {
            animation: scroll-left 80s linear infinite;
          }
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}