/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyMovies from "./rightbox/MyMovies";
import ShowSearchMovie from "./rightbox/ShowSearchMovie";
function RightBox(props) {
  const [clickDetail, setClickDetail] = useState(1);
  useEffect(() => {
    props.id == "" ? setClickDetail(0) : setClickDetail(1);
  }, [props.id]);
  return (
    <div className="boxRight">
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
      <div className="footerBox">
        <button>Group</button>
        <button>My Movies</button>
        <button>Setting</button>
      </div>
    </div>
  );
}

export default RightBox;
