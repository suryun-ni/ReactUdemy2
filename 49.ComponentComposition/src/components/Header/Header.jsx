import reactImg1 from '../../assets/react-core-concepts.png';
import reactImg2 from '../../assets/components.png';
import reactImg3 from '../../assets/jsx-ui.png';
import './Header.css';

export default function Header() {
    const description = reactDescriptions[genRandomInt(4)];
    const img = imgRand[genRandomInt(4)];
    return (
      <header>
        <img src={img}  alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>49. Componenet Composition: The special children Prop</p>
        <p> 
          Deskripsi :


        </p>
        <p></p>
        <p>
          {description} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }
  const reactDescriptions = ['FUndamental','Crusial','Core'];
  
  const imgRand = [reactImg1,reactImg2,reactImg3];
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }