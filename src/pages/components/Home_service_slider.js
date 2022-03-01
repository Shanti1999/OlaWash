import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Home_slider = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }
      ]
    }

    return (
        <section>
        <div className="home_slider">
          <Slider {...settings}>
            <div>
            <div className="slide flex">
                          <div className="slide-image slider-link prev">
                          <img src="assets/img/side/2.webp" alt="slider" />
                              <div className="overlay"></div>
                          </div>
                          <div className="slide-content">
                              <div className="slide-date">OLA CAR WASH </div>
                              <div className="slide-title">Dry Cleaning</div>
                              <div className="slide-text">
                                  <ul>
                                      <li><i className='fa fa-check'></i> Seats Cleaning</li>
                                      <li><i className='fa fa-check'></i> Roof Cleaning</li>
                                      <li><i className='fa fa-check'></i> Floor Cleaning</li>
                                      <li><i className='fa fa-check'></i> Mat Cleaning</li>
                                  </ul>
                              </div>
                              <div className="slide-more"> <Link to="./Search#choose" className="button4">Book A Wash  <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></div>
                          </div>
                      </div>
            </div>
            <div>
            <div className="slide flex">
                          <div className="slide-image slider-link next"><img src="assets/img/side/1.webp" alt="slidersecond"/>
                              <div className="overlay"></div>
                          </div>
                          <div className="slide-content">
                              <div className="slide-date">OLA CAR WASH</div>
                              <div className="slide-title">Vacuum Cleaning</div>
                              <div className="slide-text">
                                  <ul>
                                      <li>
                                          <i className='fa fa-check'></i> Engine Vacuum</li>
                                      <li><i className='fa fa-check'></i> Diggi Vacuum </li>
                                      <li><i className='fa fa-check'></i> Floor Vacuum</li>
                                      <li><i className='fa fa-check'></i> Upholstery Vacuum </li>
                                  </ul>
                              </div>
                              <div className="slide-more"> <Link to="./Search#choose" className="button4">Book A Wash  <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></div>
                          </div>
                      </div>
            </div>
            <div>
            <div className="slide flex">
                          <div className="slide-image slider-link next">
                              <img src="assets/img/side/5.webp" alt=" sliderthird"/>
                              <div className="overlay"></div>
                          </div>
                          <div className="slide-content">
                              <div className="slide-date">OLA CAR WASH</div>
                              <div className="slide-title">Exterior Washing</div>
                              <div className="slide-text">
                                  <ul>
                                      <li> <i className='fa fa-check'></i> Dry Engine Wash
                                      </li>
                                      <li><i className='fa fa-check'></i> Snow Foam Jet Wash
                                      </li>
                                      <li>
  
                                          <i className='fa fa-check'></i> Steam Jet Wash
  
                                      </li>
                                      <li> <i className='fa fa-check'></i> Tyre Polishing</li>
                                  </ul>
                              </div>
                              <div className="slide-more"> <Link to="./Search#choose" className="button4">Book A Wash  <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></div>
                          </div>
                      </div>
            </div>
            <div>
            <div className="slide flex">
                          <div className="slide-image slider-link next">
                              <img src="assets/img/side/3.webp" alt="sliderfifth"/>
                              <div className="overlay"></div>
                          </div>
                          <div className="slide-content">
                              <div className="slide-date">OLA CAR WASH</div>
                              <div className="slide-title">Interior Cleaning</div>
                              <div className="slide-text">
                                  <ul>
                                      <li><i className='fa fa-check'></i> Vacuum Cleaning </li>
                                      <li><i className='fa fa-check'></i> Deep Dry Cleaning</li>
                                      <li><i className='fa fa-check'></i> Detailed Cleaning</li>
                                      <li><i className='fa fa-check'></i> Interior Polishing</li>
                                  </ul>
                              </div>
                              <div className="slide-more"> <Link to="./Search#choose" className="button4">Book A Wash  <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></div>
                          </div>
                      </div>
            </div>
          </Slider>
        </div>
        </section>
      );
}

export default Home_slider;