import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;

    if (newLocation.trim() === "") {
      alert("Please enter a dimension ❌");
    } else {
      fetchDimension(newLocation);
      document.getElementById("myForm").reset();
    }
  };

  const fetchDimension = (idLocation) => {
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(URL)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const randomDimension = getRandomDimension(126);
    fetchDimension(randomDimension);
  }, []);

  return (
    <main
      className=" bg-[url('/img/backgroundpage.png')] bg-center bg-cover bg-no-repeat  text-white 
    sm:grid justify-center"
    >
      <header className="justify-center items-center h-[250px] sm:mx-auto ">
        <img className="px-4 absolute " src="/img/logoHeader.png" alt="" />
        <img className="relative p-2 py-4" src="/img/nombre1.png" alt="" />
      </header>
      <section className="p-4 py-6 grid gap-10">
        <LocationForm handleSubmit={handleSubmit} />
        <LocationInfo currentLocation={currentLocation} />
        <h2 className="flex  justify-center text-[#8EFF8B] font-fira-Code text-[14px] sm:text-[20px]">
          ¡Wellcome to the crazy universe!
        </h2>
        <ResidentList
          residents={currentLocation?.residents ?? []}
          currentLocation={currentLocation}
        />
      </section>
    </main>
  );
}

export default App;
