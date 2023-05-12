import { useState } from "react";

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  let items = ["New York", "San Francisco", "Chicago"];

  return (
    <>
      <h1>List Header</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // Event handler for Click
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
