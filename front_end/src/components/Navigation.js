import React, { Component } from "react";
import "../css/Navigation.css";

const Navigation = ({ setList, vList, aList, bookmarkList, list }) => {
  return (
    <div className="nav-container">
      <button className="nav-btn" onClick={() => setList(list)}>
        <i className="far fa-clock" />{" "}
        <span className="nav-button-text">Latest</span>
      </button>

      <button
        className="nav-btn"
        tabIndex="1"
        onClick={() => {
          setList(aList);
        }}
      >
        <i className="far fa-newspaper" />
        {"  "} <span className="nav-button-text">Articles</span>
      </button>

      <button
        className="nav-btn"
        onClick={() => {
          setList(vList);
        }}
      >
        <i className="fas fa-play" />{" "}
        <span className="nav-button-text">Videos</span>
      </button>

      <button
        className="nav-btn"
        onClick={() => {
          setList(bookmarkList);
        }}
      >
        <i className="fas fa-bookmark" />{" "}
        <span className="nav-button-text">Bookmarks</span>
      </button>
    </div>
  );
};

export default Navigation;
