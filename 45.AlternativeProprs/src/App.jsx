import reactImg1 from './assets/react-core-concepts.png';
import reactImg2 from './assets/components.png';
import reactImg3 from './assets/jsx-ui.png';

import {CORE_CONCEPTS} from './data.js' 


const reactDescriptions = ['FUndamental','Crusial','Core'];
const imgRand = [reactImg1,reactImg2,reactImg3];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(4)];
  const img = imgRand[genRandomInt(4)];
  return (
    <header>
      <img src={img}  alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>45. Alternative Props Syntax</p>
      <p>disini kita mengakses data prop melalui data.js yang di import ssebagai CORE_CONCEPTS</p>
      <p>mengaksesnya dengan objek jadi 'CORE_CONCEPTS[o].title' untuk mengambil title</p>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
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
