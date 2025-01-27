import PropTypes from "prop-types";

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={80}
        height={80}
        viewBox="0 0 1292.000000 1165.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1165.000000) scale(0.100000,-0.100000)"
          fill="#ed1f24"
          stroke="none"
        >
          <path d="M4265 10944 c-85 -18 -221 -81 -295 -137 -216 -161 -401 -423 -445 -630 -26 -120 -17 -276 22 -389 49 -142 103 -215 321 -440 363 -375 1234 -1280 1552 -1612 173 -182 344 -352 380 -378 90 -68 228 -133 346 -165 90 -25 115 -27 289 -27 l190 -1 53 29 c79 44 238 175 417 345 216 205 725 732 725 751 0 13 -18 16 -117 17 -223 1 -374 46 -502 146 -42 33 -290 274 -552 536 -462 463 -690 697 -1374 1410 -181 190 -357 365 -390 389 -73 55 -219 126 -300 147 -88 24 -236 28 -320 9z" />
          <path d="M8181 10889 c-100 -19 -221 -71 -308 -131 -24 -16 -303 -270 -620 -564 -433 -401 -583 -546 -596 -576 -29 -63 -17 -105 56 -185 211 -234 427 -459 479 -498 328 -247 776 -257 1115 -27 86 58 621 558 678 633 61 81 119 201 146 304 31 113 30 316 0 429 -83 310 -318 541 -619 610 -77 17 -255 20 -331 5z" />
          <path d="M1861 8565 c-186 -42 -316 -112 -439 -235 -158 -158 -235 -345 -235 -570 1 -173 38 -302 128 -440 42 -66 1087 -1200 1134 -1232 28 -19 95 -24 133 -9 23 9 283 245 456 415 209 205 306 425 305 696 0 206 -52 376 -165 543 -59 86 -558 619 -636 678 -81 61 -180 110 -282 139 -99 28 -307 36 -399 15z" />
          <path d="M10470 8565 c-136 -28 -247 -78 -355 -160 -71 -54 -556 -570 -622 -661 -52 -74 -110 -193 -140 -291 -24 -79 -26 -104 -27 -253 -1 -142 2 -177 22 -250 29 -108 96 -246 162 -333 49 -64 517 -508 563 -534 28 -16 99 -16 131 -2 27 13 1071 1133 1124 1208 50 69 99 171 124 258 32 112 32 314 0 427 -103 360 -440 608 -822 605 -52 -1 -124 -7 -160 -14z" />
          <path d="M3777 7093 c-9 -264 -47 -363 -209 -543 -196 -218 -1053 -1062 -1906 -1876 -315 -300 -375 -367 -441 -494 -58 -111 -82 -199 -88 -320 -7 -127 15 -230 74 -347 99 -197 356 -434 566 -522 246 -102 526 -69 733 86 28 21 354 331 725 689 371 357 823 791 1004 964 182 173 363 347 402 388 209 214 307 485 289 807 -5 98 -11 129 -31 170 -57 118 -332 423 -720 799 -288 278 -372 356 -383 356 -5 0 -12 -71 -15 -157z" />
          <path d="M8637 7036 c-466 -448 -763 -766 -849 -907 -46 -75 -52 -120 -45 -327 6 -187 24 -269 97 -417 69 -143 120 -204 361 -435 506 -484 736 -706 1273 -1225 312 -303 598 -576 635 -607 77 -67 185 -127 291 -160 96 -30 279 -32 380 -5 152 41 304 134 452 275 188 180 277 338 297 524 21 192 -42 396 -174 569 -25 31 -203 209 -397 395 -948 908 -1756 1707 -1906 1882 -34 40 -73 94 -86 120 -53 105 -88 281 -86 430 2 101 2 102 -10 102 -6 0 -111 -96 -233 -214z" />
          <path d="M6223 4335 c-152 -27 -314 -98 -431 -189 -32 -24 -155 -145 -273 -268 -118 -122 -326 -340 -464 -483 -137 -143 -493 -511 -790 -818 -297 -307 -564 -588 -593 -625 -180 -227 -213 -525 -87 -790 53 -111 130 -217 240 -328 140 -141 244 -208 395 -255 95 -30 260 -32 360 -5 90 24 232 95 310 154 36 27 211 202 389 388 875 913 1758 1807 1909 1932 77 64 137 95 233 122 91 25 276 44 347 36 50 -6 53 -5 50 14 -4 26 -461 503 -693 723 -297 281 -430 383 -523 398 -73 12 -299 9 -379 -6z" />
          <path d="M7599 2754 c-149 -26 -289 -89 -416 -185 -29 -22 -158 -152 -285 -289 -253 -272 -271 -298 -249 -369 6 -20 17 -43 24 -51 29 -37 1135 -1057 1190 -1099 71 -53 174 -102 267 -128 49 -13 102 -18 210 -18 124 0 156 3 220 23 282 88 494 311 571 598 30 113 31 316 0 429 -27 100 -85 222 -144 301 -46 63 -559 547 -657 621 -198 149 -478 213 -731 167z" />
        </g>
      </svg>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Offbeat Technet</h1>
        <p>
        Striving to Set the Benchmark in the Unorganized Sector !<br/>
Empowering Micro Entrepreneurs with AI-Driven Hiring and Workforce Solutions !
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("projects");
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("team");
            }}
          >
            Team
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
