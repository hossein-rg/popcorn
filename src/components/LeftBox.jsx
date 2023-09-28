/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

function LeftBox(props) {
  const [movies, setMovies] = useState([]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [idmovie, setIdmovie] = useState("");

  const query = props.querydata;
  const KEY = "6502fbb3";
  useEffect(() => {
    setLoading(false);
    if (query.length < 3) {
      setMovies([]);
      setError("Too Many Result 🧨");
      return;
    }
    axios
      .get(`http://www.omdbapi.com/?s=${query}&apikey=${KEY}`)
      .then((res) => {
        setError("");
        if (res.status != 200) {
          throw new Error("something went wrong !");
        }
        const data = res.data;
        if (data.Response) {
          setMovies(data.Search);
          return data;
        } else {
          return;
        }
      })
      .then((response) => {
        setLoading(true);
        if (query == "tarifnashode" || response.Response == "False") {
          if (response.Response == "False" && query != "tarifnashode") {
            throw new Error(`${response.Error} 😒`);
          } else {
            throw new Error("Search Movie 🔎");
          }
        } else props.backsize(response.Search.length);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [props.querydata]);

  useEffect(() => {
    props.backIdmovie(idmovie);
  }, [idmovie]);

  const handleDetailMovie = (event) => {
    setIdmovie(event.target.dataset.movie);
  };

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && !loading && !error && <p className="loader">Loading ...</p>}
      {isOpen1 && loading && !error && (
        <ul className="list">
          {movies?.map((movie) => (
            <li data-movie={movie.imdbID} className="SearchMoviesli" onClick={handleDetailMovie} key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>🗓</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {isOpen1 && error && <p className="error">{error}</p>}
    </div>
  );
}

export default LeftBox;
