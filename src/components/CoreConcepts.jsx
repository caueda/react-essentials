import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';

function CoreConcepts() {
  return (    
    <Section id="core-concepts" title="Core Concepts">
        <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.id} image={concept.image} title={concept.title} description={concept.description} />
        ))}
        </ul>
    </Section>
  );
}

export default CoreConcepts;