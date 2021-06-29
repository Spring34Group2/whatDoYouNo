import Leaderboard from './Leaderboard';


const Form = (props) => {
    return (
        <form action="submit">
        <label htmlFor="newHighScore">
            Enter your username:
        </label>
        <input 
        type="text" 
        id="newHighScore" onChange = { props.handleChange }
        value = { props.userInput }/>

        <button onClick = { props.handleClick }>Add Score</button>
    </form>
    )
}

export default Form;