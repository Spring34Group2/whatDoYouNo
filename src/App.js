import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
// import firebase from './firebase';

function App() {

  useEffect(() => {
    axios({
      url: "https://api.datamuse.com/words",
      method: "GET",
      
      params: {
        rel_hom: 'peace',
        // getting homophone
        md: 'd'
        // getting definition
      }
    }).then((response) => {
      console.log(response);
      console.log(response.data[0])
      console.log(response.data[0].defs)
    })
  }, [])
    



  return (
    <div className="App">
      <header className="App-header">
        <h1>Howdy world</h1>
      </header>
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