import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
// 3 - info guardará los valores traídos desde la API
const [cuenta, setCuenta] = useState(0)
const [titulo, setTitulo] = useState("")
const [info, setInfo] = useState([]);
// 2 - Llamamos a la función consultar Api al momento de montar el componente


// 1 - Función que consulta la API
const consultarApi = async () =>{
  const url = "https://api.gameofthronesquotes.xyz/v1/random";
  const response = await fetch(url);
  const data = await response.json();
  setInfo(`${data.sentence} - ${data.character.name} - ${data.character.house.name !== null ? data.character.house.name: ''}`) // con stInfo actualizamos el estado 
}
const refInput = useRef();


useEffect(()=>{
  consultarApi();
  refInput.current.focus()
},[cuenta])

  return (
    <>
      {/* Mostrar la info      */}
      <div>
        <h2>Frases de GOT</h2>
        <h3>{info} </h3>
      </div>

      <button onClick={()=> setCuenta(cuenta + 1)}>
        Cambiar frase
      </button>
      <br />

      <h4>Titulo de la pagina</h4>
      <input ref={refInput} type="text" value={titulo} onChange={(e)=> setTitulo(e.target.value)} />
    </>
  )
}

export default App
