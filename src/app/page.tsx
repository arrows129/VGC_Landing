// app/page.tsx
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import PainPointsSection from "@/components/PainPointsSection";
import ContactForm from "@/components/ContactForm";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/sections/Testimonials";
import FomoSection from "@/sections/FomoSection"
import WhyTrackD2C from "@/sections/WhyTrackD2C"

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <FeaturesSection/>
            <Features />
            <PainPointsSection />
            <Integrations />
            <WhyTrackD2C />
            <Testimonials />
            <FomoSection />
            <Faqs />
            <CallToAction />
            <ContactForm />
            <Footer/>
        </>
    );
}
