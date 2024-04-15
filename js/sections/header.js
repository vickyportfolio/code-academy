function menuOperation(el, headerParent) {
  if (el.classList.contains('menu-burger')) {
    listRendering(headerParent);

    el.classList.toggle('hide');
    el.previousElementSibling.classList.toggle('hide');
    el.previousElementSibling.previousElementSibling.classList.toggle('hide');
    el.nextElementSibling.classList.toggle('hide');
    document.querySelector('body').classList.toggle('hidden');
  } else {
    headerParent.querySelector('.header-mobile__append').remove();
    el.classList.toggle('hide');
    el.previousElementSibling.previousElementSibling.classList.toggle('hide');
    el.previousElementSibling.classList.toggle('hide');
    document.querySelector('body').classList.toggle('hidden');
  }
}

function listRendering(headerParent) {
  const listTemplate = `<div class="header-mobile__append">
        <div class="mobile-menu__section">
          <div class="mobile-menu__container">
            <header aria-label="menu-header" class="mobile-menu__header">
              <form>
                <input
                  type="search"
                  name="query"
                  placeholder="Seach for courses, articles, and docs"
                  aria-label="search"
                />
                <button type="submit" aria-label="search"></button>
              </form>
            </header>
            <ul class="mobile-menu__lists">
              <li class='catalog-list list-click'>
                <button class="mobile-menu__button">
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="24"
                    height="24"
                    class="mobile-icon"
                  >
                    <title>Book Flip Page Icon</title>
                    <mask id="BookFlipPageIcon-mask-1418926" fill="#FFFFFF">
                      <path
                        d="M18 4.144a31.156 31.156 0 014.732-.394.517.517 0 01.366.144.5.5 0 01.152.356v15.768a.505.505 0 01-.5.5C14.457 20.621 12 23.25 12 23.25V6.482S9.545 3.856 1.268 3.75a.517.517 0 00-.368.144.5.5 0 00-.15.356v15.768a.505.505 0 00.5.5C9.543 20.621 12 23.25 12 23.25"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></path>
                      <path
                        d="M12 22.757a6.035 6.035 0 011.636-3.448A8.228 8.228 0 0118 16.846V1.243a.481.481 0 00-.228-.4.6.6 0 00-.494-.066 7.8 7.8 0 00-3.642 2.277A6.035 6.035 0 0012 6.5"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></path>
                    </mask>
                    <g
                      mask="url(#BookFlipPageIcon-mask-1418926)"
                      fill="#FFFFFF"
                    >
                      <rect width="100%" height="100%" fill="#10162F"></rect>
                    </g>
                  </svg>
                  <span> Catalog </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="12"
                    height="12"
                  >
                    <title>Arrow Chevron Right Icon</title>
                    <mask id="ArrowChevronRightIcon-mask-1069419">
                      <path
                        d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></path>
                    </mask>
                    <g mask="url(#ArrowChevronRightIcon-mask-1069419)">
                      <rect
                        width="100%"
                        height="100%"
                        fill="currentColor"
                      ></rect>
                    </g>
                  </svg>
                </button>
              </li>
              <li class='resource-list list-click'>
                <button class="mobile-menu__button">
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="24"
                    height="24"
                  >
                    <title>Notebook Icon</title>
                    <mask id="NotebookIcon-mask-1418928" fill="#FFFFFF">
                      <path
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                        d="M.75 4.5h3m-3 7.5h3m-3 6h3"
                      ></path>
                      <rect
                        x="2.25"
                        y="0.75"
                        width="17.25"
                        height="22.5"
                        rx="1.5"
                        ry="1.5"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></rect>
                      <rect
                        x="7.501"
                        y="5.25"
                        width="8.249"
                        height="5.25"
                        rx="1.5"
                        ry="1.5"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></rect>
                      <path
                        d="M19.5 2.25v13.5h2.25a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zm0 4.5h3.75m-3.75 4.5h3.75"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></path>
                    </mask>
                    <g mask="url(#NotebookIcon-mask-1418928)" fill="#FFFFFF">
                      <rect width="100%" height="100%" fill="#10162F"></rect>
                    </g>
                  </svg>
                  <span> Resources </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="12"
                    height="12"
                  >
                    <title>Arrow Chevron Right Icon</title>
                    <mask id="ArrowChevronRightIcon-mask-1069419">
                      <path
                        d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></path>
                    </mask>
                    <g mask="url(#ArrowChevronRightIcon-mask-1069419)">
                      <rect
                        width="100%"
                        height="100%"
                        fill="currentColor"
                      ></rect>
                    </g>
                  </svg>
                </button>
              </li>
              <li class="community-list list-click">
                <button class="mobile-menu__button">
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="24"
                    height="24"
                  >
                    <title>Community Icon</title>
                    <mask id="CommunityIcon-mask-1418930" fill="#FFFFFF">
                      <path
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                        d="M23.25 9.75L12 1.5.75 9.75"
                      ></path>
                      <circle
                        cx="3.375"
                        cy="16.392"
                        r="2.625"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></circle>
                      <circle
                        cx="20.625"
                        cy="16.392"
                        r="2.625"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></circle>
                      <circle
                        cx="12"
                        cy="16.392"
                        r="2.625"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></circle>
                      <path
                        d="M.75 20.613A4.5 4.5 0 017.514 22.5h.347a4.5 4.5 0 018.278 0h.347a4.5 4.5 0 016.764-1.887"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></path>
                    </mask>
                    <g mask="url(#CommunityIcon-mask-1418930)" fill="#FFFFFF">
                      <rect width="100%" height="100%" fill="#10162F"></rect>
                    </g>
                  </svg>
                  <span> Community </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="12"
                    height="12"
                  >
                    <title>Arrow Chevron Right Icon</title>
                    <mask id="ArrowChevronRightIcon-mask-1069419">
                      <path
                        d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></path>
                    </mask>
                    <g mask="url(#ArrowChevronRightIcon-mask-1069419)">
                      <rect
                        width="100%"
                        height="100%"
                        fill="currentColor"
                      ></rect>
                    </g>
                  </svg>
                </button>
              </li>
              <li class='pricing-list list-click'>
                <button class="mobile-menu__button">
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="24"
                    height="24"
                  >
                    <title>Accounting Coins Icon</title>
                    <mask id="AccountingCoinsIcon-mask-1418932" fill="#FFFFFF">
                      <circle
                        cx="15.75"
                        cy="8.25"
                        r="7.5"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></circle>
                      <path
                        d="M6.375 14.092a1.341 1.341 0 00.843 1.245l2.064.826a1.342 1.342 0 01-.5 2.587H6.75m1.5 1.5v-1.5M5.281 8.867a7.5 7.5 0 109.853 9.852M17.25 5.25h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H14.25m1.5-6v-1.5m0 9v-1.5"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></path>
                    </mask>
                    <g
                      mask="url(#AccountingCoinsIcon-mask-1418932)"
                      fill="#FFFFFF"
                    >
                      <rect width="100%" height="100%" fill="#10162F"></rect>
                    </g>
                  </svg>
                  <span> Pricing </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="12"
                    height="12"
                  >
                    <title>Arrow Chevron Right Icon</title>
                    <mask id="ArrowChevronRightIcon-mask-1069419">
                      <path
                        d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></path>
                    </mask>
                    <g mask="url(#ArrowChevronRightIcon-mask-1069419)">
                      <rect
                        width="100%"
                        height="100%"
                        fill="currentColor"
                      ></rect>
                    </g>
                  </svg>
                </button>
              </li>
              <li>
                <button class="mobile-menu__button">
                  <svg
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="24"
                    height="24"
                  >
                    <title>Briefcase Icon</title>
                    <mask id="BriefcaseIcon-mask-1418934" fill="#FFFFFF">
                      <rect
                        x="0.75"
                        y="6"
                        width="22.5"
                        height="16.5"
                        rx="1.5"
                        ry="1.5"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                      ></rect>
                      <path
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5px"
                        d="M5.25 11.25h13.5m-13.5 6h13.5M15.342 2.525A1.5 1.5 0 0013.919 1.5h-3.838a1.5 1.5 0 00-1.423 1.025L7.5 6h9zM3.75 6V4.5M20.25 6V4.5"
                      ></path>
                    </mask>
                    <g mask="url(#BriefcaseIcon-mask-1418934)" fill="#FFFFFF">
                      <rect width="100%" height="100%" fill="#10162F"></rect>
                    </g>
                  </svg>
                  <span> Career Center <small class="new">New</small> </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="12"
                    height="12"
                  >
                    <title>Arrow Chevron Right Icon</title>
                    <mask id="ArrowChevronRightIcon-mask-1069419">
                      <path
                        d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></path>
                    </mask>
                    <g mask="url(#ArrowChevronRightIcon-mask-1069419)">
                      <rect
                        width="100%"
                        height="100%"
                        fill="currentColor"
                      ></rect>
                    </g>
                  </svg>
                </button>
              </li>
              <li>
                <button class="mobile-menu__button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2500 2500"
                    fill="#fff"
                    role="img"
                    width="24"
                    height="24"
                  >
                    <title>Office Building Double Icon</title>
                    <mask id="OfficeBuildingDoubleIcon-mask-25322">
                      <path
                        d="M236 73.651c-25.864 1.793-47.453 7.509-69.5 18.403-17.54 8.667-29.936 17.502-43.445 30.964-13.382 13.335-22.252 25.777-31.001 43.482-9.04 18.296-13.884 34.07-17.195 56-2.062 13.657-2.029 2136.389.034 2144.428a80.788 80.788 0 0058.179 58.179c8.159 2.094 2225.697 2.094 2233.856 0a80.788 80.788 0 0058.179-58.179c2.051-7.992 2.094-1202.751.044-1216.428-3.22-21.49-8.868-39.993-17.391-56.979-26.096-52.002-74.845-84.794-135.971-91.462-6.556-.715-86.061-1.059-244.75-1.059H1792V619.744c0-410.594.212-393.064-5.009-415.046-12.023-50.623-42.695-89.903-87.991-112.687-15.544-7.818-31.075-12.741-53-16.799-7.674-1.42-76.357-1.588-707-1.723-384.175-.082-700.525-.009-703 .162m1 158.101c-2.002 1-4.248 3.246-5.248 5.248-1.662 3.325-1.749 54.168-1.75 1018.25L230 2270h449l.031-131.25c.025-105.395.304-133.515 1.415-142.75 8.935-74.268 49.118-139.612 111.583-181.45 12.792-8.568 38.345-21.531 53.23-27.002 56.1-20.622 123.505-19.905 179.288 1.907 92.95 36.344 155.001 121.304 161.443 221.045.536 8.297.978 69.627.989 137.25L1187 2270h449.006l-.253-1014.75c-.244-980.444-.315-1014.874-2.08-1018.422-1.279-2.57-3.011-4.146-5.77-5.25-3.578-1.432-67.982-1.578-695.673-1.576-656.553.001-691.908.09-695.23 1.75m218.66 135.285c-31.315 5.324-58.497 31.796-63.625 61.963-.789 4.639-1.023 66.037-.82 214.5l.285 208 2.653 7.778c7.051 20.677 24.733 39.811 44.399 48.046 14.288 5.984 6.986 5.763 180.448 5.456l158.5-.28 7-2.335c25.769-8.594 46.004-29.586 53.177-55.165 1.737-6.195 1.823-16.316 1.823-215.5v-209l-2.351-7.5c-8.398-26.796-27.596-45.953-54.328-54.217l-7.321-2.263-157.5-.153c-86.625-.084-159.678.217-162.34.67m635.171-.024c-30.619 5.236-55.823 28.521-63.6 58.757-1.614 6.275-1.731 20.687-1.731 213.23 0 195.137.099 206.921 1.795 214.146 3.315 14.12 12.154 29.134 23.06 39.168 6.107 5.619 17.967 13.289 24.092 15.58 14.305 5.353 8.223 5.187 179.053 4.878l158-.286 7.493-2.314c20.016-6.181 37.823-21.327 47.449-40.36 8.752-17.304 8.058 2.577 8.058-230.812 0-192.543-.117-206.955-1.731-213.23-6.924-26.92-27.83-48.607-54.93-56.982l-7.339-2.268-157.5-.153c-86.625-.084-159.601.206-162.169.646M547 640v117h136V523H547v117m635 0v117h136V523h-136v117m-732.777 460.935c-21.387 5.254-41.298 21.768-51.161 42.432-7.594 15.912-7.062-1.308-7.062 228.515 0 228.029-.437 212.81 6.547 227.926 9.586 20.747 28.917 37.165 51.166 43.457l7.787 2.202 151.5.316c99.861.208 154.797-.038 161.172-.721 18.32-1.963 32.693-8.391 45.453-20.328 11.217-10.492 18.494-22.215 22.612-36.425l2.263-7.809v-417l-2.263-7.809c-8.017-27.662-31.026-49.509-58.211-55.273-5.406-1.146-33.643-1.374-164.526-1.327-148.254.053-158.449.167-165.277 1.844m635.777-.384c-9.045 1.937-23.189 9.189-31.501 16.151-12.498 10.468-21.013 23.665-25.687 39.811l-2.312 7.987v416l2.808 9c8.555 27.42 29.322 47.029 57.478 54.273 6.222 1.6 18.264 1.727 164.214 1.727s157.992-.127 164.214-1.727c9.368-2.41 17.696-5.943 24.222-10.274 16.365-10.863 27.524-25.626 33.256-43.999l2.808-9v-416l-2.312-7.987c-6.477-22.375-21.101-39.956-41.687-50.115-15.896-7.845-4.144-7.371-181.001-7.301-131.042.051-159.109.3-164.5 1.454m707 612.935V2270h478v-550.48c0-499.039-.147-550.848-1.578-554.423-1.104-2.759-2.68-4.491-5.25-5.77-3.52-1.751-13.35-1.838-237.422-2.091l-233.75-.265v556.515M547 1372v117h136v-234H547v117m635 0v117h136v-234h-136v117m-269.174 558.904c-36.998 8.084-64.559 34.178-74.563 70.596l-2.748 10-.286 129.25-.287 129.25H1030v-126.593c0-122.061-.071-126.939-1.972-136.25-7.745-37.927-33.04-64.566-71.528-75.325-10.556-2.951-32.301-3.413-43.674-.928"
                        fill="#fff"
                        fill-rule="evenodd"
                      ></path>
                    </mask>
                    <g mask="url(#OfficeBuildingDoubleIcon-mask-25322)">
                      <rect
                        width="100%"
                        height="100%"
                        fill="currentColor"
                      ></rect>
                    </g>
                  </svg>
                  <span> For Teams </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    role="img"
                    width="12"
                    height="12"
                  >
                    <title>Arrow Chevron Right Icon</title>
                    <mask id="ArrowChevronRightIcon-mask-1069419">
                      <path
                        d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></path>
                    </mask>
                    <g mask="url(#ArrowChevronRightIcon-mask-1069419)">
                      <rect
                        width="100%"
                        height="100%"
                        fill="currentColor"
                      ></rect>
                    </g>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <footer class="mobile-menu__footer">
            <button class="sign-up">sign up</button>
            <button class="log-in">log in</button>
          </footer>
        </div>
      </div>
      `;
  headerParent.innerHTML = listTemplate.trim();
  headerParent.querySelectorAll('.list-click').forEach((li) => {
    li.addEventListener('click', (el) => {
      menuRendering(headerParent, el);
    });
  });
}

