import CountryCard from "./CountryCard";
import { useFilter } from "../../hooks/useFilter";
import { Link } from "react-router-dom";

const Countries = () => {
  const { filteredCountry } = useFilter();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-8 gap-14 md:grid-cols-3 sm:grid-cols-3 ">
      {filteredCountry &&
        filteredCountry.map((country) => (
          <Link to={`/country/${country.name}`} key={Math.random() * 100}>
            <CountryCard country={country} />
          </Link>
        ))}
    </div>
  );
};

export default Countries;
