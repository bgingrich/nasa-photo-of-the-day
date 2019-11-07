import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import TopCard from "./components/TopCard";
import MiddleCard from "./components/MiddleCard";
import BottomCard from "./components/BottomCard";

function App() {
  const [title, setTitle] = useState([]);
  const [url,setUrl] = useState([]);
  const [date, setDate] = useState([]);
  const [explanation, setExplanation] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=QwA3kWsVYOJipbhB1b8jeUA36fcdBmLwLHrpcBQc')
    .then(response => {
      console.log("title data", response.data);
      setTitle(response.data.title);
      setUrl(response.data.url);
      setDate(response.data.date);
      setExplanation(response.data.explanation);
    })
    .catch(error => {
      console.log("No data was returned. Sorry", error);
    });
  },[]);

  return (
    <div className="App">
      <div className="App-grid">
      <TopCard title = {title}/>
      <MiddleCard date = {date} image = {url}/>
      <BottomCard explanation = {explanation}/>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
}

export default App;
