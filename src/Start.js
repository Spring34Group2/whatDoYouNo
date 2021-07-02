import { Link } from "react-router-dom";
import Leaderboard from "./Leaderboard";

const Start = () => {
    return (
        <div className="mainFlex">
            <div className="startFlex">
                <div>
                    <h2>How to play?</h2>
                    <p>
                    What do you no? Do you know things? Let's find out! You will be presented with two randomly generated homophonous words - like piece and peace - and a single definition. Users must match the correct homophone to the definition.
                    </p>
                </div>

                <div>
                    <h2>What is a homophone?</h2>
                    <p>Merriam-Webster defines a homophone as: </p>
                    <ol>
                        <li>One of two or more words pronounced alike but different in meaning or derivation or spelling (such as the words to, too, and two)</li>

                        <li>A character or group of characters pronounced the same as another character or group</li>
                        
                        <li>An awful sentence with mostly homophones: Eye no their is a chants some of these hear wheel give yew paws, but ewe can solve this tuff won</li>
                    </ol>
                </div>
                
                <Link to={`/game/`}>
                    <button>Start</button>
                </Link>
            </div>
            <Leaderboard />
        </div>
    )
}

export default Start;