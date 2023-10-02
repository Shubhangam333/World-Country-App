import { useCountryContext } from "../../hooks/useCountry";
import { useThemeContext } from "../../hooks/useTheme";

const DropDown = () => {
  const { darkTheme } = useThemeContext();
  const { setFilteredRegion } = useCountryContext();

  return (
    <select
      name=""
      id=""
      className={` w-44 h-12 text-sm px-4 border-none outline-none rounded-md  ${
        darkTheme ? "bg-navdarkbg text-white placeholder-white" : "bg-white"
      }`}
      onChange={(e) => setFilteredRegion(e.target.value)}
    >
      <option value="" className="p-8 hidden ">
        Filter By Region
      </option>
      <option value="All" className="p-8">
        All
      </option>
      <option value="Africa" className="p-8">
        Africa
      </option>
      <option value="Americas" className="p-8">
        Americas
      </option>
      <option value="Asia" className="p-8">
        Asia
      </option>
      <option value="Europe" className="p-8">
        Europe
      </option>
      <option value="Oceania" className="p-8">
        Oceania
      </option>
    </select>
  );
};

export default DropDown;
