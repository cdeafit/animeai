import React, {useState} from 'react';
import {SliderData} from './SliderData';
//import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@material-ui/icons';
import "./ImageSlider.css";

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length=slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current+1)
  }

  const previousSlide = () => {
    setCurrent(current === 0 ? length-1 : current-1)
  }

  if(!Array.isArray(slides) || slides.length <=0){
    return null;
  }

  return (
    <div className='slider'>
      <KeyboardArrowLeftRounded className='left-arrow' onClick={previousSlide} />
      <KeyboardArrowRightRounded className='right-arrow' onClick={nextSlide}/>
      {SliderData.map((slide, index)=>{

        return(
          <div className={index === current ? 'slide active': 'slide'} key={index}>
            {index===current && (
              <img src={slide.image} alt='travel image' className='image'/>
            )}            
          </div>    
        )
      })}        
    </div>
  );
}

export default ImageSlider;
        