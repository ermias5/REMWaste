import { useState } from "react";
import skipOptionData from "../../api/skip-option-data";
import SelectSkipCard from "./select-skip-card";

export default function SelectSkipSection() {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-xl text-center">
        Select the skip size that best suits your needs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pt-[2rem]">
        {skipOptionData.map((skip) => (
          <SelectSkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedId === skip.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </section>
  );
}
