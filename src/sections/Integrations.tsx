import Tag from "@/components/Tag";
import shiprocketIcon from "@/asset/shiprocket.svg";
import shopifyIcon from "@/asset/shopify1.svg";
import googleAdsIcon from "@/asset/google-ads.svg";
import facebookAdsIcon from "@/asset/meta.svg";
import razorpayIcon from "@/asset/razorpay.svg";
import wordpressIcon from "@/asset/WordPress.png";
import wixIcon from "@/asset/wix.svg";
import googleAnalyticsIcon from "@/asset/google-analytics.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
    {
        name: "Shopify",
        icon: shopifyIcon,
        description: "Sync your store data seamlessly with Shopify.",
    },
    {
        name: "Razorpay",
        icon: razorpayIcon,
        description: "Track payments and settlements using Razorpay.",
    },
    {
        name: "WordPress",
        icon: wordpressIcon,
        description:
            "Power your content-driven brand with WordPress integration.",
    },
    {
        name: "Wix",
        icon: wixIcon,
        description: "Connect your Wix store for unified performance tracking.",
    },
    {
        name: "Shiprocket",
        icon: shiprocketIcon,
        description:
            "Automate your logistics & returns with Shiprocket integration.",
    },
    {
        name: "Google Analytics",
        icon: googleAnalyticsIcon,
        description: "Get clarity on customer behavior with Google Analytics.",
    },
    {
        name: "Google Ads",
        icon: googleAdsIcon,
        description: "Unify your marketing performance with Google Ads.",
    },
    {
        name: "Meta Ads",
        icon: facebookAdsIcon,
        description:
            "Measure impact with our Meta (Facebook & Instagram) Ads integration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16 ">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with{" "}
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            TrackD2C connects with your essential eCommerce,
                            payment, and marketing tools, giving you a single
                            source of truth across platforms.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                integrations={integrations.slice().reverse()}
                                reverse
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
