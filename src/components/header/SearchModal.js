import { useState, useEffect, useRef } from "react";
import { Overlay } from "./Modal.styles";
// import { useDispatch, useSelector } from "react-redux";
// import { searchCitiesAsync } from "../../redux/user/services";

const SearchModal = ({ open, onClose }) => {
  // const dispatch = useDispatch();
  const modalRef = useRef();

  // const cities = useSelector((state) => state.weather.cities);
  /* const [searchQuery, setSearchQuery] = useState("");
 */
  /* const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length >= 3) {
      dispatch(searchCitiesAsync({ query }));
    }
  }; */

  useEffect(() => {
    const handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  if (!open) return null;
  return (
    <Overlay /* cities={cities} */>
      <section className="modal-wrapper" ref={modalRef}>
        <section id="search-box">
          <input
            type="text"
            placeholder="Type a location"
            // onChange={handleSearch}
            // value={searchQuery}
          />
          <button onClick={onClose} id="icon-btn">
            {" "}
            <span>&#x2715;</span>
          </button>
        </section>
        {/* {cities.length > 0 && ( */}
          {/* <ul>
            {searchQuery &&
              cities
                .filter((city) => city.name.toLowerCase().includes(searchQuery))
                .map((city, index) => (
                  <li onClick={() => handleSelectedCity(city)} key={index}>
                    {city.name}, {city.country}
                  </li>
                ))}
          </ul> */}
        {/* )} */}
      </section>
    </Overlay>
  );
};

export default SearchModal;
