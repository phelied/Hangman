import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { FcSpeaker } from 'react-icons/fc';
import newWords from './word.js'


function App() {

  const [data, setData] = useState('');
  const [searchWord, setSearchWord] = useState('');
 
  const handleClick = () => {
    var item = newWords[Math.floor(Math.random() * newWords.length)];
    setSearchWord(item);
    }
    
  function getMeaning() {
    Axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + searchWord).then((response) => {
      setData(response.data[0]);
      console.log(response.data[0]);
    });
  }

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button value="random words" onClick={handleClick}>random words</button>
        <div>
          <p>{searchWord}</p>
        </div>
      </header>

      <div className="searchBox">

        <button
          onClick={() => {
            getMeaning();
          }}
        >
          <FaSearch size="20px" />
        </button>
      </div>
      {data && (
        <div className="showResults">
          <h2>
            {data.word}{" "}
            <button
              onClick={() => {
                playAudio();
              }}
            >
              <FcSpeaker size="26px" />
            </button>
          </h2>
          <h4>Parts of speech:</h4>
 
           
<p>{data.meanings[0].partOfSpeech}</p>
 
 
          <h4>Definition:</h4>
 
           
<p>{data.meanings[0].definitions[0].definition}</p>
 
 
          <h4>Example:</h4>
 
           
<p>{data.meanings[0].definitions[0].example}</p>
 
        </div>
      )}
    </div>
  );
}

export default App;
