import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/core";
import {Card, Container, Image, Modal } from "react-bootstrap";
import data from "../../data";
import Rating from "../Rating/Rating";

SwiperCore.use([Pagination, Autoplay, Navigation]);
function Testimonials() {
  const [show, setShow] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial]=useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setSelectedTestimonial(e.target.id);
    setShow(true);
};
  return (
    <Container className="mt-2">
      <h3 className="text-center">What People Say</h3>
      <Swiper
        breakpoints={{
          "640": {
            slidesPerView: 2,
            spaceBetween: 10,
            initialSlide: 1
          },
          "991": {
            slidesPerView: 3,
            spaceBetween: 10,
            initialSlide: 1
          }
        }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false
        // }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        pagination={true}
        className="mySwiper mt-3"
      >
        {data.testimonials.map((item,index) => (
          <SwiperSlide key={item._id}>
            <Card
              className="shadow bg-white rounded align-items-center h-100"
              style={{ width: "20rem" }}
            >
              <Image
                className="testimonial-image roundedCircle mt-3"
                src={item.image}
                height="300"
                width="300"
                alt="testimonial"
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center">{item.name}</Card.Title>
                <Card.Text>
                  { item._id===2?item.feedback.substring(0,150) + "...":item.feedback.substring(0, 200) + "..."}
                  <span id={index} style={{'cursor':'pointer'}} onClick={handleShow} className="text-primary font-weight-bold">
                    More
                  </span>
                </Card.Text>
                <div className="testimonials-rating rounded d-flex justify-content-center align-items-center">
                  <Rating rating={item.rating} />
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center flex-column align-items-center">
        
            <Image
              className="testimonial-image roundedCircle my-3"
              src={data.testimonials[selectedTestimonial].image}
              alt="testimonial"
            />
              <Card.Title className="text-center">
                {data.testimonials[selectedTestimonial].name}
              </Card.Title>
              <Card.Text>{data.testimonials[selectedTestimonial].feedback}</Card.Text>
              <div className="testimonials-rating rounded d-flex justify-content-center align-items-center">
                <Rating rating={data.testimonials[selectedTestimonial].rating} />
              </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Testimonials;
