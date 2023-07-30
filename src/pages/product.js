import { Link } from "react-router-dom";
const Product = function () {
  return (
    <>
      <div className="container">
        <Link to="/">
          <img src="./images/logo.jpeg" alt="My Logo" />
        </Link>
        <form>
          <i class="fa fa-search"></i>
          <input
            type="text"
            className="serachBar"
            placeholder="what you are looking for ?"
            autoComplete="off"
            name="search"
          />
          <button className="hero-btn" type="submit">
            Serach
          </button>
        </form>

        <div className="sociaMedia">
          <a href="https://www.youtube.com/">
            <i class="fa fa-facebook-f" style={{ color: "#3b5998" }}></i>
          </a>
          <a href="https://www.youtube.com/">
            <i class="fa fa-instagram" style={{ color: "#d62976" }}></i>
          </a>
          <a href="https://www.youtube.com/">
            <i class="fa fa-youtube-play" style={{ color: "red" }}></i>
          </a>
        </div>
      </div>

      <section className="mainArea">
        <div className="leftSidebar">
              LeftSideBar
        </div>
        <div className="rightSidebar">
             RightSibe Bar
        </div>

      </section>
    </>
  );
};

export default Product;
