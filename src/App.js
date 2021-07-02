import './Sass/App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Start from './Start';
import Game from './Game';
import Footer from './Footer';

function App() {  
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="wrapper">
            <Route exact path="/" component={Start} />
          <div className="mainFlex">
            <Route exact path="/game" component={Game} />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;