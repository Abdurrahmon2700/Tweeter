import React from "react";
import { Link } from "react-router-dom";
import userimg from "../../../assets/img/userimg.png";
import born from "../../../assets/img/born.svg";
import link from "../../../assets/img/link.svg";
import location from "../../../assets/img/location.svg";
import calendar from "../../../assets/img/calendar.svg";

function profile(props) {
  return (
    <>
      <div className="container-fluid ms-2">
        <div className="">
          <div className="p-2">
            <p className="my-0 username">Bobur</p>
            <p>1,070 Tweets</p>
          </div>
          <div className="user_fone">
            <img className="userimg" src={userimg} alt="" />
            <Link to="/editprofil" className="editprofil" aria-current="page">
              Edit profile
            </Link>
          </div>
          <div className="wrapper_user_info ps-4 pe-4">
            <div className="">
              <p className="user_name">Bobur</p>
              <p className="user_account mb-0">@bobur_mavlonov</p>
              <span className="user_job">
                UX&UI designer at
                <a
                  className="text-decoration-none"
                  target="_blank"
                  href="http://https://abutech.uz/#"
                >
                  @abutechuz
                </a>
              </span>
            </div>
            <ul className="d-flex justify-content-between list-unstyled mt-2 mb-0">
              <li>
                <img className="me-2" src={location} alt="location" />
                <span>Mashag’daman</span>
              </li>
              <li>
                <img className="me-2" src={link} alt="" />
                <a
                  className="text-decoration-none"
                  href="http://www.t.me/boburjon_mavlonov"
                >
                  t.me/boburjon_mavlonov
                </a>
              </li>
              <li>
                <img className="user_born_img m-2" src={born} alt="" />
                <span>Born November 24, 2000</span>
              </li>
              <li>
                <img className="me-2" src={calendar} alt="" />
                <span>Joined May 2020</span>
              </li>
            </ul>
            <div className="d-flex w-25">
              <p className="me-5">
                <b className="me-1">67</b>Following
              </p>
              <p>
                <b className="me-1">47</b>Followers
              </p>
            </div>
            <ul className="d-flex justify-content-between list-unstyled ms-4 me-4 mb-0">
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  to="/Tweet"
                  aria-current="page"
                >
                  Tweets
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  to="/Tweetsreplies"
                  aria-current="page"
                >
                  Tweets replies
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  to="/Media"
                  aria-current="page"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  to="/Like"
                  aria-current="page"
                >
                  Likes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default profile;
