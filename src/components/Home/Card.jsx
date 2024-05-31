import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../app/globals.css";

const Card = () => {
    return (
        <>
            <Link href="/">
                <div className="relative w-[273px] h-[182px] rounded-2xl overflow-hidden">
                    <div className="absolute bottom-2 left-3 right-0 text-left z-20">
                        <div className="mt-2 font-black text-lg text-white">
                            50% OFF UPTO ₹100
                        </div>
                    </div>
                    <Image
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
                        alt="food-image"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent opacity-100" />
                </div>
                <div>
                    <h4 className="">Chinese Wok</h4>
                </div>
            </Link>
            {/* <div className="relative w-[273px] h-[182px]">
                <div className="absolute bottom-0 left-0 right-0 text-center z-20">
                    <div className="mt-2 font-bold text-lg ">
                        50% OFF UPTO ₹100
                    </div>
                </div>
                <Image
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
                    alt="food-image"
                    layout="fill"
                    objectFit="cover"
                />
            </div> */}
        </>
    );
};

export default Card;
