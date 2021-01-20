import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Features.css";

const Features = (props) => {
  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType },
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return <button onClick={() => onClick()} />;
  // };
  // <Carousel customRightArrow={<CustomRightArrow />} />;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      //autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="parent-container">
        <img
          className="image-control"
          src={props.image}
          alt="meditating feature"
        />
      </div>
      <div className="parent-container">
        <img className="image-control" src={props.image2} alt="music feature" />
      </div>
      <div className="parent-container">
        <img
          className="image-control"
          src={props.image3}
          alt="walking feature"
        />
      </div>
      <div className="parent-container">
        <img className="image-control" src={props.image4} alt="feature" />
      </div>
    </Carousel>
  );
};

export default Features;
