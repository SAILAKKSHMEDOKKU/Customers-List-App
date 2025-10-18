import { useEffect, useState } from "react";
import { generateCustomers } from "./utils/generateData";
import CustomerTable from "./components/CustomerTable";
import SearchBar from "./components/SearchBar";
import FilterDropdown from "./components/FilterDropdown";
import "./index.css";
import logo from "./assets/Doubletick Logo.png";

export default function App() {
  const [customers, setCustomers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // Generate 1 million records on mount
  useEffect(() => {
    const data = generateCustomers(1_000_000);
    setCustomers(data);
    setFiltered(data);
  }, []);

  // Debounced search (250ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!search) return setFiltered(customers);
      const lower = search.toLowerCase();
      setFiltered(
        customers.filter(
          (c) =>
            c.name.toLowerCase().includes(lower) ||
            c.email.toLowerCase().includes(lower) ||
            c.phone.includes(lower)
        )
      );
    }, 250);
    return () => clearTimeout(timeout);
  }, [search, customers]);

  // Sorting function
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc")
      direction = "desc";

    const sorted = [...filtered].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFiltered(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <div className="header-top">
          <div className="logo">
            <img src={logo} alt="DoubleTick Logo" />
          </div>
        </div>

        <div className="customers-header">
          <h3>All Customers</h3>
          <span className="count">{filtered.length}</span>
        </div>

        <div className="actions">
          <SearchBar value={search} onChange={setSearch} />
          <FilterDropdown />
        </div>
      </header>

      {/* Table Section */}
      <CustomerTable
        data={filtered}
        handleSort={handleSort}
        sortConfig={sortConfig}
      />
    </div>
  );
}
