import "./ItemDetails.css"
import { useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"



export const ItemDetails = ()=>{

    const {movieId} = useParams()
    
    const [movie, setMovie] = useState({}) 
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=d3c0215c2ca34a0fad2322c5e5f70ab4&language=en-US`
        fetch(endPoint)
             .then(res=>res.json())
             .then(res=>setMovie(res)) 
             .then(()=>setIsLoading(!isLoading))
    },[])

    
    
return(
        <>
            {
                isLoading ?
                    
                    <h1>LOADING...</h1>
            
                         :
                    <div className="gridContainer">
                        <div className="grid">
                            <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                            <h2  className="title"              >{movie.original_title}</h2>
                            <p   className="tagLine"            >{movie.tagline}</p>
                            <h3  className="descriptionLabel"   >Description</h3>
                            <p   className="descriptionText"    >{movie.overview}</p>
                            <p   className="genders"            >Genders: {movie.genres.map(element=>element.name).join(", ")}</p> 
                            <p   className="budgetrevenue"      >Budget: {movie.budget == 0 ? "N/A" : movie.budget} Revenue: {movie.revenue == 0 ? "N/A" : movie.revenue}</p>
                            <p   className="language"           >Original language: {movie.original_language.toUpperCase()}</p>
                        </div>    
                    </div>
            }   
        </>
    )

        
      
}