// Contact.js
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-[#fff]">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4 text-lg">Feel free to get in touch with us.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p className="mb-2">
            <span className="font-bold ">Address:</span> 123 Main Street,
            Punjab, India
          </p>
          <p className="mb-2">
            <span className="font-bold">Phone:</span> +1 234 567 890
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span> info@example.com
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 border rounded-md w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Link to="/" className="text-blue-500 mt-4 block">
        Go back to Home
      </Link>
    </div>
  );
};

export default Contact;
