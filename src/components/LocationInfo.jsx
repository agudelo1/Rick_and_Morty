const LocationInfo = ({ currentLocation }) => {
  return (
    <section
      className="w-full p-2 py-4 border-[3px] font-fira-Code
    border-[#8EFF8B] grid gap-1   rounded-md bg-[#8EFF8B]/10 space-x-2 sm:mx-auto sm:px-4 "
    >
      <span className="flex justify-center">
        <h2 className="text-[20px]  line-clamp-1">{currentLocation?.name}</h2>
      </span>
      <ul className=" text-[18] w-full sm:flex sm:justify-center sm:items-center sm:gap-4">
        <li className="sm:flex sm:flex-col sm:text-[20px] ">
          <span className="text-[#938686] text-[15px] sm:text-[20px] ">
            Type:
          </span>
          {currentLocation?.type}
        </li>
        <li className="sm:flex sm:flex-col   ">
          <span className="text-[#938686] text-[15px] sm:text-[20px]">
            Dimension:
          </span>
          {currentLocation?.dimension}
        </li>
        <li className="sm:flex sm:flex-col ">
          <span className="text-[#938686] text-[15px] sm:text-[20px] ">
            Population:
          </span>
          {currentLocation?.residents.length}
        </li>
      </ul>
    </section>
  );
};
export default LocationInfo;
