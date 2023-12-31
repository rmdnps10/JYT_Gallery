import React from "react";
import { styled } from "styled-components";
import intro from "../images/Intro.png";
import inyoung from "../images/inyoung.jpg";
import minsoo from "../images/minsoo.jpg";
import minsoo2 from "../images/minsoo2.jpeg";
import junyeop from "../images/jjunyeop.jpeg";
import junyeop2 from "../images/raindrop.jpeg";
import haeyoung from "../images/haeyoung.jpg";
import haeyoung2 from "../images/haeyoung2.JPG";
import sunjae from "../images/sunjae.png";
import sunjae2 from "../images/sunjae2.jpg";
import jeonghu from "../images/jeonghu.JPG";
import jeonghu2 from "../images/jeonghu2.JPG";
import dongjin from "../images/dongjin.JPG";
import dongjin2 from "../images/dongjin2.JPG";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
function Who() {
  const [isHovering, setIsHovering] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
  });
  return (
    <div>
      <WhoContainer>
        <IntroContainer>
          <ContentsContainer>
            <p className="line-1">
              "너네같은 병신같은 친구들이 있어서 나는 행복하다."
            </p>
            <div className="contents_source">
              - 2017년 어느 여름날, 정해영의 한 마디
            </div>
            <p className="contents">
              JYT 유니버스는 서울시 양정고등학교에서 2017년 이래 8명의 표중근
              선생님의 제자들로 창설된 유구한 역사를 자랑하는 친목 그룹입니다.
            </p>
          </ContentsContainer>
          <ImgContainer>
            <div className="left_arrow"></div>
            <div
              className="main_image"
              style={{
                backgroundImage: `url(${intro})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="right_arrow"></div>
          </ImgContainer>
        </IntroContainer>
        <MemberLogo>
          <div className="inner">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span>멤버 소개</span>
          </div>
          <div className="guide"> >> 스크롤하여 넘겨보세요.</div>
        </MemberLogo>
        <FlexContainer>
          <ScrollContainer>
            <FlexItem>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${inyoung})`,
                  backgroundSize: "80%",
                  backgroundPosition: "50% 5%",
                }}
              ></div>
              <div className="name">
                <h1>정인영</h1>
                <h2>
                  Sogang Univ.<br></br>Art-Technology
                </h2>
              </div>
              <div className="quote">
                <FontAwesomeIcon icon={faQuoteLeft} size="xs" />
                <p>유일한 정상인</p>
                <FontAwesomeIcon icon={faQuoteRight} size="xs" />
              </div>
              <div className="job">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ marginRight: "4px" }}
                />
                Front-end Developer
              </div>
            </FlexItem>
            <FlexItem>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${sunjae})`,
                  backgroundSize: "120%",
                  backgroundPosition: "0% 12%",
                }}
                onMouseOver={() => {
                  setIsHovering({ ...isHovering, a: 1 });
                }}
                onMouseOut={() => {
                  setIsHovering({ ...isHovering, a: 0 });
                }}
              >
                <img
                  src={sunjae2}
                  alt="노선재"
                  style={{
                    width: "190%",
                    transform: "translate(-90px,-90px)",
                  }}
                />
              </div>
              {isHovering.a ? <div className="hover_blur"></div> : ""}

              <div className="name">
                <h1>노선재</h1>
                <h2>
                  Konkuk Univ.
                  <br />
                  Business
                </h2>
              </div>
              <div className="quote">
                <FontAwesomeIcon icon={faQuoteLeft} size="xs" />
                <p>너 누구냐</p>
                <FontAwesomeIcon icon={faQuoteRight} size="xs" />
              </div>

              <div className="job">
                {" "}
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ marginRight: "4px" }}
                />
                Back-end Developer
              </div>
            </FlexItem>
            <FlexItem>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${minsoo})`,
                  backgroundSize: "230px 150%",
                }}
                onMouseOver={() => {
                  setIsHovering({ ...isHovering, b: 1 });
                }}
                onMouseOut={() => {
                  setIsHovering({ ...isHovering, b: 0 });
                }}
              >
                <img
                  src={minsoo2}
                  alt="하민수"
                  style={{ width: "100%", transform: "translate(0px,-30px)" }}
                />
              </div>
              {isHovering.b ? <div className="hover_blur"></div> : ""}
              <div className="name">
                <h1>하민수</h1>
                <h2>
                  POSTECH.
                  <br />
                  Math
                </h2>
              </div>
              <div className="quote">
                <FontAwesomeIcon icon={faQuoteLeft} size="xs" />
                <p>진짜 미친 놈</p>
                <FontAwesomeIcon icon={faQuoteRight} size="xs" />
              </div>
              <div className="job">
                {" "}
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ marginRight: "4px" }}
                />
                대마초 유통업자
              </div>
            </FlexItem>
            <FlexItem>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${junyeop})`,
                  backgroundSize: "90%",
                  backgroundPosition: "59% 5%",
                }}
                onMouseOver={() => {
                  setIsHovering({ ...isHovering, c: 1 });
                }}
                onMouseOut={() => {
                  setIsHovering({ ...isHovering, c: 0 });
                }}
              >
                <img src={junyeop2} alt="이준엽" />
              </div>
              {isHovering.c ? <div className="hover_blur"></div> : ""}
              <div className="name">
                <h1>이준엽</h1>
                <h2>
                  Hongik Univ.
                  <br />
                  Mechanical engineering
                </h2>
              </div>
              <div className="quote">
                <FontAwesomeIcon icon={faQuoteLeft} size="xs" />
                <p>JYT 살 언..뚜뚜뚜</p>
                <FontAwesomeIcon icon={faQuoteRight} size="xs" />
              </div>
              <div className="job">
                {" "}
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ marginRight: "4px" }}
                />
                로켓공학자(본인주장)
              </div>
            </FlexItem>
            <FlexItem>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${jeonghu})`,
                  backgroundSize: "77%",
                  backgroundPosition: "66% 8%",
                }}
                onMouseOver={() => {
                  setIsHovering({ ...isHovering, d: 1 });
                }}
                onMouseOut={() => {
                  setIsHovering({ ...isHovering, d: 0 });
                }}
              >
                <img
                  src={jeonghu2}
                  alt="김정후"
                  style={{ width: "116%", transform: "translate(2px,-120px)" }}
                />
              </div>
              {isHovering.d ? <div className="hover_blur"></div> : ""}

              <div className="name">
                <h1>김정후</h1>
                <h2>
                  Yeonsei Univ.
                  <br />
                  Math
                </h2>
              </div>
              <div className="quote">
                <FontAwesomeIcon icon={faQuoteLeft} size="xs" />
                <p>벅벅, 정후타임</p>
                <FontAwesomeIcon icon={faQuoteRight} size="xs" />
              </div>
              <div className="job">
                {" "}
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ marginRight: "4px" }}
                />
                사업희망자
              </div>
            </FlexItem>
            <FlexItem>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${dongjin})`,
                  backgroundSize: "90%",
                  backgroundPosition: "66% 13%",
                }}
                onMouseOver={() => {
                  setIsHovering({ ...isHovering, e: 1 });
                }}
                onMouseOut={() => {
                  setIsHovering({ ...isHovering, e: 0 });
                }}
              >
                <img
                  src={dongjin2}
                  alt="신동진"
                  style={{ width: "110%", transform: "translate(0px,0px)" }}
                />
              </div>
              {isHovering.e ? <div className="hover_blur"></div> : ""}

              <div className="name">
                <h1>신동진</h1>
                <h2>
                  Seongkunkwan Univ.
                  <br />
                  Pharmarcy
                </h2>
              </div>
              <div className="quote">
                <FontAwesomeIcon icon={faQuoteLeft} size="xs" />
                <p>그 걸음걸이, 아기 윈스턴</p>
                <FontAwesomeIcon icon={faQuoteRight} size="xs" />
              </div>
              <div className="job">
                {" "}
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ marginRight: "4px" }}
                />
                마약제조자
              </div>
            </FlexItem>
            <FlexItem>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${haeyoung})`,
                  backgroundPosition: "56% 30%",
                  backgroundSize: "180%",
                }}
              >
                <img
                  src={haeyoung2}
                  alt="정해영"
                  style={{ width: "110%", transform: "translate(-10px,0px)" }}
                />
              </div>
              <div className="name">
                <h1>정해영</h1>
                <h2>
                  KonKuk Univ.
                  <br />
                  Physics
                </h2>
              </div>
              <div className="quote">
                <FontAwesomeIcon icon={faQuoteLeft} size="xs" />
                <p> 꼰대, CPA </p>
                <FontAwesomeIcon icon={faQuoteRight} size="xs" />
              </div>
              <div className="job">
                {" "}
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ marginRight: "4px" }}
                />
                골목식당 7892화 빌런
              </div>
            </FlexItem>
          </ScrollContainer>
        </FlexContainer>
      </WhoContainer>
    </div>
  );
}

