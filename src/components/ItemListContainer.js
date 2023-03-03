import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { Item } from "./Item"
import { Navigate } from "react-router-dom"


export const ItemListContainer = ()=>{

    useEffect(()=>{fetch("https://api.themoviedb.org/3/discover/movie?api_key=d3c0215c2ca34a0fad2322c5e5f70ab4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
    .then(res=>res.json())
    .then(res=>setMovieData(res.results))

    },[])

    const [movieData, setMovieData] = useState([])

    return(
        <>
            
            <div className="container containerStyles">
                <div className="row rowStyles">
                    {
                        movieData.map((movie, index)=>{
                            return <Item movie={movie} key={index}/> 
                        })
                    }
            </div>
            </div>
            
              
                 
        </>
    )
}

