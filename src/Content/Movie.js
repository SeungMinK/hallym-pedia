import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom"; //useHistroy를 훅이라고 부름
import axios from "axios";
import "./Movie.css";

import data from "./dataMoive";
import MovieInfo from "../MovieInfo/MovieInfo";

function Movie() {
  /*
    ajax요청을 통해, content가져오기
    content를 state로 설정하여, 값이 바뀔떄마다 페이지가 바뀌게 설정
    */
  let [movieData, movieDataChange] = useState(data);

  // const [dataId, setDataId] = useState([ data[1], data[2], data[3], data[4], data[5] ]);
  // const [dataId, setDataId] = useState(data);     //data의 정보를 dataId에 저장해둠

  // const [dataTitle, setDataTitle] = useState([dataId])

  // const [movies, setMovies] = useState([]);

  // function MInfo(){
  //   return (
  //     <Link to = "/MovieInfo" />
  //   )
  // }

  // const renderMovies = data.map((movie) => {
  //   return (
  //       <MovieInfo movie = {movie} />
  //   );
  // });

  //5번
  // const sendData = data.map((item) => {
  //       return(
  //         <data data = {item} />
  //       );
  // });

  return (
    <>
      {movieData.map((data, index) => {
        return (
          <div className="box">
            <Router>
              <dataTitle>
                <span className="title">{data.title}</span>
                <table>
                  <ul>
                    {/* <a href = "/MovieInfo" onClick = {sendData}>{data.rank_1}</a> */}

                    <div>
                      <a href={`/MovieInfo/${data.rank_1}`}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/movieImg/${index}/${index}_${1}.png`
                          }
                          alt="copy url"
                        />{" "}
                      </a>
                      <p>{data.rank_1}</p>
                    </div>

                    <div>
                      <a href={`/MovieInfo/${data.rank_2}`}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/movieImg/${index}/${index}_${2}.png`
                          }
                          alt="copy url"
                        />{" "}
                      </a>
                      <p>{data.rank_2}</p>
                    </div>

                    <div>
                      <a href={`/MovieInfo/${data.rank_3}`}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/movieImg/${index}/${index}_${3}.png`
                          }
                          alt="copy url"
                        />{" "}
                      </a>
                      <p>{data.rank_3}</p>
                    </div>

                    <div>
                      <a href={`/MovieInfo/${data.rank_4}`}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/movieImg/${index}/${index}_${4}.png`
                          }
                          alt="copy url"
                        />{" "}
                      </a>
                      <p>{data.rank_4}</p>
                    </div>

                    <div>
                      <a href={`/MovieInfo/${data.rank_5}`}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/movieImg/${index}/${index}_${5}.png`
                          }
                          alt="copy url"
                        />{" "}
                      </a>
                      <p>{data.rank_5}</p>
                    </div>

                    {/* <Switch>
                    <Route exact path = "/MovieInfo" > {renderMovies} </Route>
                  </Switch> */}
                  </ul>
                </table>
                <hr />
              </dataTitle>
            </Router>
          </div>
        );
      })}
    </>
  );
}

export default Movie;
