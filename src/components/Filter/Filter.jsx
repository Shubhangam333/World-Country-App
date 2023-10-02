import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

const Filter = () => {
  return (
    <div className="sm:flex sm:flex-row sm:items-center sm:justify-between flex flex-col gap-4">
      <SearchBar />
      <DropDown />
    </div>
  );
};

export default Filter;
