import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className=" flex justify-center items-center">
      <div>
        <div className="space-y-3">
          <h1 className="text-center text-3xl font-semibold">{name}</h1>
          <img className=" max-w-xs object-cove r" src={image} alt="" />
          <div>
            {(() => {
              if (status === "Dead") {
                return (
                  <div className="badge bg-red-500 text-white px-4 py-2 rounded-full text-xl">
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div className="badge bg-green-800 text-white px-4 py-2 rounded-full text-xl">
                    {status}
                  </div>
                );
              } else {
                return (
                  <div className="badge bg-gray-500 text-white px-4 py-2 rounded-full text-xl">
                    {status}
                  </div>
                );
              }
            })()}
          </div>
        </div>
        <div className="content space-y-2 mt-4">
          <div className="">
            <span className="font-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="font-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="font-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="font-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
