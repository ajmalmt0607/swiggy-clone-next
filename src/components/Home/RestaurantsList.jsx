import React from "react";
import FilterButton from "./FilterButton";
import { BiFilter } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Card from "./Card";
import { TOP_RESTAURANTS } from "@/utils/toprestaurants";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = () => {
    return (
        <>
            <div className=" xl:px-0 lg:px-36 xl:max-w-[1432px] lg:max-w-[1400px]  mx-auto">
                <div className="">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-2xl font-extrabold">
                            Restaurants with online food delivery in Kochi
                        </h2>
                    </div>
                    <div className="flex gap-2 mb-8">
                        <FilterButton Icon={BiFilter} text={"Filter"} />
                        <FilterButton Icon={IoIosArrowDown} text={"Sort By"} />
                        <FilterButton text={"Fast Delivery"} />
                        <FilterButton text={"New on Swiggy"} />
                        <FilterButton text={"Rating 4.0+"} />
                        <FilterButton text={"Pure Veg"} />
                        <FilterButton text={"Offers"} />
                        <FilterButton text={"Rs. 300-600"} />
                        <FilterButton text={"Less than Rs. 300"} />
                    </div>
                </div>
            </div>
            <div className=" mx-auto xl:max-w-[1428px] lg:max-w-[1111px] mb-14">
                <div className="grid grid-cols-4 gap-8 ">
                    {TOP_RESTAURANTS.slice(0, 20).map((item, index) => (
                        <RestaurantCard
                            key={index}
                            name={item.name}
                            image={item.image}
                            discount={item.discount_title}
                            rating={item.rating}
                            deliveryTime={item.deliveryTime}
                            availableDishes={item.availableDishes}
                            address={item.address}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default RestaurantsList;
