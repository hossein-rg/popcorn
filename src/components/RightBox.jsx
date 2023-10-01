/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "../assets/styles/rightbox/Rightbox.module.scss";
import MyMovies from "./rightbox/MyMovies";
import ShowSearchMovie from "./rightbox/ShowSearchMovie";
function RightBox(props) {
  const [clickDetail, setClickDetail] = useState(1);
  useEffect(() => {
    props.id == "" ? setClickDetail(0) : setClickDetail(1);
  }, [props.id]);
  return (
    <div className={styles.boxRight}>
      {clickDetail == 0 ? (
        <MyMovies />
      ) : (
        <ShowSearchMovie
          id={props.id}
          backArrow={(databack) => {
            setClickDetail(databack);
          }}
        />
      )}
      <div className={styles.footerBox}>
        <button>Users</button>
        <button>My Movies</button>
        <button>Genres</button>
      </div>
    </div>
  );
}

export default RightBox;
