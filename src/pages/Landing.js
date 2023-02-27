import { useState } from "react";
import { LandingContainer } from "./Pages.styles";
import Auth from "./Auth";

const Landing = () => {
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <LandingContainer>
      <header>
        <section id="logo" />
        <ul className="menu">
          <li id="menu-item">Plus</li>
          <li id="menu-item">Teams</li>
          <li id="menu-item">NewsLetter</li>
        </ul>
      </header>
      <section className="body">
        <section className="fragment">
          <section className="text-box">
            <h1>Your space for positivity.</h1>
            <h3>
              Turn your potential into progress with a beautifully simple start
              page.
            </h3>
            <button id="access-btn" onClick={() => setOpenRegister(true)}>
              <span>
                &#43; Let's start <span>It's free</span>
              </span>
            </button>
            <Auth open={openRegister} onClose={() => setOpenRegister(false)} />
          </section>
          <section className="view-box">
            <section id="img" />
          </section>
        </section>
      </section>
    </LandingContainer>
  );
};

export default Landing;
