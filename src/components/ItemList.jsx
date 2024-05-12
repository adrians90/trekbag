const initialItems = [
  {
    id: 1,
    name: "good mood",
    packed: true,
  },
  {
    id: 2,
    name: "passport",
    packed: false,
  },
  {
    id: 3,
    name: "phone charger",
    packed: false,
  },
];

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
