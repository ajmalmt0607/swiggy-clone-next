// PopularCuisines.js
import React from "react";
import { SEARCH_SLIDE_IMAGE } from "@/utils/search";
import Image from "next/image";

const PopularCuisines = () => (
    <>
        <div className="pt-7 pl-4 font-extrabold text-[#3d4152]">
            <h2 className="text-[20px]">Popular Cuisines</h2>
        </div>
        <div>
            <div className="w-full h-full px-4 pt-3 pb-6 flex">
                {SEARCH_SLIDE_IMAGE.map((item, index) => (
                    <Image
                        key={index}
                        className="mr-[10px]"
                        src={item.image}
                        width={77.18}
                        height={109.66}
                        alt="food-image"
                    />
                ))}
            </div>
        </div>
    </>
);

export default PopularCuisines;
