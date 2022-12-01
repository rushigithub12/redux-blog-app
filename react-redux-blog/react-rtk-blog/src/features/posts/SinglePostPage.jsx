import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import { selectPostById } from "./postSlice";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return <section>No post found</section>;
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link  to={`/post/edit/${post.id}`} >Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

export default SinglePostPage;
