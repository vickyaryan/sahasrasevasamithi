import React from "react";
import {Card, Container,Button } from "react-bootstrap";
import data from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import SwiperCore, {Navigation} from "swiper/core";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation]);

function AchievementsGallery(props) {
  return (
    <Container className="mt-2">
      <h3 className="text-center">{data.achievements.title}</h3>
      <Swiper
autoHeight={true}
        breakpoints={{
          "640": {
            slidesPerView: 2,
            spaceBetween: 10,
            initialSlide: 1,
          },
          "991": {
            slidesPerView: 3,
            spaceBetween: 30,
            initialSlide: 1,
          }
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction:true
        }}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        pagination={true}
        className="mySwiper mt-3"
      >
        {data.achievements.images.slice(0,3).map((item,index) => (
          <SwiperSlide key={index}>
            <Card style={{ width: "20rem" }} className="shadow bg-white rounded align-items-center h-100">
              <Card.Img width="300" height="300" variant="top" src={item.image} alt="awards" />
              <Card.Body>
                {/* <Card.Text>{item.caption}</Card.Text> */}
                <Link to="/gallery"><Button variant="primary" >View More</Button></Link>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default AchievementsGallery;
