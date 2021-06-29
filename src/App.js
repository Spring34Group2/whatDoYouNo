import './Sass/App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import firebase from './firebase';
import Header from './Header';
import Leaderboard from './Leaderboard';
import Start from './Start';
import Game from './Game';
import Footer from './Footer';

function App() {  
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={Start} />
          <Route exact path="/game" component={Game} />
          <Leaderboard />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;