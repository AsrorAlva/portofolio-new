import Hero from "../components/ui/hero";
import About from "../components/ui/about";
import Experience from "../components/ui/experience";
import Project from "../components/ui/project";
import Contact from "../components/ui/contact";
import Navbar from "../components/layout/navbar";

export default function Homepage() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-[#f5f5f5] selection:bg-[#b2945e] selection:text-black">
            <Navbar />
            <main className="container mx-auto px-6 md:px-12 lg:px-20 space-y-24 pb-24">
                <Hero />
                <About />
                <Project />
                <Experience />
                <Contact />
            </main>
        </div>
    );
}