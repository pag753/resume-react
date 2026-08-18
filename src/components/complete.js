import Complements from './complements';
import App from '../App';

const Complete = (props) => {
  const language = props.language || props.languaje || 'english';

  return (
    <><Complements /><App language={language} /><Complements /></>
  );
};

export default Complete;
