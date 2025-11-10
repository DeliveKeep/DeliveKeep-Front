import Hero from "../components/HomePage/Hero.jsx";
import About from "../components/HomePage/About.jsx";
import HowWorks from "../components/HomePage/HowWorks.jsx";
import JoinUs from "../components/HomePage/JoinUs.jsx";

export default function Home() {
    return (
        <div className="flex flex-col bg-primary-blue">
            <Hero/>
            <About/>
            <HowWorks/>
            <JoinUs/>
        </div>
    );
}