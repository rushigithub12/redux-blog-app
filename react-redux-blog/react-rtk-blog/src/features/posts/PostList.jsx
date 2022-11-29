import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedList = orderedPosts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <ReactionButton post={post} />
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedList}
    </section>
  );
};

export default PostList;