const WhoContainer = styled.div`
padding-bottom: 100px;
  
  }
  p.line-1 {
    font-size: 50px;
    width: 590px;
    font-weight: 600;
    text-align: right;
    line-height: 1.5;
  }
  .contents_source {
    text-align: right;
    margin-top: 50px;
    font-weight: 200;
  }

  .contents {
    line-height: 1.5;
    margin-top: 50px;
    font-size: 20px;
    font-weight: 300;
    width: 590px;
    text-align: right;
  }
  @media screen and (max-width: 1000px) {
    .contents_source {
      text-align: right;
      margin-top: 10px;
      font-weight: 200;
    }
    .contents {
      margin-top: 20px;
    }
    @media screen and (max-width: 620px) {
      p.line-1 {
        width: 380px;
        font-size: 30px;
        text-align: left;
        box-sizing: border-box;
        padding: 0px 20px;
      }
      .contents_source {
        margin-right: 10px;
        font-size: 12px;
      }
      .contents {
        width: 350px;
        margin: 20px auto;
        text-align: left;
        font-size: 15px;
      }
    }
  }
`;

const IntroContainer = styled.div`
  padding-top: 82px;
  @media screen and (max-width: 500px) {
    padding-top: 30px;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ContentsContainer = styled.div`
  color: black;
  margin-bottom: 10px;
