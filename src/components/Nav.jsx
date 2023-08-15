import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <NavContainer>
      <NavWrapper>
        <div className="inner">
          <div className="logo-container">JYT Universe</div>
          <ul className="menu-list">
            <li>
              <FontAwesomeIcon
                icon={isMenuVisible ? faXmark : faBars}
                onClick={toggleMenu}
              />
            </li>
            <li>
              <Link to="/">정모 일지</Link>
            </li>
            <li>
              <Link to="/Who">About JYT Universe</Link>
            </li>
            <li>
              <Link to="/History">연혁</Link>
            </li>
            <li>
              <Link to="/Album">앨범</Link>
            </li>
            <li>
              <Link to="/Game">JYT 케첩만들기</Link>
            </li>
          </ul>
        </div>
      </NavWrapper>
      <VirtualWrapper>
        <div className={`${isMenuVisible ? "show" : "hide"}`}>
          <ul className="menu-list">
            <li>
              <Link to="/">정모 일지</Link>
            </li>
            <li>
              <Link to="/Who">About JYT Universe</Link>
            </li>
            <li>
              <Link to="/History">연혁</Link>
            </li>
            <li>
              <Link to="/Album">앨범</Link>
            </li>
            <li>
              <Link to="/Game">JYT 케첩만들기</Link>
            </li>
          </ul>
        </div>
      </VirtualWrapper>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: relative;
`;

const VirtualWrapper = styled.div`
  .show {
    position: absolute;
    top: 52px;
    right: 0;
    padding: 10px 0px 10px;
    border-radius: 20px 0px 0px 20px;
    background-color: white;
    box-shadow: -4px 5px 400px;
  }

  .hide {
    display: none;
  }

  li {
    width: 70vw;
    padding: 10px 20px 10px;
  }
  li:first-child {
    padding-top: 20px;
  }
  li:last-child {
    padding-bottom: 0px;
  }

  li a {
    font-size: 20px;
    display: block;
    padding-bottom: 10px;
    padding-left: 10px;
    border-bottom: 1px solid #e2e2e2;

    &:hover {
      color: black;
    }
  }
`;

const NavWrapper = styled.div`
  height: 50px;
  border: 1px solid #e2e2e2;
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
  }

  ul.menu-list {
    display: flex;
    align-items: center;
    gap: 2vw;
  }
  ul.menu-list li {
    padding: 10px 12px;
    border-radius: 10px;
    color: white;

    &:hover {
      background-color: orange;
    }
  }

  ul.menu-list li:first-child {
    display: none;
    background-color: orange;
  }

  @media screen and (max-width: 600px) {
    ul.menu-list li {
      display: none;
    }
    ul.menu-list li:first-child {
      display: block;
    }
  }
`;

export default Nav;
