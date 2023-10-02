import { AiOutlineArrowLeft } from "react-icons/ai";

import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useThemeContext } from "../../hooks/useTheme";

const CountryDetailComponent = () => {
  const { darkTheme } = useThemeContext();
  const Navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountry] = useState([]);

  console.log(borderCountries);

  const params = useParams();

  const { name } = params;

  const findCountryData = useCallback(async (border) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${border}`
      );

      setBorderCountry((cur) => [...cur, response.data[0].name.common]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchCountryByName = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      setCountry(res.data[0]);

      res.data[0]?.borders?.forEach((border) => {
        return findCountryData(border);
      });
    } catch (error) {
      console.log(error);
    }
  }, [name, findCountryData]);

  useEffect(() => {
    fetchCountryByName();
  }, [fetchCountryByName]);
  return (
    <>
      <button
        className={`flex items-center gap-2 px-4 py-1 ${
          darkTheme ? "bg-navdarkbg text-white placeholder-white" : "bg-white"
        }`}
        onClick={() => Navigate("/")}
      >
        <AiOutlineArrowLeft />
        Back
      </button>

      {country && (
        <div className="sm:flex sm:flex-row flex flex-col mt-16 gap-12 items-center h-full justify-between ">
          <div className="w-full">
            <img
              src={country.flags.svg}
              alt="flag"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`${darkTheme ? "text-white" : ""} flex flex-col w-full`}
          >
            <h2 className="text-2xl pb-8 font-bold">{country.name.common}</h2>
            <div className="details flex sm:flex-row flex-col w-full gap-4">
              <div className="left w-full">
                <p>
                  Native Name:{" "}
                  <span className="text-darkgray">{country.name.official}</span>
                </p>
                <p>
                  Population:{" "}
                  <span className="text-darkgray">{country.population}</span>
                </p>
                <p>
                  Region:{" "}
                  <span className="text-darkgray">{country.region}</span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span className="text-darkgray">{country.subregion}</span>
                </p>
                <p>
                  Capital:{" "}
                  <span className="text-darkgray">{country.capital}</span>
                </p>
              </div>
              <div className="right w-full">
                <p>
                  Top Level Domain:{" "}
                  <span className="text-darkgray">{country.tld}</span>
                </p>
                <p>
                  Currencies:{" "}
                  <span className="text-darkgray">
                    {Object.keys(country.currencies)[0]}
                  </span>
                </p>
                <p>
                  Languages:{" "}
                  <span className="text-darkgray">
                    {Object.keys(country.languages)}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="mt-8 mb-4">Border Countries: </p>
              <div className="flex items-center  flex-wrap">
                {borderCountries ? (
                  borderCountries.map((border, i) => (
                    <Link
                      key={i}
                      to={`/country/${border}`}
                      onClick={() => setBorderCountry([])}
                    >
                      <button
                        className={`px-2 mx-2 my-1 ${
                          darkTheme
                            ? "bg-navdarkbg text-white placeholder-white"
                            : "bg-white"
                        }`}
                      >
                        {border}
                      </button>
                    </Link>
                  ))
                ) : (
                  <h2> No Border Country Exist</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetailComponent;
