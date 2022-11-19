import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import DifficultySelector from "../../components/DifficultySelector/DifficultySelector";
import { GameContext } from "../../context/GameContext";
import "./LandingPage.css";

const LandingPage = () => {
  let navigate = useNavigate();

  const { difficulty } = useContext(GameContext);

  const routeChangeHandler = () => {
    if (difficulty) {
      navigate("/game");
    } else {
      alert("Please select a difficulty");
    }
  };

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <DifficultySelector className="selector" />

        <Button onClick={routeChangeHandler}>Start Game</Button>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio leo,
          tempor a convallis non, molestie et tortor. Sed in euismod risus. Nunc
          sed nibh et tellus placerat gravida. Sed dictum neque elit, ut
          consequat lacus congue ut. Mauris tincidunt quam id velit molestie,
          eget malesuada nibh viverra. Duis ultrices ex non lectus convallis
          bibendum. Donec pellentesque, odio a gravida tempus, sem tortor
          gravida dui, viverra pharetra orci nulla et leo. Nullam dignissim
          vehicula augue, ut viverra orci laoreet sit amet. Cras tristique
          eleifend convallis. Aliquam sed urna pharetra, vehicula leo et, cursus
          arcu. Suspendisse lorem tellus, rutrum quis orci et, blandit imperdiet
          tellus. Vivamus vitae rutrum est.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
