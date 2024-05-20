import { useEffect, useState } from "react";
import "./Image_slider.css";
const Images = [
  "https://s3-alpha-sig.figma.com/img/a915/2b99/f3b1d5c5a3d9ca34145cba9ad898fa50?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MGH9aISNAMGm5ruAxysEu8zg9qfYpJxi-Lo4jLK7qsmW9phkxjrwMxxF5IBGDQ~2uLABpqJfdpaQaPvykaxIePpm4yUc7nM8UN5e3BULMwgVS-29Ul-Pa~gfREcBrA1wjc7A4~jw4gOZVGKqWuFWzneOvxoTBJufjw7XA4y8j4C6DLVK63YRFS0CS7ybTdYY0F01w6iUvZvAu44HLyeTfMe3sAnk1j24VYW50cW1-T2St7s-qx2HY53Mt0UBRjtQvONRCR7dTKgaU0IMrSvaVNwmUeUw4xPpV0Rwz1FTMWjlmne0jo0v5FPDy3~27vri-xRYqsWD~fN2NAW8kpBRkw__",
  "https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNvFXO~pk7or-HdDZZqILty5OF1WJsJD8UwtOrZz4vS~BC45s3gthFjPMJZD0cOI60myLJBe8lRflvEI8bI6GbEYzSV-IFZKcFTM7pI2twTwPtoqbwigcQxD5UaUvVa0F4okJOiuc~ZmChfb54WPYhHnHouQBosINwZfuXXq4~5CukmHb1h7iqUKUL-tYT9xc0RAiMqxbwjMjWSIgaF~TyrmotRhD~mg2AO0Ldx81FXxp2oOE9kHsXVzrFf2H6mlREDT17eHApYI~XPRVidKrWz1g3~uEccCw5QMOb9byAA8RpmyAe8Cmu9W3y2PlaLw3ECAIdfYI5A8Ir6qa8nm3g__",
  "https://s3-alpha-sig.figma.com/img/7530/a73c/a76d3c01ae0aa065ff590a38a6599180?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPGwv3EY7drPOBxPvjJCWNE1SkEMHCieC0uiyGCaQbZUgA23D6bEJOjaU3fzIyyKNWkkYX8Io-jiXFfa8eSgXYr4glIVJNOHMZIdwuplifoXD1lti9ueaBNL5wJOW2lKr8xON3SkdYs1Jxu6ny6CTX3~hdCOlddS3iSqaKJ4RayCDC7-Z-0~MCy47afcClNe2broa5HjKdwTYYP2xLNm2EHDmMZ-XhiOCBZblBR9~YFFy9gxfRA0KcsShzHHHr83nng-UigY7738egkowyuheAnKp0BjCHtd5GX---FrX3FkS44Jh4Vj0nB7ZfyB8~zlt8yc80l8rMuWRgoMYgn12w__",
  "https://s3-alpha-sig.figma.com/img/162c/fe4e/e0e893f3f2438ff89d9770ba7e1099a6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVg9vZUozlu002ZHHmIBJrMLkndNs4X7gi307jZiMUeGXPH5s4FaQmaSGBpklJ-l8-1-kNDXr8t1~IqB7D6TsZ06ThJs348Lfy6-KAeATO9olM0yUHvJ-5D9PeNe3AdLWzsrOWwLx~Hw9CJkDTbjgAd6d1O-pk60Ggyka5l8oQG5zghI~vAwVkBQ05-ONtimx2HMOFC~sjgDxfJxKWXCAUMcW-zNlo5qTkqzErgmy~fKTFCVfHOvF8l6Fn-pPMI0sPLbVYWmgFys01ywzFVju2si4ZmsTa7Mcdo5~oq5BrfpjE1qvmNzDhRHlL2RVbSm6xL0mqlkpAqspelDHoERHA__",
];

const Image_slider = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const i = setInterval(() => {
      handleNext();
    }, 3000);
    return () => {
      clearInterval(i);
    };
  }, []);
  const handlePre = () => {
    setActive((active) => (active - 1 < 0 ? Images.length - 1 : active - 1));
  };
  const handleNext = () => {
    setActive((active) => (active + 1) % Images.length);
  };
  return (
    <div className="handleImages">
      <div className="slider_image">
        <img src={Images[active - 1]} alt="Image" className="slider First" />
        <img src={Images[active]} alt="Image" className="slider Second" />
        <img
          src={Images[active + 1 != Images.length && active + 1]}
          alt="Image"
          className="slider Third"
        />
      </div>
      <div className="icons">
        <i className="fa-solid fa-less-than" onClick={handlePre}></i>
        <i className="fa-solid fa-greater-than" onClick={handleNext}></i>
      </div>
    </div>
  );
};

export default Image_slider;
