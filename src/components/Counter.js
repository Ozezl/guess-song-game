import { Typography } from "antd";
const { Paragraph } = Typography;

function Counter(props) {
  return (
    <div className="counter">
      <Paragraph>
        Round {props.currentRound} / {props.allRounds} 
      </Paragraph>
    </div>
  );
}

export default Counter;
