// import arrayList from './arrayList';
import { useState, useEffect } from 'react';

const Game = ({ wordOne, wordTwo, definition }) => {
  const [answer, setAnswer] = useState(false);
  const [score, setScore] = useState(0);

  // useEffect(() => {}, [setAnswer]);

  function handleClick(e) {
    wordTwo === e.target.innerText
      ? setAnswer(true)      
      : setAnswer(false)
  }

  function increment() {
    // if (answer === "true")
    { setScore(score +1) }
  }
  // console.log(score)

  return (
    <section className="game">
      <div className="counter">
        <p>Score: {score}</p>
      </div>
      <h3>Definition</h3>
      <p>{definition}</p>
      {/* wordOne comes from the array list */}
      <button
        onClick=
        {handleClick}
      >
        {wordOne}
      </button>
      {/* wordTwo comes from the data returned */}
      <button onClick={(e) => {
        handleClick(e);
        increment();}
        // setScore( score + 1)
        }>{wordTwo}</button>
      {answer ? <p>yes</p> : <p>noooooooooooo</p>}
    </section>
  );
};

export default Game;

// counter pseudo 
  // set useState as integer with value of 0
  // create function to update state (by + 1)
  // + 1 if value = true? 
  // display message(or console log) if successful 
