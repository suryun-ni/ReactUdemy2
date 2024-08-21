export default function CoreConcept({image, title, description}){ //USING DESTRUCTURING, MAKE SURE THE OBJECT KEY SAME AS THE DESCTRUCTURING
    return <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  }