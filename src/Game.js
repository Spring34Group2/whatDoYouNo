import { useState, useEffect } from 'react';
import axios from 'axios';
import arrayList from './arrayList';

const Game = () => {

  //setting state
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [wordOne, setWordOne] = useState({
    word: '',
    defs: [],
  });
  const [wordTwo, setWordTwo] = useState({
    word: '',
    defs: [],
  });

  // variables
  let usedNumber = [];
  let value = getRandomIndex();

  // creating functions
  useEffect(() => {
    // value = getRandomIndex();
    getData();
  }, []);

  function randomNumber() {
    const max = arrayList.length;
    // let usedNumber = [];
    let randomNumber = Math.floor(Math.random() * max);
    // console.log(randomNumber);
    return randomNumber;
  }

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

  // API CALL 
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

  function handleClick(e) {
    if (wordTwo.word === e.target.innerText) {
      setAnswer('correct');
      setScore(score + 1);  
    } else {
      setAnswer('incorrect');
    }
  }

  return (
    <section className="game">
      <div className="counter">
        <p>Score: {score}</p>
      </div>
      <h3>Definition</h3>
      {wordOne.defs.length ? (
        <p>{wordOne.defs[0]}</p>
      ) : wordTwo.defs.length ? (
        <p>{wordTwo.defs[0]}</p>
      ) : null}
      {/* wordOne comes from the array list */}
      <button onClick={handleClick}>{wordOne.word}</button>
      {/* wordTwo comes from the data returned */}

      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {wordTwo.word}
      </button>
      <p>{answer}</p>
      <button
        onClick={() => {
          getRandomIndex();
          getData();
        }}>
        NEW INDEX
      </button>

    </section>
  );
};
export default Game;
