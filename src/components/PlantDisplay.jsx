import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

import wildstrawberry from "./images/plantPhotos/wildstrawberry.png";
import bluewildindigo from "./images/plantPhotos/bluewildindigo.png";
import earlysunflower from "./images/plantPhotos/earlysunflower.png";
import goldenalexanders from "./images/plantPhotos/goldenalexander.png";
import swampmilkweed from "./images/plantPhotos/swampmilkweed.png";
import purpleconeflower from "./images/plantPhotos/purpleconeflower.png";
import wildbergamot from "./images/plantPhotos/wildbergamot.png";
import bluevervain from "./images/plantPhotos/bluevervain.png";
import commonironweed from "./images/plantPhotos/commonironweed.png";
import prairieblazingstar from "./images/plantPhotos/prairieblazingstar.png";
import rosemallow from "./images/plantPhotos/rosemallow.png";
import cardinalflower from "./images/plantPhotos/cardinalflower.png";
import joepyeweed from "./images/plantPhotos/joepyeweed.png";
import stiffgoldenrod from "./images/plantPhotos/stiffgoldenrod.png";
import sneezeweed from "./images/plantPhotos/sneezeweed.png";
import foxglovebeardtongue from "./images/plantPhotos/foxglovebeardtongue.png";
import newenglandaster from "./images/plantPhotos/newenglandaster.png";
import ozarkbluestar from "./images/plantPhotos/ozarkbluestar.png";
import prairiephlox from "./images/plantPhotos/prairiephlox.png";
import showymilkweed from "./images/plantPhotos/showymilkweed.png";

const photos = {
  wildstrawberry,
  bluewildindigo,
  earlysunflower,
  goldenalexanders,
  swampmilkweed,
  purpleconeflower,
  wildbergamot,
  bluevervain,
  commonironweed,
  prairieblazingstar,
  rosemallow,
  cardinalflower,
  joepyeweed,
  stiffgoldenrod,
  sneezeweed,
  foxglovebeardtongue,
  newenglandaster,
  ozarkbluestar,
  prairiephlox,
  showymilkweed,
};

function PlantDisplay({ plant }) {
  const InfoLine = (props) => {
    const Droplet = () => {
      return (
        <FontAwesomeIcon
          icon={faDroplet}
          size="sm"
          style={{ color: "black" }}
        />
      );
    };
    return (
      <div className="info-line">
        <div className="char-title">{props.charTitle}</div>
        <div className="char-info">
          {props.charTitle === "Soil:" ? (
            props.charInfo.includes("Dry") && props.charInfo.includes("Wet") ? (
              <>
                <Droplet />
                <span> - </span>
                <Droplet />
                <Droplet />
                <Droplet />
              </>
            ) : props.charInfo.includes("Dry") &&
              props.charInfo.includes("Medium") &&
              !props.charInfo.includes("Wet") ? (
              <>
                <Droplet />
                <span> - </span>
                <Droplet />
                <Droplet />
              </>
            ) : !props.charInfo.includes("Dry") &&
              props.charInfo.includes("Medium") &&
              props.charInfo.includes("Wet") ? (
              <>
                <Droplet />
                <Droplet />
                <span> - </span>
                <Droplet />
                <Droplet />
                <Droplet />
              </>
            ) : props.charInfo.includes("Dry") ? (
              <Droplet />
            ) : props.charInfo.includes("Medium") ? (
              <>
                <Droplet />
                <Droplet />
              </>
            ) : props.charInfo.includes("Wet") ? (
              <>
                <Droplet />
                <Droplet />
                <Droplet />
              </>
            ) : (
              <span>{props.charInfo}</span>
            )
          ) : props.charTitle === "Sun:" ? (
            props.charInfo.includes("Full shade") ? (
              props.charInfo.includes("Full sun") ? (
                <>
                  <FontAwesomeIcon
                    icon={faCloud}
                    size="sm"
                    style={{ color: "black" }}
                  />
                  <span> - </span>
                  <FontAwesomeIcon
                    icon={faSun}
                    size="sm"
                    style={{ color: "black" }}
                  />
                </>
              ) : props.charInfo.includes("Partial sun") ? (
                <>
                  <FontAwesomeIcon
                    icon={faCloud}
                    size="sm"
                    style={{ color: "black" }}
                  />
                  <span> - </span>
                  <FontAwesomeIcon
                    icon={faCloudSun}
                    size="sm"
                    style={{ color: "black" }}
                  />
                </>
              ) : (
                <FontAwesomeIcon
                  icon={faCloud}
                  size="sm"
                  style={{ color: "black" }}
                />
              )
            ) : props.charInfo.includes("Partial sun") ? (
              props.charInfo.includes("Full sun") ? (
                <>
                  <FontAwesomeIcon
                    icon={faCloudSun}
                    size="sm"
                    style={{ color: "black" }}
                  />
                  <span> - </span>
                  <FontAwesomeIcon
                    icon={faSun}
                    size="sm"
                    style={{ color: "black" }}
                  />
                </>
              ) : (
                <FontAwesomeIcon
                  icon={faCloudSun}
                  size="sm"
                  style={{ color: "black" }}
                />
              )
            ) : props.charInfo.includes("Full sun") ? (
              <FontAwesomeIcon
                icon={faSun}
                size="sm"
                style={{ color: "black" }}
              />
            ) : (
              <span>{props.charInfo}</span>
            )
          ) : (
            props.charInfo
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="center padding-20 margin-10 bg-violet flex-item-box shadow">
      <h3>{plant.name}</h3>
      <div className="">
        <img src={photos[plant.photo]} alt="photo" className="flower-photo" />
      </div>
      <div className="info-box">
        <InfoLine charTitle="Color:" charInfo={plant.color} />
        <InfoLine charTitle="Height:" charInfo={plant.height} />
        <InfoLine charTitle="Blooms:" charInfo={plant.bloomTime} />
        <InfoLine charTitle="Soil:" charInfo={plant.soiltype} />
        <InfoLine charTitle="Sun:" charInfo={plant.sun} />
      </div>
    </div>
  );
}

export default PlantDisplay;
