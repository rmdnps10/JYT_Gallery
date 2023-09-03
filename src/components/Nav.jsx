import { styled } from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { KaKaoLoginKey } from "../App";
import { 리다이렉트주소, 인가코드요청주소 } from "../utils/Oauth";

const Nav = () => {
  const codeRequestUrl = `${인가코드요청주소}?client_id=${KaKaoLoginKey}&redirect_uri=${리다이렉트주소}&response_type=code`;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const Gohome = () => {
    navigate("/");
  };

  return (
    <NavContainer>
      <NavWrapper>
        <div className="inner">
          <div className="logo-container" onClick={Gohome}>
            JYT Universe
          </div>
          <ul className="menu-list">
            <li></li>
            <li>
              <a
                href={codeRequestUrl}
                style={{ width: "60px", height: "35px" }}
              >
                <img
                  src="./images/kakao_login_large.png"
                  style={{ width: "100%" }}
                />
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="xl"
                onClick={() => {
                  navigate("/Write");
                }}
              />
            </li>

            <li>
              <a href="https://github.com">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </li>
          </ul>
        </div>
      </NavWrapper>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: relative;
`;

const NavWrapper = styled.div`
  height: 50px;
  border: 1px solid #e2e2e2;
  background-color: white;
  display: flex;
  align-items: center;
  .inner {
    margin: 0 auto;
    width: 90vw;
    display: flex;
  }
  .logo-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    font-size: 23px;
    font-family: "Rubik", sans-serif;
    &:hover {
      cursor: pointer;
    }
  }

  ul.menu-list {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  ul.menu-list li {
    padding: 10px 3px;
    border-radius: 10px;
    color: black;
  }
  ul.menu-list li a {
    display: flex;
    align-items: center;
    width: 33px;
    border-radius: 15px;

    &:hover {
      color: black;
    }
  }
  ul.menu-list li a img {
    width: 32px;
  }
`;

export default Nav;
