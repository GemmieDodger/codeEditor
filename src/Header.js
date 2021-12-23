import React from "react";

function Header() {
  return (
    <div className="Header">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li>
              <a class="btn" id="run-btn">
                Run
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                Dropdown Example <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="javascript:autoFormatSelection()">Format</a>
                </li>
                <li>
                  <a href="javascript:commentSelection(true)">Comment</a>
                </li>
                <li>
                  <a href="javascript:commentSelection(false)">Uncomment</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
