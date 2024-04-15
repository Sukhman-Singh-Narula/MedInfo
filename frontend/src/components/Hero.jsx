import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <h3>Welcome to MedInfo – Your Personal Digital Health Companion</h3>

          <p>At MedInfo, we believe in empowering you with the tools to take charge of your health. Our platform is designed to be your go-to resource for storing, managing, and understanding your medical data. With a user-friendly interface and robust security measures, you can confidently keep track of your health records, appointments, and treatment plans.</p>

          <p>But that’s not all – MedInfo is also home to an advanced digital assistant, ready to answer your medical queries. Whether you’re looking for information on symptoms, medications, or wellness tips, our intelligent system is here to provide you with accurate, up-to-date answers.</p>

          <p>Join us on a journey towards better health, where your medical data is at your fingertips and expert knowledge is just a question away. Sign up today and experience the future of personal health management!</p>

        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
