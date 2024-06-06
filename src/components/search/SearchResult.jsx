// SearchResult.js
import React from "react";
import Image from "next/image";

const SearchResult = ({ searchResults }) => (
    <div className="pt-7 pl-4 font-extrabold text-[#3d4152]">
        <h2 className="text-[20px]">Search Results</h2>
        <ul>
            {searchResults.map((result) => (
                <li key={result.id}>
                    <Image
                        src={result.image}
                        width={77.18}
                        height={109.66}
                        alt={result.item_name}
                    />
                    <div>{result.item_name}</div>
                    <div>{result.hotel_name}</div>
                    <div>{result.price}</div>
                    <div>{result.rating}</div>
                </li>
            ))}
        </ul>
    </div>
);

export default SearchResult;
