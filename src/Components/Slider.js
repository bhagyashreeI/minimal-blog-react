import banner1 from './Images/banner1.jpg'
import Header from './Header'
import {sliderFiles} from "./../constant.js"
import {useState,useEffect} from 'react'
import { Button, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Slider = () => {
  const [activeImgIndex,setActiveImgIndex] = useState(0)
  const handleNextSlide = () =>{
    setActiveImgIndex((activeImgIndex + 1) % sliderFiles.length);
  }
  const handlePrevSlide = () => {
    setActiveImgIndex(activeImgIndex == 0 ? sliderFiles.length-1 : activeImgIndex - 1);
  };
  useEffect(
    () => {
      const sliderTimer = setTimeout(() => {
        handleNextSlide();
      }, 2000);
      return () => {
        clearTimeout(sliderTimer);
      };
    },
    
    
    [activeImgIndex]
  );
    return <div>
        <Header />

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", left: "10px" }}>
            <Button variant="link" onClick={() => handlePrevSlide()}>
              <ArrowBackIosNewIcon />
            </Button>
          </div>
          {sliderFiles.map((url, i) => <div key={url}>
              <img src={url} className={"banner " + (activeImgIndex === i ? "img-inline" : "img-hide")} alt="
        slider" />
            </div>)}
          <div style={{ position: "absolute", top: "50%", right: "10px" }}>
            <Button variant="link" onClick={() => handleNextSlide()}>
              <ArrowForwardIosIcon />
            </Button>
          </div>
        </div>
      </div>;
}

export default Slider