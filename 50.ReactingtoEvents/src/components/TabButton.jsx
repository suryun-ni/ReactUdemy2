
// First Code
// export default function TabButton(props){
//     return <li><button>{props.children}</button></li>
// }
export default function TabButton({children}){
//    document.querySelector('button').addEventListener('clcik',() => {}) //Ini di vanilla JS
function ClickHandler(){ //function dimana ketika di trigger akan ketika ada peristiwa terjadi
console.log('Hello world!');
}

    return( <li><button onClick={ClickHandler}>{children}</button></li>)
     //Children itu bawaan react untuk mengambil data diantara komponen tag
}