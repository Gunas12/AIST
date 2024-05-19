import React, { useState, useEffect } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
}

interface Genre {
  id: number;
  name: string;
}

function PopularShows() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genresPerPage, setGenresPerPage] = useState<number>(5); // Initial value for genres per page
  const cardsPerGenre = 4;
  const totalPages = 4;

  const apiKey = "2872128c1cdccd2dce197bbadac76051";
  const popularUrl = "https://api.themoviedb.org/3/discover/tv";
  const genreUrl = "https://api.themoviedb.org/3/genre/tv/list";

  useEffect(() => {
    fetchGenres();
    fetchMovies();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await axios.get(`${genreUrl}?api_key=${apiKey}`);
      let result = response.data.genres || [];

      // Ensure we have enough genres to fill the pages
      const totalGenresNeeded = totalPages * Math.ceil(result.length / totalPages);
      while (result.length < totalGenresNeeded) {
        result = result.concat(result.slice(0, 5));
      }

      setGenres(result);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${popularUrl}?api_key=${apiKey}`);
      setMovies(response.data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Pagination Logic
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  // Function to handle window resize
  const handleResize = () => {
    // Adjust genres per page based on screen size
    if (window.innerWidth <= 768) {
      setGenresPerPage(1); // Set genres per page to 1 for smaller screens (e.g., mobile devices)
    } else if (window.innerWidth <= 930) {
      setGenresPerPage(2); // Set genres per page to 2 for screens between 768px and 930px
    } else if (window.innerWidth <= 1250) {
      setGenresPerPage(3); // Set genres per page to 3 for screens between 930px and 1250px
    } else {
      setGenresPerPage(5); // Set genres per page to 5 for larger screens
    }
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Call handleResize initially to set genres per page based on initial screen size
    handleResize();
    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="head">
        <h2>Popular Top 10 In Genres</h2>
        <div className="pagination" >
          <button onClick={goToPreviousPage}><GrLinkPrevious style={{width: '26px', height: '26px'}}/></button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={pageNumber === currentPage ? "active" : ""}
              style={{
                width: '20px',
                height: '20px',
                border: '0',
                margin: '0',
                padding: '0',
                backgroundColor: '#0F0F0F',
                color: currentPage === pageNumber ? 'red' : ''
              }}
            >
              <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                </svg>
              </h1>
            </button>
          ))}
          <button onClick={goToNextPage}><GrLinkNext style={{width: '26px', height: '26px'}}/></button>
        </div>
      </div>
      <div className="genres-container" >
        {genres.slice((currentPage - 1) * genresPerPage, currentPage * genresPerPage).map((genre) => {
          const filteredMovies = movies.filter((movie) => movie.genre_ids.includes(genre.id));
          if (filteredMovies.length === 0) {
            return null;
          }
          return (
            <div key={genre.id} className="slider" >
              <div className="movies">
                <div className="movie-cards">
                  {Array.from({ length: cardsPerGenre }, (_, i) => filteredMovies[i % filteredMovies.length]).map((movie, index) => (
                    <div key={movie.id + '-' + index} className="movie-card">
                      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="titttle">
               <div><button className="topbtn">Top 10 In</button>
             <div className="bbb">
              <h1>{genre.name}</h1><GrLinkNext className="ico"/></div></div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularShows;
