"use client";
import Image from "next/image";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginRight: "45%",
        marginTop: "20%",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "skyblue",
        marginLeft: "45%",
        marginTop: "20%",
        zIndex: "100",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const CreativeSliderSM = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container p-0 mx-auto mb-[50px] w-[95vw]">
      <Slider {...settings}>
        <div className="w-[] h-[]">
          <Image
            src="/home/urinal_screens.png"
            alt="urinal_screens.png"
            className="w-[98vw] mx-auto"
            width="365"
            height="364"
            layout="responsive"
          ></Image>
        </div>
        <div lassName="w-[] h-[]">
          <Image
            src="/home/dog_waste_bags.png"
            alt="dog_waste_bags.png"
            className="w-[98vw] mx-auto"
            width="363"
            height="364"
            layout="responsive"
          ></Image>
        </div>
        <div lassName="w-[] h-[]">
          <Image
            src="/home/chauffeur_rides.png"
            alt="chauffeur_rides.png"
            className="w-[98vw] mx-auto"
            width="323"
            height="322"
            layout="responsive"
          ></Image>
        </div>
        <div lassName="w-[] h-[]">
          <Image
            src="/home/urinal_screens.png"
            alt="urinal_screens.png"
            className="w-[98vw] mx-auto"
            width="365"
            height="364"
            layout="responsive"
          ></Image>
        </div>
        <div lassName="w-[] h-[]">
          <Image
            src="/home/dog_waste_bags.png"
            alt="dog_waste_bags.png"
            className="w-[98vw] mx-auto"
            width="363"
            height="364"
            layout="responsive"
          ></Image>
        </div>
        <div lassName="w-[] h-[]">
          <Image
            src="/home/chauffeur_rides.png"
            alt="chauffeur_rides.png"
            className="w-[98vw] mx-auto"
            width="323"
            height="322"
            layout="responsive"
          ></Image>
        </div>
      </Slider>
    </div>
  );
};

export default CreativeSliderSM;