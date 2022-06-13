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
        <div className="small-blocks__container"></div>
        <div className="small-blocks__container"></div>
      </section>
    </div>
  );
};

export default App;