function catalogTemplate() {
  const catalogTemp = `
  <div class="mobile-menu__details">
  <article class="mobile-dropdown__container">
          <div class="mobile-dropdown__top">
            <button class="menuBtn hoverBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                role="img"
                width="12"
                height="12"
              >
                <title>Arrow Chevron Right Icon</title>
                <mask id="ArrowChevronRightIcon-mask-1069419">
                  <path
                    d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  ></path>
                </mask>
                <g mask="url(#ArrowChevronRightIcon-mask-1069419)">
                  <rect width="100%" height="100%" fill="currentColor"></rect>
                </g>
              </svg>
              <span>Menu</span>
            </button>
            <h1>Catalog</h1>
          </div>

          <section>
            <div class="mobile-dropdown__purple">
              <div>
                <h2>Popular course topics</h2>
                <small
                  >Explore free or paid courses in topics that interest
                  you.</small
                >
              </div>
              <button class="yellow-btn">Explore all courses</button>
            </div>

            <div class="mobile-dropdown__white">
              <ul>
                <li>Python</li>
                <li>javascript</li>
                <li>Html & css</li>
                <li>sql</li>
                <li>java</li>
                <li>c++</li>
                <li>C#</li>
                <li>Bash</li>
                <li>C</li>
                <li>PHP</li>
                <li>R</li>
                <li>swift</li>
              </ul>

              <ul>
                <li>AI<small class="new">New</small></li>
                <li>Web Development</li>
                <li>Date Science</li>
                <li>Computer Science</li>
                <li>Web design</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
          </section>

          <section>
            <div class="mobile-dropdown__purple">
              <h2>Top career paths</h2>
              <small
                >Choose your career. We'll teach you the skills to get
                job-ready.</small
              >
            </div>
            <div class="mobile-dropdown__white">
              <ul>
                <li>Full-stack engineer</li>
                <li>back-end engineer</li>
                <li>front-end engineer</li>
                <li>Ios developer</li>
                <li>computer science</li>
                <li>Data scientist</li>
              </ul>
            </div>
          </section>

          <div class="mobile-dropdown__quiz">
            <div>
              <svg
                height="26"
                width="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#66C4FF"
                  stroke="#10162F"
                  d="M25 1h-8v8h8zM25 9h-8v8h8zM25 17h-8v8h8zM17 9H9v8h8zM17 17H9v8h8zM9 17H1v8h8z"
                ></path>
              </svg>
              <p>Not sure where to begin?</p>
            </div>
            <a href="#javascript:void(0)"
              >Take our quiz
              <span>&nbsp;-></span>
            </a>
          </div>
  </article>
  </div>`;
  return catalogTemp;
}

