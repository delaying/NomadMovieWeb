import { useEffect, useState } from "react";
import Movie from '../components/Movie';
import styles from "./Home.module.css";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies]=useState([]);
    const getMovies = async()=>{
      const json = await(
        await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(()=>{
      getMovies();
    }, []);
    console.log(movies);
  
    //위랑 같으나 요즘엔 async await방식을 더 많이 사용함.
    // useEffect(()=>{
    //   fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    //     .then((response)=>response.json())
    //     .then((json)=>{
    //       setMovies(json.data.movies);
    //       setLoading(false);
    //     });
    // },[])
    
  
    return (
     <div className={styles.container}>
      {loading? (<div className={styles.loader}> <h1>Loading...</h1></div>) : 
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id} //매우중요함 key값 넣기.
              id={movie.id}
              coverImg={movie.medium_cover_image}  
              title={movie.title}
              summary={movie.summary}  
              genres={movie.genres}
            />
          ))}
          
        </div>
      }
     </div>
    );
}

export default Home;