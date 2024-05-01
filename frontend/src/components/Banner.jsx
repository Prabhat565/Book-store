import React from "react";
import banner from "/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto md:px-20 px-4 flex md:flex-row flex-col">
        <div className=" order-2 md:order-1 w-full md:w-1/2 md:mt-12 mt-4">
          <div className="space-y-12 ">
            <h1 className="text-md font-bold">
              Welcome to <span className="text-red-500">The Reading Room</span>{" "}
              , where every page holds a new adventure and every shelf whispers
              stories waiting to be discovered.{" "}
            </h1>
            <p>
              Step through our doors and immerse yourself in a world where the
              scent of paper and ink dances in the air, and the promise of a new
              journey beckons from every corner. Whether you're a seasoned
              reader or just embarking on your literary voyage, our curated
              collection spans genres, ages, and realms, ensuring there's
              something for every taste and inclination.Browse through the
              classics, where timeless tales stand the test of time, or lose
              yourself in the latest bestsellers, where fresh narratives and
              vibrant voices capture the zeitgeist. Our shelves boast a diverse
              array of fiction and non-fiction, from gripping mysteries to
              soul-stirring memoirs, from epic fantasies to insightful
              biographies.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-success mt-4 mb-12">Submit</button>
        </div>

        <div className="w-full md:w-1/2 order-1 mt-8">
          <img
            src={banner}
            alt="book-image"
            className=" w-92 h-80 m-auto md:ml-40"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
