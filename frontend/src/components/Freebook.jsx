import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";
import axios from "axios";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const myData = res.data.filter((item) => item.category === "Free");
        console.log(myData);
        setBook(res.data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getBook();
  }, []);
  // const filteredBooks = list.filter((item) => item.category === "Free");
  // console.log(filteredBooks);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto md:px-20 px-4">
        <div>
          <h2 className="font-bold text-xl pb-2">Free Offered Books</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            distinctio numquam, non eius minima sed laudantium, quibusdam
            consequuntur, aliquid incidunt illo fugit perspiciatis? Reiciendis
            nam placeat inventore soluta quod animi. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Expedita voluptates tempora delectus
            ab dolorum veniam quam amet mollitia fugiat similique perspiciatis
            tempore, ad recusandae optio ducimus eius voluptatum consequuntur?
            Unde dolorum quisquam at provident, blanditiis repudiandae alias eos
            ullam sint, nobis dolor fugiat quasi nam! At expedita corporis
            repellendus. Accusantium?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
