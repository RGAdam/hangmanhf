import "./Hangman.css";

const Hangman = ({ source }) => {
  return <img src={require(`./res/${source}.svg`)} alt="" />;
};

export default Hangman;
