import { useState, useEffect } from 'react';
import axios from 'axios';
import arrayList from './arrayList';
import Form from './Form';
import Leaderboard from './Leaderboard';

const Game = () => {
  //setting state
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [rounds, setRounds] = useState(1);
  const [showDefinition, setShowDefinition] = useState(true);
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [buttonOne, setButtonOne] = useState('');
  const [buttonTwo, setButtonTwo] = useState('');
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
    // eslint-disable-next-line
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
      // for rounds
      // setRounds(rounds + 1);
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
      // function to assign answers randomly to buttons
      let chanceNumber = Math.random();
      if (chanceNumber > 0.5) {
        setButtonOne(answer.word);
        setButtonTwo(arrayList[value]);
      } else {
        setButtonOne(arrayList[value]);
        setButtonTwo(answer.word);
      }
    });
  }
  function handleClick(e) {
    if (wordTwo.word === e.target.innerText) {
      setAnswer(`Correct!`);
      setScore(score + 1);
    } else {
      setAnswer(`Sorry, the correct answer was "${wordTwo.word}".`);
    }
  }
  console.log(showDefinition);
  console.log(showNextQuestion);
  return (
    <>
      <section className="wrapper">
        <div className="counter">
          <p>Round: {rounds}</p>
        </div>

        <div className="contentContainer">
          <div className="scoreContainer">
            <p>Score: {score}</p>
          </div>

          {rounds >= 11 ? (
            <Form score={score} />
          ) : (
            showDefinition && (
              <div>
                <div className="definitionContainer">
                  <h3>Definition</h3>
                  {wordOne.defs.length ? (
                    <p>{wordOne.defs[0]}</p>
                  ) : wordTwo.defs.length ? (
                    <p>{wordTwo.defs[0]}</p>
                  ) : null}
                </div>

                {/* wordOne comes from the array list */}
                <div className="wordsContainer">
                  <button
                    onClick={(e) => {
                      handleClick(e);
                      setShowDefinition(false);
                      setShowNextQuestion(true);
                    }}
                  >
                    {/* {wordOne.word} */}
                    {buttonOne}
                  </button>
                  {/* wordTwo comes from the data returned */}

                  <button
                    onClick={(e) => {
                      handleClick(e);
                      setShowDefinition(false);
                      setShowNextQuestion(true);
                    }}
                  >
                    {/* {wordTwo.word} */}
                    {buttonTwo}
                  </button>
                </div>
              </div>
            )
          )}
          {showNextQuestion && (
            <div className="resultNextQuestion">
              <p>{answer}</p>
              <button
                onClick={() => {
                  getRandomIndex();
                  getData();
                  setRounds(rounds + 1);
                  setShowDefinition(!showDefinition);
                  setShowNextQuestion(!showNextQuestion);
                }}
              >
                NEXT QUESTION!
              </button>
            </div>
          )}
        </div>
        {/* {showNextQuestion && (
          <>
            <p>{answer}</p>
            <button
              onClick={() => {
                getRandomIndex();
                getData();
                setRounds(rounds + 1);
                setShowDefinition(!showDefinition);
                setShowNextQuestion(!showNextQuestion);
              }}
            >
              NEW INDEX
            </button>
          </>
        )} */}
      </section>
      <Leaderboard />
    </>
  );
};
export default Game;
