import firebase from './firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Form = (props) => {
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  // using useForm from react-hook-form library
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // this function will store information about what the user is typing into the input
  // and will update our userInput state

  // this function is going to handle pushing the new username to firebase
  const handleClick = ({ newHighScore }) => {
    // reference our database
    const dbRef = firebase.database().ref();
    // here we will grab the userInput and push it to Firebase

    dbRef.push({ name: newHighScore, score: props.score });
  };
  return !answerSubmitted ? (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          handleClick(data);
          setAnswerSubmitted(true);
        })}
      >
        <label htmlFor="newHighScore" className="sr-only">Enter your username:</label>
        <input
          type="text"
          id="newHighScore"
          placeholder="Enter your username:"
          maxLength="12"
          className="newHighScore"
          {...register('newHighScore', { required: true })}
        />
        <button type="submit">Add Score</button>
        {errors.newHighScore && <p>Cannot enter an empty username.</p>}
        <Link to={'/'}>
          <button>Back to Start!</button>
        </Link>
      </form>
    </>
  ) : (
    <Link to={'/'}>
        <button>Back to Start!</button>
    </Link>
  );
};

export default Form;
