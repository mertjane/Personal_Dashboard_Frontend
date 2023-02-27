import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WelcomeWrapper } from "./Body.styles";
import { BsThreeDots } from "react-icons/bs";
import { fetchMantras } from "../../redux/user/services";

const Welcoming = () => {
  const dispatch = useDispatch();
  const { currentUser, mantras } = useSelector((state) => state.user);

  const [currentMantra, setCurrentMantra] = useState(null);
  const [showGreeting, setShowGreeting] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    dispatch(fetchMantras());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();

  let greeting;
  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  // Set the current mantra state to a random mantra object from the mantras array
  const getRandomMantra = () => {
    const randomIndex = Math.floor(Math.random() * mantras.length);
    return mantras[randomIndex];
  };

  // Switch between greeting and mantra every 15 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setShowGreeting((prevShowGreeting) => !prevShowGreeting);
      if (!showGreeting) {
        setCurrentMantra(getRandomMantra());
      }
    }, 1000 * 60 * 5); // 15 minutes in milliseconds

    return () => clearInterval(interval);
  }, [getRandomMantra, showGreeting]);

  // Set the initial mantra state to a random mantra object from the mantras array
  useEffect(() => {
    setCurrentMantra(getRandomMantra());
  }, [mantras]);

  return (
    <WelcomeWrapper>
      <h3 id="text">
        {showGreeting
          ? `${greeting}, ${currentUser.name}.`
          : `${currentMantra?.quote}.`}
      </h3>
      <section className="box">
        <BsThreeDots id="icon" />
      </section>
    </WelcomeWrapper>
  );
};

export default Welcoming;
