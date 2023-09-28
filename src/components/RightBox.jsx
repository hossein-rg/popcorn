import { useState, useEffect, useRef } from "react";
import starimg from "../assets/star-solid.svg";
function RightBox() {
  const refStars = useRef(null);
  const [stars, setStars] = useState(null);
  const [renderStars, setRenderStars] = useState(null);
  // const tempWatchedData = [
  //   {
  //     imdbID: "tt1375666",
  //     Title: "Inception",
  //     Year: "2010",
  //     Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  //     runtime: 148,
  //     imdbRating: 8.8,
  //     userRating: 10,
  //   },
  //   {
  //     imdbID: "tt0088763",
  //     Title: "Back to the Future",
  //     Year: "1985",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  //     runtime: 116,
  //     imdbRating: 8.5,
  //     userRating: 9,
  //   },
  // ];

  // const [isOpen2, setIsOpen2] = useState(true);

  // const [watched, setWatched] = useState(tempWatchedData);

  // const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  // const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  // const avgUserRating = average(watched.map((movie) => movie.userRating));
  // const avgRuntime = average(watched.map((movie) => movie.runtime));

  useEffect(() => {
    const starelement = refStars.current.children;
    for (let i = 0; i < stars; i++) {
      let element = starelement[i];
      element.style.filter = "invert(64%) sepia(68%) saturate(1071%) hue-rotate(355deg) brightness(101%) contrast(103%)";
    }
  }, [stars]);

  const handleStars = (event) => {
    const list = event.target.parentElement.children;
    setRenderStars(Number(event.target.dataset.set) + 1);
    for (let j = 9; j > Number(event.target.dataset.set); j--) {
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
    for (let j = 9; j > stars; j--) {
      list[j].style.filter = "none";
    }
    for (let i = 0; i <= stars; i++) {
      let element = list[i];
      element.style.filter = "invert(64%) sepia(68%) saturate(1071%) hue-rotate(355deg) brightness(101%) contrast(103%)";
    }
  };
  const selectStar = (event) => {
    console.log(event.target.dataset.set);
    setStars(Number(event.target.dataset.set));
  };

  return (
    <>
      <div className="boxRight">
        <div className="mainBox">
          <img src="https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg" alt="" />
          <div className="shodowMainBox"></div>
          <div className="detailMovie">
            <h1>Spider-Man:Homecoming</h1>
            <div className="timeandsec">
              <p>Action, Adventure, Fantasy</p>
              <p>127 min</p>
            </div>
            <p className="imdbRate">⭐️ 8.8 IMDb rating</p>
            <p className="textDetailMovie">
              Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds
              himself on the trail of a new menace prowling the skies of New York City.
            </p>
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
                  <p>{renderStars}</p>
                </div>
              </div>
              <button className="whatchlist">+ Add To Watched Movies</button>
            </div>
          </div>
        </div>
        <div className="footerBox">
          <button>Users</button>
          <button>My Movies</button>
          <button>Funny</button>
        </div>
      </div>
    </>
  );
}

export default RightBox;

//         <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
// {isOpen2 ? "–" : "+"}
// </button>
// {isOpen2 && (
//   <>
//     <div className="summary">
//       <h2>Movies you watched</h2>
//       <div>
//         <p>
//           <span>#️⃣</span>
//           <span>{watched.length} movies</span>
//         </p>
//         <p>
//           <span>⭐️</span>
//           <span>{avgImdbRating}</span>
//         </p>
//         <p>
//           <span>🌟</span>
//           <span>{avgUserRating}</span>
//         </p>
//         <p>
//           <span>⏳</span>
//           <span>{avgRuntime} min</span>
//         </p>
//       </div>
//     </div>

//     <ul className="list">
//       {watched.map((movie) => (
//         <li key={movie.imdbID}>
//           <img src={movie.Poster} alt={`${movie.Title} poster`} />
//           <h3>{movie.Title}</h3>
//           <div>
//             <p>
//               <span>⭐️</span>
//               <span>{movie.imdbRating}</span>
//             </p>
//             <p>
//               <span>🌟</span>
//               <span>{movie.userRating}</span>
//             </p>
//             <p>
//               <span>⏳</span>
//               <span>{movie.runtime} min</span>
//             </p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   </>
// )}
