import React from "react";
import Profile from "../../Profile";
import pinned from "../../../../../assets/img/pinned.svg";
import user_img from "../../../../../assets/img/userimg.png";
import discuss from "../../../../../assets/img/discuss.svg";
import comment from "../../../../../assets/img/comment.svg";
import hearth from "../../../../../assets/img/heath.svg";
import upload from "../../../../../assets/img/upload.svg";
import monitoring from "../../../../../assets/img/monitoring.svg";
import bigimg from "../../../../../assets/img/bigimg.png";

import { Link } from "react-router-dom";

function Tweets(props) {
  return (
    <>
      <Profile />
      <div className="container-fluid ms-2">
        <div className="wrapper_user_post">
          <div className="d-flex align-items-center">
            <img className="ms-4 me-4" src={pinned} alt="" />
            <span>Pinned Tweet</span>
          </div>
          <div>
            <div className="d-flex align-items-center position-relative w-100">
              <img className="user_profil_img" src={user_img} alt="" />
              <div className="ms-3">
                <p className="mb-0">
                  <b>Bobur</b> @bobur_mavlonov · Apr 1
                </p>
                <p className="me-5 fs-18">
                  4-kursni tugatgunimcha kamida bitta biznesim bo'lishini,
                  uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni,
                  sog'lik va jismoniy holatni normallashtirishni reja qildim
                </p>
              </div>
              <a className="more_info" href="#">
                ...
              </a>
            </div>
            <ul className="d-flex justify-content-around list-unstyled">
              <li>
                <div>
                  <Link to="/Tweet" aria-current="page">
                    <img src={discuss} alt="" />
                  </Link>
                  <span className="ms-2">5</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Link to="/Tweet" aria-current="page">
                    <img src={comment} alt="" />
                  </Link>
                  <span className="ms-2">87</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Link to="/Tweet" aria-current="page">
                    <img src={hearth} alt="" />
                  </Link>
                  <span className="ms-2">85</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Link to="/Tweet" aria-current="page">
                    <img src={upload} alt="" />
                  </Link>
                  <span className="ms-2">7</span>
                </div>
              </li>
              <li>
                <Link to="/Tweet" aria-current="page">
                  <img src={monitoring} alt="" />
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center position-relative w-100">
              <img className="user_profil_img" src={user_img} alt="" />
              <div className="ms-3">
                <p className="mb-0">
                  <b>Bobur</b> @bobur_mavlonov · Apr 1
                </p>
                <p className="me-5  fs-18">
                  Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
                  deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener
                  nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi
                  slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar
                  haqida emas.
                </p>
              </div>
              <a className="more_info" href="#">
                ...
              </a>
            </div>
            <ul className="d-flex justify-content-around list-unstyled">
              <li>
                <div>
                  <Link to="/Tweet" aria-current="page">
                    <img src={discuss} alt="" />
                  </Link>
                  <span className="ms-2">25</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Link to="/Tweet" aria-current="page">
                    <img src={comment} alt="" />
                  </Link>
                  <span className="ms-2">17</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Link to="/Tweet" aria-current="page">
                    <img src={hearth} alt="" />
                  </Link>
                  <span className="ms-2">8</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Link to="/Tweet" aria-current="page">
                    <img src={upload} alt="" />
                  </Link>
                  <span className="ms-2">5</span>
                </div>
              </li>
              <li>
                <Link to="/Tweet" aria-current="page">
                  <img src={monitoring} alt="" />
                </Link>
              </li>
            </ul>
            <div>
              <div className="d-flex align-items-center position-relative w-100">
                <img className="user_profil_img" src={user_img} alt="" />
                <div className="ms-3">
                  <p className="mb-0">
                    <b>Bobur</b> @bobur_mavlonov · Apr 1
                  </p>
                  <p className="me-5  fs-18">A bo'pti maskamasman</p>
                </div>
                <a className="more_info" href="#">
                  ...
                </a>
              </div>
              <img className="user_big_img" src={bigimg} alt="" />
            </div>

            <ul className="d-flex justify-content-around list-unstyled">
              <li>
                <div>
                  <Link to="/Tweet" aria-current="page">
                    <img src={discuss} alt="" />
                  </Link>
                  <span className="ms-2">25</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Link to="/Tweet" aria-current="page">
                    <img src={comment} alt="" />
                  </Link>
                  <span className="ms-2">17</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Link to="/Tweet" aria-current="page">
                    <img src={hearth} alt="" />
                  </Link>
                  <span className="ms-2">8</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <Link to="/Tweet" aria-current="page">
                    <img src={upload} alt="" />
                  </Link>
                  <span className="ms-2">5</span>
                </div>
              </li>
              <li>
                <Link to="/Tweet" aria-current="page">
                  <img src={monitoring} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tweets;
