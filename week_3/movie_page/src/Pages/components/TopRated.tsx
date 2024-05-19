import React, { useState, useEffect } from "react";
import axios from 'axios';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

interface Movies {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

function TopRated() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [cardsPerPage, setCardsPerPage] = useState<number>(5); // Number of cards per page
  const apiKey = "2872128c1cdccd2dce197bbadac76051";
  const popular = "https://api.themoviedb.org/3/movie/top_rated";

  useEffect(() => {
    fetchData();
    handleResize(); // Call handleResize initially to set cards per page based on initial screen size
    window.addEventListener('resize', handleResize); // Add event listener for window resize
    return () => window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(movies.length / cardsPerPage));
  }, [movies, cardsPerPage]);

  const fetchData = () => {
    axios.get(`${popular}?api_key=${apiKey}&page=1`)
      .then((response) => {
        const result = response.data.results;
        setMovies(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? totalPages : prevPage + 1));
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const maxButtons = 3; // Maximum number of pagination buttons to display
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(currentPage - half, 1);
    let end = start + maxButtons - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxButtons + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const filledStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<TiStarFullOutline key={i} style={{ color: '#e50000' }} />);
      } else if (hasHalfStar && i === filledStars) {
        stars.push(<TiStarHalfOutline key={i} style={{ color: '#e50000' }} />);
      } else {
        stars.push(<TiStarFullOutline key={i} style={{ color: '#C0C0C0' }} />);
      }
    }

    return stars;
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setCardsPerPage(1); // Set cards per page to 1 for smaller screens (e.g., mobile devices)
    } else if (window.innerWidth <= 930) {
      setCardsPerPage(2); // Set cards per page to 2 for screens between 768px and 930px
    } else if (window.innerWidth <= 1250) {
      setCardsPerPage(3); // Set cards per page to 3 for screens between 930px and 1250px
    } else {
      setCardsPerPage(5); // Set cards per page to 5 for larger screens
    }
  };

  return (
    <div>
      <div className="head">
        <h2>Must - Watch Movies</h2>
        <div className="pagination" >
          <button onClick={goToPreviousPage}><GrLinkPrevious style={{width: '26px', height: '26px'}}/></button>
          {getPageNumbers().map((pageNumber) => (
            <button key={pageNumber} onClick={() => paginate(pageNumber)} className={pageNumber === currentPage ? "active" : ""}
            style={{width: '20px', height: '20px', border: '0', margin: '0', padding:'0' ,backgroundColor:'#0F0F0F', color: currentPage === pageNumber ? 'red' : '' }}
            >
             <h1><svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
            </svg></h1>
            </button>
          ))}
          <button onClick={goToNextPage}><GrLinkNext style={{width: '26px', height: '26px'}}/></button>
        </div>
      </div>
      <div className='genres-container img_cart'>
        {movies.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).map((item) => (
          <div key={item.id} className="krt">
            {item.poster_path && (
              <img className="imgg" src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={`${item.title} Poster`} />
            )}
            <div className="relase">
             <p style={{textAlign: 'end'}}>{renderStars(item.vote_average)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRated;
