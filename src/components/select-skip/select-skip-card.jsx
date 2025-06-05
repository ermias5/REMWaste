import imagePlaceholder from "../../assets/skip.jpg";

const SelectSkipCard = ({ skip }) => {
  return (
    <div className=" border p-4 rounded shadow-md bg-darkgray text-black">
      <img
        src={imagePlaceholder}
        alt={`product skip image`}
        width={300}
        height={300}
        className="rounded-lg h-[192px] w-[332px]"
      />
      <h2 className="text-xl font-bold">Size: {skip.size} yd³</h2>
      <p>Hire Period: {skip.hire_period_days} days</p>
      <p>Price Before VAT: £{skip.price_before_vat}</p>
      <p>VAT: {skip.vat}%</p>
      <p>Postcode: {skip.postcode}</p>
      <p>Allowed on Road: {skip.allowed_on_road ? "Yes" : "No"}</p>
      <p>Allows Heavy Waste: {skip.allows_heavy_waste ? "Yes" : "No"}</p>
    </div>
  );
};

export default SelectSkipCard;
