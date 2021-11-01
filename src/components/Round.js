import { useState } from "react";
import { message } from "antd";
import { Radio, Space } from "antd";
import { Typography } from "antd";
import { Button } from "antd";
import "./Round.css";
const { Title } = Typography;

function Round(props) {
  const SONGS_IN_ROUND = 4;
  const [radioState, setRadioState] = useState(-1);
  const [state, setState] = useState(props.state);
  const [song, setSong] = useState([...props.songs][state]);
  const [songs] = useState([...props.songs]);
  const [roundSongs, setRoundSongs] = useState(getFourRoundSongs(song));

  function getFourRoundSongs(baseSong) {
    let fourSongs = [baseSong];
    while (fourSongs.length < SONGS_IN_ROUND) {
      let randomSong = getRandomSong();
      while (existInArray(randomSong, fourSongs)) randomSong = getRandomSong();

      fourSongs.push(randomSong);
    }
    return shuffleSongs(fourSongs);
  }

  function existInArray(song, array) {
    return array.map((song) => song.name).includes(song.name);
  }

  function shuffleSongs(songs) {
    return songs.sort((a, b) => 0.5 - Math.random());
  }

  function getRandomSong() {
    return songs[Math.floor(Math.random() * songs.length)];
  }

  function onChange(e) {
    setRadioState(e.target.value);
  }

  function handleNextButton() {
    if (radioState === -1) {
      message.warning("You have to choose song before pressing button !");
      return;
    }

    if (roundSongs[radioState].name === song.name) {
      props.setGuessedSongs(props.guessedSongs + 1);
      message.success("You correctly guessed the song name !");
    } else message.error("You didn't guess the song name !");

    if (state === songs.length - 1) {
      props.setState(state);
      return;
    }

    setSong(songs[state + 1]);
    setRoundSongs(getFourRoundSongs(songs[state + 1]));
    setState(state + 1);
    setRadioState(-1);
  }

  return (
    <div className="round" key={state}>
      <Title>What is the given song name ?</Title>
      <audio controls>
        <source src={song.preview_url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Radio.Group onChange={onChange}>
        <Space direction="vertical">
          <Radio value={0}>{roundSongs[0].name}</Radio>
          <Radio value={1}>{roundSongs[1].name}</Radio>
          <Radio value={2}>{roundSongs[2].name}</Radio>
          <Radio value={3}>{roundSongs[3].name}</Radio>
        </Space>
      </Radio.Group>
      <Button type="primary" onClick={handleNextButton}>
        Next
      </Button>
    </div>
  );
}

export default Round;
