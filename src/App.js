import './Sass/App.scss';
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
  // const [definition, setDefinition] = useState('');
  function getRandomIndex() {
    let arrayCopy = [...arrayList];
    console.log(arrayCopy.splice(1))
    console.log(arrayCopy);
  }
  getRandomIndex();
  useEffect(() => {
    axios({
      url: 'https://api.datamuse.com/words',
      method: 'GET',
      params: {
        rel_hom: arrayList[0],
        // getting homophone
        md: 'd',
        // getting definition
      },
    }).then((response) => {
      // console.log(response);
      // console.log(response.data[0]);
      // console.log(response.data[0].defs);
      // console.log(response.data[0].defs[0]);
      // setData(response.data[0].defs[0]);
      // passing in first value from array (affect)
      setWordOne({
        word: arrayList[0],
        defs: [],
      });
      let answer = {};
      answer.word = response.data[0].word;
      answer.defs = [response.data[0].defs[0]];
      // console.log(answer);
      // getting the first word response from the data (effect)
      setWordTwo(answer);
      // definition of the above word
      // setDefinition(response.data[0].defs[0]);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Start />
        <Game
          wordOne={wordOne}
          wordTwo={wordTwo}
        // definition={definition}
        />
        <Leaderboard />
      </main>
      <Footer />
    </div>
  );
}
export default App;
// pseudowoodo
// WHAT WE'VE DONE
// connected to api, and searched for homophone and definition
// connected (in theory) to firebase
// WHAT WE NEED TO DO
// Create array of words that are/have homophones
// Create counter to keep score
// create onClick to load information for game
// create progress bar to track score
// create animation when player wins (page explodes in fireworks? or SOLITAIRE???)
// continue to check error handling
// Leaderboard
// create form for user to submit name
// store name in firebase
// create sidebar (maybe whole page?) to display leaderboard
// STREEETTCCHHHH
// after (x) amount of wrong answers, player loses, and michelle comes to their house and drinks their wine
// create timer to go with progress bar?