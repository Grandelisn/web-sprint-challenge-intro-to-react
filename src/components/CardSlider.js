// Write your Character component here
import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';
import {images} from './Images';

const CardSlider = ( {slides} ) => {
  console.log('imageSlider : ', slides);
  const [current, setCurrent] = useState(0);
  const length = 10;
  console.log(images);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((obj, index) => {
        return (
        <div className={index === current ? 'slide active' : 'slide'}
            key={index}>
          
            
            {index === current && (
                
             <List>
                
               
               <img src={images[index].imageUrl} alt='character img' className='image' />
               <Title>Star Wars Character Gallery</Title>
               <li>Name: {obj.name}</li>
               <li>Height: {obj.height} cm</li>
               <li>Mass: {obj.mass} kg</li>
               <li>Birth Year: {obj.birth_year}</li>
            </List>
             
            )}
          </div>
        );
      })}
    </section>
  );
};

const List = styled.ul`
list-style-position: outside;
color: white;
align-items: center;
text-shadow: 2px 2px black;
`
const Title = styled.h1`
font-size: 2em;
align-text: center;
`

export default CardSlider;