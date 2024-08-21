
import {CORE_CONCEPTS} from './data.js' 
import Header from './components/Header.jsx'
// BASIC WAY
// function CoreConcept(props){ 
//   return <li>
//     <img src={props.image} alt='...'></img>
//     <h3>{props.title}</h3>
//     <p>{props.description}</p>
//   </li>
// }
// SIMPLE WAY
function CoreConcept({image, title, description}){ //USING DESTRUCTURING, MAKE SURE THE OBJECT KEY SAME AS THE DESCTRUCTURING
  return <li>
    <img src={image} alt={title}></img>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
}



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
