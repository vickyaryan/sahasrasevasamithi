import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation
} from "swiper/core";
import { Card, Container, Image } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../data";

SwiperCore.use([Pagination, Autoplay, Navigation]);
function OurTeam() {
  return (
    <Container className="mt-2">
      <h3 className="text-center">Our Team</h3>
      <Swiper
        breakpoints={{
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 10,
            "initialSlide":1
          },
          "991": {
            "slidesPerView": 3,
            "spaceBetween": 30,
            "initialSlide":1
          }
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        pagination={true}
        className="mySwiper mt-3"
      >
        {data.team.map(item=>
           <SwiperSlide key={item._id}>
           <Card className="shadow  bg-white rounded align-items-center h-100"
             style={{ width: "20rem" }}>
             <Image height="300" width="300" className="team-image" src={item.image}  alt="our team"/>
             {/* <Card.Body>
               <Card.Title className="text-center">{item.name}</Card.Title>
             </Card.Body> */}
           </Card>
         </SwiperSlide>
          )}
      </Swiper>
    </Container>
  );
}

export default OurTeam;
