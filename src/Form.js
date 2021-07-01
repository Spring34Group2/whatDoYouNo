import firebase from './firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {
  const [userInput, setUserInput] = useState('');

  // this function will store information about what the user is typing into the input
  // and will update our userInput state
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  // this function is going to handle pushing the new username to firebase
  const handleClick = () => {
    // reference our database
    const dbRef = firebase.database().ref();
    // here we will grab the userInput and push it to Firebase

    dbRef.push({ name: userInput, score: props.score });

    // clear the input
    setUserInput('');
  };

  return (
    <form action="submit">
      <label htmlFor="newHighScore">Enter your username:</label>
      <input
        type="text"
        id="newHighScore"
        onChange={handleChange}
        value={userInput}
        maxLength="12"
      />
      <Link to={'/'}>
        <button onClick={handleClick}>Add Score</button>
        <button>Back to Start!</button>
      </Link>
    </form>
  );
};

export default Form;
