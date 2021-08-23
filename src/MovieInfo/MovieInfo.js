import React, { useState } from "react";
import dataMovie from "../Content/dataMoive";
import Movie from "../Content/Movie";
import "./MInfo.css";

// import dataMovie from "../Content/dataMoive";

const MovieInfo = (props) => {
  // const [movietitle, setMovieTitle] = useState('');
  // const [moviegenre, setMovieGenre] = useState('');
  // const [moviewant, setMovieWant] = useState('');
  // const [star, setStar] = useState([false, false, false, false, false]);


  //시도1
  // const filterid = (props) => dataMovie.filter(title => 
  //   title.includes('인질').map(filterTitle =>(
  //     <div>
  //       <filterTitle></filterTitle>
  //     </div>
  //   ))
  // )
  //시도2
  // const MTitle = props.movie.map((rank) => {
  //   return (
  //     {props.rank.rank_1}
  //   );
  // });

  //시도5
  // const Mdata = dataMovie.map((data, index) => {
  //   return(
  //     <div> {data[index]} </div>
  //     // <div> {data[index].rank_(index)} </div>
  //   );
  // })


  return (
    <>
      <div className="MovieInfo_Box1">
        <div className="Movie_Image">
          {/* <img src = "" /> */}
          영화 이미지
        </div>
      </div>

      <div className="MovieInfo_Box2">
        <div className="MoviePoster">
          {" "}
          영화 포스터 이미지
          {/* <img src = "" /> */}
        </div>
        <div>
          <li className="Poster_TitleResult">
            <span id="p_t">예매 순위 · </span>
            <span id="p_r">1위(33%)</span>&nbsp;&nbsp;&nbsp;
            <span id="p_t">개봉 · </span>
            <span id="p_r">3일째</span>&nbsp;&nbsp;&nbsp;
            <span id="p_t">누적 관객 · </span>
            <span id="p_r">27만명</span>
          </li>
          <div className="Movie">
            <ul>
              <li id="m_t">싱크홀</li>
              <li id="m_g">
                2020 &nbsp;· &nbsp;드라마/재난 &nbsp;·&nbsp; 한국
              </li>
            </ul>
            <hr />
            <div id="m_a">평균 💛2.4 (945명)</div>
            <hr />
            <div>
              <button class="btn_want">+ &nbsp;보고싶어요 </button>
            </div>
            <div class="updown"></div>
            <div class="addmovie">💛</div>
          </div>
        </div>
      </div>
      <div className="MovieInfo_Box3">
        <div class="MovieInfo">
          <div id="info_title">기본 정보</div>
          <div>
            
            {/* dataMovie 데이터 index에 따라 정보 받기..? */}
     
            {/* <div>{props.data}</div> */}

            <div>{dataMovie[0].rank_1} </div>
            <div>{dataMovie[2].rank_2} </div>

            {/* <MData[0].rank_1 /> */}

            <br />
            2020 · 한국 · 드라마 <br />
            1시간 53분 · 12세 <br />
            <br />
            사.상.초.유! 도심 속 초대형 재난 발생! 서울 입성과 함께 내 집 마련의
            꿈을 이룬 가장 `동원(김성균)`. 이사 첫날부터 프로 참견러
            `만수`(차승원)와 사사건건 부딪힌다. `동원`은 자가취득을 기념하며
            직장 동료들을 집들이에 초대하지만 행복한 단꿈도 잠시, 순식간에 빌라
            전체가 땅 속으로 떨어지고 만다. 마주치기만 하면 투닥거리는 빌라 주민
            `만수`와 `동원`.`동원`의 집들이에 왔던 `김대리`(이광수)와 인턴사원
            `은주`(김혜준)까지! 지하 500m 싱크홀 속으로 떨어진 이들은 과연
            무사히 빠져나갈 수 있을까? “한 500m 정도는 떨어진 것 같아” “우리…
            나갈 수 있을까요?”
          </div>
          <br />
          
          <hr id="info_hr" />
          <div>출연/제작</div>
          <hr id="info_hr" />
          <div>비슷한 작품</div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
