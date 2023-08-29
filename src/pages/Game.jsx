import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Game = React.memo(() => {
  const fecthCount = () => {
    const serverCount = axios.get("http://13.209.103.211:8080/jyt/game/1/");
    setCount(serverCount);
  };
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const playSound = () => {
    if (!playing) {
      const audio = new Audio("images/jyt.m4a");
      audio.play();
    }
  };

  const countPlus = () => {
    playSound();
    if (count < 100) {
      setImageIndex(0);
    } else if (count < 200) {
      setImageIndex(1);
    } else if (count < 300) {
      setImageIndex(2);
    } else if (count < 400) {
      setImageIndex(3);
    } else if (count < 500) {
      setImageIndex(4);
    } else if (count < 600) {
      setImageIndex(5);
    } else if (count < 700) {
      setImageIndex(6);
    } else if (count < 800) {
      setImageIndex(7);
    }

    if (count % 100 === 98) {
      setImageIndex(8);
    }
    setCount(count + 1);
    console.log(count);
  };

  const [imageIndex, setImageIndex] = useState(0);

  const imageList = [
    "0.jpg",
    "0.jpeg",
    "1.jpg",
    "2.jpg",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG",
    "변신.JPG",
  ];

  const captionList = [
    "아가주녑",
    "중학생주녑",
    "고1 준엽",
    "사춘기가 온 이준엽",
    "JYT로 거듭난 주녑",
    "수염준엽",
    "악마준엽",
    "진화실패",
    "변신!!!",
  ];

  return (
    <div>
      <GameContainer>
        <TitleContainer>
          <FontAwesomeIcon icon={faBaby} size="2x" />
          <div className="title">
            <p>JYT 키우기</p>
            <p class="description">모두가 합심해서 JYT를 키워봐요.</p>
          </div>
        </TitleContainer>
        <ProgressBar size={count % 100}>
          <div className="progess"></div>
        </ProgressBar>
        <JYTContainer size={(count % 100) + 25}>
          <img
            src={`./images/jyt/${imageList[imageIndex]}`}
            alt="이준엽"
            onClick={countPlus}
          />
        </JYTContainer>

        <CurrentProgress>
          <span style={{ fontWeight: "800", margin: "0px 8px " }}>
            LV. <span style={{ fontWeight: "600" }}>{imageIndex}</span>
          </span>
          {captionList[imageIndex]}
        </CurrentProgress>
        <GuideMessage>아가준엽을 클릭해 성장시키세요!</GuideMessage>

        <How>
          <FontAwesomeIcon
            icon={faStar}
            style={{ marginRight: "5px", color: "orange" }}
          />
          여러분이 클릭한 횟수가 합쳐져 서버에서 저장됩니다.
        </How>
      </GameContainer>
    </div>
  );
});

const GuideMessage = styled.div`
  margin-top: 15px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;
const ProgressBar = styled.div`
  width: 80%;
  height: 25px;
  margin: 30px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  border-radius: 30px;
  background-color: #efefef;
  .progess {
    border-radius: 30px;
    background: rgb(252, 176, 69);
    background: linear-gradient(
      90deg,
      rgba(252, 176, 69, 1) 0%,
      rgba(252, 90, 56, 1) 51%,
      rgba(204, 0, 0, 1) 100%
    );
    height: 25px;
    width: ${(props) => props.size}%;
  }
`;

const How = styled.div`
  width: 80%;
  margin: 30px auto 0px;
  font-size: 12px;
  color: orange;
`;

const JYTContainer = styled.div`
  img {
    width: ${(props) => props.size * 0.6}%;
    border-radius: 30%;
    animation: jyt;
  }

  @keyframes jyt {
    0% {
      transform: scale(1.2);
    }

    100% {
    }
  }

  height: 35vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const CurrentProgress = styled.div`
  margin-top: 20px;
  font-size: 23px;
  text-align: center;
  span {
    @font-face {
      font-family: "BookkMyungjo-Bd";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Bd.woff2")
        format("woff2");
      font-weight: 700;
      font-style: normal;
    }

    font-family: "BookkMyungjo-Bd";
  }
`;

const GameContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 120px);
  background-color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  padding: 20px;
  padding-left: 30px;
  align-items: center;
  gap: 8px;
  p {
    font-size: 28px;
    font-weight: 500;
  }
  p.description {
    font-size: 12px;
    margin-top: 7px;
  }
`;

export default Game;
