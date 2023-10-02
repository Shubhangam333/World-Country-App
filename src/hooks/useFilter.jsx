import { useCountryContext } from "./useCountry";

export const useFilter = () => {
  const { CountryData, filteredRegion, searchCountry } = useCountryContext();
  let filteredCountry;
  if (filteredRegion !== "" && filteredRegion !== "All") {
    filteredCountry =
      CountryData && CountryData.filter((c) => c.region === filteredRegion);
  } else {
    filteredCountry = CountryData;
  }
  if (searchCountry !== "") {
    filteredCountry =
      CountryData &&
      CountryData.filter((country) =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase())
      );
  }

  return {
    filteredCountry,
  };
};
