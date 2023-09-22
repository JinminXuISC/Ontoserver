
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Input, Card} from "antd";


function App() {
  const [infos, setInfos] = useState([])
  const [infoMatch, setInfoMatch] = useState([])

  useEffect(() => {
    const loadInfos = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); //endpoint 
      setInfos(response.data);
    };
    loadInfos();

  },[] )

  console.log(infos);

  const searchInfos = (text) => {
    let matches = infos.filter((stats)=> {
      const regex = new RegExp(`${text}`, "gi");
      return stats.title.match(regex)
    })
    setInfoMatch(matches);
  };


  return (
    <div className="App">
      <h2>Ontoserver Search</h2>
      <Input style = {{width: "40%", marginTop:"10%"}} onChange={(e) => searchInfos(e.target.value)}/>

      {infoMatch && infoMatch.map((item, index) => (
        <div key={index} style={{marginLeft: "35%", marginTop:"5px"}}>
          <Card style={{width: "50%"}} title={`title: ${item.title}`}>
            infos
          </Card>
        </div>
      ))}
    </div>
  );
}

export default App;
