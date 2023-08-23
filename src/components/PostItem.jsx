import React from "react";
import styled from "styled-components";
function PostItem({ subject, content, id, create_date, member }) {
  const truncateString = (inputString, maxLength) => {
    if (inputString.length > maxLength) {
      return inputString.substr(0, maxLength) + "...";
    }
    return inputString;
  };

  return (
    <div className="PostItem">
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
    </div>
  );
}

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
