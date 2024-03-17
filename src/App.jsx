import { useState, useEffect } from "react";
import Landing2Background from "./assets/BG2-Background-min.png";
import Landing2Midground2 from "./assets/BG2-Midground2-min.png";
import Landing2Midground from "./assets/BG2-Midground-min.png";
import Landing2Foreground from "./assets/BG2-Foreground-min.png";
import Landing1Full from "./assets/Full-Image-min.png";
import Landing1Background from "./assets/Background-Layer-min.png";
import Landing1Midground2 from "./assets/Secondary-Midground-Layer-min.png";
import Landing1Midground from "./assets/Midground-Layer-min.png";
import Landing1Foreground from "./assets/Foreground-Layer-min.png";
import "./App.scss";
import classnames from "classnames";
import HeroLanding from "./components/HeroLanding";

const getLandingOptions = (number) => {
  const options = [
    {
      name: "landing1",
      title: "Explore the Heart of the Front Range",
      fullImg: Landing1Full,
      backgroundImg: Landing1Background,
      midground2Img: Landing1Midground2,
      midground1Img: Landing1Midground,
      foregroundImg: Landing1Foreground,
      ctaAlignRight: true,
    },
    {
      name: "landing2",
      title: `Explore "America's Fittest City"`,
      backgroundImg: Landing2Background,
      midground2Img: Landing2Midground2,
      midground1Img: Landing2Midground,
      foregroundImg: Landing2Foreground,
    },
    {
      name: "landing2",
      title: `Explore Our Vibrant Art Scene`,
      backgroundImg: Landing2Background,
      midground2Img: Landing2Midground2,
      midground1Img: Landing2Midground,
      foregroundImg: Landing2Foreground,
    },
  ];
  return options[number];
};

function App() {
  const [landingOptions, setLandingOptions] = useState(null);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const numLandings = 2;

  const random = Math.floor(Math.random() * numLandings);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
    script.async = true;

    document.body.appendChild(script);
  });

  useEffect(() => {
    setLandingOptions(getLandingOptions(random));
    setLoading(false);
  }, [random]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!landingOptions)
    return <div className="error">Sorry something went wrong!</div>;

  return (
    <main className="container">
      <HeroLanding landingOptions={landingOptions} paused={paused} />
      <section
        className={classnames("content", `content--${landingOptions.name}`, {
          "paused-element": paused,
        })}
      >
        <section id="about" className="feature-area">
          about
        </section>
        <section id="todo" className="feature-area">
          todo
        </section>
        <section id="outdoors" className="feature-area">
          outdoors
        </section>
        <section id="food" className="feature-area">
          food
        </section>
        <section id="events" className="feature-area">
          events
        </section>
        <section id="info" className="feature-area">
          info
        </section>
      </section>
    </main>
  );
}

export default App;
