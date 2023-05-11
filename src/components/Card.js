import React from "react"
import { Link } from "react-router-dom"

const Cards = ({show}) => {
    return <>
    {
         <Link to={`/show/${show && show.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={show && show.image && show.image.medium} />
                <div className="cards__overlay">
                    <div className="card__title">{show && show.name}</div>
                    <div className="card__runtime">
                                        {  show && show.type}
                        <span className="card__rating">
                                            {  show && show.rating.average}
                                            <i className="fas fa-star"></i>{" "}
                                        </span>
                    </div>
                    <div className="card__description">{show && show.summary.substr(0,200)}</div>
                </div>
            </div>
         </Link>
    }
    </>
}

export default Cards;