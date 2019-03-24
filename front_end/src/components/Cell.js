import React, { Component } from "react";
import Axios from "axios-jsonp-pro";
import "../css/Cell.css";

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      contentID,
      title,
      thumbnails,
      description,
      url,
      publishDate,
      item,
      count,
      setBookmark
    } = this.props;

    return (
      <div key={contentID} className="cell-container">
        <div>
          <a href={url} title={description}>
            <picture>
              <source media="(min-width: 650px)" srcSet={thumbnails[2].url} />
              <source media="(min-width: 465px)" srcSet={thumbnails[1].url} />
              <img src={thumbnails[0].url} alt="Thumbnail" />
            </picture>
          </a>
        </div>
        <div>
          <div className="info-1">
            {publishDate + " - "}
            <i className="far fa-comments" />
            {" " + count}
          </div>
          <div className="info-2">
            <a href={url} title={description}>
              {title}
            </a>
          </div>
          <button
            className="book-btn"
            onClick={() => {
              alert("Item bookmarked!!");
              setBookmark(item);
            }}
          >
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    );
  }
}

export default Cell;
