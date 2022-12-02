import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import PostExerpt from "./PostExerpt";
import { getPostsError, getPostsStatus, selectPostIds } from "./postSlice";

const PostList = () => {
  const orderedPostIds = useSelector(selectPostIds)
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map(postId => <PostExerpt key={postId} postId={postId} /> )
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostList;
