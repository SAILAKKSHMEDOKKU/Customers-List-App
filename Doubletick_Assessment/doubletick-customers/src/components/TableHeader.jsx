import React from "react";


export default function TableHeader({ onSort, sortConfig }) {
  // helper function to show sorting arrows
  const getSortArrow = (key) => {
    if (!sortConfig.key || sortConfig.key !== key) return "⇅"; // default
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <thead>
      <tr>
        <th style={{ width: "40px" }}></th>
        <th onClick={() => onSort("name")}>
          Customer {getSortArrow("name")}
        </th>
        <th onClick={() => onSort("score")}>
          Score {getSortArrow("score")}
        </th>
        <th onClick={() => onSort("email")}>
          Email {getSortArrow("email")}
        </th>
        <th>Last message sent at</th>
        <th onClick={() => onSort("addedBy")}>
          Added by {getSortArrow("addedBy")}
        </th>
      </tr>
    </thead>
  );
}
