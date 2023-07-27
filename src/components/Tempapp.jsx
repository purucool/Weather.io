import React, { useEffect, useState } from "react";
import "./css/style.css";
import logo1 from "./css/images/cloudsicon.png";
import logo2 from "./css/images/rainicon2.png";
import logo3 from "./css/images/no.png";
import logo4 from "./css/images/sunnyicon.png";
import logo5 from "./css/images/freezing.png";
import logo6 from "./css/images/Idilic.png";
import Digitalclock from "./Digitalclock";
import bg1 from "./css/images/weather1.jpg";
import bg2 from "./css/images/weather2.jpg";
import bg3 from "./css/images/weather3.jpg";
import bg4 from "./css/images/weather4.jpg";
import bg5 from "./css/images/weather5.jpg";
import bg6 from "./css/images/weather6.jpg";
import bg7 from "./css/images/background.jpg";
import bg8 from "./css/images/clear.jpg";
import bg10 from "./css/images/cold.jpg";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Switzerland");
  // const [bg, setWeather] = useState("weather.jpg");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=50fe5350f61041e1aeb81b079fb4740a`;
      const response = await fetch(url);
      const resJason = await response.json();
      setCity(resJason.main);
    };
    fetchApi();
  }, [search]);

  let weatherarr = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg10];
  // const updatebg = () => {
  let x1 = weatherarr[Math.floor(Math.random() * weatherarr.length)];

  return (
    <div className="body" style={{ backgroundImage: `url(${x1})` }}>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>

        {!city ? (
          <>
            <p className="erro_msg">No Data Found!!!</p>
            <img className="emojies" src={logo3} />
          </>
        ) : (
          <div className="info">
            <Digitalclock></Digitalclock>
            <h2 className="location">{search.toUpperCase()}</h2>
            {25 < city.temp ? (
              <>
                <img className="emojies" src={logo4} />
                <h1 className="weather">SUNNY</h1>
              </>
            ) : 20 < city.temp && city.temp < 25 ? (
              <>
                <img className="emojies" src={logo1} />
                <h1 className="weather">CLOUDY</h1>
              </>
            ) : 15 < city.temp && city.temp < 20 ? (
              <>
                <img className="emojies" src={logo2} />
                <h1 className="weather">RAINY</h1>
              </>
            ) : 10 < city.temp && city.temp < 15 ? (
              <>
                <img className="emojies" src={logo6} />
                <h1 className="weather">IDILIC</h1>
              </>
            ) : (
              <>
                <img className="emojies" src={logo5} />
                <h1 className="weather">FREEZING</h1>
              </>
            )}
            <h1 className="temp">{city.temp}℃</h1>
            <h3 className="tempmin_max">
              Pressure : {city.pressure} kPa | Humidity : {city.humidity} %
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default Tempapp;
