import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="bg-black/20 border-[3px] border-[#8EFF8B] overflow-hidden w-[260px]">
      <header className="flex justify-center items-center relative w-[260px] h-[300px] ">
        <img
          className="border-b-[3px] border-[#8EFF8B] h-full w-full object-cover "
          src={residentInfo?.image}
          alt=""
        />
        <div
          className="border-[3px] absolute top-[210px] bg-black/60
         border-[#8EFF8B] h-[42px] w-[150px]
          flex items-center gap-2 p-2 justify-center font-fira-Code text-[14px] "
        >
          <div
            className={` h-[10px] aspect-square rounded-full ${
              residentStatus[residentInfo?.status]
            }`}
          ></div>
          {residentInfo?.status}
        </div>
      </header>
      <section className="p-2 py-4 ">
        <h3 className="font-fira-Code mb-2 text-[20px] flex justify-center line-clamp-1 sm:line-clamp-1">
          {residentInfo?.name}
        </h3>
        <hr className="bg-[#084851] border-[1px]" />
        <ul className="font-fira-Code text-[18]">
          <li>
            <span className="text-[#938686] text-[15px]">Species:</span>{" "}
            {residentInfo?.species}{" "}
          </li>
          <li>
            <span className="text-[#938686] text-[15px]">Origin:</span>{" "}
            {residentInfo?.origin.name}{" "}
          </li>
          <li>
            <span className="text-[#938686] text-[15px]">Times appear:</span>{" "}
            {residentInfo?.episode.length}{" "}
          </li>
        </ul>
      </section>
    </article>
  );
};
export default ResidentCard;
