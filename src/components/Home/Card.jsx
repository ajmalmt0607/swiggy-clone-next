import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../app/globals.css";

const Card = ({
    name,
    image,
    discount,
    rating,
    deliveryTime,
    availableDishes,
    address,
}) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };
    return (
        <>
            <Link
                href={`/restaurants/${name}`}
                className="flex flex-col gap-3 first:pl-4 pr-8 transform transition-transform duration-200 hover:scale-95"
            >
                <div className="relative w-[273px] h-[182px] rounded-2xl overflow-hidden">
                    {discount && (
                        <div className="absolute bottom-2 left-3 right-0 text-left z-20">
                            <div className="mt-2 font-black text-lg text-white">
                                {discount}
                            </div>
                        </div>
                    )}

                    <Image
                        src={image}
                        alt="food-image"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent opacity-100" />
                </div>
                <div className="ml-3">
                    <h4 className="text-lg font-semibold text-font-color">
                        {truncateText(name, 26)}
                    </h4>
                    <div className="flex items-center gap-1">
                        <div>
                            <Image
                                src="/rating.png"
                                width={18}
                                height={18}
                                alt="rating-logo"
                            />
                        </div>

                        <div>
                            <span className="text-base font-semibold text-font-color">
                                {rating} • {deliveryTime} mins
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col text-address-color leading-snug">
                        <span className="tracking-tight">
                            {truncateText(availableDishes, 30)}
                        </span>
                        <span className="tracking-tight">{address}</span>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Card;
