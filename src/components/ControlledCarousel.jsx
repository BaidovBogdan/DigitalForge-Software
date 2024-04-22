import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavFirstPage from './navFirstPage';
import logoForFirstPage from "../images/logoForFirstPage.png"
import logoForSecondPage from "../images/iconSecondFirstPage.png"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main>
    <NavFirstPage/>
    <hr />
    <nav>
      <ul>
        <img src={logoForFirstPage}/>
      </ul>
      <ul>
        <a href="">Главная</a>
        <a href="">Меню</a>
        <a href="">Доставка</a>
        <a href="">О нас</a>
        <a href="">Контакты</a>
      </ul>
    </nav>
    <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
      <Carousel.Item>
        <Carousel.Caption>
          <p>Выделяесь среди других </p>
          <h3><span>bono -</span> Коктейльный бар и ресторан  приглашает к себе </h3>
          <br />
          <a href=""><button>Забронировать стол</button></a>
          <br />
          <img src={logoForSecondPage} alt="" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <p>Выделяесь среди других </p>
          <h3><span>bono -</span> Коктейльный бар и ресторан  приглашает к себе </h3>
          <br />
          <a href=""><button>Забронировать стол</button></a>
          <br />
          <img src={logoForSecondPage} alt="" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </main>
  );
}

export default ControlledCarousel;
