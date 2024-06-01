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

const Navbar = () => {
    return (
        <header className="shadow-custom bg-white px-5 fixed top-0 left-0 right-0 z-50 h-20">
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
                    <div className="flex items-center ml-[30px] text-sm">
                        <span className="font-semibold underline underline-offset-8 decoration-2">
                            Other
                        </span>
                        <span className="ml-[10px] text-slate-500">
                            Kochi, Kerala, India
                        </span>
                        <MdKeyboardArrowDown
                            fontSize={"26px"}
                            className="text-orange-500"
                        />
                    </div>
                </div>
                <div className="flex">
                    <Navitem title="Swiggy Coperate" Icon={PiSuitcaseSimple} />
                    <Navitem title="Search" Icon={FiSearch} />
                    <Navitem title="Offers" Icon={BiSolidOffer} />
                    <Navitem title="Help" Icon={IoHelpBuoyOutline} />
                    <Navitem title="Sign In" Icon={FaRegUser} />
                    <Navitem title="Cart" Icon={FiShoppingBag} last={true} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
