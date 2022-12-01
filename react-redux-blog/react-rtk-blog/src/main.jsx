import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { fetchPosts } from "./features/posts/postSlice";

store.dispatch(fetchPosts())
store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} /> 
          {/* allows nested routes */}
        </Routes>
      </Router>
    </Provider>
  
);
