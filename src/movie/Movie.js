import React from 'react';
import {motion} from "framer-motion";
import "./movie.css"
function Movie({movie}) {
  return (
    <motion.div 
    layout 
    animate={{opacity : 1}} 
    initial = {{opacity: 0}} 
    exit ={{opacity:0}}
    transition={{duration :2}}//تاخير
   
    >
      
      <img src={'https://image.tmdb.org/t/p/w500' +  movie.backdrop_path} alt="" className='mov' />
    </motion.div>
  )
}

export default Movie
