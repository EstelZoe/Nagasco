import { useEffect, useState } from "react";
import nap from "../assets/images/geca.png";
import nap2 from "../assets/images/nap2.png";
import nap3 from "../assets/images/nap3.png";
import nap4 from "../assets/images/nap4.png";


const Partnership = () => {
    return (
        <section className="py-20 px-6 bg-white">

            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-black  mb-4">
                    Our Trusted Partners
                </h2>

                <p className="text-black max-w-2xl mx-auto mb-12">
                    We collaborate with leading organizations to deliver reliable and high-quality solutions.
                </p>

                {/* Logos */}
               <div className="md:ml-64 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-14 items-center justify-items-center max-w-5xl mx-auto ">
                    {[nap, nap2, nap3, nap4].map((logo, index) => (
                        <div
                            key={index}
                            className=" p-4 shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
                        >
                            <img
                                src={logo}
                                alt="partner"
                                className="h-16 mx-auto object-contain"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Partnership;