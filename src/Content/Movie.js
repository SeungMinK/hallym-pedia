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
      <span>테스트</span>
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
    </>
  );
}

export default Movie;
