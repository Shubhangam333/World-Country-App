import { BiMoon } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { useThemeContext } from "../../hooks/useTheme";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useThemeContext();
  return (
    <nav
      className={`py-4 px-8 text-lg flex justify-between fixed top-0 left-0 right-0 z-50 ${
        darkTheme ? "bg-navdarkbg" : "bg-white"
      }`}
    >
      {darkTheme ? (
        <p className="text-white font-bold ">Where in the World?</p>
      ) : (
        <p className="font-bold">Where in the World?</p>
      )}
      <button
        className="flex items-center"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {" "}
        {darkTheme ? (
          <BiMoon className="text-white font-bold" />
        ) : (
          <BsFillMoonFill />
        )}
        {darkTheme ? (
          <span className="text-white font-bold px-2"> Light Mode </span>
        ) : (
          <span className="font-bold px-2"> Dark Mode </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
