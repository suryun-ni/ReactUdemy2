
import {CORE_CONCEPTS} from './data.js' 
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import AttributButton from './components/AttributButton.jsx';
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
   
            />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
            
          </ul>
        </section>
         <section id ="examples">
    <h2>Examples</h2>
    {/* Disini mau menggunakan tag menu bawaan HTML untuk membuat list button */}
    {/* Using Children approach */}
    <menu> 
      <TabButton>Components</TabButton>
      <AttributButton label = "Test"></AttributButton>
    </menu>

         </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
