import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom"; 
import { Footer } from "./components/Footer";

export const Source = () => {
    const flexBetween = "flex justify-between items-center";
    const menuItems: { name: string; to: string }[] = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Projects", to: "/projects" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrollY, setScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true); 

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > scrollY && window.scrollY > 100) {
                setIsNavVisible(false); 
                setIsMenuOpen(false);
            } else if (window.scrollY < scrollY && window.scrollY < 400) {
                setIsNavVisible(true); 
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]); 

    return (
        <nav>
            <div
                className={`${flexBetween} fixed top-0 z-30 w-full py-1 bg-[var(--color-red)] shadow-md transition-all duration-450 ease-in-out 
                ${isNavVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-50px]"
                }`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <NavLink to="/" className="w-20 h-20 md:mr-[-3rem] lg:mr-[-4rem] mt-1.5 mb-1.5">
                        <img className="absolute w-18 h-20 ml-[-1.3rem] scale-100 transition-all transform hover:rotate-6 hover:scale-105 hover:opacity-80 md:ml-[-3.5rem] lg:ml-[-5rem]" src="/images/you.png" alt="Logo" />
                    </NavLink>
                    <div className={`${flexBetween} w-full`}>
                            <p className="text-2xl text-[var(--color-lux)] fonti font-bold">
                                Yiyi
                            </p>
                        <div className="hidden text-lg md:flex gap-8 md:text-[1.1rem] text-white lg:text-xl lg:gap-19">
                            {menuItems.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.to}
                                    className="cursor-pointer scale-100 hover:text-[var(--color-lux)] hover:underline"
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>

                        <NavLink to="/contact" className="hidden md:flex gap-8 items-center">
                            <button className="border-2 border-white text-white px-4 py-2 rounded-full button md:mr-[-3.5rem] lg:mr-[-5rem]">
                                Contact me
                            </button>
                        </NavLink>

                        <div className="md:hidden flex items-center ml-auto mr-[-1.3rem]">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <img className="w-8 scale-100 transition-all hover:scale-110 hover:rotate-6 hover:opacity-90 " src="/images/hbw.png" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className={`"md:hidden bg-[var(--color-red)] text-white opacity-90 shadow-xl fixed top-25 right-0 h-full w-50 py-8 z-20 transform transition-transform duration-500 ease-in-out
                ${isNavVisible ? "translate-x-0" : "translate-x-[100%]"}`}
                >
                    <div className="flex flex-col gap-6">
                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}
                                className="cursor-pointer text-lg py-3 px-6 rounded-md hover:bg-[var(--color-lux)] hover:text-black hover:scale-105 transition-all duration-300"
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <NavLink to="/contact" className="flex flex-col items-start gap-4 ml-4 mt-4">
                            <button className="border-2 border-white text-white px-4 py-2 rounded-full button">
                                Contact me
                            </button>
                        </NavLink>
                    </div>
                </div>
            )}
            <Outlet />
            <Footer />
        </nav>
    );
};
