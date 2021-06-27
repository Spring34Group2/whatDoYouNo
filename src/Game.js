// import arrayList from './arrayList';
import { useState, useEffect } from 'react';

const Game = ({ wordOne, wordTwo, definition }) => {
  const [answer, setAnswer] = useState('');

  useEffect(() => {}, [setAnswer]);

  function handleClick(e) {
    wordTwo === e.target.innerText
      ? setAnswer("true")      
      : setAnswer("false")
      console.log(answer);
  }

  return (
    <section className="game">
      <div className="counter">
        <p>Score: 0</p>
      </div>
      <h3>Definition</h3>
      <p>{definition}</p>
      {/* wordOne comes from the array list */}
      <button
        onClick={handleClick}
      >
        {wordOne}
      </button>
      {/* wordTwo comes from the data returned */}
      <button onClick={handleClick}>{wordTwo}</button>
      <p>{answer}</p>
    </section>
  );
};

export default Game;
