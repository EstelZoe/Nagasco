import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/nagwhite.png";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="bg-[oklch(28.2%_0.091_267.935)] text-white py-16 px-6">

            <div className="max-w-7xl mx-auto">

                {/* TOP SECTION */}
                <div className="grid md:grid-cols-2 gap-10 mb-12">

                    {/* LEFT TEXT */}
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="h-14 md:h-16 object-contain"
                        />
                    </div>

                    {/* RIGHT INPUT */}
                    <div>
                        <p className="mb-3 font-medium">Get In Touch!</p>

                        <div className="flex bg-white/10 rounded-full overflow-hidden border border-white/20">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-transparent outline-none text-white placeholder-white/60"
                            />
                            <button className="bg-green-500 px-5 py-2 rounded-full m-1 text-sm hover:bg-green-600 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* MIDDLE LINKS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm mb-12">

                    {/* CONTACT */}
                    <div>
                        <p className="font-semibold mb-3">CONTACT INFORMATION</p>
                        <p className="text-white/70">0244-585-086  </p>
                        <p className="text-white/70">0503-848-098</p>
                         <p className="text-white/70"> nagascoengineeringltd@gmail.com</p>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <p className="font-semibold mb-3">COMPANY</p>

                        <Link
                            to="/about"
                            className="block text-white/70 hover:text-white transition"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/contact"
                            className="block text-white/70 hover:text-white transition"
                        >
                            Contact
                        </Link>
                    </div>



                    {/* SOCIAL */}
                    <div>
                        <p className="font-semibold mb-3">FOLLOW US</p>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://www.facebook.com/share/1LT4WwnGmg/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-300 text-blue-600 flex items-center justify-center rounded-full shadow hover:scale-110 transition cursor-pointer"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/george-a-nagai-092686212?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-300 text-blue-600 flex items-center justify-center rounded-full shadow hover:scale-110 transition cursor-pointer"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                </div>

                {/* LINE */}
                <div className="border-t border-white/20 mb-6"></div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-center items-center text-sm text-white/60 gap-4">

                    <p>© {new Date().getFullYear()} Nagasco. All rights reserved.</p>

                    {/* <div className="flex gap-6">
                        <p className="hover:text-white cursor-pointer">Privacy</p>
                        <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
                    </div> */}

                </div>

            </div>
        </footer>
    );
};

export default Footer;