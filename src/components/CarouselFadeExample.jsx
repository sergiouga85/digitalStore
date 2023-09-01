import Carousel from 'react-bootstrap/Carousel';
import ArduinoUno from '../assets/img/arduino-Uno-1.jpg'
import Raspberry from '../assets/img/Raspberry_Pi_4.jpg'
import Nodemcu from '../assets/img/nodemcu.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img className="ImagenCarousel" src={ArduinoUno} alt="Arduino" />
        <Carousel.Caption className="titulosCarousel">
          <h3>PLACA DE DESARROLLO ARDUINO</h3>
          <p>placa de desarrollo proximamente novedades</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="ImagenCarousel" src={Raspberry} alt="Raspberry" />
        <Carousel.Caption className="titulosCarousel">
          <h3>PLACA DE DESARROLLO RASPHBERRY PI 4</h3>
          <p>placa de desarrollo proximamente novedades</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="ImagenCarousel" src={Nodemcu} alt="Nodemcu" />
        <Carousel.Caption className="titulosCarousel">
          <h3>PLACA DE DESARROLLO NODEMCU ESP 8266</h3>
          <p>placa de desarrollo proximamente novedades</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;