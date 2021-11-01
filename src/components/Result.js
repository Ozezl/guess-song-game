import { Typography } from "antd";
import { Button } from "antd";
const { Title, Paragraph } = Typography;

function Result(props) {
  return (
    <div className="result-window">
      <Title>Results</Title>
      {props.guessedSongs === 0 && (
        <Paragraph>
          You haven't guessed anything, there is probably no cure for you.
        </Paragraph>
      )}
      {props.guessedSongs === 1 && (
        <Paragraph>
          You have guessed literally {props.guessedSongs} song, are you baka ?
        </Paragraph>
      )}
      {props.guessedSongs > 1 && props.guessedSongs < 10 && (
        <Paragraph>
          You have guessed like {props.guessedSongs} songs, are you baka ?
        </Paragraph>
      )}
      {props.guessedSongs >= 10 && props.guessedSongs <= 15 && (
        <Paragraph>
          You have guessed {props.guessedSongs} songs, Not great not terrible.
        </Paragraph>
      )}
      {props.guessedSongs > 15 && (
        <Paragraph>
          You have guessed {props.guessedSongs} songs, I see that you are a man
          / woman of culture aswell.
        </Paragraph>
      )}
      <Button type="primary" onClick={() => props.restart()}>
        Replay
      </Button>
    </div>
  );
}

export default Result;
