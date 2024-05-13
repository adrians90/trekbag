function ItemList({ items, handleDeleteItem }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            key={item.name}
            item={item}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" /> {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default ItemList;
