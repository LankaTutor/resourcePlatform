import React, { Component } from "react";

import "./Articles.scss";
import CardArticle from "../../Article/Components/CardArticle";

const Articles = (props) => {
  const ARTICLES = [
    {
      id: "a1",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Science behind PI",
      description: "Everything you need to know about PI",
      category: "Mathematics",
      author: {
        img:
          "https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Sat Mern",
      },
    },
    {
      id: "a1",
      image:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Science behind PI",
      description: "Everything you need to know about PI",
      category: "Physics",
      author: {
        img:
          "https://images.pexels.com/photos/7370/startup-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Dan Brown",
      },
    },
    {
      id: "a1",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Science behind PI",
      description:
        "Everything you need to know about PI Everything you need to know about PI",
      category: "Mathematics",
      author: {
        img:
          "https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Sat Mern",
      },
    },
    {
      id: "a1",
      image:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Science behind PI",
      description: "Everything you need to know about PI",
      category: "Physics",
      author: {
        img:
          "https://images.pexels.com/photos/7370/startup-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Dan Brown",
      },
    },
    {
      id: "a1",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Science behind PI",
      description: "Everything you need to know about PI",
      category: "Mathematics",
      author: {
        img:
          "https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Sat Mern",
      },
    },
  ];
  return (
    <div className="my-5">
      <div className="articles mt-5">
        {ARTICLES.map((article) => {
          return <CardArticle article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
