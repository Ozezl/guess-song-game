import { Typography } from "antd";
import { Button } from "antd";
const { Title, Paragraph } = Typography;

function MainMenu(props) {
  return (
    <div className="main-menu">
      <Title>A song guessing game</Title>
      <Paragraph>
        A game where you have to guess the name of a randomly given song
      </Paragraph>
      <Button type="primary" onClick={() => props.getRandomSongs()}>
        Play
      </Button>
    </div>
  );
}

export default MainMenu;
