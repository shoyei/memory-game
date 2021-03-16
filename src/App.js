import './App.css';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
        <h1>Memory Card</h1>
      <Main />
    </div>
  );
}

export default App;

//App component renders Scoreboard and game components
//Scoreboard component renders current score and high score
//Tile component renders game tiles with photo/description in a randomized order
