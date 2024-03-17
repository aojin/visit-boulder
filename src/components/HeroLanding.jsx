import classnames from "classnames";
import BoulderCityIcon from "../assets/BoulderCityLogo.png";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import MenuDropdown from "./MenuDropdown";

const propTypes = {
  landingOptions: PropTypes.object.isRequired,
  paused: PropTypes.bool.isRequired,
};

const defaultProps = {};

function HeroLanding({ landingOptions, paused }) {
  // flackr polyfill requires inline styles

  const fullImageInlineStyle = {
    //  -webkitAnimation: move-up-650 auto linear;
    animation: `move-up-650 auto linear`,
    animationTimeline: `scroll(root block)`,
    animationRange: `0 90vh`,
  };

  const backgroundLayerInlineStyle = {
    animation: `move-up-400 auto linear`,
    animationTimeline: `scroll(root block)`,
    animationRange: `15vh 100vh`,
  };

  const secondaryMidgroundLayer = {
    [`&--landing1`]: {
      animation: `move-up-500 auto linear`,
      animationTimeline: `scroll(root block)`,
      animationRange: ` 15vh 100vh`,
    },

    [`&--landing2`]: {
      animation: `move-up-500 auto linear`,
      animationTimeline: `scroll(root block)`,
      animationRange: `5vh 98vh`,
    },
  };

  const midgroundLayer = {
    [`&--landing1`]: {
      animation: `move-up-600 auto linear`,
      animationTimeline: `scroll(root block)`,
      animationRange: `10vh 90vh`,
    },

    [`&--landing2`]: {
      animation: `move-up-650 auto linear`,
      animationTimeline: `scroll(root block)`,
      animationRange: `0vh 96vh`,
    },
  };

  const foregroundLayer = {
    zIndex: 5,
    [`&--landing1`]: {
      animation: `move-up-650 auto linear`,
      animationTimeline: `scroll(root block)`,
      animationRange: `0vh 90vh`,
    },

    [`&--landing2`]: {
      animation: `move-up-600 auto linear`,
      animationTimeline: `scroll(root block)`,
      animationRange: `2vh 90vh`,
    },
  };

  return (
    <section className="hero-landing">
      <header className="hero-header-bar">
        <img
          className="logo"
          src={BoulderCityIcon}
          height="125"
          alt="boulder city logo"
        />
        <MenuDropdown />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </header>
      <div
        className={classnames(
          "landing-heading-container",
          `landing-heading-container--${landingOptions.name}`,
          {
            "paused-element": paused,
          }
        )}
      >
        <h1 className="landing-header">
          {landingOptions && landingOptions.title
            ? landingOptions.title
            : `Explore the Heart of the Front Range`}
        </h1>
      </div>
      <div>
        {landingOptions && landingOptions.fullImg && (
          <img
            className={classnames(
              "full-image",
              `full-image--${landingOptions.name}`,
              "hero-image",
              {
                "paused-element": paused,
              }
            )}
            style={fullImageInlineStyle}
            src={landingOptions.fullImg}
            alt="Original bg image full size"
          />
        )}
        {landingOptions && landingOptions.backgroundImg && (
          <img
            className={classnames(
              "background-layer",
              `background-layer--${landingOptions.name}`,
              "hero-image",
              {
                "paused-element": paused,
              }
            )}
            src={landingOptions.backgroundImg}
            alt="background layer"
            style={backgroundLayerInlineStyle}
          />
        )}
        {landingOptions && landingOptions.midground2Img && (
          <img
            className={classnames(
              "secondary-midground-layer",
              `secondary-midground-layer--${landingOptions.name}`,
              "hero-image",
              {
                "paused-element": paused,
              }
            )}
            src={landingOptions.midground2Img}
            alt="secondary background layer"
            style={secondaryMidgroundLayer}
          />
        )}
        {landingOptions && landingOptions.midground1Img && (
          <img
            className={classnames(
              "midground-layer",
              `midground-layer--${landingOptions.name}`,
              "hero-image",
              {
                "paused-element": paused,
              }
            )}
            src={landingOptions.midground1Img}
            alt="midground layer"
            style={midgroundLayer}
          />
        )}
        {landingOptions && landingOptions.foregroundImg && (
          <img
            className={classnames(
              "foreground-layer",
              `foreground-layer--${landingOptions.name}`,
              "hero-image",
              {
                "paused-element": paused,
              }
            )}
            src={landingOptions.foregroundImg}
            alt="foreground layer"
            style={foregroundLayer}
          />
        )}
      </div>
    </section>
  );
}

HeroLanding.propTypes = exact(propTypes);
HeroLanding.defaultProps = defaultProps;

export default HeroLanding;

{
  /* <nav className="hero-header-nav">
          <ol className="hero-header-nav-list">
            <li>
              <a href="#">About Boulder</a>
            </li>
            <li>
              <a href="#">Things To Do</a>
            </li>
            <li>
              <a href="#">Outdoors</a>
            </li>
            <li>
              <a href="#">Food & Drink</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Travel Info</a>
            </li>
          </ol>
        </nav> */
}
