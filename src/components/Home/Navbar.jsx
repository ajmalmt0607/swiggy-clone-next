"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Navitem from "./Navitem";
import "../../app/globals.css";
import LocationModal from "./LocationModal";
import LoginModal from "./LoginModal";

const Navbar = () => {
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isModalEntering, setIsModalEntering] = useState(false);
    const [scrollbarWidth, setScrollbarWidth] = useState(0);
    const [headerWidth, setHeaderWidth] = useState(null);

    useEffect(() => {
        const calculateScrollbarWidth = () =>
            window.innerWidth - document.documentElement.clientWidth;

        const handleResize = () => {
            const scrollbarWidth = calculateScrollbarWidth();
            setScrollbarWidth(scrollbarWidth);
            const headerElement = document.getElementById("header");

            setHeaderWidth(headerElement.offsetWidth);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const openModal = (modalType) => {
        if (modalType === "location") {
            setIsLocationModalOpen(true);
        } else if (modalType === "login") {
            setIsLoginModalOpen(true);
        }
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.overflowY = "hidden";
        setTimeout(() => setIsModalEntering(true), 10); // Ensure reflow for CSS transition
    };

    const closeModal = () => {
        setIsModalEntering(false);
        document.body.style.paddingRight = "0";
        setTimeout(() => {
            setIsLocationModalOpen(false);
            setIsLoginModalOpen(false);
        }, 300); // Match the duration of your transition
        document.body.style.overflowY = "auto";
    };

    return (
        <>
            <header
                id="header"
                className={`shadow-custom fixed top-0 left-0 right-0 z-30 h-20 px-5 bg-white ${
                    isLocationModalOpen || isLoginModalOpen
                        ? "overlay-open"
                        : ""
                }`}
                style={{ width: headerWidth }}
            >
                <div className="flex justify-between max-w-[1200px] h-full mx-auto content-center items-center">
                    <div className="flex">
                        <Link className="mr-4" href="/">
                            <Image
                                src="/swiggy-1.svg"
                                width={34}
                                height={49}
                                alt="logo"
                            />
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center ml-[30px] text-sm hover:text-orange-500"
                            onClick={() => openModal("location")}
                        >
                            <span className="font-semibold underline underline-offset-8 decoration-2">
                                Other
                            </span>
                            <span className="ml-[10px] text-slate-500 hover:text-slate-400">
                                Kochi, Kerala, India
                            </span>
                            <MdKeyboardArrowDown
                                fontSize={"26px"}
                                className="text-orange-500"
                            />
                        </Link>
                    </div>
                    <div className="flex">
                        <Navitem
                            title="Swiggy Coperate"
                            Icon={PiSuitcaseSimple}
                        />
                        <Navitem title="Search" Icon={FiSearch} />
                        <Navitem title="Offers" Icon={BiSolidOffer} />
                        <Navitem title="Help" Icon={IoHelpBuoyOutline} />
                        <Navitem
                            title="Sign In"
                            Icon={FaRegUser}
                            onClick={() => openModal("login")}
                        />
                        <Navitem
                            title="Cart"
                            Icon={FiShoppingBag}
                            last={true}
                        />
                    </div>
                </div>
            </header>
            {isLocationModalOpen && (
                <LocationModal
                    closeModal={closeModal}
                    isModalEntering={isModalEntering}
                />
            )}
            {isLoginModalOpen && (
                <LoginModal
                    closeModal={closeModal}
                    isModalEntering={isModalEntering}
                />
            )}
        </>
    );
};

export default Navbar;
