import Button from "./Button";
import { secondaryButtons } from "./lib/constants";

function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}

export default ButtonGroup;
