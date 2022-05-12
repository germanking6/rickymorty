import logo from './logo.svg';
import styles from './App.css';
import React from "react";

function App() {
  const [data,setData] = React.useState(null);
  const [personaje,setPersonaje] = React.useState(null);
  /*React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);/**/
  React.useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/21")
      .then((res)=>res.json())
      .then((data)=>setPersonaje(data))
  },[]);
  const change=()=>{
    var min = 1;
    var max = 100;
    var rand =  min + (Math.random() * (max-min));
    var url="https://rickandmortyapi.com/api/character/"
    url+=parseInt(rand);
  
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setPersonaje(data))
  };
  return (
    <div className="App">
        <p>
          {!data ? "Loading...":data}
        </p>
        <div >
          <button onClick={change} > cambialo</button>
          {!personaje?"loading 2.0.....":
            <div className='card'>
              <img className='img' src={personaje.image} />
            <div className="container">
                
              <p> {personaje.name}</p>
              <p>{`Onta: ${personaje.location.name}`}</p>
            
            </div>
          </div>
            
          }
        </div>
        
    </div>
  );
}

export default App;