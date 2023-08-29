import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
function PostItem({
  subject,
  content,
  id,
  create_date,
  member,
  like,
  unlike,
  image,
}) {
  const imageProcessing = (str) => {
    return str.substr(27);
  };
  const navigate = useNavigate();
  const url = "https://13.209.103.211:8080/jyt/post/";
  const truncateString = (inputString, maxLength) => {
    if (inputString.length > maxLength) {
      return inputString.substr(0, maxLength) + "...";
    }
    return inputString;
  };

  const goPost = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="PostItem" onClick={goPost}>
      {window.innerWidth < 2000 ? (
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

          {image ? (
            <div className="image-preview">
              <img
                src={`http://13.209.103.211:8080/jyt/${imageProcessing(image)}`}
                alt="이미지 프리뷰"
              />
            </div>
          ) : (
            ""
          )}
          <div className="member">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              style={{ marginRight: "5px" }}
            />
            {member}
            <div className="like-dislike">
              <div className="like">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  style={{ color: "black", marginRight: "3px" }}
                ></FontAwesomeIcon>
                +{like}
              </div>
              <div className="dislike">
                <FontAwesomeIcon
                  icon={faThumbsDown}
                  style={{ color: "black", marginRight: "3px" }}
                ></FontAwesomeIcon>
                -{unlike}
              </div>
            </div>
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
  width: 85%;
  box-sizing: border-box;
  margin: 20px auto 0px;
  /* Rectangle 11 */

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  border-radius: 20px;
  padding: 10px 15px 5px;

  border-radius: 20px;
  .top-container {
    font-size: 10px;
    color: gray;
    margin-bottom: 12px;
  }
  .content {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.3;
  }
  .member {
    font-size: 10px;
    margin-bottom: 5px;
  }
  .button-container {
    text-align: right;
  }
  .button-container button {
    margin: 0;
    border-radius: 5px;
    border: 2px solid #322f2f;
  }
  .like-dislike {
    margin-top: 10px;
    display: flex;
    font-size: 12px;
    gap: 10px;
  }
  .like-dislike .like {
  }
  .like-dislike .dislike {
  }
  .image-preview {
    margin-bottom: 10px;
  }
  .image-preview img {
    width: 10%;
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
