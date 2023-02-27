import { useState, useEffect, useRef } from "react";
import {
  registerUser,
  loginUser,
  fetchCountries,
  fetchCities,
} from "../redux/auth/services";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayer } from "./Pages.styles";
import { MdKeyboardArrowDown } from "react-icons/md";

const Auth = ({ open, onClose }) => {
  const modalRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { countryList, cityList } = useSelector((state) => state.location);
  const [openCountryList, setOpenCountryList] = useState(false);
  const [openCitiesList, setOpenCitiesList] = useState(false);
  const [countries, setCountries] = useState(countryList);
  const [cities, setCities] = useState(cityList);
  const [switchLogin, setSwitchLogin] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth.id) {
      navigate("/");
    }
  }, [auth.id, navigate]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!switchLogin) {
      if (
        createUser.password !== createUser.confirmPassword ||
        createUser.confirmPassword === ""
      ) {
        setPasswordError(true);
      } else {
        dispatch(registerUser(createUser));
        setPasswordError(false);
      }
    } else {
      dispatch(loginUser(currentUser));
    }
  };

  useEffect(() => {
    if (openCountryList) {
      dispatch(fetchCountries(openCountryList));
    }
    if (openCitiesList) {
      dispatch(fetchCities(openCitiesList));
    }
  }, [cities, countries, dispatch, openCountryList, openCitiesList]);

  const handleSelectCountry = (country) => {
    setCreateUser({ ...createUser, country: country.name });
    setCountries(countries);
    setOpenCountryList(false);
  };

  const handleSelectCity = (item) => {
    setCreateUser({ ...createUser, city: item });
    setCities(cities.city);
    setOpenCitiesList(false);
  };

  if (!open) return null;
  return (
    <AuthLayer
      createUser={createUser}
      switchLogin={switchLogin}
      openCountryList={openCountryList}
    >
      <section className="auth-wrapper" ref={modalRef}>
        <h3 id="title">{switchLogin === true ? "Login" : "Register"}</h3>
        <form className="auth-form" autoComplete="off" onSubmit={handleSubmit}>
          {switchLogin ? (
            <>
              <label>
                Email
                <input
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="text"
                  placeholder="john@example.com"
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, email: e.target.value })
                  }
                />
              </label>
              <label>
                Password
                <input
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="password"
                  placeholder="choose a password"
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, password: e.target.value })
                  }
                />
              </label>
              {auth.loginStatus === "rejected" ? (
                <span style={{ color: "red" }}>something went wrong...</span>
              ) : (
                <></>
              )}
              {auth.loginStatus === "pending" ? (
                "loading..."
              ) : (
                <button type="submit">Sign in</button>
              )}
              <span>
                Don't you have an account?{" "}
                <span onClick={() => setSwitchLogin(false)}>Sign up</span>
              </span>
            </>
          ) : (
            <>
              <label>
                Name
                <input
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="text"
                  placeholder="your name"
                  onChange={(e) =>
                    setCreateUser({ ...createUser, name: e.target.value })
                  }
                />
              </label>
              <label>
                Email
                <input
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="text"
                  placeholder="john@example.com"
                  onChange={(e) =>
                    setCreateUser({ ...createUser, email: e.target.value })
                  }
                />
              </label>
              <label>
                Country
                <section className="custom-select">
                  <input
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    type="text"
                    id="country-input"
                    placeholder={
                      !createUser.country
                        ? "Choose a country"
                        : createUser.country
                    }
                    readOnly
                  />
                  <section
                    id="icon-wrapper"
                    onClick={() => setOpenCountryList(!openCountryList)}
                  >
                    <MdKeyboardArrowDown id="icon" />
                  </section>
                </section>
                {openCountryList && (
                  <ul id="country-list">
                    {countryList.map((country) => (
                      <li
                        key={country.id}
                        onClick={() => handleSelectCountry(country)}
                      >
                        {country.name}
                      </li>
                    ))}
                  </ul>
                )}
              </label>
              <label>
                City
                <section className="custom-select">
                  <input
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    type="text"
                    id="city-input"
                    placeholder={
                      !createUser.city ? "Choose a city" : createUser.city.city
                    }
                    readOnly
                  />
                  <section
                    id="icon-wrapper"
                    onClick={() => setOpenCitiesList(!openCitiesList)}
                  >
                    <MdKeyboardArrowDown id="icon" />
                  </section>
                </section>
                {openCitiesList && (
                  <ul id="city-list">
                    {cityList
                      .filter((item) => item.country === createUser?.country)
                      .map((item) => (
                        <li
                          key={item.id}
                          onClick={() => handleSelectCity(item)}
                        >
                          {item.city}
                        </li>
                      ))}
                  </ul>
                )}
              </label>
              <label>
                Password
                <input
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="password"
                  placeholder="choose a password"
                  onChange={(e) =>
                    setCreateUser({ ...createUser, password: e.target.value })
                  }
                />
              </label>
              <label>
                Password confirmation
                <input
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="password"
                  placeholder="confirm password"
                  onChange={(e) =>
                    setCreateUser({
                      ...createUser,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </label>
              {passwordError && (
                <span style={{ color: "red" }}>Passwords do not match!</span>
              )}
              {auth.registerStatus === "rejected" ? (
                <span style={{ color: "red" }}>something went wrong...</span>
              ) : (
                <></>
              )}
              {auth.registerStatus === "pending" ? (
                "loading..."
              ) : (
                <button type="submit">Submit</button>
              )}
              <span>
                Have an account already?{" "}
                <span onClick={() => setSwitchLogin(true)}>Login</span>
              </span>
            </>
          )}
        </form>
      </section>
    </AuthLayer>
  );
};

export default Auth;
