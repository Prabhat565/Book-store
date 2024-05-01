import React from "react";

function Cards({ item }) {
  // console.log(item);
  return (
    <>
      <div>
        <div className="card w-96  bg-base-100 shadow-xl mt-8 hover:scale-105 duration-200 px-4">
          <figure>
            <img
              src="https://storage.prompt-hunt.workers.dev/ceb720cd-6c98-47b5-ad51-7bd573576552"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary"></div>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero in
              voluptatibus
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{item.category}</div>
              <div className="badge badge-outline">Books</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
