import { useState, useEffect, useRef } from "react";
import gal from "../assets/images/naga.png";
import gal2 from "../assets/images/nag2.png";
import gal3 from "../assets/images/nag3.png";
import gal4 from "../assets/images/nag4.png";
import gal5 from "../assets/images/nag5.png";
import gal6 from "../assets/images/nag6.png";
import gal7 from "../assets/images/nag7.png";
import gal8 from "../assets/images/nag8.png";

const Gallery = () => {

    const [index, setIndex] = useState(0);

    const galleryRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % 8);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }
        };
    }, []);

    return (
        <section id="gallery" ref={galleryRef} className="py-20 px-6 bg-gray-100">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Gallery
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Explore our recent work and projects
                    </p>
                </div>

                <div className="relative overflow-hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">

                    <div
                        className="flex transition-transform duration-700 ease-in-out sm:contents"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >

                        {/* CARD 1 */}
                        <div className={`min-w-full sm:min-w-0 h-[250px] col-span-2 row-span-2 relative rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"
                        }`}>
                            <img src={gal} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        {/* CARD 2 */}
                        <div className={`min-w-full sm:min-w-0 h-[250px] row-span-2 relative rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-10"
                        }`}>
                            <img src={gal2} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        {/* CARD 3 */}
                        <div className={`min-w-full sm:min-w-0 h-[250px] relative rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
                        }`}>
                            <img src={gal3} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        {/* CARD 4 */}
                        <div className={`min-w-full sm:min-w-0 h-[250px] relative rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-10"
                        }`}>
                            <img src={gal4} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        {/* CARD 5 */}
                        <div className={`min-w-full sm:min-w-0 h-[250px] col-start-1 row-start-3 relative rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-10"
                        }`}>
                            <img src={gal5} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        {/* CARD 6 */}
                        <div className={`min-w-full sm:min-w-0 h-[250px] col-start-2 row-start-3 relative rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0 delay-600" : "opacity-0 translate-y-10"
                        }`}>
                            <img src={gal6} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        {/* CARD 7 */}
                        <div className={`min-w-full sm:min-w-0 h-[250px] col-start-3 row-start-3 relative rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-10"
                        }`}>
                            <img src={gal7} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                        {/* CARD 8 */}
                        <div className={`min-w-full sm:min-w-0 h-[250px] col-start-4 row-start-3 relative rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-1000 ${
                            visible ? "opacity-100 translate-y-0 delay-800" : "opacity-0 translate-y-10"
                        }`}>
                            <img src={gal8} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;