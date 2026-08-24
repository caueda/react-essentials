import { CORE_CONCEPTS, EXAMPLES } from "../data.js";
import { useState } from "react";
import TabButton from "./TabButton.jsx";
import TabExamples from "./TabExamples.jsx";

function Examples() {
  const [selectedComponent, setSelectedComponent] = useState();
  const onSelect = (component) => {
    setSelectedComponent(component);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedComponent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedComponent].title}</h3>
        <p>{EXAMPLES[selectedComponent].description}</p>
        <code>{EXAMPLES[selectedComponent].code}</code>
      </div>
    );
  }
  const menuContent = <>
    {CORE_CONCEPTS.map((concept) => (
            <TabButton
            key={concept.id}
            isSelected={selectedComponent === concept.id}
            onSelect={() => onSelect(concept.id)}
            >
            {concept.title}
            </TabButton>
        ))}
    </>
  return (
    <TabExamples title="Examples" id="examples" menuContent={menuContent}>
        {tabContent}
    </TabExamples>
  );
}

export default Examples;
