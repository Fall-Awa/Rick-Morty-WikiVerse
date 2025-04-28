import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import Filter from "./Filter/Filter";
import Pagination from "./Pagination/Pagination";
import Search from "./Search/Search";

export default function Characters() {
  const [fetchedData, updateFetchedData] = useState([]);
  const api = `https://rickandmortyapi.com/api/character/?page=1`;
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  const { info, results } = fetchedData;
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  useEffect(() => {
    (async function () {
      const apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        updateFetchedData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        updateFetchedData({ info: {}, results: [] });
      }
    })();
  }, [pageNumber, search, status, gender, species]);

  // useEffect(() => {
  //   (async function () {
  //     let data = await fetch(api).then((res) => res.json());
  //     updateFetchedData(data);
  //   })();
  // }, [api]);

  return (
    <>
      <h1 className="text-center mb-5 font-semibold text-5xl">Characters</h1>
      <Search
        setSearch={setSearch}
        updatePageNumber={updatePageNumber}
        search={search}
      />
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap -mx-2">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            gender={gender}
            updateGender={updateGender}
            species={species}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="w-full lg:w-8/12 px-2 text-center mb-3">
            <div className="flex flex-wrap -mx-2 ">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      {info && (
        <Pagination
          info={info}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
        />
      )}
    </>
  );
}
