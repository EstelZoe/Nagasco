import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import h4 from "../assets/images/h4.jpeg";
import h5 from "../assets/images/h5.jpeg";
import h6 from "../assets/images/h6.jpeg";
import about from "../assets/images/nagaus.jpg";
import Testimonials from "../components/Testimonials";
import Partnership from "../components/Partnership";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import gal from "../assets/images/naga.png";
import gal2 from "../assets/images/nag2.png";
import gal3 from "../assets/images/nag3.png";
import gal4 from "../assets/images/nag4.png";
import gal5 from "../assets/images/nag5.png";
import gal6 from "../assets/images/nag6.png";
import gal7 from "../assets/images/nag7.png";
import gal8 from "../assets/images/nag8.png";

const slides = [
    {
        image: h4,
        title: "Reliable Power. Proven Expertise",
        subtitle: "Nagasco Engineering Ltd delivers high-quality electrical engineering solutions—from power lines to distribution systems—backed by experience, safety, and excellence.",
    },
    {
        image: h5,
        title: "Powering the Future of Ghana",
        subtitle: "We design, build, and deliver efficient electrical infrastructure that drives progress. With Nagasco, performance meets precision.",
    },
    {
        image: h6,
        title: "Innovative Tech Solutions",
        subtitle: "We provide safe, reliable, and efficient electrical solutions tailored to your needs; because your power matters.",
    },
];

const extendedSlides = [...slides, ...slides];

const Home = () => {
    const [current, setCurrent] = useState(0);

    // ✅ ADDED (About section control)
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // HERO SLIDER
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // ABOUT SECTION ANIMATION
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="pt-20">

            {/* HERO SECTION */}
            <div className="relative w-full h-screen overflow-hidden">
                <div
                    className={`flex h-full ${current === slides.length
                        ? ""
                        : "transition-transform duration-1000 ease-linear"
                        }`}
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {extendedSlides.map((slide, index) => (
                        <div key={index} className="w-full h-screen flex-shrink-0 relative">

                            <img
                                src={slide.image}
                                alt=""
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl max-w-2xl">
                                    {slide.subtitle}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* ABOUT SECTION */}
            <section id="about" ref={sectionRef} className="py-20 px-6 bg-gray-50">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div
                        className={`transition-all duration-1000 ease-out ${visible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-16"
                            }`}
                    >
                        <img
                            src={about}
                            alt="About"
                            className="rounded-2xl w-full h-[400px] md:h-[450px] object-cover"
                        />
                    </div>

                    <div
                        className={`transition-all duration-1000 ease-out ${visible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-16"
                            }`}
                    >
                        <span className="text-2xl text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            Who We Are
                        </span>

                        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            Reliable Electrical & Solar Services
                        </h2>

                        <p className="text-xl text-gray-600 mb-6">
                            Nagasco Engineering Ltd is a registered company under the Companies Code of the Republic of Ghana. We are classified by the Electricity Company of Ghana (ECG) and certified as a Fanning-Out Company under the Kaneshie District.

                            We are also a proud member of the Ghana Electrical Contractors Association and hold an “E” classification from the Ministry of Works
                        </p>

                        <p className="text-xl text-gray-600 mb-6">
                            With extensive project experience, Nagasco Engineering Ltd is equipped with the right tools, technical expertise, and industry knowledge to deliver top-quality electrical engineering solutions.
                        </p>

                        <Link
                            to="/about"
                            className="text-blue-900 font-semibold hover:underline"
                        >
                            Read More →
                        </Link>
                    </div>

                </div>
            </section>


            {/* SERVICES SECTION */}

            <Services />

            {/* GALLERY SECTION */}
          <Gallery/>
            <Testimonials />
            <Partnership />
            <Footer />

        </div>
    );
};

export default Home;