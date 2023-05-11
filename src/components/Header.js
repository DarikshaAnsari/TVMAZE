import React from "react";
import { Link } from "react-router-dom";

export const Header =()=>{
    return(
        <div className="header">
            <ul>
              <li><Link to="/">TvMaze</Link></li>
            </ul>
        </div>
    )
}