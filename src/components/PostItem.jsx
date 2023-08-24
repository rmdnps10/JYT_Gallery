import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
function PostItem({ subject, content, id, create_date, member }) {
  const url = "http://13.209.103.211:8080/jyt/post/";
  const truncateString = (inputString, maxLength) => {
    if (inputString.length > maxLength) {
      return inputString.substr(0, maxLength) + "...";
    }
    return inputString;
  };

  const deletePost = async () => {
    try {
      await axios.delete(`${url}${id}`);
      alert("글이 삭제되었어요.");
    } catch (err) {
      console.log(err);
      alert("삭제하기를 눌러서 글이 삭제된다고 생각하는 건 편견입니다.");
    }
  };

  return (
    <div className="PostItem">
      {window.innerWidth < 600 ? (
        <MobileInfo>
          <div className="top-container">
            {create_date}{" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginLeft: "3px" }}
            />{" "}
            {subject}
          </div>
          <div className="content">{content}</div>
          <div className="member">{member}</div>
          <div className="button-container">
            <button onClick={deletePost}>삭제하기</button>
          </div>
        </MobileInfo>
      ) : (
        <Info>
          <li class="date">{create_date}</li>
          <li class="place">{subject}</li>
          <li class="member">
            {window.innerWidth < 500 ? truncateString(member, 13) : member}
          </li>
          <li class="content">
            {window.innerWidth < 500 ? truncateString(content, 15) : content}
          </li>
        </Info>
      )}
    </div>
  );
}

const MobileInfo = styled.div`
  margin-top: 10px;
  background-color: white;
  padding: 10px 10px 5px;
  border: 3px solid;
  border-radius: 10px;
  .top-container {
    font-size: 10px;
    color: gray;
    margin-bottom: 12px;
  }
  .content {
    margin-bottom: 10px;
    font-size: 13px;
    font-weight: 500;
  }
  .member {
    font-size: 10px;
  }
  .button-container {
    text-align: right;
  }
  .button-container button {
    margin: 0;
    border-radius: 5px;
    border: 2px solid #322f2f;
  }
`;

const Info = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: 2fr 2fr 3fr 5fr;
  padding: 10px 0;
  background-color: #f9fafb;
  border-bottom: 1px solid #dddee0;

  li {
    text-align: center;
  }

  li.date {
    font-size: 12px;
  }

  li.place {
    font-weight: 600;
  }
  li.member {
    font-weight: 600;
  }

  @media screen and (max-width: 500px) {
    li {
      text-align: center;
      font-size: 10px;
    }

    li.date {
      font-size: 10px;
      scale: 0.8;
    }
  }
`;

export default PostItem;
