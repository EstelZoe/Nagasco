import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/naglogo1.png";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">

            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-blue-900/20 via-blue-500/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 w-auto object-contain cursor-pointer"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 ml-12 text-gray-800 text-lg font-medium">

                    <li>
                        <HashLink
                            smooth
                            to="/#about"
                            className="hover:text-blue-800 transition"
                        >
                            About
                        </HashLink>
                    </li>

                    <li>
                        <HashLink
                            smooth
                            to="/#services"
                            className="hover:text-blue-800 transition"
                        >
                            Services
                        </HashLink>
                    </li>

                    <li>
                        <HashLink
                            smooth
                            to="/#gallery"
                            className="hover:text-blue-800 transition"
                        >
                            Gallery
                        </HashLink>
                    </li>

                    <li>

                        <Link to="/contact" className="hover:text-blue-800 transition">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Hamburger */}
                <div
                    className="md:hidden flex flex-col gap-1 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                    <span className="w-6 h-0.5 bg-gray-800"></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white shadow-md px-6 py-4 space-y-4 ${menuOpen ? "block" : "hidden"
                    }`}
            >
                <ul>
                    <li>
                        <HashLink
                            smooth
                            to="/#about"
                            className="hover:text-blue-800 transition"
                        >
                            About
                        </HashLink>
                    </li>

                    <li>
                        <HashLink
                            smooth
                            to="/#services"
                            className="hover:text-blue-800 transition"
                        >
                            Services
                        </HashLink>
                    </li>

                    <li>
                        <HashLink
                            smooth
                            to="/#gallery"
                            className="hover:text-blue-800 transition"
                        >
                            Gallery
                        </HashLink>
                    </li>
                   
                    <li>
                        <HashLink
                            smooth
                            to="/contact"
                            className="hover:text-blue-800 transition"
                        >
                            Contact
                        </HashLink>
                    </li>

                </ul>

            </div>
        </nav>
    );
};

export default Navbar;