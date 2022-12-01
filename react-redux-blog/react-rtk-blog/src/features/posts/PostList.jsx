import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostExerpt from "./PostExerpt";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postSlice";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      {content}
    </section>
  );
};

export default PostList;
