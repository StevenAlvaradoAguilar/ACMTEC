import React from 'react'
import styled from "styled-components";

const Contact = () => {
  return (
    <div>
        <Section id="contact">
      <div className="title">
        <h2>Contacto</h2>
      </div>
      <div className="contact">
        <div className="contacts">
          <p>
          Developed the front end of the web site using React
          </p>
          <div className="info">
            <img src="https://scontent.fsjo8-1.fna.fbcdn.net/v/t1.6435-9/171247919_2319660061511918_8844957666508315159_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=qK5Fe9kp9aEAX9zc-18&_nc_ht=scontent.fsjo8-1.fna&oh=00_AT8ZcnDkYA3VegU-Oxh_hz4pjxUrf-A1RKZas_uG7dMR6A&oe=62AAD1C4" alt="" />
            <div className="details">
              <h4>Johan Zamora Rojas</h4>
              <span>Computer Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </div>
  )
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .contact {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .contacts {
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
    .contact {
      flex-direction: column;
      margin: 0;
      .contact {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;


export default Contact