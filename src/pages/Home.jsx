import React, { useEffect, useState } from "react";
import Postlists from "../components/Postlists";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Write";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//https://jsonplaceholder.typicode.com/comments

function Home() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const navigateToWrite = () => {
    navigate("/Write");
  };
  const [result, setResult] = useState([]);
  const fetchData = async () => {
    let url = `http://13.209.103.211:8080/jyt/post/?page=${page}`;
    if (page === 1) {
      url = "http://13.209.103.211:8080/jyt/post/";
    }
    try {
      const res = await axios.get(url);
      console.log(res);
      const count = res.data.count;
      const lastPage = Math.ceil(count / 8);
      // 전체 페이지 배열을 담을 임시 참조타입(배열) 생성
      const tempPages = [];
      for (let i = 1; i <= lastPage; i++) {
        // 페이지 번호들 담기
        tempPages.push(i);
      }
      setPages(tempPages);
      setResult(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <HomeContainer>
      <div className="inner">
        <h1>📖 정모 일지</h1>
        <div className="bar">
          <li>날짜</li>
          <li>장소</li>
          <li>멤버</li>
          <li>정모 내용</li>
        </div>
        <Postlists postList={result} />

        <div className="paging-section">
          <div className="flex-container">
            {/* 1페이지가 넘어가면 왼쪽 화살표 보이고 오른쪽 화살표 x */}
            {page > 1 ? (
              <div
                className="left-arrow"
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </div>
            ) : (
              <div className="empty"></div>
            )}
            {/* 페이지리스트 */}
            <div className="page-container">
              {pages.map((pageNum) => {
                return (
                  <div
                    className={`page-num ${
                      pageNum === page ? "current-page" : ""
                    }`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </div>
                );
              })}
            </div>
            {/* 오른쪽 화살표유무 */}

            {page < pages.length ? (
              <div className="right-arrow">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  onClick={() => {
                    setPage(page + 1);
                  }}
                ></FontAwesomeIcon>
              </div>
            ) : (
              <div className="empty"></div>
            )}
          </div>
        </div>
        <Button onClick={navigateToWrite}>글쓰기</Button>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  background-color: #f6f5ef;
  height: 100vh;
  .paging-section {
    width: 300px;
    margin: 10px auto;
  }
  .flex-container {
    display: flex;
    justify-content: center;
    gap: 3px;
  }
  .flex-container .left-arrow {
    border-radius: 5px;
    border: 3px solid;
    padding: 6px;
    cursor: pointer;
  }
  .flex-container .page-container {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  .flex-container .empty {
    width: 31px;
    height: 34px;
  }
  .flex-container .page-container .page-num {
    padding: 3px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
  }
  .flex-container .page-container .page-num.current-page {
    color: red;
  }

  .flex-container .right-arrow {
    border-radius: 5px;
    border: 3px solid;
    padding: 6px;
    cursor: pointer;
  }

  .inner {
    max-width: 1200px;
    margin: 0 100px;
  }

  .bar {
    display: grid;
    grid-template-columns: 2fr 2fr 3fr 5fr;
    color: white;
    background-color: orange;
    border-radius: 10px;
    border: 1px solid white;
    padding: 12px 0px;
  }
  .bar li {
    text-align: center;
  }

  button {
    margin-top: 40px;
  }

  h1 {
    font-size: 28px;
    padding: 50px 0px 15px 20px;
    font-weight: 600;
  }

  @media screen and (max-width: 500px) {
    .inner {
      width: 90%;
      margin: 0 auto;
    }
    .bar {
      display: grid;
      grid-template-columns: 2fr 2fr 3fr 5fr;
      color: white;
      background-color: orange;
      border-radius: 10px;
      border: 1px solid white;
      padding: 12px 0px;
    }
    .bar li {
      text-align: center;
      font-size: 12px;
    }
  }
`;

export default Home;
