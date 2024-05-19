import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';
import '@splidejs/react-splide/css';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { FaPlus, FaVolumeXmark } from "react-icons/fa6";
import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { IoVolumeMediumSharp } from "react-icons/io5";

function Slider() {
    interface Movies {
        id: number;
        title: string;
        poster_path: string;
        release_date: string;
        video_key: string;
        overview: string;
    }

    const [movies, setMovies] = useState<Movies[]>([]);
    const [showVideo, setShowVideo] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const apiKey = "2872128c1cdccd2dce197bbadac76051";
    const popular = "https://api.themoviedb.org/3/movie/popular";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${popular}?api_key=${apiKey}`).then((response) => {
            const result = response.data.results;
            setMovies(result);
        });
    };

    const handlePlayButtonClick = () => {
        setShowVideo(!showVideo);
        setIsPlaying(!isPlaying);
        setIsMuted(false);
    };

    const handleLikeButtonClick = () => {
        setIsLiked(!isLiked);
    };

    const handleSoundButtonClick = () => {
        setIsMuted(!isMuted);
    };

    const handleOverlayClick = () => {
        setShowVideo(false);
        setIsPlaying(false);
    };

    return (
        <div className="cont">
        <div className="slide-container">
      
                <Splide options={{
                    type: 'fade',
                    drag: true,
                    snap: true,
                    perPage: 1,
                    direction: 'ltr',
                    heightRatio: 0.7,
                    lazyLoad: 'nearby',
                                }}>
                     
                    {movies.map((item) => (
                        <SplideSlide key={item.id}>
                            <div className='movieContainer'>
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                                {showVideo && (
                                    <div className="overlay" onClick={handleOverlayClick}>
                                        <video controls autoPlay={isPlaying} muted={isMuted}>
                                            <source src={`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${apiKey}`} type="video/mp4" />
                                            Your browser does not support the video tag.
                                          
                                        </video>
                                    </div>
                                )}
                                <div className="button-container">
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.overview}</p>
                                    </div>
                                    <div className="buttons">
                                        <button className="play-button" onClick={handlePlayButtonClick}>
                                            {isPlaying ? <FaPause /> : <FaPlay />} {showVideo ? "Pause" : "Play Now"}
                                        </button>
                                        <button className="btn_n"><FaPlus style={{ width: '20px', height: '20px' }} /></button>
                                        <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLikeButtonClick}>{isLiked ? <AiFillLike style={{ width: '28px', height: '28px' }}/> : <AiOutlineLike style={{ width: '28px', height: '28px' }}/>}</button>
                                        <button className={`sound-button ${isMuted ? 'muted' : ''}`} onClick={handleSoundButtonClick}>{isMuted ? <FaVolumeXmark style={{ width: '28px', height: '28px' }}/> : <IoVolumeMediumSharp style={{ width: '28px', height: '28px' }}/>}</button>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                  
                </Splide>
               
               
            
        </div>
        </div>
    );
}

export default Slider;
