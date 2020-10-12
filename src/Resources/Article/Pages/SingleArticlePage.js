import React, {useState} from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import PageHeader from "../../../Shared/PageHeader";
import Footer from "../../../Shared/Footer";
import { makeStyles } from "@material-ui/core/styles";
import SingleArticle from "../Components/SingleArticle";
import axios from "axios";
import { data } from "jquery";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
      },
      button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      actionsContainer: {
        marginBottom: theme.spacing(2),
      },
      resetContainer: {
        padding: theme.spacing(3),
      },
}));

function SingleArticlePage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [datas, setDatas] =  useState([]);
    let title = window.location.href.split("/").pop();
    axios.get(`/api/articles/${title}`).then((response)=>{
        setDatas(response.data);
    })
    

  return (
    <div>
      <Navbar />
      <SubNavbar />

      <PageHeader title={data.title} />
      <div style={{ padding: "50px",}}>
          <div className="article-content_full mt-5">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li href="/articles" class="breadcrumb-item active" aria-current="page">
                  Articles
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>
            <SingleArticle />
          </div>
        <Footer />
      </div>
    </div>
  );
}

export default SingleArticlePage;



// import React, { Component } from "react";
// import Navbar from "../../../Shared/Navbar/Navbar";
// import SubNavbar from "../../../Shared/Navbar/SubNavbar";
// import PageHeader from "../../../Shared/PageHeader";
// import SideBar from "../../../Shared/SideBar";

// import "./Article.scss";
// import SingleArticle from "../Components/SingleArticle";

// export default class Article extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <SubNavbar />
//         <PageHeader title="Articles" subTitle="Boost your knowledge" />
//         <div className="article-content container mt-5">
//           <SideBar />
//           <div className="article-content_full pl-3">
//             <nav aria-label="breadcrumb">
//               <ol class="breadcrumb">
//                 <li class="breadcrumb-item">
//                   <a href="/">Home</a>
//                 </li>
//                 <li class="breadcrumb-item">
//                   <a href="#">Library</a>
//                 </li>
//                 <li class="breadcrumb-item active" aria-current="page">
//                   Articles
//                 </li>
//               </ol>
//             </nav>
//             <SingleArticle />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
