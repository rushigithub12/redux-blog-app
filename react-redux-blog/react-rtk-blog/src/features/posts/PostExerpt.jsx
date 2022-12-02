import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import { selectPostById } from "./postSlice";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const PostExerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId))

  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt" >{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`} >View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

export default React.memo(PostExerpt);
