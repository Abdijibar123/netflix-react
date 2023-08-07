import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useState } from "react";
import axios from "axios";


function App() {
    
    const [movies, setMovies] = useState([])
    const [inputVal, setInputVal] = useState()

    const fetchOnClick = () => {
      axios.get(`https://api.tvmaze.com/search/shows?q=${inputVal}`)
           .then((res) => {
            setMovies(res.data)
            console.log(movies)
           });
    }

    const handleOnChange = (e) => {
        setInputVal(e.target.value)
    }


    return (
    <div className="App">
        <Header />
        <div className="main">
            <Search fetchOnClick={fetchOnClick} handleOnChange={handleOnChange}/>
            <div className="movies-section">
                {/* <!-- one card --> */}
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </div>
  </div>
 );
}

export default App;
