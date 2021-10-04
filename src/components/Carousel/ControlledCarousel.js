import React, { useState } from "react";
import { Button,Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../data";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.carousel[0].image}
          alt="First slide"
          width="759"
          height="570"
        />
        <Carousel.Caption className=" slide-1-caption">
          <h3> {data.carousel[0].caption}</h3>
          <Link to="/donate"><Button variant="primary" className="my-2 slide-button">
              Donate Now
            </Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.carousel[1].image}
          alt="Second slide"
          width="759"
          height="570"
        />

        <Carousel.Caption className="slide-2">
          <h3> {data.carousel[1].caption}</h3>
          <Link to="/donate"><Button variant="primary" className="my-2 slide-button">
              Donate Now
            </Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.carousel[2].image}
          alt="Third slide"
          width="759"
          height="570"
        />

        <Carousel.Caption className=" slide-3-caption">
          <h3> {data.carousel[2].caption}</h3>
          <Link to="/donate"><Button variant="primary" className="my-2 slide-button">
              Donate Now
            </Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.carousel[3].image}
          alt="Third slide"
          width="759"
          height="570"
        />

        <Carousel.Caption className=" slide-2-caption">
          <h3> {data.carousel[3].caption}</h3>
          <Link to="/donate"><Button variant="primary" className="my-2 slide-button">
              Donate Now
            </Button></Link>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ControlledCarousel;