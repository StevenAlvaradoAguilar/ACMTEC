import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../images/polution-banner.jpg'
import img2 from '../images/polution-banner(2).jpg'
import img3 from '../images/polution-banner(3).jpg'
import img4 from '../images/polution-banner(4).jpg'
function Carrusel(){
    return(
        <div style={{ display: 'block', width: 750, padding: 20 ,marginLeft:"20%"}}>

        <Carousel>
          <Carousel.Item interval={3500}>
            <img
            className="d-block w-100"
            src={img1}
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3500}>
            <img
              className="d-block w-100"
                src={img2}
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3500}>
            <img
              className="d-block w-100"
                src={img3}

            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3500}>
            <img
              className="d-block w-100"
                src={img4}
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>

    );
}
export default Carrusel;
