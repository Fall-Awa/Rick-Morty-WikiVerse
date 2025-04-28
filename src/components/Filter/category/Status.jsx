import FilterBTN from "../FilterBTN";

export default function Status({
  updateStatus,
  updatePageNumber,
  currentStatus,
}) {
  const status = ["Alive", "Dead", "Unknown"];

  return (
    <div className=" overflow-hidden">
      <div className="p-4 flex flex-wrap gap-3 bg-white">
        {status.map((item, index) => (
          <FilterBTN
            key={index}
            currentValue={currentStatus}
            index={index}
            name="status"
            task={updateStatus}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  );
}

// import React from 'react'

// const Status = () => {
//   return (
//     <div>Status</div>
//   )
// }

// export default Status
