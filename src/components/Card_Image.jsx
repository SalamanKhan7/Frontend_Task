import "./Card_Image.css";
import Imag1 from "../assets/imageDiv.png";
const Card_Image = () => {
  return (
    <div className="card_collection">
      <p className="date">2024</p>
      <p className="Pablo">By Pablo</p>
      <p className="Middle">Collectible Name</p>
      <div className="ImageDiv">
        <img src={Imag1} alt="ImagDiv" className="Imag1" />
      </div>
    </div>
  );
};

export default Card_Image;
