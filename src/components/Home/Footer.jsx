import Image from "next/image";
import Link from "next/link";
import { SiSwiggy } from "react-icons/si";

function Footer() {
    return (
        <>
            <div className="min-h-[104px] max-h-[136px] flex justify-center mt-9 items-center bg-footer-bg-1">
                <div className="w-[450px] mr-24 ml-0 my-auto">
                    <h3 className=" font-extrabold text-[28px] leading-8 text-font-color">
                        For better experience,download the Swiggy app now
                    </h3>
                </div>
                <div className="flex items-center">
                    <Link href="/" className=" mx-3">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                            alt="playstore-logo"
                            width={208}
                            height={64}
                        />
                    </Link>
                    <Link href="/" className="MX-3">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                            alt="playstore-logo"
                            width={186.26}
                            height={64}
                        />
                    </Link>
                </div>
            </div>
            <footer className=" bg-black ">
                <div className=" max-w-[980px] mx-auto grid grid-cols-4 gap-10 pt-12 pb-20">
                    <div className="max-w-[212px]">
                        <div className="flex items-center mb-2">
                            <SiSwiggy
                                color="white"
                                fontSize="32"
                                className="mr-2"
                            />
                            <span className="text-2xl text-white font-extrabold">
                                Swiggy
                            </span>
                        </div>
                        <span className=" text-footer-color text-base">
                            © 2024 Bundl Technologies Pvt. Ltd
                        </span>
                    </div>
                    <div className="max-w-[215px]">
                        <h2 className="text-white text-lg font-bold">
                            Company
                        </h2>
                        <div>
                            <ul className=" text-footer-color">
                                <li className="my-4">
                                    <Link href="/">About</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Careers</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Team</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Swiggy One</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Swiggy Instamart</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Swiggy Genie</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-[215px]">
                        <h2 className="text-white text-lg font-bold">
                            Contact us
                        </h2>
                        <div>
                            <ul className=" text-footer-color">
                                <li className="my-4">
                                    <Link href="/">Help & Support</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Partner with us</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Ride with us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-white text-lg font-bold">
                                Legal
                            </h2>
                            <div>
                                <ul className=" text-footer-color">
                                    <li className="my-4">
                                        <Link href="/">Terms & Conditions</Link>
                                    </li>
                                    <li className="my-4">
                                        <Link href="/">Cookie Policy</Link>
                                    </li>
                                    <li className="my-4">
                                        <Link href="/">Privacy Policy</Link>
                                    </li>
                                    <li className="my-4">
                                        <Link href="/">Investor Relations</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[215px]">
                        <h2 className="text-white text-lg font-bold">
                            We deliver to:
                        </h2>
                        <div>
                            <ul className=" text-footer-color">
                                <li className="my-4">
                                    <Link href="/">Bangalore</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Gurgaon</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Hyderabad</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Delhi</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Mumbai</Link>
                                </li>
                                <li className="my-4">
                                    <Link href="/">Pune</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
