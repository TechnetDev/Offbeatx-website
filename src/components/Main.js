import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import Image from "next/image";
import pic01 from "@/app/images/bg.jpg";
import pic02 from "@/app/images/pic02.jpg";
import logo from "@/app/images/OFFBEAT_LOGO-04.png";
import kaamhailogo from "@/app/images/black-logo.png";
import AntonySebastian from "@/app/images/Antony Sebastian.jpeg";
import BibinMoncy from "@/app/images/Bibin Moncy.jpeg";
import DeepaMalpani from "@/app/images/Deepa Malpani.jpeg";
import NavneetKrishnan from "@/app/images/Navneet Krishnan.jpeg";
import Link from "next/link";

const Main = (props) => {
  const { article, articleTimeout, onCloseArticle, timeout } = props;
  const cardRefs = useRef({});
  useEffect(() => {
    const handleClickOutside = (event) => {
      for (const key in cardRefs.current) {
        if (cardRefs.current[key] && !cardRefs.current[key].contains(event.target)) {
          if (article === key) {
            onCloseArticle();
          }
        }
      }
    };

    if (article) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [article, onCloseArticle]);

  

  const close = <div className="close" onClick={onCloseArticle}></div>;

  return (
    <div id="main" style={timeout ? { display: "flex" } : { display: "none" }}>
    {/* Intro */}
      <article
        id="intro"
        ref={(el) => (cardRefs.current["intro"] = el)}
        className={`${article === "intro" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={article === "intro" ? { display: "block" } : { display: "none" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="major">Intro</h2>
          <Image src={logo} alt="" width={130}></Image>
        </div>
        <span className="image main">
          <Image src={pic01} alt=""></Image>
        </span>
        <p>
          Empowering entrepreneurs by leveraging our understanding of the
          unorganized sector to thrive in the digital age through simplified
          solutions, innovative technology, and processes.
        </p>
        <p>
          Our vision is to create a future where every small and micro-scale
          business can thrive with the tools and support, they need to succeed.
        </p>
        {close}
      </article>

      {/* Project */}
      <article
        id="projects"
        ref={(el) => (cardRefs.current["projects"] = el)}
        className={`${article === "projects" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={
          article === "projects" ? { display: "block" } : { display: "none" }
        }
      >
        <div className="flex items-center justify-between">
          <h2 className="major">Project</h2>
          <Image src={logo} alt="" width={130}></Image>
        </div>
        <span className="image main rounded-xl">
          <Image src={pic02} alt=""></Image>
        </span>
        <div className="flex sm:flex-row flex-col sm:justify-between pb-5 gap-3 sm:gap-0">
          <div className="kaamhai ml-3 sm:ml-0 flex flex-row items-center gap-2">
            <h2 className=''>Kaamhai</h2>
            <a
              href="https://www.linkedin.com/company/kaamhai/"
              target="_blank"
              rel="nofollow noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"/><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"/><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677 c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638 c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001 c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"/><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"/></svg>
            </a>
          </div>
          <div className="kaamhailogo bg-white w-44 my-1 flex justify-center items-center rounded-full">
            <a href="https://www.kaamhai.in/"
              target="_blank"
              rel="nofollow noopener">
                <Image src={kaamhailogo} alt="" width={200}></Image>
              </a>
          </div>
        </div>
        <p>
          Kaamhai is an innovative online platform designed to bridge the gap
          between work partners and employers in the Micro/Small-Business
          sector. With a user-friendly website and mobile app, Kaamhai is on a
          mission to provide a simplified platform for managing the workforce of
          micro and small-scale business owners, fostering a transparent and
          efficient job market that upholds fair employment practices.
        </p>
        {close}
      </article>

      {/* Team */}
      <article
        id="team"
        ref={(el) => (cardRefs.current["team"] = el)}
        className={`${article === "team" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={article === "team" ? { display: "block" } : { display: "none" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="major">Team</h2>
          <Image src={logo} alt="" width={130}></Image>
        </div>
        {/* <span className="image main">
          <Image src={pic03} alt=""></Image>
        </span> */}
        <div className="teamx flex flex-row flex-wrap items-center justify-center lg:flex-nowrap gap-5">
          <div className="flex flex-col items-center justify-center space-y-3">
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 lg:h-32 lg:w-32 rounded-full overflow-hidden">
              <Image src={AntonySebastian} alt=""/>
            </div>
            <span className="text-black text-xs font-medium bg-white -mt-4 rounded-full px-3">Founder | CEO</span>
          </div>
            <p>Antony Sebastian</p>
            <div>
              <a href="https://www.linkedin.com/in/antonysj/" target="_blank"
              rel="nofollow noopener">
                <svg
                  width={35}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#0A66C2"
                      d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 lg:h-32 lg:w-32 rounded-full overflow-hidden bg-white">
              <Image src={DeepaMalpani} alt=""/>
            </div>
            <span className="text-black text-xs font-medium bg-white -mt-4 rounded-full px-2">Co-Founder | COO</span>
          </div>
            <p>Deepa Malpani</p>
            <div>
              <a href="https://www.linkedin.com/in/deepamalpani/" target="_blank"
              rel="nofollow noopener">
                <svg
                  width={35}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#0A66C2"
                      d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 lg:h-32 lg:w-32 rounded-full overflow-hidden bg-white">
              <Image src={BibinMoncy} alt="" />
            </div>
            <span className="text-black text-xs font-medium bg-white -mt-4 rounded-full px-2">Co-Founder | CPO</span>
          </div>
            <p>Bibin Moncy</p>
            <div>
              <a href="https://www.linkedin.com/in/bibinmoncy/" target="_blank"
              rel="nofollow noopener">
                <svg
                  width={35}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#0A66C2"
                      d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
          <div className="flex flex-col items-center">
            <div className="h-28 w-28 lg:h-32 lg:w-32 rounded-full overflow-hidden bg-white">
            <Image src={NavneetKrishnan} alt="" />
            </div>
            <span className="text-black text-xs font-medium bg-white -mt-4 rounded-full px-3">CFO</span>
          </div>
            <p>Navneet Krishnan</p>
            <div>
              <a href="https://www.linkedin.com/in/navaneeth-krishnan-s-ba00111a1/" target="_blank"
              rel="nofollow noopener">
                <svg
                  width={35}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#0A66C2"
                      d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className=' text-center'>The team you see here is just the beginning;<br/> our true strength lies in every member&apos;s dedication to our vision.</p>
        {close}
      </article>

      {/* Contact */}
      <article
        id="contact"
        ref={(el) => (cardRefs.current["contact"] = el)}
        className={`${article === "contact" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={
          article === "contact" ? { display: "block" } : { display: "none" }
        }
      >
        <div className="flex items-center justify-between">
          <h2 className="major">Contact</h2>
          <Image src={logo} alt="" width={130}></Image>
        </div>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="h-11"
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" required></textarea>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Send Message"
                className="special bg-white"
              />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <div className="flex flex-col sm:flex-row justify-between">
          <p>
            Offbeat Technet Private Limited
            <br />
            WeWork Prestige, Atlanta, 1A Block
            <br /> Koramangala, Bangalore
            <br />
            <a href="mailto:connect@offbeatx.com">connect@offbeatx.com</a>
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/company/offbeattechnet/"
                target="_blank"
                rel="nofollow noopener"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  data-prefix="fab"
                  data-icon="facebook"
                  class="svg-inline--fa fa-facebook fa-w-14 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  data-prefix="fab"
                  data-icon="instagram"
                  class="svg-inline--fa fa-instagram fa-w-14 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
            </li>
            {/* <li>
            <a href="#" className="flex items-center justify-center">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                data-prefix="fab"
                data-icon="github"
                class="svg-inline--fa fa-github fa-w-16 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </li> */}
          </ul>
        </div>
        {close}
      </article>
    </div>
  );
};

Main.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func.isRequired,
  timeout: PropTypes.bool,
};

export default Main;
