import imagePlaceholder from "../../assets/skip.jpg";
import { HiArrowRight } from "react-icons/hi";

const SelectSkipCard = ({ skip, isSelected, onSelect }) => {
  return (
    <div
      className={`relative p-4 rounded shadow-md bg-[#393939] text-white cursor-pointer transition-transform hover:scale-[1.01] ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
      onClick={() => onSelect(skip.id)}
    >
      <div className="absolute top-8 right-7 bg-blue-500 text-white text-sm font-semibold px-3 pb-1 rounded-full shadow-md">
        {skip.size} Yards
      </div>
      <img
        src={imagePlaceholder}
        alt={`product skip image`}
        width={300}
        height={300}
        className="rounded-lg h-[192px] w-[332px] mb-3"
      />
      <h2 className="text-xl font-bold text-white mb-2">
        {skip.size} Yard Skip
      </h2>
      <p className="text-gray-400 mb-5">
        {skip.hire_period_days} day hire period
      </p>
      <p className="text-2xl font-bold text-blue-500 mb-4">
        £{skip.price_before_vat}
      </p>

      <div
        className={`w-full text-center py-2 px-4 rounded font-semibold transition-colors ${
          isSelected
            ? "bg-blue-600 text-white"
            : "bg-gray-600 text-white hover:bg-gray-700"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(skip.id);
        }}
      >
        {isSelected ? (
          "Selected"
        ) : (
          <div className="flex items-center justify-center gap-2">
            <p>Select This Skip</p>
            <HiArrowRight className="text-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectSkipCard;
