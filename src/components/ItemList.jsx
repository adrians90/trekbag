import { useState } from "react";
import { initialItems } from "./lib/constants";

function ItemList() {
  const [items, setItems] = useState(initialItems);
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" /> {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}

export default ItemList;
