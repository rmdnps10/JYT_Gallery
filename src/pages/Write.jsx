import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function Write() {
  const url = "http://13.209.103.211:8080/jyt/post/";
  const [state, setState] = useState({
    date: "",
    place: "",
    member: "",
    content: "",
  });
  const { date, place, member, content } = state;
  const navigate = useNavigate();
  const 노선재받아라 = async () => {
    console.log(date);
    try {
      if (state.date.length < 1) {
        alert("날짜를 입력하세요.");
        return;
      }
      if (state.place.length < 1) {
        alert("장소를 입력하세요.");
        return;
      }
      if (state.content.length < 3) {
        alert("내용은 최소 이준엽_2020수능_물리등급 글자이상 입력하세요.");
        return;
      }
      await axios.post(url, {
        create_date: date,
        subject: place,
        member: member,
        content: content,
      });

      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    console.log("안녕");
  }, []);

  return (
    <>
      <Container>
        <FlexContainer>
          <div className="flex-container">
            <FontAwesomeIcon icon={faPenToSquare} size="2x" />
            <div className="content">
              <p>정모 글 작성하기</p>
              <div className="sub">자세히 적어주면 감사!</div>
            </div>
          </div>

          <WriteContainer>
            <Date>
              <h1>📅 날짜</h1>
              <input
                value={state.date}
                type="date"
                onChange={(e) => {
                  setState({
                    ...state,
                    date: e.target.value,
                  });
                }}
              />
            </Date>
            <Place>
              <h1>🚀 장소</h1>
              <input
                value={state.place}
                placeholder="장소는 최소 4글자 이상 입력하세요"
                onChange={(e) => {
                  setState({
                    ...state,
                    place: e.target.value,
                  });
                }}
              />
            </Place>
            <Member>
              <h1>👨‍👨‍👧‍👦 멤버</h1>
              <input
                value={state.member}
                placeholder="멤버를 입력하세요"
                onChange={(e) => {
                  setState({
                    ...state,
                    member: e.target.value,
                  });
                }}
              />
            </Member>
            <Content>
              <textarea
                value={state.content}
                placeholder="내용은 최소 4글자 이상 입력하세요"
                onChange={(e) => {
                  setState({
                    ...state,
                    content: e.target.value,
                  });
                }}
              ></textarea>
            </Content>
            <ButtonContainer>
              <Button
                onClick={() => {
                  노선재받아라();
                }}
              >
                제출하기
              </Button>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                취소하기
              </Button>
            </ButtonContainer>
          </WriteContainer>
        </FlexContainer>
      </Container>
    </>
  );
}

const h1Style = `
  text-align: right;
  align-self: center;
  font-weight: 600;
  font-size: 15px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 100px;
  justify-content: center;
  @media screen and (max-width: 500px) {
    margin: 0px;
    width: 100%;
  }
`;

const FlexContainer = styled.div`
  p {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .flex-container {
    display: flex;
    padding: 50px;
    padding-bottom: 20px;
    align-items: center;
    gap: 8px;
  }
  .flex-container .sub {
    font-size: 12px;
    margin-top: 7px;
  }
  @media screen and (max-width: 500px) {
    .flex-container {
      padding: 20px;
    }
  }
`;

const WriteContainer = styled.div`
  position: relative;
  padding: 10px 50px 50px;
  overflow: clip;
  border-radius: 20px;

  @media screen and (max-width: 500px) {
    padding: 10px 10px 50px;
    margin: 0px;
    width: 100%;
    box-sizing: border-box;
  }
`;

const Date = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  h1 {
    ${h1Style}
  }
  input {
    height: 30px;
    margin-left: 20px;
    padding-left: 10px;
    font-size: 15px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;
const Place = styled.div`
  padding: 10px;
  display: flex;

  h1 {
    ${h1Style};
  }
  input {
    margin-left: 20px;
    height: 30px;
    padding-left: 10px;
    flex-grow: 1;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;
const Member = styled.div`
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  h1 {
    ${h1Style};
  }
  input {
    flex-grow: 1;
    margin-left: 20px;
    height: 30px;
    padding-left: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;

const Content = styled.div`
  textarea {
    width: 500px;
    height: 160px;
    padding: 20px;
    font-size: 15px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    textarea {
      box-sizing: border-box;
      width: 340px;
      height: 250px;
    }
  }
`;
const ButtonContainer = styled.div`
  margin-top: 30px;
`;
const Button = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: none;
  font-size: 15px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

export { Button };
export default Write;
