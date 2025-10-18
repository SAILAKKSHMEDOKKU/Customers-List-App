import searchIcon from "../assets/test_Search-3.svg";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <img src={searchIcon} alt="search" />
      <input
        type="text"
        placeholder="Search Customers"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
