import { useEffect, useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import { loginContext } from "../context/LoginContextProvider"
import Spinner from 'react-bootstrap/Spinner';

import { Item } from "./Item"

import "./ItemListContainer.css"

export const ItemListContainer = ()=>{

    const [movieData, setMovieData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { isLogged } = useContext(loginContext) 
    
    
    useEffect(()=>{
        setIsLoading(true)
        window.scrollTo(0,0)
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=d3c0215c2ca34a0fad2322c5e5f70ab4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
            .then(res=>res.json())
            .then(res=>setMovieData(res.results))
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
                    <div className="container containerStylesItemListContainer">
                        <div className="row rowStyles">
                            {
                                movieData.map((movie, index)=>{
                                    return <Item movie={movie} key={index}/> 
                                })
                            }
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

