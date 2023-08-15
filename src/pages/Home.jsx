import React, { useEffect, useState } from "react";
import Postlists from "../components/Postlists";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Write";

//https://jsonplaceholder.typicode.com/comments

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateToWrite = () => {
    navigate("/Write");
  };

  return (
    <HomeContainer>
      <div className="inner">
        <h1>📖 정모 일지</h1>
        <div className="bar">
          <li>날짜</li>
          <li>장소</li>
          <li>멤버</li>
          <li>내용</li>
        </div>
        <Postlists postList={[]} />
        <Button onClick={navigateToWrite}>글쓰기</Button>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  .inner {
    max-width: 1200px;
    margin: 0 100px;
  }

  .bar {
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: orange;
    border-radius: 10px;
    border: 1px solid white;
  }
  h1 {
    font-size: 28px;
    padding: 50px 0px 15px 20px;
    font-weight: 600;
  }
  li {
    padding: 12px 0px;
    text-align: center;
  }
  li:first-child {
    margin: 0px 35px;
    width: 50px;
  }
  li:nth-child(2) {
    margin: 0px 30px;
    width: 80px;
  }
  li:nth-child(3) {
    margin: 0px 40px;
  }
  li:last-child {
    width: 200px;
    flex-grow: 1;
    line-height: 1.2;
  }
  button {
    margin-top: 40px;
  }
  @media screen and (max-width: 500px) {
    div.inner {
      margin: 0 10px;
    }
    div.bar {
      justify-content: space-around;
    }
    li {
      font-size: 15px;
      height: 15px;
      text-align: left;
    }
    li:first-child {
      width: 60px;
    }
    li:nth-child(2) {
      margin: 0px;
    }
    li:nth-child(3) {
      width: 90px;
    }
    li:last-child {
      display: none;
    }
  }
`;

export default Home;
