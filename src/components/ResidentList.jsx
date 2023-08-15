import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const INITIAL_PAGE = 1;

const ResidentList = ({ residents, currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Cantidad de residentes por pagina, yo decido
  const RESIDENTS_PER_PAGE = 20;

  // cantidad total de paginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  //Residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  //Generacion de un arreglo de las paginas que se van amostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [currentLocation]);

  return (
    <section className="flex flex-col  w-full max-w-[1024px]">
      <section
        className="grid gap-6 justify-around
         grid-cols-[repeat(auto-fill,_260px)]
       w-full "
      >
        {residentsInPage.map((resident) => (
          <ResidentCard residentUrl={resident} key={resident} />
        ))}
      </section>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};
export default ResidentList;
