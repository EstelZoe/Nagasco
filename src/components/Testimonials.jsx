import { useEffect, useState } from "react";

const testimonials = [
    {
        text: "We deliver safe and reliable electrical solutions with professionalism and quality.",
        name: "CEO",
    },
    {
        text: "Their commitment to safety and excellence makes them a trusted name in the industry.",
        name: "Industry Professional",
    },
    {
        text: "Highly skilled team with attention to detail and quality service delivery.",
        name: "Industry Leader",
    },
    {
        text: "Outstanding workmanship and customer satisfaction on every project.",
        name: "Client Review",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % testimonials.length);
                setFade(true);
            }, 800); // softer fade-out
        }, 5500); // more breathing space

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-gray-200">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Testimonials
                    </h2>
                </div>

                {/* Single Center Card */}
                <div className="flex justify-center">

                    <div
                        className={`bg-white p-6 rounded-2xl shadow-md shadow-blue-200 hover:shadow-blue-400 max-w-xl w-full text-center transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >

                        <p className="text-gray-700 italic mb-4">
                            "{testimonials[index].text}"
                        </p>

                        <p className="font-semibold text-gray-900">
                            {testimonials[index].name}
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}