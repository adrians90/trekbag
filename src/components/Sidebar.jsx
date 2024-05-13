import { useContext } from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { ItemsContext } from "./contexts/ItemsContextProvider";

function Sidebar() {
  const { handleAddItem } = useContext(ItemsContext);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}

export default Sidebar;
