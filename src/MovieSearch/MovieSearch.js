import React from "react";
import "./MSearch.css";
import { useParams } from "react-router-dom";

const MovieSearch = () => {
  let { searchData } = useParams();
  return (
    <>
      <div className="MovieSearch_box1">
        <div className="movie_high_search_title">
          '{searchData}' 상위 검색 결과
        </div>
        <div className="movie_high_search_name">
          <div id="img">
            <img
              src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${1}.png`}
              alt="copy url"
            />
            인질<p>2011 · 한국</p>
            <p>영화</p>
          </div>

          <div id="img">
            <img
              src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${2}.png`}
              alt="copy url"
            />
            귀문<p>2012 · 한국</p>
            <p>영화</p>
          </div>

          <div id="img">
            <img
              src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${3}.png`}
              alt="copy url"
            />
            싱크홀<p>2013 · 한국</p>
            <p>영화</p>
          </div>

          <div id="img">
            <img
              src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${4}.png`}
              alt="copy url"
            />
            모가디슈<p>2014 · 한국</p>
            <p>영화</p>
          </div>

          <div id="img">
            <img
              src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${5}.png`}
              alt="copy url"
            />
            여름날 우리<p>2015 · 한국</p>
            <p>영화</p>
          </div>

          <div id="img">
            <img
              src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${5}.png`}
              alt="copy url"
            />
            여름날 우리<p>2015 · 한국</p>
            <p>영화</p>
          </div>

          <div id="img">
            <img
              src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${5}.png`}
              alt="copy url"
            />
            여름날 우리<p>2015 · 한국</p>
            <p>영화</p>
          </div>

          <div id="img">
            <img
              src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${5}.png`}
              alt="copy url"
            />
            여름날 우리<p>2015 · 한국</p>
            <p>영화</p>
          </div> 
        </div>
      </div>
      <hr />

      {/* 영화 박스 */}
      <div className="MovieSearch_box2">
        <div className="movie_search_title">
          영화
        </div>

        <ul>
          <li>
            <div className = "movie_search_movie">
              <div id="img">
                <img
                  src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${5}.png`}
                  alt="copy url"
                />
              </div>
              <div id = "m_i">
                <ul>
                  <li>여름날 우리</li>
                  <li>2015 한국</li>
                </ul>  
                <hr />
              </div>
            </div>
          </li>

          <li>
            <div className = "movie_search_movie">
              <div id="img">
                <img
                  src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${5}.png`}
                  alt="copy url"
                />
              </div>
              <div id = "m_i">
                <ul>
                  <li>여름날 우리</li>
                  <li>2015 한국</li>
                </ul>  
                <hr />
              </div>
            </div>
          </li>
          
          <li>
            <div className = "movie_search_movie">
              <div id="img">
                <img
                  src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${5}.png`}
                  alt="copy url"
                />
              </div>
              <div id = "m_i">
                <ul>
                  <li>여름날 우리</li>
                  <li>2015 한국</li>
                </ul>  
                <hr />
              </div>
            </div>
          </li>

          <li>
            <div className = "movie_search_movie">
              <div id="img">
                <img
                  src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${5}.png`}
                  alt="copy url"
                />
              </div>
              <div id = "m_i">
                <ul>
                  <li>여름날 우리</li>
                  <li>2015 한국</li>
                </ul>  
                <hr />
              </div>
            </div>
          </li>

          <li>
            <div className = "movie_search_movie">
              <div id="img">
                <img
                  src={process.env.PUBLIC_URL + `/movieImg/${0}/${0}_${5}.png`}
                  alt="copy url"
                />
              </div>
              <div id = "m_i">
                <ul>
                  <li>여름날 우리</li>
                  <li>2015 한국</li>
                </ul>  
                <hr />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <hr />


      {/* TV프로그램 박스 */}
      <div className="MovieSearch_box3">
        <div className="movie_search_title">TV 프로그램</div>
        <div className = "movie_search_TV">
          
        </div>
      </div>
      <hr />


      {/* 책 박스 */}
      <div className="MovieSearch_box4">
        <div className="movie_search_title">책</div>
        <div className = "movie_search_book">
          
        </div>
      </div>
      <hr />


      {/* 사용자 박스 */}
      <div className="MovieSearch_box5">
        <div className="movie_search_title">사용자</div>
        <div className = "movie_search_user">
          
        </div>
      </div>
      {" "}
    </>
  );
};

export default MovieSearch;
