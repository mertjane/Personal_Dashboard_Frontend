import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../../redux/user/services";
import { FooterWrapper } from "./Footer.styles";
import { RiSettings5Fill } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import { IoIosRefresh } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import Todos from "./Todos";

const Footer = () => {
  const dispatch = useDispatch();

  const [openTodoList, setOpenTodoList] = useState(false);
  const { quotes, background } = useSelector((state) => state.user);
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  const getRandomQuote = useCallback(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, [quotes]);

  useEffect(() => {
    // set initial quote
    setCurrentQuote(getRandomQuote());

    // update quote every hour
    const interval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 3600000);

    return () => {
      clearInterval(interval);
    };
  }, [getRandomQuote]);

  if (!currentQuote) {
    return null; // or render a loading indicator
  }

  return (
    <FooterWrapper>
      <section className="photo-location">
        <section id="box">
          <RiSettings5Fill id="icon" />
        </section>
        <section id="location">
          <span>{background.location?.name}</span>
          <section id="owner">
            <span>{background?.user?.name}</span>
            <BiHeart title="Favorite" id="icon" />
            <IoIosRefresh title="Skip" id="icon" />
          </section>
        </section>
      </section>
      <section className="word">
        <h3 id="text">"{currentQuote.quote}"</h3>
        <section id="owner">
          <span>{currentQuote.author}</span>
          <BiHeart title="Favorite" id="icon" />
          <IoIosRefresh title="Skip" id="icon" />
          <AiOutlineTwitter title="Share" id="icon" />
        </section>
      </section>
      <section className="todo-list" onClick={() => setOpenTodoList(!openTodoList)}>
        <button id="todo-menu">Todo</button>
      </section>
      <section className={`todo-dropdown ${openTodoList ? "active" : "inactive"}`}>
        <section id="arrow" />
        <Todos />
      </section>
    </FooterWrapper>
  );
};

export default Footer;
