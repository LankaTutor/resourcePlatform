import React, { Component } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import SubNavbar from "../../Shared/Navbar/SubNavbar";
import PageHeader from "../../Shared/PageHeader";
import SideBar from "../../Shared/SideBar";

import "./Article.scss";
import SingleArticle from "../Components/SingleArticle";

export default class Article extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <PageHeader title="Articles" subTitle="Boost your knowledge" />
        <div className="article-content container mt-5">
          <SideBar />
          <div className="article-content_full pl-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Articles
                </li>
              </ol>
            </nav>
            <SingleArticle />
          </div>
        </div>
      </div>
    );
  }
}
