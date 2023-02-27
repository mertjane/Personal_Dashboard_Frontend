import { useState } from "react";
import { BsThreeDots, BsPencilFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import SearchModal from "./SearchModal";
import WeatherRendering from "./WeatherRendering";

const ForecastMenu = () => {
  const { currentUser, forecast } = useSelector((state) => state.user);
  const { conditions } = forecast?.currentConditions || {};
  const [openSearchModal, setOpenSearchModal] = useState(false);

  return (
    <section className="menu-wrapper">
      <section className="header">
        <section className="box">
          <section id="city">
            <h5>{currentUser?.city?.city}</h5>
            <section className="wrapper">
              <BsPencilFill
                id="icon"
                onClick={() => setOpenSearchModal(true)}
              />
            </section>
          </section>
          <span>{forecast?.currentConditions?.conditions}</span>
        </section>
        <BsThreeDots id="menu-icon" />
      </section>
      <section className="body">
        <section className="current-weather">
          <WeatherRendering conditions={conditions} />
          <h5 id="degree">
            {forecast?.currentConditions?.temp.toFixed()} &#176;
          </h5>
        </section>
        <section className="detail-weather">
          <p id="items">
            Feels like{" "}
            <span>
              {" "}
              {forecast?.currentConditions?.feelslike.toFixed()} &#176;
            </span>
          </p>
          <p id="items">
            Recent rain
            <span> {forecast?.currentConditions?.precip?.toFixed()}mm</span>
          </p>
          <p id="items">
            Wind
            <span>
              {" "}
              {forecast?.currentConditions?.windspeed.toFixed()} km/h
            </span>
          </p>
        </section>
      </section>
      <section className="footer">
        <section className="box">
          <span>Current conditions and 7-day forecast &#8594;</span>
          <span>AccuWeather</span>
        </section>
      </section>
      {openSearchModal && (
        <SearchModal
          open={openSearchModal}
          onClose={() => setOpenSearchModal(false)}
        />
      )}
    </section>
  );
};

export default ForecastMenu;
