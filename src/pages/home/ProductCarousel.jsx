import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./productCarousel.css";

const ProductCarousel = () => {
  return (
    <div className="carouselContainer">
      <Carousel
        showThumbs={false}
        dynamicHeight={true}
        // centerMode={true}
        showArrows={true}
        infiniteLoop={true}
        interval={2000}
        // centerSlidePercentage={80}
      >
        <div>
          <img src="https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1612188842101-f976582906fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
