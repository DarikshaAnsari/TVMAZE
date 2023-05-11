import React, { useEffect, useState } from "react";
import Cards from "../components/Card";
const Home = () => {
    const [shows,setShows]=useState([])
    const [page,setPage]=useState(1);
    
    
    
    //api call to render the home page
    const getData = async ()=>{
        const res=await fetch(
            `https://api.tvmaze.com/shows?page=${page}`
        )
        const data =await res.json();
        setShows((prev)=>[...prev,...data]);
        //console.log(shows);
    }
    const handleInfiniteScroll=async()=>{
        try {
            if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
              setPage((prev)=>prev+1);
            }
        } catch (error) {
            console.log(error);
        }
    }
   useEffect(()=>{
    getData();
   },[page])
   useEffect(()=>{
    window.addEventListener("scroll",handleInfiniteScroll);
    return ()=>window.removeEventListener("scroll",handleInfiniteScroll)
   },[])

  return ( 
        <div className="movie__list">
            <div className="list__cards">
                {
                    shows.map(show => (
                        <Cards show={show}></Cards>
                 ))
                }
            </div>
        </div>
  )
}

export default Home
