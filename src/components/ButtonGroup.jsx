import Button from "./Button";

function ButtonGroup() {
  return (
    <section className="button-group">
      <Button>Mark all as complete</Button>
      <Button>Mark all as incomplete</Button>
      <Button>Reset to initial</Button>
      <Button>Remove all items</Button>
    </section>
  );
}

export default ButtonGroup;
