import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import pink from "./images/pink.png";
import yellowstripes from "./images/yellowstripes.png";
import darkblue from "./images/darkblue.png";
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
          <MediaQuery minWidth={800}>
            <div className="heading-desktop">
              <h1>Grow Native Nebraska</h1>
              <h2>Support your local environment. </h2>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={799}>
            <div className="heading-mobile">
              <h1>Grow Native Nebraska</h1>
              <h2>Support your local environment. </h2>
            </div>
          </MediaQuery>
          <div className="grid-container" aria-hidden="true">
            <div className="grid" aria-hidden="true">
              <div className="grid__item grid__item--pink">
                <img
                  src={pink}
                  alt="Pink Square"
                  style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                />
              </div>
              <div className="grid__item grid__item--ystripes">
                <img src={yellowstripes} alt="Yellow Stripes" />
              </div>
              <div className="grid__item grid__item--dblue">
                <img
                  src={darkblue}
                  alt="Dark Blue"
                  style={{ transform: `translateY(${offsetY * 0.4}px)` }}
                />
              </div>
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
            <div className="text-box padding-20">
              <p>
                <b>
                  Native plants are those that occur naturally in a region in
                  which they evolved. They are the ecological basis upon which
                  life depends, including birds and people. Without them and the
                  insects that co-evolved with them, local birds cannot survive.
                </b>
              </p>
              <p>
                Unfortunately, most of the landscaping plants available in
                nurseries are alien species from other countries. These exotic
                plants not only sever the food web, but many have become
                invasive pests, outcompeting native species and degrading
                habitat in remaining natural areas.
              </p>
              <p>
                Restoring native plant habitat is vital to preserving
                biodiversity. By creating a native plant garden, each patch of
                habitat becomes part of a collective effort to nurture and
                sustain the living landscape for birds and other animals.
              </p>
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
