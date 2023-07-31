import React from "react";
import styled from "styled-components";
function PostItem({ author, content, id, title, created_date }) {
  return (
    <div className="PostItem">
      <Info>
        <li>{id}</li>
        <li>{author}</li>
        <li>{title}</li>
        <li>{new Date(created_date).toLocaleString()}</li>
      </Info>
    </div>
  );
}

const Info = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f9fafb;
  border-bottom: 1px solid #dddee0;
`;

export default PostItem;
