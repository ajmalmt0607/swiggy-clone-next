"use client";

import { MIND_SLIDER_DATA } from "@/utils/mindslider";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import "../../app/globals.css";

const ITEM_WIDTH = 750;

const MindSlider = () => {
    const containerRef = useRef();
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Function to handle scrolling when the button is clicked
    const handleScroll = (scrollAmount) => {
        // Access the container element and calculate the new scroll position
        const container = containerRef.current;
        const newScrollPosition = container.scrollLeft + scrollAmount;

        // Set the container's scrollLeft property to the new scroll position
        container.scrollLeft = newScrollPosition;
    };

    // Function to update the button states based on scroll position
    const updateButtonStates = () => {
        const container = containerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
                container.scrollLeft + container.clientWidth <
                    container.scrollWidth
            );
        }
    };

    // Use effect to update button states on scroll
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", updateButtonStates);
            updateButtonStates(); // Initial check

            // Cleanup event listener on component unmount
            return () => {
                container.removeEventListener("scroll", updateButtonStates);
            };
        }
    }, []);

    return (
        <>
            <div className="xl:px-0 lg:px-36 py-4 max-w-[1432px] mx-auto pt-24">
                <div className="">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-2xl font-extrabold">
                            What&apos;s on your mind?
                        </h2>
                        <div>
                            <button
                                className={`h-[34px] px-2 pt-2 pb-2 mr-3 rounded-full ${
                                    canScrollLeft
                                        ? "bg-gray-300"
                                        : "bg-gray-100"
                                }`}
                                onClick={() => handleScroll(-ITEM_WIDTH)}
                                disabled={!canScrollLeft}
                            >
                                <HiArrowLeft fontSize={"16px"} />
                            </button>
                            <button
                                className={`h-[34px] px-2 pt-2 pb-2 rounded-full ${
                                    canScrollRight
                                        ? "bg-gray-300"
                                        : "bg-gray-100"
                                }`}
                                onClick={() => handleScroll(ITEM_WIDTH)}
                                disabled={!canScrollRight}
                            >
                                <HiArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div
                        className="mx-auto no-scrollbar"
                        ref={containerRef}
                        style={{
                            maxWidth: "1432px",
                            overflowX: "scroll",
                            scrollBehavior: "smooth",
                        }}
                    >
                        <div className=" flex items-center">
                            {MIND_SLIDER_DATA.map((item, index) => (
                                <div
                                    className="w-full first:pl-4 pr-6"
                                    key={index}
                                >
                                    <Image
                                        className="block max-w-none"
                                        src={item.image}
                                        width={144}
                                        height={180}
                                        alt="food-images"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr
                style={{
                    border: "1px solid rgb(240, 240, 245)",
                    margin: "32px calc(10% + 52px)",
                }}
            />
        </>
    );
};

export default MindSlider;
