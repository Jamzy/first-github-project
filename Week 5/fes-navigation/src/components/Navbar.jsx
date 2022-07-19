import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="nav__bar">
          <li><svg width="130" height="90" viewBox="0 0 99 76" fill="none" xmlns="http://www.w3.org/2000/svg" class="close-burger_svg__burger logo__burger"><path stroke="#7645d9" stroke-width="12" stroke-linecap="round" d="M0 70h82M0 38.288h66M98 38.09L121.09 15M121.09 62.09L98 39M0 6.288h82" class="close-burger_svg__burger"></path></svg></li>
          <li>
            {" "}
            <figure>
              <img
                src="https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png"
                alt=""
                className="logo__img"
              />
            </figure>
          </li>
          <li><button class="nav__icon el-popover__reference" aria-describedby="el-popover-7673" tabindex="0"><span>J</span></button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
