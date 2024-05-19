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

function GenreShow() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genresPerPage, setGenresPerPage] = useState<number>(5); // Initial value for genres per page
  const cardsPerGenre = 4;

  const apiKey = "2872128c1cdccd2dce197bbadac76051";
  const popularUrl = "https://api.themoviedb.org/3/discover/tv";
  const genreUrl = "https://api.themoviedb.org/3/genre/tv/list";

  useEffect(() => {
    fetchGenres();
    fetchMovies();
  }, []);

  const fetchGenres = () => {
    axios.get(`${genreUrl}?api_key=${apiKey}`).then((response) => {
      const result = response.data.genres || [];
      setGenres(result);
    });
  };

  const fetchMovies = () => {
    axios.get(`${popularUrl}?api_key=${apiKey}`).then((response) => {
      const result = response.data.results || [];
      setMovies(result);
    });
  };

  // Pagination Logic
  const totalGenres = genres.length;
  const totalPages = Math.ceil(totalGenres / genresPerPage);

  const getCurrentGenres = () => {
    const startIndex = (currentPage - 1) * genresPerPage;
    const endIndex = Math.min(startIndex + genresPerPage, totalGenres);
    const repeatedGenres: Genre[] = [];
    for (let i = startIndex; i < endIndex; i++) {
      repeatedGenres.push(genres[i % totalGenres]);
    }
    return repeatedGenres;
  };

  const currentGenres = getCurrentGenres();

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
    if (window.innerWidth <= 700) {
      setGenresPerPage(1); // Set genres per page to 1 for smaller screens (e.g., mobile devices)
    } else if (window.innerWidth <= 930) {
      setGenresPerPage(2); // Set genres per page to 2 for screens between 768px and 930px
    } else if (window.innerWidth <= 1250) {
      setGenresPerPage(3); // Set genres per page to 3 for screens between 930px and 1200px
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
        <h2>Our Genres</h2>
        <div className="pagination">
          <button onClick={goToPreviousPage}><GrLinkPrevious style={{width: '26px', height: '26px'}}/></button>
          {Array.from({ length: totalPages }, (_, index) => (
            index < 3 && (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
                style={{width: '20px', height: '20px', border: '0', margin: '0', padding: '0' ,backgroundColor: '#0F0F0F', color: currentPage === index + 1 ? 'red' : '' }}
              >
                <h1><svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
            </svg></h1>
              </button>
            )
          ))}
          <button onClick={goToNextPage}><GrLinkNext style={{width: '26px', height: '26px'}}/></button>
        </div>
      </div>
      <div className="genres-container">
        {currentGenres.map((genre) => {
          const filteredMovies = movies.filter((movie) => movie.genre_ids.includes(genre.id));
          if (filteredMovies.length === 0) {
            return null;
          }
          return (
            <div key={genre.id} className={`slider ${selectedGenre === genre.id ? 'show' : 'hide'}`}>
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
                <h1>{genre.name}</h1><GrLinkNext className="ico"/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GenreShow;
