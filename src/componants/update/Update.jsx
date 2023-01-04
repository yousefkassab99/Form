import React from "react";
import {useEffect, useState} from "react";
import Movie from "../../movie/Movie"
// import Filter from '../Filter';
import { motion , AnimatePresence } from "framer-motion";
import "./update.css";


export default function Update() {
  
  const [popular , setPopular] = useState([]);//لانو الي راح يرجع من الفيتش اراي من الاوبجيكت
  const [filtered , setfiltered] = useState([]);//هادي بتجيب اجزاء منهم بس نحط على الباتون
  const [activeGenre , setactiveGenre] = useState(0);//للبتون كل ما نضغط على البتون وبتعمل يوز ايفيكت بالفيلتير

     



useEffect(()=>{
   fetchPopular();
},[])


const fetchPopular = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9d1b1b02523ac438422bcc4938cf06bc&language=en-US');
  const movies =await data.json();
  setPopular(movies.results)
  setfiltered(movies.results)

}
return (
  <div className="slider">
    <h2>NEW GAMES </h2>
     <div className='movies'>
     
          <motion.div 
          layout 
          className='popular-movies'
          >
            <AnimatePresence>
            {filtered.map((movie) => {
           return <Movie kry={movie.id} movie={movie}/>
          })}
            </AnimatePresence>
            
           
            

          </motion.div>
     </div>
     </div>
  );
}