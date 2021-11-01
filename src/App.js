import { useState } from "react";
import { Spin } from "antd";
import Result from "./components/Result";
import Round from "./components/Round";
import MainMenu from "./components/MainMenu";
import "./App.css";

function App() {
  const NUMBER_OF_SONGS = 20;

  const [state, setState] = useState(0);
  const [shouldSpin, setShouldSpin] = useState(false);
  const [showRound, setShowRound] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [songs, setSongs] = useState({});
  const [guessedSongs, setGuessedSongs] = useState(0);

  async function getRandomSongs() {
    setShouldSpin(true);

    await fetch("https://spotify-song-guesser-api.herokuapp.com/v1/song")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
        console.log(data);
        setShowRound(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setShouldSpin(false);
  }

  function stateHandler(state) {
    if (state === NUMBER_OF_SONGS - 1) {
      setShowRound(false);
      setShowResult(true);
      return;
    }

    setState(state);
  }

  function restartHandler() {
    setShowRound(false);
    setShowResult(false);
    setGuessedSongs(0);
    setState(0);
  }

  return (
    <div className="App" key={showRound}>
      {(!showRound && !showResult) && <MainMenu getRandomSongs={getRandomSongs} />}
      {shouldSpin && <Spin></Spin>}
      {showRound && (
        <Round state={state} setState={stateHandler} guessedSongs={guessedSongs} setGuessedSongs={setGuessedSongs} songs={songs}></Round>
      )}
      {showResult && <Result guessedSongs={guessedSongs} restart={restartHandler}></Result>}
    </div>
  );
}

export default App;
