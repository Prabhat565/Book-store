import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="container max-w-screen-2xl mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            Welcome to the paid section of our Books Library
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            dolores iste voluptate, numquam corrupti natus fugiat. Iusto
            voluptate voluptatibus recusandae.
          </p>
          <Link to="/">
            <button className="bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-amber-400 mt-4">
              Back
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
