import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewPost } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(0);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector(selectAllUsers);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClick = (e) => {
    e.preventDefault();
    if(canSave){
      try{
        setAddRequestStatus("pending");
        // dispatch(addNewPost({ title, body: content, userId })).unwrap()

        setTitle("");
        setContent("");
        setUserId("");
        navigate("/")
      }catch(err) {
        console.log("failed to add new post", err)
      }finally{
        setAddRequestStatus("idle")
      }
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h3>Add new Post</h3>
      <form>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="authorName">Author: </label>
        <select
          name="authorName"
          id="authorName"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={onSavePostClick} type="button" disabled={!canSave}>
          Save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
