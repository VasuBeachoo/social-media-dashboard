import "./css/style.css";
import facebookIcon from "./assets/icon-facebook.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import youtubeIcon from "./assets/icon-youtube.svg";

import SmallBlock from "./components/SmallBlock";
import LargeBlock from "./components/LargeBlock";

const App = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <section className="header">
          <div className="header__container">
            <h3 className="header__heading">Social Media Dashboard</h3>
            <p className="header__paragraph">Total followers: 23,004</p>
          </div>
          <div className="header__toggle-container">
            <p className="header__toggle-label">Light Mode</p>
            <div className="header__toggle"></div>
            <p className="header__toggle-label">Dark Mode</p>
          </div>
        </section>
        <section className="large-blocks">
          <div className="large-blocks__container">
            <LargeBlock
              iconSrc={facebookIcon}
              iconAlt="icon-facebook"
              username="@nathanf"
              value="1987"
              label="FOLLOWERS"
              net="12"
            />
            <LargeBlock
              iconSrc={twitterIcon}
              iconAlt="icon-twitter"
              username="@nathanf"
              value="1044"
              label="FOLLOWERS"
              net="99"
            />
            <LargeBlock
              iconSrc={instagramIcon}
              iconAlt="icon-instagram"
              username="@nathanf"
              value="11k"
              label="FOLLOWERS"
              net="1099"
            />
            <LargeBlock
              iconSrc={youtubeIcon}
              iconAlt="icon-youtube"
              username="Nathan F."
              value="8239"
              label="SUBSCRIBERS"
              net="144"
            />
          </div>
        </section>
        <section className="small-blocks">
          <h3 className="small-blocks__heading">Overview - Today</h3>
          <div className="small-blocks__container">
            <SmallBlock
              title="Page Views"
              value="87"
              iconSrc={facebookIcon}
              iconAlt="icon-facebook"
              net="3%"
            />
            <SmallBlock
              title="Likes"
              value="52"
              iconSrc={facebookIcon}
              iconAlt="icon-facebook"
              net="2%"
            />
            <SmallBlock
              title="Likes"
              value="5462"
              iconSrc={instagramIcon}
              iconAlt="icon-instagram"
              net="2257%"
            />
            <SmallBlock
              title="Profile Views"
              value="52k"
              iconSrc={instagramIcon}
              iconAlt="icon-instagram"
              net="1375%"
            />
          </div>
          <div className="small-blocks__container">
            <SmallBlock
              title="Retweets"
              value="117"
              iconSrc={twitterIcon}
              iconAlt="icon-twitter"
              net="303%"
            />
            <SmallBlock
              title="Likes"
              value="507"
              iconSrc={twitterIcon}
              iconAlt="icon-twitter"
              net="553%"
            />
            <SmallBlock
              title="Likes"
              value="107"
              iconSrc={youtubeIcon}
              iconAlt="icon-youtube"
              net="19%"
            />
            <SmallBlock
              title="Total Views"
              value="1407"
              iconSrc={youtubeIcon}
              iconAlt="icon-youtube"
              net="12%"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
