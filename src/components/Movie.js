import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres}){
    return(
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <div>
              <h2 className={styles.movie__title}> 
              <Link to={{pathname:`/movie/${id}`}}>{title}</Link>
              </h2>
            </div>
          
            <p>{summary.length>235 ? `${summary.slice(0,235)} ...` : summary}</p>
            <ul className={styles.movie__genres}>
              {genres.map((g)=>(
              <li key={g}>{g}</li>
              ))}
            </ul>
        </div>
    )
}

// Movie.PropTypes = {
//     id:PropTypes.number.isRequired,
//     coverImg:PropTypes.string.isRequired,
//     title:PropTypes.string.isRequired,
//     summary:PropTypes.string.isRequired,
//     genres:PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Movie;

//command + D -> code변수명 등 한번에 선택가능 여러번클릭 or 꾹누르기!