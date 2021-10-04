import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState,useEffect } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import data from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
SwiperCore.use([Navigation, Thumbs]);

function SupportPhotoGallery(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let history = useHistory();
  useEffect(()=>{
    document.title="Medical/Financial Support";
  },[])
  return (
    <Container>
      <Button onClick={() => history.goBack()} variant="primary">
        <FontAwesomeIcon className="mx-2" icon={["fas", "arrow-left"]} />
        Back
      </Button>
      <h3 className="my-3 ">{data.support.title}</h3>
      {/* <p className="mb-3">{data.gallery.description}</p> */}
      <div className="image-gallery d-flex flex-wrap justify-content-center">
    
      </div>
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
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
        autoplay={{
          delay: 2000,
          disableOnInteraction:true
        }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        pagination={true}
        className="mySwiper mt-3"
      >
        {data.support.images.map((item,index) => (
          <SwiperSlide key={index}>
            <Card style={{ width: "20rem" }} className="shadow bg-white rounded align-items-center h-100">
              <Card.Img height="300" variant="top" src={item.image} alt="gallery"/>
              <Card.Body>
                <Card.Text>{item.caption}</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
       breakpoints={{
        "640": {
          slidesPerView:6,
        },
        "991": {
          slidesPerView: 8,
        }
      }}
        onSwiper={setThumbsSwiper}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="mySwiper2"
      > 
      {data.support.images.map((item,index) =>
          <SwiperSlide key={index}>
          <Image src={item.image} height="50" width="50" alt="gallery thumbnails"/>
        </SwiperSlide>
      )}
      </Swiper>
    </Container>
  );
}

export default SupportPhotoGallery;
