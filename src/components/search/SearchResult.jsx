// SearchResult.js
import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TbSquareRoundedChevronUpFilled } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const SearchResult = ({ searchResults }) => (
    <div className="pt-2 font-extrabold text-[#3d4152]">
        <div className="flex text-[#282c3f]">
            <button className="border border-solid border-opacity-25 border-gray-900 h-9 font-bold px-3 text-[13px] rounded-full mr-2">
                Restaurants
            </button>
            <button className="border border-solid border-opacity-25 border-gray-900 h-9 font-bold px-3 text-[13px] rounded-full">
                Dishes
            </button>
        </div>

        <div className="pt-4">
            <hr className=" border-t-[1px] border-dotted border-#ececee" />
            <div className="py-[18px]">
                <button className="py-[7px] px-[8px] border border-solid border-#dcdee8 bg-[#fafafa] rounded-[6px] mr-[10px] font-semibold text-[13px]">
                    Sort by{" "}
                    <span className="inline-block ">
                        <IoIosArrowDown />
                    </span>
                </button>
                <button className="py-[7px] px-[8px] border border-solid border-#dcdee8 bg-[#fafafa] rounded-[6px] mr-[10px] font-semibold text-[13px]">
                    Fast Delivery
                </button>
                <button className="py-[7px] px-[8px] border border-solid border-#dcdee8 bg-[#fafafa] rounded-[6px] mr-[10px] font-semibold text-[13px]">
                    Veg
                </button>
                <button className="py-[7px] px-[8px] border border-solid border-#dcdee8 bg-[#fafafa] rounded-[6px] mr-[10px] font-semibold text-[13px]">
                    Non-Veg
                </button>
                <button className="py-[7px] px-[8px] border border-solid border-#dcdee8 bg-[#fafafa] rounded-[6px] mr-[10px] font-semibold text-[13px]">
                    Rated 4+
                </button>

                <button className="py-[7px] px-[8px] border border-solid border-#dcdee8 bg-[#fafafa] rounded-[6px] mr-[10px] font-semibold text-[13px]">
                    Rs 250+
                </button>
                <button className="py-[7px] px-[8px] border border-solid border-#dcdee8 bg-[#fafafa] rounded-[6px] mr-[10px] font-semibold text-[13px]">
                    Gourmet
                </button>
            </div>
        </div>
        <div className="bg-gray-100 py-6 px-4 flex justify-between flex-wrap gap-y-5">
            {searchResults.map((result, index) => (
                <div
                    key={index}
                    className="max-w-[405px] bg-white pt-[22px] px-4 pb-4 rounded-3xl"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-[#686B78]">
                                {`By ${result.restaurants_name}`}
                            </span>
                            <span className="text-[12px] font-medium text-[#7E808C] mt-[2px] flex gap-1">
                                <span>
                                    <IoIosStar fontSize={15} />
                                </span>
                                <span>{`${result.rating}`}</span>
                                <span>.</span>
                                <span>{`${result.delivery_time}`} MINS</span>
                            </span>
                        </div>
                        <div>
                            <HiOutlineArrowRight
                                fontSize={22}
                                color="#7E808C"
                            />
                        </div>
                    </div>
                    <hr className=" border-t-[1px] border-dotted border-#d3d3d6 mt-4 mb-5" />

                    <div className="flex justify-between h-[164px] leading-5">
                        <div className="flex flex-col items-start">
                            <TbSquareRoundedChevronUpFilled
                                color="#eb0808"
                                fontSize={19}
                            />
                            <h3 className="text-[18px] w-[162px] mt-1 font-bold">{`${result.item_name}`}</h3>
                            <span className="text-[15px] font-bold mt-1">
                                {`₹${result.price}`}
                            </span>
                            <button className="flex items-center py-1 px-2 mt-3 text-[12px] font-semibold border border-solid border-opacity-25 border-gray-900 rounded-full">
                                More Details{" "}
                                <span>
                                    <MdKeyboardArrowRight fontSize={17} />
                                </span>
                            </button>
                        </div>
                        <div className=" ml-[60px] w-[156px] h-[144px]">
                            <Image
                                className=" rounded-[12px] object-cover h-full"
                                src={result.image}
                                width={156}
                                height={144}
                                alt={result.item_name}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default SearchResult;
