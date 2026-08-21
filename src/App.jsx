import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import './components/Header/Header.css';

function App() {
  const onSelect = () => {
    console.log('Tab selected');
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
            <TabButton onSelect={onSelect}>Components</TabButton>
            <TabButton onSelect={onSelect}>JSX</TabButton>
            <TabButton onSelect={onSelect}>Props</TabButton>
            <TabButton onSelect={onSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
