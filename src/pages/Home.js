import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/user/services";
import { fetchTodos } from "../redux/todo/services";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { HomeContainer } from "./Pages.styles";

const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const {background} = useSelector((state) => state.user)
  
  useEffect(() => {
    if (auth.id) {
      dispatch(getUser({ auth }));
      dispatch(fetchTodos({ auth }))
    }
  }, [auth, dispatch]);

  return (
    <HomeContainer background={background}>
      <Header />
      <Body />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
