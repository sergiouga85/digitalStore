import Carousel from 'react-bootstrap/Carousel';
import ArduinoUno from '../assets/img/arduino-Uno-1.jpg'
import Raspberry from '../assets/img/Raspberry_Pi_4.jpg'
import Nodemcu from '../assets/img/nodemcu.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img className="ImagenCarousel" src={ArduinoUno} alt="Arduino" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="ImagenCarousel" src={Raspberry} alt="Raspberry" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="ImagenCarousel" src={Nodemcu} alt="Nodemcu" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;