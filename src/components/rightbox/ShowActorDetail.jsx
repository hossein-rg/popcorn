import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/rightbox/ShowActor.module.scss";
// eslint-disable-next-line react/prop-types
function ShowActorDetail({ actorId }) {
  const [actor, setActor] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/person",
      params: { query: actorId, include_adult: "true", language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDE3MTk4NDI4ZDkxZGZiYThlNWU1YTQ1OWU1Mjc1MiIsInN1YiI6IjY1MTkzMmYxYTE5OWE2MDBlMWZjN2JlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qjZkw5ryAz3bt9Jf-TRCmW947WKGwgTAze3TrsfGDRU",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setActor(response.data.results[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [actorId]);
  return (
    <div className={styles.container}>
      {actor.id == undefined ? (
        <p className={styles.loader}>Loading...</p>
      ) : (
        <>
          <div className={styles.containerBackimg}>
            <img className={styles.backImg} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
          </div>
          <div className={styles.actorDet}>
            {console.log(actor)}
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
            <div className={styles.actorNameBorn}>
              <p>{actor.name}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShowActorDetail;
