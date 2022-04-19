import { TicTacToeIntro } from "./Components/Tic-Tac-Toe-Intro";
import { TicTacToe } from "./Components/TicTacToe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicTacToeIntro />} />
        <Route path="tictactoegame" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
