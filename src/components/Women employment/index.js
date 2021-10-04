import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation
} from "swiper/core";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../../data";

SwiperCore.use([Pagination, Autoplay, Navigation]);
function WomenAmployment() {
  return (
    <Container className="mt-2">
      <h3 className="text-center">Women Amployment</h3>
      <Swiper
        breakpoints={{
          "640": { 
            "slidesPerView": 2,
            "spaceBetween": 10,
            "initialSlide":1,
          },
          "991": {
            "slidesPerView": 3,
            "spaceBetween": 10,
            "initialSlide":1,
          }
        }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        pagination={true}
        className="mySwiper mt-3"
      >
        {data.women.images.slice(0,3).map((item,index)=>
        <SwiperSlide key={index}>
        <Card style={{ width: "20rem" }} className="shadow bg-white rounded h-100">
          <Card.Img  variant="top" height="300" src={item.image} alt="gallery" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="text-center">
        {item.caption}
            </Card.Text>
            <Link to="/gallery" ><Button style={{marginLeft:"30%",marginRight:"30%"}} variant="primary">View More</Button></Link>
          </Card.Body>
        </Card>
      </SwiperSlide>
          )}
      </Swiper>
    </Container>
  );
}

export default WomenAmployment;
