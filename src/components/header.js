import { Link } from "react-router-dom";
const Header = function ({pageName}) {

  // console.log(pageName)

  let className = ""
  switch(pageName) {
    case 'contact':
      className = "headercontact"
      break
    case 'faq':
      className = "headerfaq"
      break
    default:
      className="headerhome"
      
  }

  return (
    <>
      {/* <section className={contactPage ? "headerNew" : "header"}> */}
      <section className={`header ${className}`}>
        <nav>
          <Link to="/">
            <img src="./images/logo.jpeg" alt="My Logo" />
          </Link>

          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <button className="hero-btn">
                <Link to="/product">EXPLORE MORE</Link>
              </button>
              
            </ul>
            
          </div>
       
        </nav>
       

      
      </section>
    </>
  );
};

export default Header;
