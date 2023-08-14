const LocationForm = ({ handleSubmit }) => {
  return (
    <form
      className="border-[3px]
       border-[#8EFF8B] text-[5px] flex  items-center  rounded-md  justify-center "
      onSubmit={handleSubmit}
    >
      <input
        className="outline-none font-fira-Code text-[15px] text-white bg-black p-[8.5px] flex-1 "
        id="newLocation"
        min={1}
        max={126}
        placeholder="Type a location id ..."
        type="number"
      />
      <button className=" p-2  bg-[#8EFF8B]/25   w-[50px]">
        <i className="bx bx-search-alt-2 text-xl   "></i>
      </button>
    </form>
  );
};
export default LocationForm;
