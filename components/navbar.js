let header = document.getElementById("header");
let base = window.location.pathname.split("/")[1];

header.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="/assets/images/logo_rectangle_2.png" height="80" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: 200px"
            >
              <li class="nav-item">
                <a class="nav-link${
                  base === "" ? " active" : ""
                }" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link${
                  base === "training" ? " active" : ""
                }" href="/training">Training</a>
              </li>
              <li class="nav-item">
                <a class="nav-link${
                  base === "racing" ? " active" : ""
                }" href="/racing">Racing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link${
                  base === "nutrition" ? " active" : ""
                }" href="/nutrition">Nutrition</a>
              </li>
              <li class="nav-item">
                <a class="nav-link${
                  base === "gear" ? " active" : ""
                }" href="/gear">Gear</a>
              </li>
              <li class="nav-item">
                <a class="nav-link${
                  base === "news" ? " active" : ""
                }" href="/news">News</a>
              </li>
            </ul>
            <!--
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            -->
          </div>
        </div>
      </nav>
`;
