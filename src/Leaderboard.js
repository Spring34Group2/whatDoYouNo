import firebase from './firebase';
import { useEffect, useState } from 'react';
import Form from './Form';

const Leaderboard = () => {

const [boardList, setBoardList] = useState([])
const [userInput, setUserInput] = useState('');

// this function will store information about what the user is typing into the input
// and will update our userInput state
const handleChange = (event) => {
    setUserInput(event.target.value);
}

 // this function is going to handle pushing the new username to firebase
const handleClick = (event) => {
    event.preventDefault();
    // reference our database
    const dbRef = firebase.database().ref();
    // here we will grab the userInput and push it to Firebase
    dbRef.push(userInput)

    // clear the input
    setUserInput('')
}

useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
        const listResponse = response.val()
        console.log(listResponse);
        const newState = [];

        for (let key in listResponse) {
            newState.push (
                {
                    key: key,
                    name: listResponse[key].name,
                    score: listResponse[key].score
                }
            )
        }

setBoardList(newState)
    })
    
}, [])



    return (
        <section className = "leaderboard">
            <h2>Leaderboard</h2>
            <ul>
                {
                    boardList.map(name => {
                        return(
                            <li key = {name.key}>
                                <p>{name.name}</p>
                                <p>{name.score}</p>
                            </li>
                        )
                    })
                }   
            </ul>
            <Form handleChange = {handleChange}
            handleClick = {handleClick}
            />
        </section>
    )
}

export default Leaderboard;