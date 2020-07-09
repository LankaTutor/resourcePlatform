import React, { Component } from "react";
// import "./CardArticle.scss";

const CardShortnotes = (props) => {
  return (
    <div className="article-card mb-4">
      <div className="article-card__header">
        <img src={props.article.image} alt={props.article.name} />
      </div>
      <div className="article-card__body">
        <span className="tag tag-teal">{props.article.category}</span>
        <h4>
          <a href="/articles/1">{props.article.title}</a>
        </h4>
        <p>{props.article.description}</p>

        <div className="article-user">
          <img src={props.article.author.img} alt={props.article.author.name} />
          <div className="article-user__info">
            <h5>{props.article.author.name}</h5>
            <small>1h ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShortnotes;
