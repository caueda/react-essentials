import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import './components/Header/Header.css';

function App() {
  const [selectedComponent, setTabContent] = useState('components');
  const onSelect = (component) => { 
    setTabContent(component);
  };
  return (
    <div>      
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.id} image={concept.image} title={concept.title} description={concept.description} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => onSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => onSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => onSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedComponent].title}</h3>
            <p>{EXAMPLES[selectedComponent].description}</p>
            <code>
              {EXAMPLES[selectedComponent].code}
            </code>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
