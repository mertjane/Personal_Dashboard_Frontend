import { useState, useEffect, useRef } from "react";
import { MdOutlineNightlight, MdAddCircleOutline } from "react-icons/md";
import { BiSun } from "react-icons/bi";
import { fetchWeather } from "../../redux/user/services";
import ForecastMenu from "./ForecastMenu";
import LinksMenu from "./LinksMenu";
import { HeaderWrapper } from "./Header.styles";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(false);
  const [openLinksMenu, setOpenLinksMenu] = useState(false);
  const { currentUser, forecast } = useSelector((state) => state.user);
  const { sunrise, sunset } = forecast?.currentConditions || {}; // add default value;

  const [displaySunriseIcon, setDisplaySunriseIcon] = useState(false);

  const forecastRef = useRef();
  const linkRef = useRef();

  useEffect(() => {
    if(currentUser.city){
      dispatch(fetchWeather({ currentUser }));
    }
  }, [dispatch, currentUser, currentUser.city]);

  useEffect(() => {
    function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      return `${hours}:${minutes}:${seconds}`;
    }

    const intervalId = setInterval(() => {
      const currentTime = getCurrentTime();
      const shouldDisplaySunriseIcon =
        currentTime >= sunrise && currentTime < sunset;
      setDisplaySunriseIcon(shouldDisplaySunriseIcon);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [sunrise, sunset]);

  useEffect(() => {
    const handler = (e) => {
      if (!forecastRef.current.contains(e.target) && !linkRef.current.contains(e.target)) {
        setOpenMenu(false);
        setOpenLinksMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <HeaderWrapper>
      <section className="links" onClick={() => setOpenLinksMenu(true)}>
        <button id="menu">Links</button>
      </section>
      <section
        ref={linkRef}
        className={`linksDropdown ${openLinksMenu ? "active" : "inactive"}`}
      >
        <section id="arrow" />
        <LinksMenu />
      </section>
      <section className="forecast" onClick={() => setOpenMenu(true)}>
        <button id="add-btn">
          <MdAddCircleOutline id="icon" />
          Add
        </button>
        <section className="group">
          <section className="current-weather">
            {displaySunriseIcon ? (
              <BiSun id="icon" />
            ) : (
              <MdOutlineNightlight id="icon" />
            )}
          </section>
          <section id="weather">
            <span>{forecast?.currentConditions?.temp.toFixed()}&#176;</span>
            <span>{currentUser?.city?.city}</span>
          </section>
        </section>
      </section>
      <section
        ref={forecastRef}
        className={`dropdownMenu ${openMenu ? "active" : "inactive"}`}
      >
        <section id="arrow" />
        <ForecastMenu />
      </section>
    </HeaderWrapper>
  );
};

export default Header;
