import React, { useState } from "react";
import PlantDisplay from "./PlantDisplay";
import PlantList from "./PlantList";

function PlantSearchPage() {
  const plantList = PlantList;
  const [sunAmount, setSunAmount] = useState("all");
  const [soilType, setSoilType] = useState("all");
  const [bloomTime, setBloomTime] = useState("all");
  const [color, setColor] = useState("all");
  const [height, setHeight] = useState("all");

  return (
    <div className="site min-100vh center font-karla flex-container align-stretch">
      <div className="flex-item-small bg-blue padding-1 text-white">
        <h4>
          Use the filters to find native plants that are suitable for your
          garden
        </h4>
        <form className="margin-10">
          <div>
            <label htmlFor="sunAmount">Sun</label>
            <select
              id="sunAmount"
              value={sunAmount}
              onChange={(e) => setSunAmount(e.target.value)}
              className="margin-10"
            >
              <option value="all">All</option>
              <option value="fullSun">Full sun</option>
              <option value="partSun">Partial sun</option>
              <option value="fullShade">Full shade</option>
            </select>
            <br />
            <label htmlFor="soilType">Soil type</label>
            <select
              id="soilType"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="margin-10"
            >
              <option value="all">All</option>
              <option value="wet">Wet</option>
              <option value="medium">Medium</option>
              <option value="dry">Dry</option>
            </select>
            <br />
            <label htmlFor="bloomTime">Bloom Time</label>
            <select
              id="bloomTime"
              value={bloomTime}
              onChange={(e) => setBloomTime(e.target.value)}
              className="margin-10"
            >
              <option value="all">All</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
            </select>
            <br />
            <label htmlFor="color">Color</label>
            <select
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="margin-10"
            >
              <option value="all">All</option>
              <option value="yellow">Yellow</option>
              <option value="white">White</option>
              <option value="purple">Purple</option>
              <option value="pink">Pink</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="orange">Orange</option>
            </select>
            <br />
            <label htmlFor="size">Height</label>
            <select
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="margin-10"
            >
              <option value="all">All</option>
              <option value="groundCover">Ground cover</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="tall">Tall</option>
            </select>
          </div>
        </form>
      </div>
      <div className="flex-container flex-wrap flex-item-large center site">
        {plantList
          //filter by sun amount
          .filter((val) => {
            if (sunAmount === "fullSun") {
              return val.sun.includes("Full sun");
            } else if (sunAmount === "partSun") {
              return val.sun.includes("Partial sun");
            } else if (sunAmount === "fullShade") {
              return val.sun.includes("Full shade");
            } else return val;
          })
          //filter by soil type
          .filter((val) => {
            if (soilType === "wet") {
              return val.soiltype.includes("Wet");
            } else if (soilType === "medium") {
              return val.soiltype.includes("Medium");
            } else if (soilType === "dry") {
              return val.soiltype.includes("Dry");
            } else return val;
          })
          //filter by bloom time
          .filter((val) => {
            if (bloomTime === "spring") {
              return val.bloomTime === "Spring";
            } else if (bloomTime === "summer") {
              return val.bloomTime === "Summer";
            } else if (bloomTime === "fall") {
              return val.bloomTime === "Fall";
            } else return val;
          })
          //filter by flower color
          .filter((val) => {
            if (color === "yellow") {
              return val.color === "Yellow";
            } else if (color === "white") {
              return val.color === "White";
            } else if (color === "purple") {
              return val.color === "Purple";
            } else if (color === "red") {
              return val.color === "Red";
            } else if (color === "pink") {
              return val.color === "Pink";
            } else if (color === "blue") {
              return val.color === "Blue";
            } else if (color === "orange") {
              return val.color === "Orange";
            } else return val;
          })
          //filter by height
          .filter((val) => {
            if (height === "groundCover") {
              return val.height === "Ground cover";
            } else if (height === "short") {
              return val.height === "Short";
            } else if (height === "medium") {
              return val.height === "Medium";
            } else if (height === "tall") {
              return val.height === "Tall";
            } else return val;
          })
          .map((val) => (
            <PlantDisplay key={val.name} plant={val} />
          ))}
      </div>
    </div>
  );
}

export default PlantSearchPage;
