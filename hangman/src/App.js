import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { FcSpeaker } from 'react-icons/fc';
import words from './randomWord.js'

function App() {

  const [data, setData] = useState('');
  const [searchWord, setSearchWord] = useState('');
 
  const handleClick = () => {
    var item = words[Math.floor(Math.random() * words.length)];
    setSearchWord(item);
    }
  function getMeaning() {
    Axios.get('https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}').then((response) => {
      setData(response.data[0]);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <button value="random words" onClick={handleClick}>random words</button>
        <div>
          <p>{searchWord}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
