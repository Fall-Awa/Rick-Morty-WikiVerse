import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between p-4 bg-gray-50 mb-10">
        <div>
          <p className="text-4xl px-20 font-semibold">
            Rick & Morty <span className="text-blue-500">Wiki</span>{" "}
          </p>
        </div>
        <div className="flex gap-6 text-2xl px-20 py-4 bg-gray-100">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-bold underline"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Characters
          </NavLink>

          <NavLink
            to="/Episodes"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-bold underline"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Episode
          </NavLink>

          <NavLink
            to="/Locations"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 font-bold underline"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Location
          </NavLink>
        </div>
      </nav>
    </>
  );
}
