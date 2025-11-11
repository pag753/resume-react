import Complements from "./complements";
import App from "../App";
const Complete = (props) => {
  const {languaje} = props;
  return (
    <><Complements /><App languaje={languaje} /><Complements /></>
  );
};

export default Complete;