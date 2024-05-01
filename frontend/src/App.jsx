import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";
import About from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
