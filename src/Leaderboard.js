import firebase from './firebase';
import { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const listResponse = response.val();
      let newState = [];

      for (let key in listResponse) {
        newState.push({
          key: key,
          name: listResponse[key].name,
          score: listResponse[key].score,
        });
      }
      newState = newState.sort((a, b) => {
        if (a.score > b.score) {
          return -1;
        } else if (a.score < b.score) {
          return 1;
        }
        return 0;
      })
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
