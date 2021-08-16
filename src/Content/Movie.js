import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"; //useHistroy를 훅이라고 부름
import axios from "axios";
import "./Movie.css";
import data from "./dataMoive";

function Movie() {
  /*
    ajax요청을 통해, content가져오기
    content를 state로 설정하여, 값이 바뀔떄마다 페이지가 바뀌게 설정
    */
  let [movieData, movieDataChange] = useState(data);

  return (
    <>
      <div className="box">
        <span className="title">{movieData[0].title}</span>
        <table>
          <tr>
            <td>{movieData[0].rank_1}</td>
            <td>{movieData[0].rank_2}</td>
            <td>{movieData[0].rank_3}</td>
            <td>{movieData[0].rank_4}</td>
            <td>{movieData[0].rank_5}</td>
          </tr>
        </table>
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
    </>
  );
}

function dataCard(props) {
  <div className="col-md-4">
    <h4>{props.movie.title} </h4>
    <h4>{props.movie.rank_1}</h4>
  </div>;
}

export default Movie;
