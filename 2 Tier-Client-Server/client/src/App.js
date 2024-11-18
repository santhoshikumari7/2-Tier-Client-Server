import {useState} from "react"
import './App.css';

function App() {

  let [heros,setHeros] = useState([]);

   let getHerosFromServer = async ()=>{

    let reqOptions = {
      method:"GET"
    }

     let JSONData = await fetch("http://localhost:4567/herosNames",reqOptions);

     let JSOData = await JSONData.json();
     setHeros(JSOData)

     console.log(JSOData);

   }

   let getHeroinsFromServer = async ()=>{

    let reqOptions = {
      method:"GET"
    }
    let JSONData  = await fetch("http://localhost:4567/heroinNames",reqOptions);

    let JSOData = await JSONData.json();

    setHeros(JSOData);

    console.log(JSOData)

   }

  return (
    <div className="App">
    <button onClick={()=>{
      getHerosFromServer();
    }}>Get Heros</button>

    <button onClick={()=>{
     getHeroinsFromServer;
    }}>Get Heroins</button>
    {heros.map((ele,i)=>{
      return<h1>{ele}</h1>

    })}
    </div>
  );
}

export default App;
