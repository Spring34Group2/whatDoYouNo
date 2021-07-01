import firebase from './firebase';
import { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const listResponse = response.val();
      console.log(listResponse);
      const newState = [];

      for (let key in listResponse) {
        newState.push({
          key: key,
          name: listResponse[key].name,
          score: listResponse[key].score,
        });
      }

      setBoardList(newState);
    });
  }, []);

  return (
    <section className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {boardList.map((name) => {
          return (
            <li key={name.key}>
              <p>{name.name}</p>
              <p>{name.score}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Leaderboard;
