import { useThemeContext } from "../../hooks/useTheme";
import Navbar from "../Navbar/Navbar";
import CountryDetailComponent from "./CountryDetailComponent";

const CountryDetails = () => {
  const { darkTheme } = useThemeContext();
  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen py-24 px-16 ${
          darkTheme ? "bg-bodydarkbg" : "bg-white"
        }`}
      >
        <CountryDetailComponent />
      </div>
    </>
  );
};

export default CountryDetails;
