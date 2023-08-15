import React from "react";
import PostItem from "./PostItem";
import { styled } from "styled-components";

function Postlists({ postList }) {
  return (
    <PostContainer>
      {postList.map((it) => {
        return <PostItem key={it.id} {...it} />;
      })}
    </PostContainer>
  );
}

export default Postlists;

const PostContainer = styled.div`
  height: 40vh;
`;
