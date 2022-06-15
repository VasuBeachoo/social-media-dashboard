import { useState } from "react";
import "./css/style.css";
import facebookIcon from "./assets/icon-facebook.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import youtubeIcon from "./assets/icon-youtube.svg";
import upIcon from "./assets/icon-up.svg";
import downIcon from "./assets/icon-down.svg";
import SmallBlock from "./components/SmallBlock";
import LargeBlock from "./components/LargeBlock";

const App = () => {
  const [mode, setMode] = useState("dark");

  const switchTheme = () =>
    mode === "light" ? setMode("dark") : setMode("light");

  return (
    <div className={`dashboard-container dashboard-container--${mode}`}>
      <div className={`background-top background-top--${mode}`}></div>
      <div className="dashboard">
        <section className="header">
          <div className="header__container">
            <h3 className={`header__heading header__heading--${mode}`}>
              Social Media Dashboard
            </h3>
            <p className={`header__paragraph header__paragraph--${mode}`}>
              Total followers: 23,004
            </p>
          </div>
          <hr className={`header__divider header__divider--${mode}`} />
          <div className="header__toggle-container">
            <p className={`header__toggle-label header__toggle-label--${mode}`}>
              Light Mode
            </p>
            <div className="header__toggle" onClick={switchTheme}>
              <div
                className={`header__toggle-circle header__toggle-circle--${mode}`}
              ></div>
            </div>
            <p className={`header__toggle-label header__toggle-label--${mode}`}>
              Dark Mode
            </p>
          </div>
        </section>
        <section className="large-blocks">
          <div className="large-blocks__container">
            <LargeBlock
              id="large-block-facebook"
              iconSrc={facebookIcon}
              iconAlt="icon-facebook"
              username="@nathanf"
              value="1987"
              label="FOLLOWERS"
              netIconSrc={upIcon}
              netIconAlt="icon-up"
              net="12"
              netSign="positive"
              mode={mode}
            />
            <LargeBlock
              id="large-block-twitter"
              iconSrc={twitterIcon}
              iconAlt="icon-twitter"
              username="@nathanf"
              value="1044"
              label="FOLLOWERS"
              netIconSrc={upIcon}
              netIconAlt="icon-up"
              net="99"
              netSign="positive"
              mode={mode}
            />
            <LargeBlock
              id="large-block-instagram"
              iconSrc={instagramIcon}
              iconAlt="icon-instagram"
              username="@realnathanf"
              value="11k"
              label="FOLLOWERS"
              netIconSrc={upIcon}
              netIconAlt="icon-up"
              net="1099"
              netSign="positive"
              mode={mode}
            />
            <LargeBlock
              id="large-block-youtube"
              iconSrc={youtubeIcon}
              iconAlt="icon-youtube"
              username="Nathan F."
              value="8239"
              label="SUBSCRIBERS"
              netIconSrc={downIcon}
              netIconAlt="icon-down"
              net="144"
              netSign="negative"
              mode={mode}
            />
          </div>
        </section>
        <section className="small-blocks">
          <h3
            className={`small-blocks__heading small-blocks__heading--${mode}`}
          >
            Overview - Today
          </h3>
          <div className="small-blocks__container">
            <SmallBlock
              title="Page Views"
              value="87"
              iconSrc={facebookIcon}
              iconAlt="icon-facebook"
              netIconSrc={upIcon}
              netIconAlt="icon-up"
              net="3%"
              netSign="positive"
              mode={mode}
            />
            <SmallBlock
              title="Likes"
              value="52"
              iconSrc={facebookIcon}
              iconAlt="icon-facebook"
              netIconSrc={downIcon}
              netIconAlt="icon-down"
              net="2%"
              netSign="negative"
              mode={mode}
            />
            <SmallBlock
              title="Likes"
              value="5462"
              iconSrc={instagramIcon}
              iconAlt="icon-instagram"
              netIconSrc={upIcon}
              netIconAlt="icon-up"
              net="2257%"
              netSign="positive"
              mode={mode}
            />
            <SmallBlock
              title="Profile Views"
              value="52k"
              iconSrc={instagramIcon}
              iconAlt="icon-instagram"
              netIconSrc={upIcon}
              netIconAlt="icon-up"
              net="1375%"
              netSign="positive"
              mode={mode}
            />
          </div>
          <div className="small-blocks__container">
            <SmallBlock
              title="Retweets"
              value="117"
              iconSrc={twitterIcon}
              iconAlt="icon-twitter"
              netIconSrc={upIcon}
              netIconAlt="icon-up"
              net="303%"
              netSign="positive"
              mode={mode}
            />
            <SmallBlock
              title="Likes"
              value="507"
              iconSrc={twitterIcon}
              iconAlt="icon-twitter"
              netIconSrc={upIcon}
              netIconAlt="icon-up"
              net="553%"
              netSign="positive"
              mode={mode}
            />
            <SmallBlock
              title="Likes"
              value="107"
              iconSrc={youtubeIcon}
              iconAlt="icon-youtube"
              netIconSrc={downIcon}
              netIconAlt="icon-down"
              net="19%"
              netSign="negative"
              mode={mode}
            />
            <SmallBlock
              title="Total Views"
              value="1407"
              iconSrc={youtubeIcon}
              iconAlt="icon-youtube"
              netIconSrc={downIcon}
              netIconAlt="icon-down"
              net="12%"
              netSign="negative"
              mode={mode}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
