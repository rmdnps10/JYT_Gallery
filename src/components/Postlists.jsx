import React from "react";
import PostItem from "./PostItem";

function Postlists({ postList }) {
  console.log({ postList });
  return (
    <>
      {postList.map((it) => {
        return <PostItem key={it.id} {...it} />;
      })}
    </>
  );
}

export default Postlists;
