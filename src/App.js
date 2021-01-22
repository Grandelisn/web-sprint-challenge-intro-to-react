import './App.css';
import CardSlider from './components/CardSlider';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(()=> {
    axios.get('https://swapi.dev/api/people/')
    .then(res => setData(res.data))
    .catch(error => console.log(error));
  }, []);
  console.log('App.js ', data.results);
  return <div>
    <CardSlider slides={data.results} />
    </div>;
}

export default App;
