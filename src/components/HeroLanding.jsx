import classnames from "classnames";
import BoulderCityIcon from "../assets/BoulderCityLogo.png";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import "react-toggle/style.css";
import Toggle from "react-toggle";

const propTypes = {
  landingOptions: PropTypes.object.isRequired,
  paused: PropTypes.bool.isRequired,
};

const defaultProps = {};

function HeroLanding({ landingOptions, paused }) {
  return (
    <section className="hero-landing">
      <header className="hero-header-bar">
        <img
          className="logo"
          src={BoulderCityIcon}
          height="125"
          alt="boulder city logo"
        />
        <nav className="hero-header-nav">
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
        </nav>
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
          />
        )}
      </div>
    </section>
  );
}

HeroLanding.propTypes = exact(propTypes);
HeroLanding.defaultProps = defaultProps;

export default HeroLanding;
