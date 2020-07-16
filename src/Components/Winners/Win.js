import React from 'react';
import Swiper from 'react-id-swiper';
import './Win.css';
const Autoplay = () => {
    const params = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'flip',
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },

    }
    return (
        <section className="winners-block">
            <div className="winner-header">Winners</div>
            <Swiper {...params}>
                <div className="winner-data">
                    <p>
                        Sam won <span className="winner-amount">$24.48</span> in <a href="#" className="win-game">Baccarat</a>
                    </p>
                    <p>
                        Yara won <span className="winner-amount">$71</span> in <a href="#" className="win-game">Xocdia</a>
                    </p>
                    <p>
                        Luis won <span className="winner-amount">$13</span> in <a href="#" className="win-game">Fantan</a>
                    </p>
                </div>
                <div className="winner-data">
                    <p>
                        Max won <span className="winner-amount">$48</span> in <a href="#" className="win-game">Roulette</a>
                    </p>
                    <p>
                        Alisha won <span className="winner-amount">$61</span> in <a href="#" className="win-game">Dragon Tiger</a>
                    </p>
                    <p>
                        Lee won <span className="winner-amount">$7</span> in <a href="#" className="win-game">Xocdia</a>
                    </p>
                </div>
                <div className="winner-data">
                    <p>
                        Rachel won <span className="winner-amount">$26.9</span> in <a href="#" className="win-game">Roulette</a>
                    </p>
                    <p>
                        Leo won <span className="winner-amount">$127</span> in <a href="#" className="win-game">Fantan</a>
                    </p>
                    <p>
                        Swara won <span className="winner-amount">$42</span> in <a href="#" className="win-game">Sicbo</a>
                    </p>
                </div>
                <div className="winner-data">
                    <p>
                        Emma won <span className="winner-amount">$9.8</span> in <a href="#" className="win-game">Fantan</a>
                    </p>
                    <p>
                        Stella won <span className="winner-amount">$66</span> in <a href="#" className="win-game">Roulette</a>
                    </p>
                    <p>
                        Oliver won <span className="winner-amount">$17</span> in <a href="#" className="win-game">Baccarat</a>
                    </p>
                </div>
                <div className="winner-data">
                    <p>
                        John won <span className="winner-amount">$12</span> in <a href="#" className="win-game">Baccarat</a>
                    </p>
                    <p>
                        Alexis won <span className="winner-amount">$25</span> in <a href="#" className="win-game">Dragon Tiger </a>
                    </p>
                    <p>
                        Clare won <span className="winner-amount">$13</span> in <a href="#" className="win-game">Sicbo</a>
                    </p>
                </div>
            </Swiper>
        </section>
    )
};
export default Autoplay;