import React from "react";
import "./FilmDesc.scss"
const FilmDesc = () => {
  return (
    <div className="FilmDesc">
      <h1 className="FilmDesc__title">Stranger Things</h1>
      <div className="FilmDesc__shortInfo">
        <div className="FilmDesc__shortInfo__data">2019 |</div>
        <div className="FilmDesc__shortInfo__director">
          Director: <span>Shawn Levy</span>
        </div>
        <div className="FilmDesc__shortInfo__seasons">| seasons: <span>3(5 Episodes)</span></div>
      </div>
      <div className="FilmDesc__desc"> In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</div>
    </div>
  );
};

export default FilmDesc;
