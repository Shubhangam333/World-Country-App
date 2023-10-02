import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext(null);

const getcountrydata = async () => {
  const response = await axios.get("./data.json");
  localStorage.setItem("country", JSON.stringify(response.data));
  return response.data;
};

export const CountryProvider = ({ children }) => {
  const [CountryData, setCountryData] = useState(
    JSON.parse(localStorage.getItem("country"))
  );
  const [filteredRegion, setFilteredRegion] = useState("");
  const [searchCountry, setsearchCountry] = useState("");

  useEffect(() => {
    getcountrydata().then((d) => setCountryData(d));
  }, []);

  return (
    <>
      {CountryData && (
        <CountryContext.Provider
          value={{
            CountryData,
            setFilteredRegion,
            filteredRegion,
            setsearchCountry,
            searchCountry,
          }}
        >
          {children}
        </CountryContext.Provider>
      )}
    </>
  );
};
