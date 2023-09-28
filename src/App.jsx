import { useState } from "react";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";

export default function App() {
  const [query, setQuery] = useState("");
  const [lengthMovie, setLengthMovie] = useState("");
  const [idmovie, setIdmovie] = useState("");
  const lengthMovies = (data) => {
    setLengthMovie(data);
  };
  const handleIdmovie = (id) => {
    setIdmovie(id);
  };
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input className="search" type="text" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <p className="num-results">
          Found <strong>{lengthMovie ? lengthMovie : 0}</strong> results
        </p>
      </nav>

      <main className="main">
        <LeftBox querydata={query ? query : "tarifnashode"} backsize={lengthMovies} backIdmovie={handleIdmovie} />
        <RightBox id={idmovie} />
      </main>
    </>
  );
}
