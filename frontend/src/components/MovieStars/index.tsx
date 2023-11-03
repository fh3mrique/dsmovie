import "./styles.css";
import Starfull from "../../assets/img/star-full.svg";
import StarHalf from "../../assets/img/star-half.svg";
import StarEmpty from "../../assets/img/star-empty.svg";
function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <img src={Starfull} alt="Starfull" />
      <img src={Starfull} alt="Starfull" />
      <img src={Starfull} alt="Starfull" />
      <img src={StarHalf} alt="StarHalf" />
      <img src={StarEmpty} alt="StarEmpty" />
    </div>
  );
}

export default MovieStars;
