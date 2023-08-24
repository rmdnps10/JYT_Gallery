import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPeopleGroup,
  faLandmark,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  const location = useLocation();
  return (
    <FooterConainer>
      <div className="flex-wrap">
        <div
          className="button"
          style={{ color: `${location.pathname === "/" ? "orange" : ""}` }}
        >
          <Link to="/">
            <FontAwesomeIcon
              icon={faHouse}
              size="xl"
              style={{ color: `${location.pathname === "/" ? "orange" : ""}` }}
            />
          </Link>
          <p>홈 화면</p>
        </div>
        <div
          className="button"
          style={{ color: `${location.pathname === "/About" ? "orange" : ""}` }}
        >
          <Link to="/Who">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              size="xl"
              style={{
                color: `${location.pathname === "/Who" ? "orange" : ""}`,
              }}
            />
          </Link>
          <p>멤버 소개</p>
        </div>
        <div
          className="button"
          style={{
            color: `${location.pathname === "/History" ? "orange" : ""}`,
          }}
        >
          <Link to="/History">
            <FontAwesomeIcon
              icon={faLandmark}
              size="xl"
              style={{
                color: `${location.pathname === "/History" ? "orange" : ""}`,
              }}
            />
          </Link>
          <p>연혁</p>
        </div>
        <div className="button">
          <Link to="/Game">
            <FontAwesomeIcon icon={faGamepad} size="xl" />
          </Link>
          <p>케찹만들기</p>
        </div>
      </div>
    </FooterConainer>
  );
}

const FooterConainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: white;
  padding: 10px 0;
  width: 100vw;
  .flex-wrap {
    border-radius: 10px;
    border: 4px solid;
    padding: 6px;
    width: 80vw;
    justify-content: center;
    gap: 4vw;
    display: flex;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .flex-wrap p {
    margin-top: 3px;
    font-size: 10px;
    font-weight: 600;
  }
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
  }
`;

export default Footer;
