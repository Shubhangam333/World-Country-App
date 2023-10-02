import { HiMagnifyingGlass } from "react-icons/hi2";
import { useThemeContext } from "../../hooks/useTheme";
import { useCountryContext } from "../../hooks/useCountry";

const SearchBar = () => {
  const { darkTheme } = useThemeContext();
  const { setsearchCountry } = useCountryContext();
  return (
    <div className="relative">
      <input
        type="text"
        className={` sm:w-96 w-full h-12 text-sm px-8 border-none outline-none rounded-md ${
          darkTheme ? "bg-navdarkbg text-white placeholder-white" : "bg-white"
        }`}
        placeholder="Search for a country.."
        onChange={(e) => setsearchCountry(e.target.value)}
      />
      <HiMagnifyingGlass
        className={`absolute top-4 left-2 ${
          darkTheme ? "text-white" : "text-navdarkbg"
        }`}
      />
    </div>
  );
};

export default SearchBar;
