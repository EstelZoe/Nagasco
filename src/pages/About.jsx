import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import aboutHero from "../assets/images/h4.jpeg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const AboutPage = () => {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
    <div className="w-full">

      {/* BREADCRUMB */}
      <div className="bg-gray-100 px-6 py-3 text-sm">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-blue-600 font-medium">About</span>
        </div>
      </div>

      {/* HERO IMAGE WITH OVERLAY TEXT */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden">
        <img
          src={aboutHero}
          alt="About"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text on image */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          {/* <h1 className="text-2xl md:text-4xl font-bold">
                        About Us
                    </h1> */}
        </div>
      </div>

      {/* BLUE SECTION */}
      <section
        ref={sectionRef}
        className={`w-full bg-gray-100 text-black px-6 py-16 transition-all duration-1000 ease-out transform ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-5xl mx-auto">

          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Profile Of Nagasco Engineering Limited
          </h1>

          <p className="mb-4 text-xl md:text-base leading-relaxed">
            Nagasco Engineering Ltd is a registered company under the Companies Code of the Republic of Ghana. We are classified by the Electricity Company of Ghana (ECG) and certified as a Fanning-Out Company under the Kaneshie District.

          </p>

          <p className="mb-4 text-xl md:text-base leading-relaxed">
            We are also a proud member of the Ghana Electrical Contractors Association and hold an “E” classification from the Ministry of Works.
            Our company is strategically located at North Kaneshie, behind the Assemblies of God Church, in the Greater Accra Region of Ghana (GA-308-9583)
          </p>



          <p className="text-sm md:text-4xl font-bold mb-6">
            Why Choose Us
          </p>
          <p className="mb-4 text-xl md:text-base leading-relaxed">
            With extensive project experience, Nagasco Engineering Ltd is equipped with the right tools, technical expertise, and industry knowledge to deliver top-quality electrical engineering solutions.

            We are committed to excellence, safety, and efficiency in every project we undertake. Our goal is to power the future with reliable and innovative electrical solutions you can trust.
          </p>
          <p className="text-sm md:text-3xl font-bold mb-6">
            Vision
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xl md:text-base mb-4">
            <li>To be a first-class electrical engineering company in Ghana and beyond.
            </li>
          </ul>
          <p className="text-sm md:text-3xl font-bold mb-6">
            Mission
          </p>

          <ul className="list-disc pl-5 space-y-2 text-xl md:text-base mb-4">
            <li>To provide excellent and professional electrical services through strong stakeholder engagement, while consistently meeting and exceeding customer needs.</li>
          </ul>

          <p className="text-sm md:text-3xl font-bold mb-6">
            Quality
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xl md:text-base mb-4">
            <li>We are committed to delivering all-round satisfaction, both within and outside the company.</li>
          </ul>

          <p className="text-sm md:text-3xl font-bold mb-6">
            Integrity
          </p>

          <ul className="list-disc pl-5 space-y-2 text-xl md:text-base mb-4">
            <li>We uphold honesty, transparency, and ethical practices at all times.</li>
          </ul>
          <p className="text-sm md:text-3xl font-bold mb-6">
            Commitment
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xl md:text-base mb-4">
            <li>We are dedicated to providing high-quality services that positively impact lives within and beyond the organization.</li>
          </ul>
          <p className="text-sm md:text-3xl font-bold mb-6">
            Safety
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base mb-4">
            <li>We prioritize the safety of people, premises, and property in all our operations.</li>
          </ul>

        </div>
      </section >
      <Testimonials />
      <Footer />
    </div >
  );
};

export default AboutPage;