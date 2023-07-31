import jyt_logo from "../images/JYT_logo.png";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <Wrap>
        <div className="inner">
          <li>
            <Link to="/">
              <img src={jyt_logo} alt="로고" />
            </Link>
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
        </div>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  background-color: #ffffff;
  border-bottom: 1px solid #eee8e8;
  div.inner {
    margin: 0px 80px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  li {
    display: flex;
    align-items: center;
    color: #cdcdcd;
    min-width: 30px;
  }
  li:hover {
    a {
      color: #e58b37;
    }
  }

  li img {
    padding-right: 80px;
    height: 48px;
  }

  a {
    font-weight: 500;
  }
  @media screen and (max-width: 1000px) {
    a {
      text-align: center;
    }
  }

  @media screen and (max-width: 500px) {
    div.inner {
      margin: 0px 0px;
      background-color: white;
    }
    li {
      display: none;
    }
    li:first-child {
      display: block;
      margin-left: 30px;
    }
  }
`;

export default Nav;
