import React, { useState } from "react";
import styled from "styled-components";

export default function Rankings() {
  const data = [
    {
      image: "https://images.ecestaticos.com/W2pxs9ji61perBXia5IeDq4qV5s=/0x33:650x400/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fcbb%2F0f3%2F406%2Fcbb0f340648730babb139a2bc2355366.jpg",
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      indice: "65",
      duration: "Actualizacion hace 4 minutos",
    },
    {
      image: "https://iflr.com/Media/images/iflr/may-2020/bangkok.jpg",
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      indice: "145",
      duration: "Actualizacion hace 4 minutos",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      indice: "96",
      duration: "Actualizacion hace 10 minutos",
    },
    {
      image: "https://www.man-es.com/images/default-source/local-websites/new-zealand_stage.jpg?sfvrsn=80f31ae2_0",
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      indice: "54",
      duration: "Actualizacion hace 4 minutos",
    },
    {
      image: "https://cache.marriott.com/content/dam/marriott-renditions/BOBMD/bobmd-bungalow-2973-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*",
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      indice: "15",
      duration: "Actualizacion hace 4 minutos",
    },
    {
      image: "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A",
      title: "London",
      subTitle: "London, the capital of England and the United",
      indice: "95",
      duration: "Actualizacion hace 4 minutos",
    },
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Ranking de los Paises mas Contaminantes</h2>
      </div>

      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                </div>
                <h4>{destination.indice}</h4>
              </div>
              <div className="distance">
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
