import React from "react";
import "./About.css";
import aboutImg from "../../images/about.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Bookie</h2>
            <p className="fs-17">
              Welcome to Bookie, your ultimate destination for exploring the
              world of books without turning a page! Founded by passionate
              readers and technology enthusiasts, we're here to help you
              discover, explore, and delve into the details of your favorite
              books, whether you're looking for a summary, author information,
              or insights into the plot.
            </p>
            <p className="fs-17">
              At Bookie, we believe that books offer rich tapestries of stories,
              ideas, and knowledge. Our user-friendly platform and vibrant
              book-loving community ensure you find comprehensive details about
              your chosen titles, from summaries to author backgrounds, allowing
              you to make informed reading choices and engage in lively
              discussions about your favorites. Join us on this literary journey
              today, where every book is a story waiting to be explored at
              Bookie!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
