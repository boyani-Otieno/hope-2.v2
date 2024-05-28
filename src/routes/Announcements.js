// ThreeCards.js
import React from 'react';
import './announcements.css';
import CardItem from './CardItem';
import card1 from '../assets/images/christmas-card.jpg'
import card2 from '../assets/images/lamu-mission.jpg'
import card3 from '../assets/images/Mens-Ministry.jpg'

const Slider = () => {
  return (
    <div className='cs'>
      <h1 className='kard-head'>Join Our Ministries</h1>
      <div className='c-container'>
        <div>
          <p>At Tumaini Ministries Center, We believe in the power of relationships and the strength 
            that comes from a cohesive community. Join us and let's work together to establish God's 
            Kingdom on earth with meaningful conversations, building connections, and making a positive 
            difference in the world.</p>
        </div>
        <ul className='c-items'>
          <CardItem
            src={card1}
            text='Christmas is here!'
            label='Card 1'
          />
          <CardItem
            src={card2}
            text='Lamu Youth Mission.'
            label='Card 2'
          />
          <CardItem
            src={card3}
            text='Mens Conference'
            label='Card 3'
          />
        </ul>
      </div>
    </div>
  );
};

export default Slider;
