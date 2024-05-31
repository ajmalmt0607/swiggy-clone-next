import Link from "next/link";
import React from "react";

const Navitem = ({ title, Icon, last }) => {
    return (
        <Link
            className={`flex items-center ${last ? "mr-0" : " mr-[60px]"}`}
            href="/"
        >
            <Icon className="mr-2" fontSize="22px" />
            <span className=" text-sm font-medium">{title}</span>
        </Link>
    );
};

export default Navitem;
