import FilterBTN from "../FilterBTN";
export default function Species({
  updateSpecies,
  updatePageNumber,
  currentSpecies,
}) {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="overflow-hidden">
      <div className="p-4 flex flex-wrap gap-3 bg-white">
        {species.map((item, index) => (
          <FilterBTN
            key={index}
            currentValue={currentSpecies}
            name="species"
            index={index}
            updatePageNumber={updatePageNumber}
            task={updateSpecies}
            input={item}
          />
        ))}
      </div>
    </div>
  );
}
