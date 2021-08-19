import React from 'react';
import '../MSearch.css';

const MovieSearch = () =>{
    return(
        <>
            <div className = "MovieSearch_box1">
            <div className = "movie_high_search_title">상위 검색 결과</div>
                <div className = "movie_high_search_name">
                    <div id = "img"><img alt="" src="" />movie title 1
                        <p>2001 · 한국</p>
                        <p>영화</p>
                    </div>
                    <div id = "img"><img alt="" src="" />movie title 2
                        <p>2002 · 한국</p>
                        <p>영화</p>
                    </div>
                    <div id = "img"><img alt="" src="" />movie title 3
                        <p>2003 · 한국</p>
                        <p>영화</p>
                    </div>
                    <div id = "img"><img alt="" src="" />movie title 4
                        <p>2004 · 한국</p>
                        <p>영화</p>
                    </div>
                    <div id = "img"><img alt="" src="" />movie title 5
                        <p>2005 · 한국</p>
                        <p>영화</p>
                    </div>
                    <div id = "img"><img alt="" src="" />movie title 6
                        <p>2006 · 한국</p>
                        <p>영화</p>
                    </div>
                </div>
            </div>
            <hr />

            <div className = "MovieSearch_box2">영화</div>
            <div className = "MovieSearch_box3">TV 프로그램</div>
            <div className = "MovieSearch_box4">책</div>
            <div className = "MovieSearch_box5">사용자</div>
        </>
    );
};

export default MovieSearch;