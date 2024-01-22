import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home_img" />
      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I'm Venkatesh Pathakota</span>Web Developer
          </h1>
          <p className="home_description">
            I'm indian based front-end developer & react native developer
            focused on crafting clean & userfriendly experiences,Iam Passionate
            about building excellent software that improes the lives of those
            around me
          </p>
          <Link to="/about" className="button">
            More About me{' '}
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
  
      <div className="color_block"></div>
    </section>
  );
};
export default Home;
