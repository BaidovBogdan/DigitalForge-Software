import { Carousel } from 'react-bootstrap';
import img1 from '../images/photo1.png';
import img2 from '../images/photo2.png';
import img3 from '../images/photo3.png';

function FivePage() {
  return (
    <div className='FivePage'>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-between align-items-center">
            <h3 className='h3FivePage'>Фотогалерея</h3>
            <div className="d-flex justify-content-evenly">
              <img src={img1} alt="Первый слайд" className="w-25 h1" />
              <img src={img2} alt="Второй слайд" className="w-25 h1" />
              <img src={img3} alt="Третий слайд" className="w-25 h1" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FivePage;
