import React, { useEffect, useState } from "react";
import { 
  useHistory, 
  useParams , 
  BrowserRouter as Router, 
  Route, 
  Link 
} from "react-router-dom"; //useHistroy를 훅이라고 부름

import axios from "axios";
import "./Movie.css";
import data from "./dataMoive";

import MovieInfo22 from "../MovieInfo/MovieInfo";


function Movie() {
  /*
    ajax요청을 통해, content가져오기
    content를 state로 설정하여, 값이 바뀔떄마다 페이지가 바뀌게 설정
    */
  let [movieData, movieDataChange] = useState(data);
<<<<<<< HEAD

  //movie_data 분리
  const [movietitle, setMovieTitle] = useState();


  return (
    <>
      <div className="box">
        <div className="title">{movieData[0].title}</div>
        {/* <table> */}
          {/* <tr> */}
            {/* <td><a href = "./MovieInfo/MovieInfo">{movieData[0].rank_1}</a></td> */}
             <Link to = "/MovieInfo">  
                <span>
                  {movieData[0].rank_1} 
                </span></Link>
            <Route path = "/MovieInfo">
            <MovieInfo22></MovieInfo22> 
            </Route>
            
    
            <span>{movieData[0].rank_2}</span>
            <span>{movieData[0].rank_3}</span>
            <span>{movieData[0].rank_4}</span>
            <span>{movieData[0].rank_5}</span>
          {/* </tr> */}
        {/* </table>
         */}
        <hr />
      </div>
      <div className="box">
        <span className="title">{movieData[1].title}</span>
        <table>
          <tr>
            <td>{movieData[1].rank_1}</td>
            <td>{movieData[1].rank_2}</td>
            <td>{movieData[1].rank_3}</td>
            <td>{movieData[1].rank_4}</td>
            <td>{movieData[1].rank_5}</td>
          </tr>
        </table>
        <hr />
      </div>
      <div className="box">
        <span className="title">{movieData[2].title}</span>
        <table>
          <tr>
            <td>{movieData[2].rank_1}</td>
            <td>{movieData[2].rank_2}</td>
            <td>{movieData[2].rank_3}</td>
            <td>{movieData[2].rank_4}</td>
            <td>{movieData[2].rank_5}</td>
          </tr>
        </table>
        <hr />
      </div>
      <div className="box">
        <span className="title">{movieData[3].title}</span>
        <table>
          <tr>
            <td>{movieData[3].rank_1}</td>
            <td>{movieData[3].rank_2}</td>
            <td>{movieData[3].rank_3}</td>
            <td>{movieData[3].rank_4}</td>
            <td>{movieData[3].rank_5}</td>
          </tr>
        </table>
        <hr />
      </div>
      <div className="box">
        <span className="title">{movieData[4].title}</span>
        <table>
          <tr>
            <td>{movieData[4].rank_1}</td>
            <td>{movieData[4].rank_2}</td>
            <td>{movieData[4].rank_3}</td>
            <td>{movieData[4].rank_4}</td>
            <td>{movieData[4].rank_5}</td>
          </tr>
        </table>
        <hr />
      </div>
      <div className="box">
        <span className="title">{movieData[5].title}</span>
        <table>
          <tr>
            <td>{movieData[5].rank_1}</td>
            <td>{movieData[5].rank_2}</td>
            <td>{movieData[5].rank_3}</td>
            <td>{movieData[5].rank_4}</td>
            <td>{movieData[5].rank_5}</td>
          </tr>
        </table>
        <hr />
      </div>
      <div className="box">
        <span className="title">{movieData[6].title}</span>
        <table>
          <tr>
            <td>{movieData[6].rank_1}</td>
            <td>{movieData[6].rank_2}</td>
            <td>{movieData[6].rank_3}</td>
            <td>{movieData[6].rank_4}</td>
            <td>{movieData[6].rank_5}</td>
          </tr>
        </table>
        <hr />
      </div>
=======
  return (
    <>
      {movieData.map((data, index) => {
        return (
          <div className="box">
            <span className="title">{data.title}</span>
            <table>
              <tr>
                <td>{data.rank_1}</td>
                <td>{data.rank_2}</td>
                <td>{data.rank_3}</td>
                <td>{data.rank_4}</td>
                <td>{data.rank_5}</td>
              </tr>
            </table>
            <hr />
          </div>
        );
      })}
>>>>>>> ee31103190466c14347a9583a82b595e009423ef
    </>
  );
}

export default Movie;
