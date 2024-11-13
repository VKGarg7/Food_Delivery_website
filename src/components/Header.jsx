import {useState } from "react";
import {Link} from "react-router-dom";
import {LOGO} from "../utisl/constansts"

const Header = () => {
  const [darkmodetoggle, setdarkmodetoggle] = useState(false);

  return (
    <div className="header-container dark:tw-bg-[#832a2afa]">
      <div className="logo">
        <img
          src={
            darkmodetoggle
              ? "https://i.postimg.cc/tR86fW24/yummy-high-resolution-logo-white-transparent.png"
              : LOGO
          }
          alt="logo"
        />
      </div>
      <div className="">
        <ul className="nav-items">
          <li>
            <Link
              to="/"
              className="nav-link dark:tw-text-zinc-200"
              aria-label="nav-link"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link dark:tw-text-zinc-200"
              aria-label="nav-link"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link dark:tw-text-zinc-200"
              aria-label="nav-link"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="nav-link dark:tw-text-zinc-200"
              aria-label="nav-link"
            >
              <i className="ri-shopping-cart-fill tw-text-xl"></i>
            </Link>
          </li>

          <li>
            <Darkmode
              darkmode={darkmodetoggle}
              setdarkmodetoggle={setdarkmodetoggle}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
