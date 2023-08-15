import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
function Write() {
  const url = "https://e8c2-175-198-0-53.ngrok-free.app/jyt/";
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
      await axios.post(url, {
        date,
        place,
        member,
        content,
      });
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const navigateToHome = () => {
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
    navigate("/", {
      state: {
        author: state.author,
        title: state.title,
        content: state.content,
      },
    });
  };

  return (
    <>
      <Container>
        <FlexContainer>
          <p>✍🏻 정모 일지 작성하기</p>
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
  font-size: 24px;
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
    padding: 50px 0px 10px 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const WriteContainer = styled.div`
  position: relative;
  padding: 10px 50px 50px;
  background-color: rgba(255, 165, 0, 0.14);
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    padding: 10px 30px 50px;
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
    margin-left: 30px;
    padding-left: 10px;
    font-size: 15px;
  }
`;
const Place = styled.div`
  padding: 10px;
  display: flex;

  h1 {
    ${h1Style};
  }
  input {
    margin-left: 30px;
    height: 30px;
    padding-left: 10px;
    flex-grow: 1;
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
    margin-left: 30px;
    height: 30px;
    padding-left: 10px;
  }
`;

const Content = styled.div`
  textarea {
    width: 500px;
    height: 160px;
    padding: 20px;
    font-size: 15px;
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
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

export { Button };
export default Write;
