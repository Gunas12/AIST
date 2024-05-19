import Movies from "./components/Movies";
import PopularMovies from "./components/PopularMovies";
import TrendingNow from "./components/TrendingNow";
import NewRelase from "./components/NewRelase";
import TopRated from "./components/TopRated";

function Genre1() {

  return (
    <div className="all_genre"><div className="btn_d">
      <button className="btnm">Movies</button></div>
    <div className="moviess">
    
    <div className="genre-cont">
      <Movies/>
    </div>
    
    </div>

    <div className="moviess">
    
    <div className="genre-cont">
      <PopularMovies/>
    </div>
    
    </div>
    <div className="moviess">
    
    <div className="genre-cont">
    <TrendingNow/>
    </div>
    
    </div>
    <div className="moviess">
    
    <div className="genre-cont">
    <NewRelase/>
    </div>
    
    </div>
    <div className="moviess">
    
    <div className="genre-cont">
    <TopRated/>
    </div>
    
    </div>

    
    </div>
  );
}

export default Genre1;
