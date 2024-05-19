import GenreShow from "./components/GenreShow";
import NewRelaseS from "./components/NewRelaseS";
import PopularShows from "./components/PopularShows";
import TopRatedS from "./components/TopRatedS";
import TrendingShow from "./components/TrendingShow";



function Genre2() {
  
  return (
    <div className="all_genre"><div className="btn_d">
      <button className="btnm">Shows</button></div>
    <div className="moviess">
    
    <div className="genre-cont">
        <GenreShow/>
    </div>
    
    </div>
    <div className="moviess">
    
    <div className="genre-cont">
      <PopularShows/>
    </div>
    
    </div>
    <div className="moviess">
    
    <div className="genre-cont">
    <TrendingShow/>
    </div>
    
    </div>
    <div className="moviess">
    
    <div className="genre-cont">
    <NewRelaseS/>
    </div>
    
    </div>
    <div className="moviess">
    
    <div className="genre-cont">
    <TopRatedS/>
    </div>
    
    </div>
    </div>
  );
}

export default Genre2;
