import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchImg } from "../../redux/user/services";
import { BodyWrapper } from "./Body.styles";
import Search from "./Search";
import Time from "./Time";
import Welcoming from "./Welcoming";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImg())
  }, [dispatch])

  return (
    <BodyWrapper>
      <Time />
      <Welcoming />
      <Search />
    </BodyWrapper>
  );
};

export default Body;
