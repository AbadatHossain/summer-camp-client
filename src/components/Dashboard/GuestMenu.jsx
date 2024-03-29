import { NavLink } from "react-router-dom";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
const GuestMenu = () => {
  return (
    <>
      <NavLink
        to="mySelectedClasses"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <BsFingerprint className="w-5 h-5" />

        <span className="mx-4 font-medium">My Selected Classes</span>
      </NavLink>

      <div className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer">
        <GrUserAdmin className="w-5 h-5" />
        <NavLink
          to="myEnrolledClasses"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`
          }
        >
          <span className="mx-4 font-medium">My Enrolled Classes</span>
        </NavLink>
      </div>
    </>
  );
};

export default GuestMenu;
