import { useThemeContext } from "../../hooks/useTheme";

const CountryCard = ({ country }) => {
  const { darkTheme } = useThemeContext();
  return (
    <div
      className={` sm:flex sm:flex-col flex flex-col sm:items-start pb-8 cursor-pointer transition-all  hover:scale-105 ${
        darkTheme ? "bg-navdarkbg" : "bg-white"
      }`}
    >
      <div className="w-full">
        <img
          src={country.flags.svg}
          alt=""
          className="w-full h-44 object-cover "
        />
      </div>

      <h2
        className={`px-4 mt-4 mb-2 text-lg ${
          darkTheme ? "text-white" : "text-black"
        }`}
      >
        {country.name}
      </h2>
      <p className={`px-4 ${darkTheme ? "text-white" : "text-black"}`}>
        Population:
        <span className={`px-4 ${darkTheme ? "text-white" : "text-gray"}`}>
          {country.population}
        </span>
      </p>
      <p className={`px-4 ${darkTheme ? "text-white" : "text-gray"}`}>
        Region:<span>{country.region}</span>
      </p>
      <p className={`px-4 ${darkTheme ? "text-white" : "text-gray"}`}>
        Capital:<span>{country.capital}</span>
      </p>
    </div>
  );
};

export default CountryCard;
