import "./Collection.css";
import Image_slider from "./Image_slider";
import E1 from "../assets/firstE.jpeg";
import E2 from "../assets/secondE.jpeg";
import E3 from "../assets/thirdE.jpeg";
import E4 from "../assets/fourE.jpeg";
import E5 from "../assets/fiveE.jpeg";
import Card_Image from "./Card_Image";
import Card_second from "./Card_second";
import Card_third from "./Card_third";
const Collection = () => {
  return (
    <div className="Together">
      <div className="Picture_slider">
        <div className="backText">
          ASTR <br />
          IX
          <br />
          <br />
          COLL
          <br />
          ECTI
          <br />
          BLE
        </div>
        <Image_slider />
      </div>
      <div className="ImageBar">
        <p className="Event">
          Event : Oasis Bus tour , JLN Stadium , Delhi *Collection Live : Meta
          Lives , live
        </p>
      </div>
      <div className="Content">
        <h2 className="Explore">Explore Youre First Collectible</h2>
        <h1 className="Meta">Meta Lives</h1>
        <p className="Live">Live in Astrix</p>
        <p className="Lorem">
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
          ipsum. Pellentesque mattis condimentum ut nulla.{" "}
        </p>
        <div className="circle">
          <div className="cirImage">
            <img src={E1} alt="E" className="E1" />
            <img src={E2} alt="E" className="E2" />
            <img src={E3} alt="E" className="E3" />
            <img src={E4} alt="E" className="E4" />
            <img src={E5} alt="E" className="E5" />
          </div>
          <div className="Text">22k people interested</div>
        </div>
        <p className="Collectibles">Collectibles</p>
        <div className="Cards">
          <Card_Image />
          <Card_second />
          <Card_third />
        </div>
        <div className="Button">
          <p className="Join">Join Waitlist</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
