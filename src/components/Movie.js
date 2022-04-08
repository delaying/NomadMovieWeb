import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';

function Movie({id, coverImg, title, summary, genres}){
    return(
        <div>
            <img src={coverImg} alt={title}/>
            <h2> 
            <Link to={{pathname:`/movie/${id}`}}>{title}</Link>
            </h2>
            <p>{summary.length>235 ? `${summary.slice(0,235)}...` : summary}</p>
            <ul>
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