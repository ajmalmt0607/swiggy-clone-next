const FilterButton = ({ Icon, text }) => {
    return (
        <button className="flex items-center border py-2 px-3 rounded-full">
            <span className="text-sm mr-1 text-font-color">{text}</span>
            {Icon && (<Icon fontSize={18} className="text-font-color" />)}
        </button>
    );
};

export default FilterButton;
