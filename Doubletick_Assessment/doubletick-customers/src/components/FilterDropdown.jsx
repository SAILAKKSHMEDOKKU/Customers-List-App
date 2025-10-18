import { useState } from "react";
import filterIcon from "../assets/test_Filter.svg";

export default function FilterDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="filter-dropdown">
      <button onClick={() => setOpen(!open)}>
        <img src={filterIcon} alt="filter" /> Add Filters
      </button>
      {open && (
        <ul className="dropdown-menu">
          <li>Filter 1</li>
          <li>Filter 2</li>
          <li>Filter 3</li>
          <li>Filter 4</li>
        </ul>
      )}
    </div>
  );
}
