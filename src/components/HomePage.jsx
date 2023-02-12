import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import "../homePage.css";
import yellowstripes from "./images/yellowstripes.png";
import violet from "./images/violet.png";
import salmon from "./images/salmon.png";
import green from "./images/green.png";
import black from "./images/black.png";

function HomePage() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site min-150vh">
      <main className="main">
        <div className="container">
          {/* <MediaQuery minWidth={800}>
            <div className="heading-desktop">
              <h2>Support your local environment. </h2>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={799}>
            <div className="heading-mobile">
              <h2>Support your local environment. </h2>
            </div>
          </MediaQuery> */}
          <div className="grid-container" aria-hidden="true">
            <div className="grid" aria-hidden="true">
              <div className="grid__item grid__item--pink" />
              <div className="grid__item grid__item--ystripes">
                <img src={yellowstripes} alt="Yellow Stripes" />
              </div>
              <div className="grid__item grid__item--dblue" />
              <div className="grid__item grid__item--violet">
                <img
                  src={violet}
                  alt="Violet Flower"
                  style={{ transform: `translateY(${offsetY * 0.2}px)` }}
                />
              </div>
              <div className="grid__item grid__item--salmon">
                <img
                  src={salmon}
                  alt="Salmon Flowers"
                  style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                />
              </div>
              <div className="grid__item grid__item--green">
                <img src={green} alt="Green Flowers" />
              </div>
              <div className="grid__item grid__item--black">
                <img
                  src={black}
                  alt="Flower with bee"
                  style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                />
              </div>
            </div>

            <div
              className="yellow-square"
              style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
