import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

export const useCountryContext = () => useContext(CountryContext);
