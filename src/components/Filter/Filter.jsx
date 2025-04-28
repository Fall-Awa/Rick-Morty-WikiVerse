import React, { useState } from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({
  pageNumber,
  status, // Ajouté
  gender, // Ajouté
  species, // Ajouté
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  // Gestion de l'ouverture/fermeture des sections
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Fonction pour réinitialiser les filtres
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    // window.location.reload(false); // peut être amélioré plus tard pour éviter reload
  };

  return (
    <>
      <div className="lg:w-1/4 w-full mb-5">
        <div className="text-center font-bold text-2xl mb-2">Filters</div>
        <div
          onClick={clear}
          className="text-blue-500 underline text-center mb-3 cursor-pointer"
        >
          Clear Filters
        </div>

        {/* Accordions */}
        <div
          className="border border-gray-200 
        "
        >
          {/* Status Accordion */}
          <div className="border hover:border-blue-600 border-gray-200   overflow-hidden">
            <button
              onClick={() => toggleSection("status")}
              className={`w-full flex justify-between items-center p-4 font-semibold text-left ${
                openSection === "status"
                  ? "bg-blue-100 shadow-blue-800"
                  : "hover:bg-blue-100 hover:shadow-blue-800"
              } transition-all duration-300`}
            >
              Status
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openSection === "status" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSection === "status" && (
              <div className="px-4 pb-4">
                <Status
                  updatePageNumber={updatePageNumber}
                  updateStatus={updateStatus}
                  currentStatus={status}
                />
              </div>
            )}
          </div>

          {/* Gender Accordion */}
          <div className="border hover:border-blue-600 border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection("gender")}
              className={`w-full flex justify-between items-center p-4 font-semibold text-left ${
                openSection === "gender"
                  ? "bg-blue-100 shadow-blue-800"
                  : "hover:bg-blue-100 hover:shadow-blue-800"
              } transition-all duration-300`}
            >
              Gender
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openSection === "gender" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSection === "gender" && (
              <div className="px-4 pb-4">
                <Gender
                  updatePageNumber={updatePageNumber}
                  updateGender={updateGender}
                  currentGender={gender}
                />
              </div>
            )}
          </div>

          {/* Species Accordion */}
          <div className="border hover:border-blue-600 border-gray-200   overflow-hidden">
            <button
              onClick={() => toggleSection("species")}
              className={`w-full flex justify-between items-center p-4 font-semibold text-left ${
                openSection === "species-"
                  ? "bg-blue-100 shadow-blue-800"
                  : "hover:bg-blue-100 hover:shadow-blue-800"
              } transition-all duration-300`}
            >
              Species
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openSection === "species" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSection === "species" && (
              <div className="px-4 pb-4">
                <Species
                  updatePageNumber={updatePageNumber}
                  updateSpecies={updateSpecies}
                  currentSpecies={species}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
