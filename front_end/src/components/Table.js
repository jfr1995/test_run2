import React, { Component } from "react";
import Axios from "axios-jsonp-pro";
import Cell from "./Cell.js";
import Navigation from "./Navigation.js";
import Error from "./Error.js";
import Moment from "moment";
import "../css/Table.css";

// sample comment request
//https://ign-apis.herokuapp.com/comments?ids=3de45473c5662f25453551a2e1cb4e6e,63a71f01cca67c9bbf5e7b6f091d551d

var startIndex = 0;
var count = 10;
const CONTENT_PATH = "https://ign-apis.herokuapp.com/content?";
const startIndex_param = "startIndex=";
const count_param = "count=";

const COMMENT_PATH = "https://ign-apis.herokuapp.com/comments?ids=";
const ARTICLE_PATH = "https://www.ign.com/articles/";

class Table extends Component {
  constructor(props) {
    super(props);
    // declare component state
    this.state = {
      src: null,
      active_list: null,
      video_list: null,
      article_list: null,
      bookmark_list: [],
      comment_list: null
    };
    // bound component methods to 'this' keyword
    this.fetchContent = this.fetchContent.bind(this);
    this.setContent = this.setContent.bind(this);
    this.setActiveList = this.setActiveList.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
    this.setComments = this.setComments.bind(this);

    this.getCommentCount = this.getCommentCount.bind(this);
    this.getElapsedTime = this.getElapsedTime.bind(this);
    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.setBookmarkList = this.setBookmarkList.bind(this);
  }

  /////////////////////////////////////////////class methods///////////////////////////////////////////////////////////

  /*
    use Axios Jsonp to make a cross domain request 
    then set the component state for both the comments and
    our content lists.
  */
  fetchContent() {
    Axios.jsonp(
      `${CONTENT_PATH}${startIndex_param}${startIndex}&${count_param}${count}`
    )
      .then(res => {
        this.setContent(res);

        this.fetchComments(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  /*
  setContent will invoke the setState method and set the state 
  of our component, causing the component to  be re-rendered
*/
  setContent(content) {
    const { data } = content;
    var vList = data.filter(item => item.contentType.toLowerCase() === "video");
    var aList = data.filter(
      item => item.contentType.toLowerCase() === "article"
    );

    this.setState({
      src: data,
      active_list: data,
      video_list: vList,
      article_list: aList
    });
  }
  /*
  this method will be passed down to the Navigation component 
  so that the navigation component will be able to set the state of the 
  table
*/
  setActiveList(list) {
    this.setState({ active_list: list });
  }

  fetchComments(response) {
    const { data } = response;
    var content_ids = [];
    for (var i = 0; i < data.length; i++) {
      content_ids.push(data[i].contentId);
    }

    Axios.jsonp("https://ign-apis.herokuapp.com/comments?ids=" + content_ids)
      .then(res => {
        this.setComments(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  // set component state
  setComments(response) {
    this.state.comment_list
      ? this.setState({
          comment_list: this.state.comment_list.concat(response.content)
        })
      : this.setState({ comment_list: response.content });
  }

  getCommentCount(id) {
    var count = 0;
    for (var i = 0; i < this.state.comment_list.length; i++) {
      if (id == this.state.comment_list[i].id) {
        count = this.state.comment_list[i].count;
        break;
      }
    }

    return count;
  }

  getElapsedTime(time) {
    return Moment(time).fromNow();
  }

  loadMoreContent() {
    // increase the start index so that we can fetch new content
    startIndex += 10;

    /*
    next we make a request for the new content and make 
    new lists in order to update the component state which will
    cause the component to be re-rendered
*/
    Axios.jsonp(
      `${CONTENT_PATH}${startIndex_param}${startIndex}&${count_param}${count}`
    )
      .then(res => {
        var new_data = res.data;
        var updated_src = this.state.src.concat(new_data);
        var updated_video_list = this.state.video_list.concat(
          new_data.filter(item => item.contentType.toLowerCase() === "video")
        );
        var updated_article_list = this.state.article_list.concat(
          new_data.filter(item => item.contentType.toLowerCase() === "article")
        );
        var updated_active_list = null;
        if (this.state.active_list == this.state.video_list) {
          updated_active_list = updated_video_list;
        } else if (this.state.active_list == this.state.article_list) {
          updated_active_list = updated_article_list;
        } else {
          updated_active_list = updated_src;
        }

        this.setState({
          src: updated_src,
          active_list: updated_active_list,
          video_list: updated_video_list,
          article_list: updated_article_list
        });

        this.fetchComments(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  setBookmarkList(item) {
    var new_list = [item];
    var updated_bookmark_list = this.state.bookmark_list.concat(new_list);
    this.setState({ bookmark_list: updated_bookmark_list });
  }
  ///////////////////////////////////////lifecycle methods////////////////////////////////////////////

  componentDidMount() {
    this.fetchContent();
  }

  render() {
    if (!this.state.src || !this.state.comment_list) {
      return <Error />;
    }
    return (
      <div className="table-container">
        <Navigation
          setList={this.setActiveList}
          vList={this.state.video_list}
          aList={this.state.article_list}
          bookmarkList={this.state.bookmark_list}
          list={this.state.src}
        />
        <div className="cells-container">
          {this.state.active_list.map(item => {
            if (item.contentType.toLowerCase() === "article") {
              return (
                <Cell
                  key={item.contentId}
                  contentID={item.contentId}
                  title={item.metadata.headline}
                  thumbnails={item.thumbnails}
                  description={item.metadata.description}
                  url={"https://www.ign.com/articles/" + item.metadata.slug}
                  publishDate={Moment(item.metadata.publishDate).fromNow()}
                  item={item}
                  count={this.getCommentCount(item.contentId)}
                  setBookmark={this.setBookmarkList}
                />
              );
            } else {
              return (
                <Cell
                  key={item.contentId}
                  contentID={item.contentId}
                  title={item.metadata.title}
                  thumbnails={item.thumbnails}
                  description={item.metadata.description}
                  url={
                    "https://www.ign.com/videos/2019/00/00/" +
                    item.metadata.slug
                  }
                  publishDate={Moment(item.metadata.publishDate).fromNow()}
                  item={item}
                  count={this.getCommentCount(item.contentId)}
                  setBookmark={this.setBookmarkList}
                />
              );
            }
          })}
          <button className="load-btn" onClick={this.loadMoreContent}>
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    );
  }
}

export default Table;
