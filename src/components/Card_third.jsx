import "./Card_third.css";
import "./Card_Image.css";
import Imag1 from "../assets/imageDiv.png";

const Card_third = () => {
  return (
    <div className="CardImageFirst">
      <p className="date">2024</p>
      <p className="Pablo">By Pablo</p>
      <p className="Middle">Collectible Name</p>
      <div className="ImageDiv">
        <img src={Imag1} alt="ImagDiv" className="Imag1" />
      </div>
    </div>
  );
};

export default Card_third;
