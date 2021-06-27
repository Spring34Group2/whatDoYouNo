// import arrayList from './arrayList';
import { useState, useEffect } from 'react';

const Game = ({ wordOne, wordTwo }) => {
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  console.log({ wordOne });
  console.log({ wordTwo });

  useEffect(() => {}, [setAnswer]);

  function handleClick(e) {
    wordTwo.word === e.target.innerText
      ? setAnswer('true')
      : setAnswer('false');
  }

  function increment() {
    // if (answer === "true")
    {
      setScore(score + 1);
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
          increment();
        }}
      >
        {wordTwo.word}
      </button>
      {wordOne.defs.length ? (
        <p>The definition exists on wordOne</p>
      ) : (
        <p>The definition does not exist on wordOne</p>
      )}
      {wordTwo.defs.length ? (
        <p>The definition exists on wordTwo</p>
      ) : (
        <p>The definition does not exist on wordTwo</p>
      )}
    </section>
  );
};
export default Game;
// counter pseudo
// set useState as integer with value of 0
// create function to update state (by + 1)
// + 1 if value = true?
// display message(or console log) if successful
