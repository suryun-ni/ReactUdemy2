import reactImg1 from './assets/react-core-concepts.png';
import reactImg2 from './assets/components.png';
import reactImg3 from './assets/jsx-ui.png';



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
      <p>44. Making Components Reusable with Props, disini bila ada komponen berulang seperti cards, kita dapat menggunakan komponen yang sama lalu menggunakan props sebagai isi data</p>
      <p>pada props penting bahwa props akan mengubah data menjadi objek. pastikan penulisan value pada componen dalam App() sama dengan props di function</p>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props){
  return <li>
    <img src={props.image} alt='...'></img>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
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
            <CoreConcept 
            title ="Components" 
            description="The core UI building block" 
            image={reactImg2}
            />
            <CoreConcept 
            title ="Pros" 
            description="The core UI building block" 
            image={reactImg2}
            /><CoreConcept 
            title ="Components" 
            description="The core UI building block" 
            image={reactImg2}
            /><CoreConcept 
            title ="Components" 
            description="The core UI building block" 
            image={reactImg2}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
