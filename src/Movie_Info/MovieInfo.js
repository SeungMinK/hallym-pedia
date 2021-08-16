import React, { useState } from 'react';
import styles from '../Movie_Info/Star.css';
// import StarRating from 'react-star-rating';

// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from "react-router-dom";


const MovieInfo = () => {
    const [movietitle, setMovieTitle] = useState('');
    const [moviegenre, setMovieGenre] = useState('');
    const [moviewant, setMovieWant] = useState('');
    const [star, setStar] = useState([false, false, false, false, false]);

    const starClick = (e, index) =>{
        e.preventDefault();
        let click = [ ...star];
        for(let i = 0; i < 5; i++){
            if(i <= index) {
                click[i] = true;
            }else{
                click[i] = false;
            }
        }
        setStar(click);
    };

    return (
        <>
            <div className = "Movie_Box1">
                <div className = "Movie_Image">
                    <img src = "" />
                </div>
            </div>

            <div className = "Movie_Box2"> 
                <div className = "MoviePoster">
                    <img src = "" />
                </div>
                <div className = "Movie">
                    <ul>
                        <li>{movietitle}</li>
                        <li>{moviegenre}</li>
                        <div>
                            <button onClick = {moviewant}>보고싶어요</button>
                        </div>
                        <div >
                            <p>평가하기</p>
                            <div>
                                <FaStar
                                    onClick = {(e) => starClick(e,0)}
                                    className = {starnum[0] ? styles.clickedStar : null}
                                />
                                <FaStar
                                    onClick = {(e) => starClick(e,1)}
                                    className = {starnum[1] ? styles.clickedStar : null}
                                />
                                <FaStar
                                    onClick = {(e) => starClick(e,2)}
                                    className = {starnum[2] ? styles.clickedStar : null}
                                />
                                <FaStar
                                    onClick = {(e) => starClick(e,3)}
                                    className = {starnum[3] ? styles.clickedStar : null}
                                />
                                <StarRating
                                    onClick = {(e) => starClick(e,4)}
                                    className = {starnum[4] ? styles.clickedStar : null}
                                />
                            </div>
                        </div>
                    </ul>
                </div>

            </div>
                영화 줄거리
            <div>
                영화 배우 및 감독
            </div>
            <div>
                관련 영화
            </div>
        </>
    );
};

export default MovieInfo;