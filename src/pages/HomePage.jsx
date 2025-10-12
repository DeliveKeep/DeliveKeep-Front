import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import CallToAction from "../components/CallToAction.jsx";

export default function HomePage() {
    const HomePageStyle = {
        backgroundColor: '#06205B',
        color: '#fff',
        minHeight: '100vh'
    };

    return (
        <div style={HomePageStyle}>
            <Hero/>
            <Features/>
            <HowItWorks/>
            <CallToAction/>
        </div>
    );
}