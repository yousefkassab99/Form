import React from "react";
import { useEffect, useState } from "react";
import Movie from "../../movie/Movie";
// import Filter from '../Filter';
import { motion, AnimatePresence } from "framer-motion";
import play1 from "../../assets/images/play1.png"
import play2 from "../../assets/images/play2.png"
import e from "../../assets/icons/e.png"
import e2 from "../../assets/icons/e2.png"
import e3 from "../../assets/icons/e3.png"
import e4 from "../../assets/icons/e4.png"
import fr from "../../assets/images/fr.png"
import "./update.css";

export default function Update() {
  const [popular, setPopular] = useState([]); 
  const [filtered, setfiltered] = useState([]); 
  const [activeGenre, setactiveGenre] = useState(0); 

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9d1b1b02523ac438422bcc4938cf06bc&language=en-US"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setfiltered(movies.results);
  };
  return (
    <div className="slider">
      <h2>NEW GAMES </h2>
      <div className="movies">
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {filtered.map((movie) => {
              return <Movie kry={movie.id} movie={movie} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="section2">
        <div className="firstdiv">
          <span className="span1">last played</span>
          <div className="list">
            <img src={e}   width = "50px"   height="50px"className="imgstyle" /><span className="spanstyle"> Hogwarts Legacy 50%
</span>
          </div>
          <div className="list">
            <img src={e2}  width = "50px"   height="50px" className="imgstyle"/> <span className="spanstyle">God Of War: Ragnarök 72.5%
</span>
          </div>
          <div className="list">
            <img src={e3} width = "50px"   height="50px" className="imgstyle"/> <span className="spanstyle">Crash Bandicoot N. Sane Trilogy 34%</span>
          </div>
          <div className="list">
            <img src={e4} width = "50px"   height="50px"  className="imgstyle"/> <span className="spanstyle">Dying Light 2 Stay Human 100%</span>
          </div>
        </div>

        <div className="seconddiv">
          <span className="span2">most recent trophy</span>
          <img src={play1} className="img2" width="578px" height="358px"/>
        </div>
        <div className="thirddiv">
          <span className="span3">friends</span>
          <img src={fr} width="239px" height="350px"/>
        </div>
      </div>
    </div>
  );
}