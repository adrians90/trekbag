import { initialItems } from "./lib/constants";

function ItemList() {
  return (
    <ul>
      {initialItems.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" /> {item.name}
      </label>
    </li>
  );
}

export default ItemList;
