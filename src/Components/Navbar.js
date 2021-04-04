import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          Julia Gronau | Full Stack Web & App Developer
        </a>

        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/#projectanchor">
                Projekte
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contactanchor">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
