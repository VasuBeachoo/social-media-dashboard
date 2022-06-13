import facebookIcon from "./assets/icon-facebook.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import youtubeIcon from "./assets/icon-youtube.svg";

import SmallBlock from "./components/SmallBlock";

const App = () => {
  return (
    <div className="dashboard-container">
      <section className="header">
        <div className="header__container">
          <h3 className="header__heading">Social Media Dashboard</h3>
          <p className="header__paragraph">Total followers: 23,004</p>
          <div className="header__toggle-container">
            <p className="header__toggle-label">Light Mode</p>
            <div className="header__toggle"></div>
            <p className="header__toggle-l">Dark Mode</p>
          </div>
        </div>
      </section>
      <section className="large-blocks">
        <div className="large-blocks__container"></div>
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
  );
};

export default App;
