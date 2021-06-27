// import arrayList from './arrayList';

const Game = ({ wordOne, wordTwo, definition }) => {
  return (
    <section className="game">
      <div className="counter">
        <p>Score: 0</p>
      </div>
      <h3>Definition</h3>
      <p>{definition}</p>
      {/* wordOne comes from the array list */}
      <button>{wordOne}</button>
      {/* wordTwo comes from the data returned */}
      <button>{wordTwo}</button>
    </section>
  );
};

export default Game;
