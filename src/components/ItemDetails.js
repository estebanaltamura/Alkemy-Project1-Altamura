import "./ItemDetails.css"
import { useParams, Navigate } from "react-router-dom"
import { useState, useEffect, useRef, useContext } from "react"
import { loginContext } from "../context/LoginContextProvider";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios"



export const ItemDetails = ()=>{

    const {movieId} = useParams()
    const img = useRef()
    const [movie, setMovie] = useState({}) 
    const [isLoading, setIsLoading] = useState(true)
    const { isLogged } = useContext(loginContext)

    const imageErrorHandler = ()=>{ 
        img.current.src="https://i.postimg.cc/BZNQgg6T/noImage.jpg"
    }

    useEffect(()=>{
        setIsLoading(true)
        window.scrollTo(0,0)
        const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=d3c0215c2ca34a0fad2322c5e5f70ab4&language=en-US`
        fetch(endPoint)
             .then(res=>res.json())
             .then(res=>setMovie(res)) 
             .then(res=>setIsLoading(false))
    },[])

    
    
return(
    <>
        {isLogged 
        ?   
            <>
                {isLoading
                ?
                    <div className="spinnerContainer" >
                        <Spinner animation="border" role="status" className="spinner">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> 
                    </div>
                :
                    <div className="gridContainer">
                        <div className="grid">
                            <img className="poster" ref={img} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="..." onError={imageErrorHandler} />
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
        :
        <Navigate to="/" /> 
        }
    </>
    )

        
      
}