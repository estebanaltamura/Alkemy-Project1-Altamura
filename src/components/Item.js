import "./Item.css"
import {Link} from "react-router-dom"
import { useRef } from "react"


export const Item = ({movie})=>{
    const img = useRef()

    const imageErrorHandler = ()=>{ 
        img.current.src="https://i.postimg.cc/BZNQgg6T/noImage.jpg"
    }

    return(
        
            <div className="col col-xs-12 col-md-6 col-xl-4 col-xxl-3 itemBody"  >
                <div className="card" style={{"width": "18rem"}}>
                    <img ref={img} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="card-img-top cardImg" alt="..." onError={imageErrorHandler}/>
                    <div className="card-body cardBodyStyles">
                        <h5 className="card-title cardStyles">{movie.original_title}</h5>
                        <p className="textStyles card-text ">{movie.overview}</p>
                    </div>
                    <Link className="detailsButton" to={`/movie/${movie.id}`}>See Details</Link>
                </div>
            </div>
        
    )
} 