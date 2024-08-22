import React from "react";
import aboutImage from "./assets/abt.jpg";

function About() {
  return (
    <div id="about" className="about-page" style={{ backgroundImage: `url(${aboutImage})` }}>
      <div className="about-content">
        <h1>
          IDA - <span className="highlighted-text">AR</span>, <span className="highlighted-text">VR</span> and <span className="highlighted-text">MR</span> Company in India
        </h1>
        <p>
          We IDA - Industrial Design and Animation is a creative and innovative Digital Transformation organisation with a focus on both Web 3.0 and Industry 4.0 solutions.
          We transform and elevate your industry and business with immersive technical solutions with an extensive and wide range of imagination that becomes possible.
        </p>
        <p>
          We at IDA transform your needs and reinvent your business for the upcoming digital future. We create and design based on your needs with technologies like
          AR (Augmented Reality), VR (Virtual Reality), MR (Mixed Reality), and XR (Extended Reality). To reshape the entire future, join us in the immersive future.
        </p>
        <a href="#learn-more" className="learn-more-button">Learn More</a>
      </div>
    </div>
  );
}

export default About;