export default function Search({ setSearch, updatePageNumber }) {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex items-center justify-center gap-4 mb-5">
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className="w-[40%]  rounded-lg border-2 border-[#0b5ed7] px-4 py-2 shadow-[1px_3px_9px_rgba(0,0,0,0.25)] focus:outline-none"
        type="text"
      />

      <button
        onClick={searchBtn}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-[1px_3px_9px_rgba(0,0,0,0.25)] hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
