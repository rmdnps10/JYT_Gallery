import React from "react";
import PostItem from "./PostItem";
import { styled } from "styled-components";

function Postlists({ postList }) {
  console.log(postList);
  return (
    <PostContainer
      style={{
        height: `${window.innerWidth < 600 ? "calc(100vh  -  300px)" : ""}`,
        overflow: `${window.innerWidth < 600 ? "scroll" : ""}`,
      }}
    >
      {postList.map((it) => {
        return <PostItem key={it.id} {...it} />;
      })}
    </PostContainer>
  );
}

export default Postlists;

const PostContainer = styled.div``;
