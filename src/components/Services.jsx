import { useEffect, useRef, useState } from "react";
import { UtilityPole, Warehouse, Cable } from "lucide-react";

const Services = () => {
    const servicesRef = useRef(null);
    const [servicesVisible, setServicesVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setServicesVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    return (
        <section id="services" ref={servicesRef} className="py-20 px-6 bg-gray-200">

            <div className="max-w-7xl mx-auto text-center">

                <p className="text-blue-600 font-medium mb-2">WHAT WE OFFER</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    Our Expertise
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {/* CARD 1 */}
                    <div className={`bg-white rounded-2xl p-6 shadow-md shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-1 transition-all duration-1000 ${
                        servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
                    }`}>
                        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-300 text-blue-800 rounded-full mb-4">
                            <UtilityPole size={26} />
                        </div>
                        <p className="text-black lg:text-[16px] text-[15px]">
                            Design, procurement, and logistics for electrical infrastructure projects
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className={`bg-white rounded-2xl p-6 shadow-md shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-1 transition-all duration-1000 ${
                        servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
                    }`}>
                        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-300 text-blue-800 rounded-full mb-4">
                            <Warehouse size={26} />
                        </div>
                        <p className="text-black lg:text-[16px] text-[15px]">
                            Construction of 33kV and 11kV overhead power lines for efficient power transmission.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className={`bg-white rounded-2xl p-6 shadow-md shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-1 transition-all duration-1000 ${
                        servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
                    }`}>
                        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-300 text-blue-800 rounded-full mb-4">
                            <Cable size={26} />
                        </div>
                        <p className="text-black lg:text-[16px] text-[15px]">
                            Underground cable laying to enhance power distribution networks.
                        </p>
                    </div>

                    {/* CARD 4 */}
                    <div className={`bg-white rounded-2xl p-6 shadow-md shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-1 transition-all duration-1000 ${
                        servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}>
                        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-300 text-blue-800 rounded-full mb-4">
                            <UtilityPole size={26} />
                        </div>
                        <p className="text-black lg:text-[16px] text-[15px]">
                            Installation of distribution transformers to support electricity supply systems.
                        </p>
                    </div>

                    {/* CARD 5 */}
                    <div className={`bg-white rounded-2xl p-6 shadow-md shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-1 transition-all duration-1000 ${
                        servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}>
                        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-300 text-blue-800 rounded-full mb-4">
                            <UtilityPole size={26} />
                        </div>
                        <p className="text-black lg:text-[16px] text-[15px]">
                            Development of low-voltage distribution networks for both urban and rural electrification.
                        </p>
                    </div>

                    {/* CARD 6 */}
                    <div className={`bg-white rounded-2xl p-6 shadow-md shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-1 transition-all duration-1000 ${
                        servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}>
                        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-300 text-blue-800 rounded-full mb-4">
                            <UtilityPole size={26} />
                        </div>
                        <p className="text-black lg:text-[16px] text-[15px]">
                            Mass energy meter replacement to improve metering accuracy and efficiency Reliable support and maintenance for your systems and infrastructure.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;