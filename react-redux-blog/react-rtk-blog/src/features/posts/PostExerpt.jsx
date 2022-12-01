import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const PostExerpt = ({ post }) => {
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

export default PostExerpt;
