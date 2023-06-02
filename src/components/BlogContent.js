import React from "react";

function BlogContent(props) {
  console.log(props);
    return (
      <div>
        <h1>{props.articleText}</h1>
        <h1>{props.name}</h1>
        <p>{props.minutesToRead} minutes to read</p>
      </div>
    );
  }

export default BlogContent;
