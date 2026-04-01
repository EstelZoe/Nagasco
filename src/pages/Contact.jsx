import { useEffect, useRef, useState } from "react";
import contactHero from "../assets/images/contact.png";
import Footer from "../components/Footer";
import FAQ from "../components/FAQs";

export default function Contact() {
  const [visibleSections, setVisibleSections] = useState({});

  const refs = {
    hero: useRef(null),
    info: useRef(null),
    form: useRef(null),
    faq: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src={contactHero}
          alt="Contact"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div
          ref={refs.hero}
          data-section="hero"
          className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transition-all duration-1000 ${visibleSections.hero
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Send us a message and we’ll respond as quickly as possible.
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div
          ref={refs.info}
          data-section="info"
          className={`transition-all duration-1000 ${visibleSections.info
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            How We Can Help You?
          </h2>

          <p className="text-gray-600 mb-6 text-lg md:text-xl max-w-x">
            Reach out to us for professional electrical engineering services, consultations, and project support.
          </p>

          <div className="space-y-4 text-lg md:text-xl max-w-x">
            <p>📍 GA-308-9583 14 Boame Street, North Kaneshie </p>
            <p>📞  0244-585-086 / 0539-447-580</p>
            <p>✉️ nagascoengineeringltd@gmail.com</p>

          </div>
        </div>

        {/* FORM */}
        <div
          ref={refs.form}
          data-section="form"
          className={`bg-gray-100 p-6 rounded-xl shadow-sm transition-all duration-1000 delay-200 ${visibleSections.form
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <form className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="First Name"
              className="col-span-2 md:col-span-1 p-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="col-span-2 md:col-span-1 p-3 rounded-lg outline-none"
            />

            {/* <input
              type="email"
              placeholder="Email"
              className="col-span-2 md:col-span-1 p-3 rounded-lg outline-none"
            /> */}

            <input
              type="text"
              placeholder="Phone"
              className="col-span-2 md:col-span-1 p-3 rounded-lg outline-none"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="col-span-2 p-3 rounded-lg outline-none"
            ></textarea>

            <a
              href="https://wa.me/233244585086?text=Hello%20Nagasco,%20I%20would%20like%20to%20make%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
            >
              Send via WhatsApp
            </a>
          </form>
        </div>
      </div>

      {/* FAQ */}
     <FAQ/>
      <Footer />
    </div>

  );
}