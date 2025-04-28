import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import InputGroup from "./InputGroup";
import Pagination from "./Pagination/Pagination";

export default function Episodes() {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);
  let [pageNumber, updatePageNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api, pageNumber]);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-center text-2xl font-bold ">
            Episode name :{" "}
            <span className="text-blue-600">
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center">
            Air Date: {air_date === "" ? "Unknown" : air_date}
          </h5>
        </div>

        <div className=" flex justify-between ">
          <div className="flex flex-wrap -mx-2  ">
            <div className="lg:w-1/4">
              <h4 className="text-center  text-2xl  mb-4">Pick Episode</h4>
              <InputGroup name="Episode" changeID={setID} total={51} />
            </div>

            <div className="w-full lg:w-8/12 px-2 text-center mb-3">
              <div className="flex flex-wrap -mx-2 ">
                <Card page="/episodes/" results={results} />
              </div>
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