function resourceTemplate() {
  const resourceTemp = `
   <div class ="mobile-menu__details">
    <article class="mobile-dropdown__container">
      <div class="mobile-dropdown__top">
        <button class="menuBtn hoverBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            role="img"
            width="12"
            height="12"
          >
            <title>Arrow Chevron Left Icon</title>
            <mask id="ArrowChevronLeftIcon-mask-3076705">
              <path
                d="M16.25 23.25L5.53 12.53a.749.749 0 010-1.06L16.25.75"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </mask>
            <g mask="url(#ArrowChevronLeftIcon-mask-3076705)">
              <rect width="100%" height="100%" fill="currentColor"></rect>
            </g>
          </svg>
          <span>Menu</span>
        </button>
        <h1>Resources</h1>
      </div>

      <section>
        <div class="mobile-dropdown__purple">
          <div>
            <h2>Docs</h2>
            <small
              >Find definitions, code syntax, and more -- or contribute your own
              code documentation.</small
            >
            <div class="mobile-dropdown__purple-links">
              <a href="#javascript:void(0)" class="yellow-link"
                >View all docs
                <span>&nbsp -></span>
              </a>
              <a href="#javascript:void(0)" class="yellow-link"
                >Contribute to docs
                <span>&nbsp -></span>
              </a>
            </div>
          </div>
        </div>
        <div class="mobile-dropdown__white">
          <ul>
            <li>c</li>
            <li>c++</li>
            <li>css</li>
            <li>git</li>
            <li>html</li>
            <li>java</li>
            <li>javascript</li>
            <li>PHP</li>
            <li>python</li>
            <li>react</li>
            <li>sql</li>
            <li>UI/UX</li>
          </ul>
        </div>
      </section>

      <section>
        <div class="mobile-dropdown__purple-title">
          <h2>Learning & practise tools</h2>
        </div>
        <div class="mobile-dropdown__white">
          <ul>
            <li>
              <h3>Articles</h3>
              <p>Learn about technical concepts.</p>
            </li>
            <li>
              <h3>Projects</h3>
              <p>Practise and build your portfolio</p>
            </li>
            <li>
              <h3>Cheatsheets</h3>
              <p>Review concepts from your courses.</p>
            </li>
            <li>
              <h3>Videos</h3>
              <p>Watch tutorials, project walkthroughs, and more.</p>
            </li>
            <li>
              <h3>Code challenges</h3>
              <p>Test your knowledge and prep for interviews</p>
            </li>
            <li>
              <h3>Work spaces</h3>
              <p>Build and share your projects in browsers</p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div class="mobile-dropdown__purple">
          <h2>Inspiration & career</h2>
          <a href="#javascript:void(0)" class="yellow-link"
            >View all blog topics <span>&nbsp -></span>
          </a>
        </div>

        <div class="mobile-dropdown__white">
          <ul>
            <li>
              <h3>Career advice</h3>
              <p>Get answers to questions about coding careers.</p>
            </li>
            <li>
              <h3>Learning tips</h3>
              <p>Learn where to start and how to stay motivated.</p>
            </li>
            <li>
              <h3>Job-readiness checker <small class="new">New</small></h3>
              <p>Analyze your compatibility with tech roles using AI.</p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
  `;
  return resourceTemp;
}

