import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
function ShowPost() {
  const params = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState({});
  const [post, setPost] = useState({
    id: "",
    date: "",
    content: "",
    place: "",
    member: "",
  });

  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState({
    create_date: "",
    author: "",
    content: "",
  });

  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const increaseLike = () => {
    setLike(like + 1);
    axios.post(`http://13.209.103.211:8080/jyt/post/${params.postID}/like/`);
  };
  const increasedisLike = () => {
    setDisLike(disLike + 1);
    axios.post(`http://13.209.103.211:8080/jyt/post/${params.postID}/unlike/`);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };

  const deletePost = async () => {
    try {
      navigate("/");
      await axios.delete(
        `http://13.209.103.211:8080/jyt/post/${params.postID}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const submitGoHome = async () => {
    try {
      var d = new Date();
      setComment({
        ...comment,
        create_date: new Date(
          d.getTime() - d.getTimezoneOffset() * 60000
        ).toISOString(),
      });

      await axios.post(
        `http://13.209.103.211:8080/jyt/post/${params.postID}/answer/`,
        {
          question: params.postID,
          content: comment.content,
          author: comment.author,
          create_date: comment.create_date,
        }
      );
      alert("댓글을 등록하였습니다.");
    } catch (err) {
      alert(err);
    }
  };

  const LikeIncrease = () => {};

  const getPostData = async () => {
    try {
      const res = await axios.get(
        `http://13.209.103.211:8080/jyt/post/${params.postID}`
      );
      setPost({
        id: res.data.id,
        date: res.data.create_date,
        content: res.data.content,
        place: res.data.subject,
        member: res.data.member,
      });

      setImage(res.data.image);
      console.log(image);

      setLike(res.data.like);
      setDisLike(res.data.unlike);
      const res2 = await axios.get(
        `http://13.209.103.211:8080/jyt/post/${params.postID}/answer`
      );
      setCommentList(res2.data);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getPostData();
  }, [commentList, like, disLike]);
  return (
    <>
      <div
        className="back-button"
        style={{ width: "80%", margin: "10px auto" }}
      >
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          size="2x"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <PostContainer>
        <div className="flex-container">
          <div className="top-container">
            {post.date}
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginLeft: "3px" }}
            />{" "}
            {post.place}
          </div>
          <div className="content">{post.content}</div>
          <div className="image">
            <img
              src={`http://13.209.103.211:8080/jyt${image}`}
              style={{ width: "100%" }}
              alt="이미지"
            />
          </div>

          <div className="member">{post.member}</div>
        </div>
      </PostContainer>
      <PostButton>
        <div className="trashcan" onClick={deletePost}>
          <FontAwesomeIcon icon={faTrashCan} />
          삭제하기
        </div>
      </PostButton>
      <LikeDisLike>
        <LikeWrap>
          <Like onClick={increaseLike}>
            <FontAwesomeIcon icon={faThumbsUp} size="xl" />
            <p>개추</p>
          </Like>
          <LikeCount>+ {like}</LikeCount>
        </LikeWrap>
        <LikeWrap>
          <DisLike onClick={increasedisLike}>
            <FontAwesomeIcon icon={faThumbsDown} size="xl" />
            <p>죽어!</p>
          </DisLike>
          <DisLikeCount>- {disLike}</DisLikeCount>
        </LikeWrap>
      </LikeDisLike>

      <CommentContainer>
        <div className="commentCount">
          <FontAwesomeIcon icon={faComments} />
          <p>
            댓글 <span>{commentList.length}</span>개
          </p>
        </div>

        <div className="commentList">
          {commentList.map((comment, idx) => (
            <div className="comment" key={idx}>
              <div className="author">
                <img src="/images/profile.png" alt="프로필" />
                <p>{comment.author}</p>
              </div>
              <div className="content">{comment.content}</div>
              <div className="time">{comment.create_date}</div>
            </div>
          ))}
        </div>
      </CommentContainer>
      <SubmitComment>
        <div className="text-area">
          <input
            type="text"
            placeholder="작성자를 입력하세요"
            value={comment.author}
            onChange={(e) => {
              setComment({ ...comment, author: e.target.value });
            }}
          />
          <textarea
            placeholder="댓글을 입력하세요."
            value={comment.content}
            onChange={(e) => {
              setComment({ ...comment, content: e.target.value });
            }}
          ></textarea>
        </div>
        <div className="submit-icon" onClick={submitGoHome}>
          <FontAwesomeIcon icon={faPencil} size="2x" />
        </div>
      </SubmitComment>
    </>
  );
}

const LikeDisLike = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  gap: 20px;
`;

const LikeWrap = styled.div``;

const LikeCount = styled.div`
  text-align: center;
  margin-top: 5px;
  font-weight: 500;
  color: orange;
`;
const DisLikeCount = styled(LikeCount)`
  color: black;
`;

const Like = styled.button`
  width: 45px;
  height: 50px;
  background-color: orange;
  font-size: 15px;
  color: white;
  border-radius: 20px;
  p {
    font-size: 10px;
  }
  border: none;
`;

const DisLike = styled(Like)`
  background-color: blue;
`;

const SubmitComment = styled.div`
  display: flex;
  width: 80%;
  margin: 20px auto 0;
  justify-content: center;
  gap: 10px;
  textarea {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 50px;
    display: block;
    border-radius: 10px;
  }
  input {
    box-sizing: border-box;
    display: block;
    padding: 10px;
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
    border-radius: 10px;
  }
  .submit-icon {
    padding: 15px;
    border-radius: 10px;
    align-self: center;
    background-color: orange;
  }
`;

const CommentContainer = styled.div`
  width: 80%;
  margin: 30px auto 0;

  .commentCount {
    display: flex;
    gap: 5px;
  }
  .commentCount p {
    font-weight: 400;
  }
  .commentCount span {
    font-weight: 600;
  }
  .commentList {
    margin-top: 10px;
    height: 30vh;
    overflow: scroll;
  }
  .commentList .comment .author {
    margin-top: 20px;
    display: flex;
    gap: 5px;
  }
  .commentList .comment .author img {
    display: block;
    width: 25px;
  }
  .commentList .comment .author p {
    align-self: flex-start;
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
  }
  .commentList .comment .content {
    margin-top: 5px;
    font-size: 12px;
  }
  .commentList .comment .time {
    margin-top: 5px;
    font-size: 10px;
    color: #a6a6a6;
  }
`;

const PostButton = styled.div`
  width: 80%;
  display: flex;
  margin: 10px auto;
  justify-content: flex-end;
  .trashcan {
    display: flex;
    gap: 5px;
    margin-right: 20px;
    background-color: gray;
    padding: 10px;
    font-size: 12px;
    color: white;
    border-radius: 10px;
  }
`;

const PostContainer = styled.div`
  background-color: white;
  margin: 20px auto 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 10px 5px;
  width: 80%;
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
`;

export default ShowPost;
