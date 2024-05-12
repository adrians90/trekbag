import { useState } from "react";
import Button from "./Button";

function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>Add an item</h2>
      <input
        value={itemText}
        type="text"
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
