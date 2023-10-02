import Filter from "../Filter/Filter";
import Countries from "../Country/Countries";
import { useThemeContext } from "../../hooks/useTheme";

const Main = () => {
  const { darkTheme } = useThemeContext();
  return (
    <>
      <div
        className={`min-h-screen min-w-width py-24 px-16 ${
          darkTheme ? "bg-bodydarkbg" : "bg-white"
        }`}
      >
        <Filter />
        <Countries />
      </div>
    </>
  );
};

export default Main;
