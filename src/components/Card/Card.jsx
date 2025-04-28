// let [fetchedData, updateFetchedData] = useState([]);
// let { info, results } = fetchedData;
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ results, page }) {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;
      const baseBadgeClasses =
        "absolute top-[10px] right-[20px] text-sm font-semibold px-3 py-1 rounded-md text-white";
      const statusColor =
        status === "Dead"
          ? "bg-red-500"
          : status === "Alive"
          ? "bg-green-700"
          : "bg-gray-500";
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="w-full  md:w-1/2 lg:w-1/3 px-2 mb-4 text-gray-900"
        >
          <div className=" relative rounded-2xl border overflow-hidden">
            <div className={`${baseBadgeClasses} ${statusColor}`}>{status}</div>

            <img
              className="w-full h-auto object-cover  rounded-t-2xl "
              src={image}
              alt={name}
            />
            <div className="p-4 text-start  ">
              <div className="text-lg font-bold mb-2">{name}</div>
              <div>
                <div className="text-sm text-gray-600">Last Location:</div>
                <div className="text-md">{location.name}</div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = <div>No Characters Found :/</div>;
  }

  return <>{display}</>;
}
