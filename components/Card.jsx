import React from "react";
// import ReactDom from "react-dom";

function Card(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
      <p>
        {props.likes}
        {"❤️"} likes
      </p>
      <p>
        {props.followers}
        {"👍"} followers
      </p>
      <p>
        {props.following}
        {"🦵"} following
      </p>
      <br />
    </div>
  );
}
export default Card;
// props are used to create custom-reusable features
