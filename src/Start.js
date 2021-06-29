import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div>
            <h2>What is a homophone?</h2>
            <p>
            Cheese bandbox bandbox lineup corner, bases loaded mustard. Outfield basehit double switch mound save pine tar second base. Defensive indifference hardball gold glove warning track check swing gapper strike zone. Arm hit by pitch astroturf pine tar cookie pine tar doubleheader unearned run. Loss peanuts field wild pitch losses leadoff choke up. Wins no-hitter yankees slide base reliever dead red.
            </p>
            <h2>How to play?</h2>
            <p>
            Bag baltimore chop tigers grass screwball scorecard pennant butcher boy. Triple-A batting average third baseman cracker jack butcher boy petey around the horn stance. 4-6-3 hot dog disabled list pinch hit no-hitter pull crooked number. Series batter's box fair balk hitter, sidearm wild pitch. First baseman fair choke up sacrifice fly gapper walk off reliever scorecard. Small ball league first baseman game play count assist fall classic first baseman.
            </p>
            <Link to={`/game/`}>
                <button>Start</button>
            </Link>
        </div>
    )
}

export default Start;