
import {CORE_CONCEPTS} from './data.js' 
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* FIRST ALTERNATIVE */}
            <CoreConcept 
            title ={CORE_CONCEPTS[0].title}
            description= {CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            {/* SECOND ALTERNATIVE */}
            <CoreConcept {...CORE_CONCEPTS[1]} //SPREAD OPERATOR
   
            /><CoreConcept 
            title ={CORE_CONCEPTS[2].title}
            description= {CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
            /><CoreConcept 
            title ={CORE_CONCEPTS[3].title}
            description= {CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
