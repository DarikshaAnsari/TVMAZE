import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.tvmaze.com/shows/${id}`) 
        .then(res => res.json())
        .then(data => {setMovie(data)
        console.log(currentMovieDetail);
        })
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={currentMovieDetail && currentMovieDetail.image && currentMovieDetail.image.original} style={{opacity: 0.4}} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={currentMovieDetail ? currentMovieDetail.image.original : ""} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.name : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.language: ""}</div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Premiered: " + currentMovieDetail.premiered : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre">{genre}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.summary : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && <a href={currentMovieDetail.externals.tvrage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">TvRage<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && <a href={currentMovieDetail.externals.thetvdb} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__tvdb movie__Button">TheTvdb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__linkss">
                {
                    currentMovieDetail && <a href={currentMovieDetail.externals.imdb} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDB<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
             <Link to={`/${id}/user`} style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Book Show<i className="newTab fas fa-external-link-alt"></i></span></p></Link>
            </div>
        </div>
        
    )
}

export default Movie