import './Sass/App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from 'axios';
import { useEffect, useState } from 'react';
// import firebase from './firebase';
import Header from './Header';
import Start from './Start';
import Game from './Game';
import Leaderboard from './Leaderboard';
import Footer from './Footer';
import arrayList from './arrayList';


function App() {
  const [wordOne, setWordOne] = useState({
    word: '',
    defs: [],
  });
  const [wordTwo, setWordTwo] = useState({
    word: '',
    defs: [],
  });

  function randomNumber() {
    const max = arrayList.length;
    // let usedNumber = [];
    let randomNumber = Math.floor(Math.random() * max);
    // console.log(randomNumber);
    return randomNumber;
  }

  let usedNumber = [];

  function getRandomIndex() {
    // let arrayCopy = [...arrayList];
    // let usedNumber = [];
    let number = randomNumber();
    // console.log(number);
    if (usedNumber.includes(number)) {
      usedNumber.push(number);
      console.log(usedNumber);
      console.log(number);
      getRandomIndex();
    } else {
      usedNumber.push(number);
      console.log(usedNumber);
      console.log(number);
      return number;
    }
  }

  let value = getRandomIndex();
  // console.log(value);

  // randomNumber();
  // getRandomIndex();
  // getRandomIndex();
  // getRandomIndex();

  function getData() {
    axios({
      url: 'https://api.datamuse.com/words',
      method: 'GET',
      params: {
        rel_hom: arrayList[value],
        // getting homophone
        md: 'd',
        // getting definition
      },
    }).then((response) => {
      // console.log(response);
      // setData(response.data[0].defs[0]);
      // passing in first value from array (affect)
      setWordOne({
        word: arrayList[value],
        defs: [],
      });
      let answer = {};
      answer.word = response.data[0].word;
      answer.defs = [response.data[0].defs[0]];
      // console.log(answer);

      // getting the first word response from the data (effect)
      setWordTwo(answer);
      // definition of the above word
    });
  }

  useEffect(() => {
    // value = getRandomIndex();
    getData();
  }, []);



  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={Start} />
          
          <Route exact path="/game">
            <Game
              wordOne={wordOne}
              wordTwo={wordTwo}
            />
          </Route>

          <button
            onClick={() => {
              getRandomIndex();
              getData();
            }}>
            NEW INDEX
          </button>

          <Leaderboard />

        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;