function communityTemplate() {
  const communityTemp = `
 <div class="mobile-menu__details">
 <div class="mobile-dropdown__container" style="gap:0">
        <div class="mobile-dropdown__top">
          <button class="menuBtn hoverBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              role="img"
              width="12"
              height="12"
            >
              <title>Arrow Chevron Right Icon</title>
              <mask id="ArrowChevronRightIcon-mask-1069419">
                <path
                  d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </mask>
              <g mask="url(#ArrowChevronRightIcon-mask-1069419)">
                <rect width="100%" height="100%" fill="currentColor"></rect>
              </g>
            </svg>
            <span>Menu</span>
          </button>
          <h1>Community</h1>
        </div>

        <div class="mobile-dropdown__links">
          <ul>
            <li>forums</li>
            <li>discord</li>
            <li>chapters</li>
            <li>events</li>
            <li>code crew</li>
            <li>Learner Stories</li>    
          </ul>
      </div>
    </div>
 
 </div>
`;
  return communityTemp;
}

function pricingTemplate() {
  const pricingTemp = `
 <div class="mobile-menu__details">
 <div class="mobile-dropdown__container" style="gap:0">
        <div class="mobile-dropdown__top">
          <button class="menuBtn hoverBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              role="img"
              width="12"
              height="12"
            >
              <title>Arrow Chevron Right Icon</title>
              <mask id="ArrowChevronRightIcon-mask-1069419">
                <path
                  d="M5.5.75l10.72 10.72a.749.749 0 010 1.06L5.5 23.25"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </mask>
              <g mask="url(#ArrowChevronRightIcon-mask-1069419)">
                <rect width="100%" height="100%" fill="currentColor"></rect>
              </g>
            </svg>
            <span>Menu</span>
          </button>
          <h1>Pricing</h1>
        </div>

        <div class="mobile-dropdown__links">
          <ul>
            <li>for individuals</li>
            <li>for students</li>
            <li>for teams</li>
          </ul>
      </div>
    </div>
 
 </div>
`;
  return pricingTemp;
}

function menuRendering(headerParent, el) {
  let template = '';
  if (el.currentTarget.classList.contains('catalog-list')) {
    template = catalogTemplate(headerParent);
  } else if (el.currentTarget.classList.contains('resource-list')) {
    template = resourceTemplate();
  } else if (el.currentTarget.classList.contains('community-list')) {
    template = communityTemplate();
  } else if (el.currentTarget.classList.contains('pricing-list')) {
    template = pricingTemplate();
  } else {
    return;
  }
  headerParent.querySelector('.mobile-menu__section').remove();
  headerParent.querySelector('.header-mobile__append').innerHTML =
    template.trim();
  headerParent.querySelector('.menuBtn').addEventListener('click', () => {
    headerParent.querySelector('.mobile-menu__details').remove();
    listRendering(headerParent);
  });
}
export { menuOperation };
