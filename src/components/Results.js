import "./Results.css"
import { useEffect, useState, useContext } from "react"
import { Item } from "./Item"
import { Navigate, useParams } from "react-router-dom"
import { loginContext } from "../context/LoginContextProvider"



export const Results = ()=>{

    const [movieRequestResults, setMovieRequestResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { isLogged } = useContext(loginContext) 
    const { query } = useParams()
    

    useEffect(()=>{fetch(`https://api.themoviedb.org/3/search/movie?api_key=d3c0215c2ca34a0fad2322c5e5f70ab4&query=${query}`)
    .then(res=>res.json())
    .then(res=>setMovieRequestResults(res.results))
    .then(res=>setIsLoading(false))

    window.scrollTo(0,0)
    },[query])
   

    return(
        <>
            {isLogged ?
                <>
                    {
                        movieRequestResults.length == 0 && !isLoading
                        ? 
                            <div className="container containerStyles" >
                                <h3>{`No results for ${query}`}</h3>
                            </div>
                    
                        :
                                    
                        <div className="container containerStyles" >
                            <div className="row rowStyles">
                                {
                                    movieRequestResults.map((movie, index)=>{
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