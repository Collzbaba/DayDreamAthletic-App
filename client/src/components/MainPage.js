import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeroImg from '../assets/img/bannerimg.webp'
import AdidasHatBlack from '../assets/img/adidas-hat-black.jpg'
import BucketHat from '../assets/img/adidas-bucket-hat.webp'
import Beanie from '../assets/img/adidas-beanie-green.jpg'
import JacketBlack from '../assets/img/adidas-jacket-black.webp'
import JacketGray from '../assets/img/adidas-jacket-gray.jpg'
import WindBreakerBlack from '../assets/img/adidas-windbreaker-black.webp'
import PantsBlack from '../assets/img/black-sweatpants.webp'
import PantsBlack2 from '../assets/img/black-sweatpants-2.webp'
import ShortsBlack from '../assets/img/black-shorts.webp'
import ShoesBlack from '../assets/img/shoes-black.webp'
import ShoesWhite from '../assets/img/shoes-white.webp'
import ShoesTan from '../assets/img/shoes-tan.webp'
import FifaBanner from '../assets/img/fifabanner.webp'
import FifaBanner2 from '../assets/img/fifabanner2.jpg'
import Arrow from '../assets/img/arrow.svg'
import Banner3 from '../assets/img/banner3.png'
import Banner2 from '../assets/img/qatarbanner.webp'
import BallBanner2 from '../assets/img/ballbanner2.jpg'

import Carousel from 'react-bootstrap/Carousel';
import LoginSignup from "./signup";

export const MainPage = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [scrolled, setScrolled] = useState(false);


  return (
    <section>
      <Carousel>
        <Carousel.Item className="carousel-item" interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src={FifaBanner2}
            alt="First slide"
          />
          <Carousel.Caption className="banner-text">
            <div>
              <h3 className="banner-title">FIFA WORLD CUP 2022</h3>
              <p className="banner-desc">DON'T MISS OUT ON EXCLUSIVE WOLRD CUP CLOTHING DEALS!</p>
            </div>
            <div className="banner-btn-container">
              <a href="https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022" target="_blank" className="banner-btn banner-login-btn">STAY UPDATED !<img src={Arrow} className="arrow"></img></a>
              <a href='/' className="banner-btn banner-shop-btn">SHOP NOW<img src={Arrow} className="arrow"></img></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={HeroImg}
            alt="Third slide"
          />

          <Carousel.Caption className="banner-text">
            <div>
              <h3 className="banner-title">FIFA WORLD CUP 2022</h3>
              <p className="banner-desc">DON'T MISS OUT ON EXCLUSIVE WOLRD CUP CLOTHING DEALS!</p>
            </div>
            <div className="banner-btn-container">
              <a href="https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022" target="_blank" className="banner-btn banner-login-btn">STAY UPDATED !<img src={Arrow} className="arrow"></img></a>
              <a className="banner-btn banner-shop-btn">SHOP NOW<img src={Arrow} className="arrow"></img></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <div className="carousel-filter-container">

        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">HATS</span>
              <img
                className="d-block w-100 filter-img"
                src={AdidasHatBlack}
                alt="First slide"
              />
            </a>
            <div>
              <h1>test</h1>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">HATS</span>
              <img
                className="d-block w-100 filter-img"
                src={Beanie}
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">HATS</span>
              <img
                className="d-block w-100 filter-img"
                src={BucketHat}
                alt="Third slide"
              />
            </a>
          </Carousel.Item>
        </Carousel>
        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">TOPS</span>
              <img
                className="d-block w-100 filter-img"
                src={JacketBlack}
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">TOPS</span>
              <img
                className="d-block w-100 filter-img"
                src={JacketGray}
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">TOP</span>
              <img
                className="d-block w-100 filter-img"
                src={WindBreakerBlack}
                alt="Third slide"
              />
            </a>
          </Carousel.Item>
        </Carousel>
        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">BOTTOMS</span>
              <img
                className="d-block w-100 filter-img"
                src={PantsBlack}
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">BOTTOMS</span>
              <img
                className="d-block w-100 filter-img"
                src={ShortsBlack}
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">BOTTOMS</span>
              <img
                className="d-block w-100 filter-img"
                src={PantsBlack2}
                alt="Third slide"
              />
            </a>
          </Carousel.Item>
        </Carousel>
        <Carousel slide={false} className="carousel-item-container">
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">SHOES</span>
              <img
                className="d-block w-100 filter-img"
                src={ShoesBlack}
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">SHOES</span>
              <img
                className="d-block w-100 filter-img"
                src={ShoesWhite}
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item className="carousel-item-filter">
            <a>
              <span className="filter-title">SHOES</span>
              <img
                className="d-block w-100 filter-img"
                src={ShoesTan}
                alt="Third slide"
              />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default MainPage;