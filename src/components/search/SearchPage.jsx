import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchPage = () => {
    return (
        <div className={`flex flex-col`}>
            <div className="w-full left-0 top-20 z-[2] bg-white pb-2 pt-[130px]">
                <div className=" h-12 overflow-hidden border-b border-[1px] border-custom-border w-[860px] mx-auto mb-2 rounded-[3px]">
                    <form>
                        <div className="flex items-center h-12 w-full pr-[13px] justify-center">
                            <div className="flex-1 pl-4 pr-3">
                                <input
                                    className="text-[14px] leading-6 w-full h-full font-medium outline-0 border-none overflow-hidden text-ellipsis align-middle"
                                    type="text"
                                    placeholder="Search for restaurants and food"
                                    maxLength={200}
                                    spellCheck={false}
                                    autoFocus
                                />
                            </div>
                            <Link href="/" className="">
                                <LuSearch
                                    className=" font-semibold"
                                    fontSize={18}
                                    height={18}
                                    color="#686b78"
                                    fontWeight={900}
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-[860px] mx-auto ">
                <div className=" pt-7 pl-4 font-extrabold text-[#3d4152]">
                    <h2 className=" text-[20px]">Popular Cuisines</h2>
                </div>
                <div className="">
                    <div className="w-full h-full px-4 pt-3 pb-6 flex ">
                        <Image
                            className="mr-[10px]"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966"
                            width={77.18}
                            height={109.66}
                            alt="food-image"
                        />
                        <Image
                            className="mr-[10px]"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/gtqsn1fq0clw3tn68gd9"
                            width={77.18}
                            height={109.66}
                            alt="food-image"
                        />
                        <Image
                            className="mr-[10px]"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27"
                            width={77.18}
                            height={109.66}
                            alt="food-image"
                        />
                        <Image
                            className="mr-[10px]"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f"
                            width={77.18}
                            height={109.66}
                            alt="food-image"
                        />
                        <Image
                            className="mr-[10px]"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/31f03222ea978aef3b10d386729eb076"
                            width={77.18}
                            height={109.66}
                            alt="food-image"
                        />
                        <Image
                            className="mr-[10px]"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/36184033ebef97d27a85fa3af5c1d403"
                            width={77.18}
                            height={109.66}
                            alt="food-image"
                        />
                        <Image
                            className="mr-[10px]"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/019b5cc645182f4bd0ac7fea9ba89e1a"
                            width={77.18}
                            height={109.66}
                            alt="food-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
