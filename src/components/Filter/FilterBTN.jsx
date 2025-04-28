const FilterBTN = ({
  input,
  task,
  updatePageNumber,
  index,
  name,
  currentValue,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="flex items-center space-x-2">
        <input
          className="hidden peer"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          checked={currentValue === input}
          readOnly
        />
        <label
          onClick={() => {
            task(input); // Applique le filtre
            updatePageNumber(1); // Réinitialise la page à la première
          }}
          htmlFor={`${name}-${index}`}
          className="cursor-pointer px-4 py-2 border border-blue-500 text-blue-500 rounded-lg peer-checked:bg-blue-600 peer-checked:text-white transition-colors"
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
