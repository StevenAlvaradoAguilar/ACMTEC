import React from "react";
import styled from "styled-components";
import service1 from "./images/iconoplanet.png";
import service2 from "./images/iconoplanet.png";
import service3 from "./images/iconoplanet.png";
import service4 from "./images/iconoplanet.png";

export default function Cards() {
  const data = [
    {
      icon: service1,
      title: "Contaminacion Industrial",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "Monóxido de carbono (CO)",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: service3,
      title: "Erucciones Volcanicas",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Productos Contaminantes",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];
  return (
    <Section id="services">      
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  .title2 {
    color: white;
    h1 {
      font-size: 3rem;
      letter-spacing: 0.2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;