// SearchInput.js
import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchInput = ({ searchTerm, setSearchTerm, handleSearchSubmit }) => (
    <div className="h-12 overflow-hidden border-b border-[1px] border-custom-border w-[860px] mx-auto mb-2 rounded-[3px]">
        <form onSubmit={handleSearchSubmit}>
            <div className="flex items-center h-12 w-full pr-[13px] justify-center">
                <div className="flex-1 pl-4 pr-3">
                    <input
                        className="text-[14px] leading-6 w-full h-full font-medium outline-0 border-none overflow-hidden text-ellipsis align-middle"
                        type="text"
                        placeholder="Search for restaurants and food"
                        maxLength={200}
                        spellCheck={false}
                        autoFocus
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button type="submit">
                    <LuSearch
                        className="font-semibold"
                        fontSize={18}
                        height={18}
                        color="#686b78"
                        fontWeight={900}
                    />
                </button>
            </div>
        </form>
    </div>
);

export default SearchInput;
