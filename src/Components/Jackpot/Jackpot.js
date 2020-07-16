import React from 'react';
import Swiper from 'react-id-swiper';
import './Jackpot.css';
import JackpotItem from './JackpotItem';
const Jackpot = (props) => {
    const params = {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },

    }
    return (

        <Swiper {...params}>
            <div><JackpotItem image={props.image1} game={props.game1} amount={props.amount1} /></div>
            <div><JackpotItem image={props.image2} game={props.game2} amount={props.amount2} /></div>
            <div><JackpotItem image={props.image3} game={props.game3} amount={props.amount3} /></div>
        </Swiper>
    )
};
export default Jackpot;