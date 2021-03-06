import React from 'react'
import styled from "styled-components";
import avatarImage from "../images/avatarImage.jpeg";
import avatarImage1 from "../images/Foto-perfil.jpg";
import avatarImage2 from "../images/avatarImage.jpeg";
import avatarImage3 from "../images/avatarImage.jpeg";

const About = () => {
  return (
    <Section id= "about">
      <div className="title">
        <h1>Sobre nosotros</h1>
        <h2>sd</h2>
      </div>
      {/* Perfil de Johan */}
       <div className="about">
        <div className="about">
          <p>
          Developed the front end of the web site using React
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Johan Zamora Rojas</h4>
              <span>Computer Engineer</span>
            </div>
          </div>
        </div>
      </div>
       {/* Perfil de Steven */}
      <div className="about">
        <div className="about">
          <p>
          Developed the front end of the web site using React
          </p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
              <h4>Steven Alvarado Aguilar</h4>
              <span>Computer Engineer</span>
            </div>
          </div>
        </div>
      </div>
       {/* Perfil de Victor */}
      <div className="testimonials">
        <div className="testimonial">
          <p>
          Developed the front end of the web site using React
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Johan Zamora Rojas</h4>
              <span>Computer Engineer</span>
            </div>
          </div>
        </div>
      </div>
       {/* Perfil de Leandro */}
      <div className="testimonials">
        <div className="testimonial">
          <p>
          Developed the front end of the web site using React
          </p>
          <div className="info">
            <img src={avatarImage3} alt="" />
            <div className="details">
              <h4>Johan Zamora Rojas</h4>
              <span>Computer Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;

export default About;