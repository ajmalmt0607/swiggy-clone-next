// SearchPage.js
"use client";
import { MENU } from "@/utils/menu";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import PopularCuisines from "./PopularCuisines";
import SearchResult from "./SearchResult";
import NoResultsFound from "./NoResultsFound";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    useEffect(() => {
        if (query) {
            setSearchTerm(query);
            fetchSearchResults(query);
        } else {
            setSearchResults([]);
        }
    }, [query]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            setSearchResults([]);
            window.history.pushState({}, "", `/search?query=${searchTerm}`);
            fetchSearchResults(searchTerm);
        }
    };

    const fetchSearchResults = (query) => {
        const results = MENU.filter((item) => {
            const itemName = item.item_name ? item.item_name.toLowerCase() : "";
            const hotelName = item.hotel_name
                ? item.hotel_name.toLowerCase()
                : "";
            return (
                itemName.includes(query.toLowerCase()) ||
                hotelName.includes(query.toLowerCase())
            );
        });
        setSearchResults(results);
    };

    return (
        <div className="flex flex-col">
            <div className="w-full left-0 top-20 z-[2] bg-white pb-2 pt-[130px]">
                <SearchInput
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleSearchSubmit={handleSearchSubmit}
                />
                <div className="w-[860px] mx-auto">
                    {searchTerm === "" && <PopularCuisines />}
                    {searchTerm !== "" && searchResults.length > 0 && (
                        <SearchResult searchResults={searchResults} />
                    )}
                    {searchTerm !== "" && searchResults.length === 0 && (
                        <NoResultsFound />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
