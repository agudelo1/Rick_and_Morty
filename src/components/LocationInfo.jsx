const LocationInfo = ({ currentLocation }) => {
  return (
    <section
      className="p-2 py-4 border-[3px] font-fira-Code
    border-[#8EFF8B] grid gap-1   rounded-md bg-[#8EFF8B]/10 space-x-2"
    >
      <h2 className=" text-[20px] flex justify-center">
        {currentLocation?.name}
      </h2>
      <ul className=" text-[18]">
        <li>
          <span className="text-[#938686] text-[15px]"> Type:</span>{" "}
          {currentLocation?.type}{" "}
        </li>
        <li className="">
          <span className="text-[#938686] text-[15px]"> Dimension:</span>{" "}
          {currentLocation?.dimension}{" "}
        </li>
        <li>
          <span className="text-[#938686] text-[15px]">Population:</span>{" "}
          {currentLocation?.residents.length}{" "}
        </li>
      </ul>
    </section>
  );
};
export default LocationInfo;