`;

const ImgContainer = styled.div`
  display: flex;
  .main_image {
    width: 450px;
    height: 300px;
    box-shadow: 20px 10px 20px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 620px) {
    .main_image {
      display: none;
    }
  }
`;

const Logo = styled.div``;

const MemberLogo = styled.div`
  margin: 0px auto 3px;
  font-size: 20px;
  .inner {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  .guide {
    font-size: 12px;
    margin: 5px 20px;
    color: black;
    font-weight: 300;
  }
`;

const FlexContainer = styled.div`
  overflow-x: scroll;
`;
const ScrollContainer = styled.div`
  padding: 10px 40px;
  display: flex;
  gap: 30px;
  width: 1900px;
`;
const FlexItem = styled.div`
  height: 300px;
  width: 360px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-color: black;

  color: white;
  padding-top: 30px;
  padding-bottom: 10px;
  border-radius: 30px;
  position: relative;
  img {
    opacity: 0;
    width: 200px;
  }
  .image-container {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: gray;
    margin: 0px auto 7px;
    overflow: hidden;
  }
  .hover_blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 245.71px;
    height: 340px;
    border-radius: 10px;

    opacity: 0.2;
  }
  .image-container:hover img {
    transition: 0.2s;
    opacity: 1;
    position: relative;
    z-index: 999;
  }
  .image-container:hover .hover_blur {
    display: block;
  }
  .name {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 5px;
  }
  h1 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }
  h2 {
    font-size: 9px;
    font-weight: 200;
    align-self: flex-end;
  }
  .quote {
    width: 100%;
    display: flex;
    font-size: 15px;
    justify-content: center;
    gap: 2px;
    text-align: center;
    margin-bottom: 3px;
    padding: 6px 0;
  }
  .quote p {
    color: white;
    padding: 3px;
    padding-bottom: 8px;
    border-radius: 10px;
  }
  .job {
    font-weight: 300;
    font-size: 12px;
    text-align: center;
  }
`;

export default Who;
