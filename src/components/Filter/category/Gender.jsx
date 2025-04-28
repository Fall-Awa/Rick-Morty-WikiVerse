import FilterBTN from "../FilterBTN";

export default function Gender({
  updateGender,
  updatePageNumber,
  currentGender,
}) {
  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="overflow-hidden">
      <div className="p-4 flex flex-wrap gap-3 bg-white">
        {genders.map((item, index) => (
          <FilterBTN
            key={index}
            currentValue={currentGender}
            name="gender"
            index={index}
            updatePageNumber={updatePageNumber}
            task={updateGender}
            input={item}
          />
        ))}
      </div>
    </div>
  );
}

// Species.js
