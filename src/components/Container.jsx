import "./Container.css";
import image1 from "../assets/first.png";
import image2 from "../assets/second.jpeg";
import image3 from "../assets/threeNew.png";
import image4 from "../assets/fourNewMain.png";
import image6 from "../assets/seven.png";
import image8 from "../assets/eight.png";
import image9 from "../assets/nine.png";
import image10 from "../assets/ten.png";
const Container = () => {
  return (
    <div className="Container">
      <div className="Astrix_Logo">
        <div className="Emlblem">
          <div className="first"></div>
          <div className="second"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <div className="Astrix">Astrix.</div>
      </div>
      <div className="GroupOne"></div>
      <span className="WE">WE</span>
      <img src={image1} alt="image1" className="imageFirst" />
      <span className="ORGANIZE">ORGANIZE THE</span>
      <br />
      <span className="CONNECTION">CONNECTION</span>
      <img src={image2} alt="image2" className="imageSecond" />
      <br />
      <img src={image3} alt="image3" className="imageThree" />
      <div className="MainSecond">
        <span className="BETWEEN">BETWEEN</span>
        <img src={image4} alt="image4" className="imageFour" />
        <span className="MUSIC">MUSIC</span>
      </div>
      <div className="ARTIST">ARTIST</div>
      <img src={image8} alt="image8" className="imageEight" />
      <div className="ImageMain">
        <div className="CULTURE">CULTURE</div>
        <img src={image9} alt="image9" className="imageNine" />
      </div>
      <img src={image6} alt="image6" className="imageSix" />
      <div className="lastLine">
        <span className="ART">ART</span>
        <img src={image10} alt="image10" className="imageTen" />
        <span className="COLLECTION">& COLLECTIONS</span>
      </div>
    </div>
  );
};

export default Container;
