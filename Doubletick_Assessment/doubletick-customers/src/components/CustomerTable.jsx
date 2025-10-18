import { useEffect, useState, useRef } from "react";
import TableHeader from "./TableHeader";

export default function CustomerTable({ data, handleSort, sortConfig }) {
  const [visibleCount, setVisibleCount] = useState(30);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const handleScroll = () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 200) {
        setVisibleCount((prev) => prev + 30);
      }
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="table-container" ref={containerRef}>
      <table>
        <TableHeader onSort={handleSort} sortConfig={sortConfig} />
        <tbody>
          {data.slice(0, visibleCount).map((c) => (
            <tr key={c.id}>
              <td><input type="checkbox" /></td>
              
              {/* Customer Name + Avatar + Phone */}
              <td className="customer-cell">
                <img src={c.avatar} alt={c.name} />
                <div>
                  <p className="name">{c.name}</p>
                  <p className="phone">{c.phone}</p>
                </div>
              </td>

              <td>{c.score}</td>
              <td>{c.email}</td>

              {/* Last Message formatted */}
              <td>
                {new Date(c.lastMessageAt).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true
                })}
              </td>

              <td>{c.addedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
