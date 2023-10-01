/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import starimg from "../../assets/star-solid.svg";
import arrow from "../../assets/arrow-up.svg";
import axios from "axios";

function ShowSearchMovie(props) {
  const KEY = "6502fbb3";
  const refStars = useRef(null);
  const [stars, setStars] = useState(null);
  const [renderStars, setRenderStars] = useState(null);
  const [movieshow, setMovieshow] = useState([]);
  const [actors, setActors] = useState([]);
  const KEYtmdb =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDE3MTk4NDI4ZDkxZGZiYThlNWU1YTQ1OWU1Mjc1MiIsInN1YiI6IjY1MTkzMmYxYTE5OWE2MDBlMWZjN2JlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qjZkw5ryAz3bt9Jf-TRCmW947WKGwgTAze3TrsfGDRU";
  // image actors
  useEffect(() => {
    if (movieshow.Actors == undefined) return;
    const namesArray = movieshow.Actors.split(", ");
    namesArray.forEach((actor) => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/search/person",
        params: { query: actor, language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: KEYtmdb,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setActors((prevActor) => [...prevActor, ...response.data.results]);
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  }, [movieshow]);

  useEffect(() => {
    setStars(-1);
    setRenderStars(0);
    setMovieshow([]);
    setActors([]);
    const sendId = props.id;
    if (sendId == "") return;
    axios
      .get(`http://www.omdbapi.com/?i=${sendId}&apikey=${KEY}`)
      .then((res) => {
        setMovieshow(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id]);

  const handleCloseDetailMovie = () => {
    props.backArrow(0);
  };

  // -----start stars ----- //
  useEffect(() => {
    if (refStars.current == null) return;
    const starelement = refStars.current.children;
    for (let j = 9; j >= stars + 1; j--) {
      starelement[j].style.filter = "none";
    }
    for (let i = 0; i <= stars; i++) {
      let element = starelement[i];
      element.style.filter = "invert(64%) sepia(68%) saturate(1071%) hue-rotate(355deg) brightness(101%) contrast(103%)";
    }
  }, [stars]);
  const handleStars = (event) => {
    const list = event.target.parentElement.children;
    setRenderStars(Number(event.target.dataset.set) + 1);
    for (let j = 9; j >= Number(event.target.dataset.set); j--) {
      list[j].style.filter = "none";
    }
    for (let i = 0; i <= Number(event.target.dataset.set); i++) {
      let element = list[i];
      element.style.filter = "invert(64%) sepia(68%) saturate(1071%) hue-rotate(355deg) brightness(101%) contrast(103%)";
    }
  };
  const handleResetStars = (event) => {
    const list = event.target.parentElement.children;
    setRenderStars(stars + 1);
    // reset stars to select item
    for (let j = 9; j >= stars + 1; j--) {
      list[j].style.filter = "none";
    }
    for (let i = 0; i <= stars; i++) {
      let element = list[i];
      element.style.filter = "invert(64%) sepia(68%) saturate(1071%) hue-rotate(355deg) brightness(101%) contrast(103%)";
    }
  };
  const selectStar = (event) => {
    setStars(Number(event.target.dataset.set));
  };
  // -----end stars ----- //

  return (
    <div className="mainBox">
      {movieshow.Title == undefined ? (
        <p className="loader">Loading...</p>
      ) : (
        <>
          <img className="posterBox" src={movieshow.Poster} alt="" />
          <div className="shodowMainBox"></div>
          <img onClick={handleCloseDetailMovie} className="arrowIcon" src={arrow} alt="arrow-icon" />
          <div className="detailMovie">
            <h1>{movieshow.Title}</h1>
            <div className="timeandsec">
              <p>{movieshow.Genre}</p>
              <p>{movieshow.Runtime}</p>
            </div>
            <p className="imdbRate">⭐️ {movieshow.imdbRating} IMDb rating</p>
            <p>{movieshow.Actors}</p>
            <p className="textDetailMovie">{movieshow.Plot}</p>
            <div className="rateRightPage">
              <div className="yourRate">
                <p>your rating :</p>
                <div className="numberStar">
                  <div ref={refStars}>
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={0}
                      src={starimg}
                      alt="star"
                    />
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={1}
                      src={starimg}
                      alt="star"
                    />
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={2}
                      src={starimg}
                      alt="star"
                    />
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={3}
                      src={starimg}
                      alt="star"
                    />
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={4}
                      src={starimg}
                      alt="star"
                    />
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={5}
                      src={starimg}
                      alt="star"
                    />
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={6}
                      src={starimg}
                      alt="star"
                    />
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={7}
                      src={starimg}
                      alt="star"
                    />
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={8}
                      src={starimg}
                      alt="star"
                    />
                    <img
                      onMouseEnter={handleStars}
                      onMouseLeave={handleResetStars}
                      onClick={selectStar}
                      data-set={9}
                      src={starimg}
                      alt="star"
                    />
                  </div>
                  {renderStars == 0 ? <p></p> : <p>{renderStars}</p>}
                </div>
              </div>
              {stars == -1 ? <></> : <button className="whatchlist">+ Add To Watched Movies</button>}
            </div>
            {/* image actors */}
            <div className="imageActors">
              {actors.map((ele, i) => {
                console.log(ele);
                if (ele.profile_path == null) return;
                return <img key={i} src={`https://image.tmdb.org/t/p/w500${ele.profile_path}`} alt="" />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShowSearchMovie;
