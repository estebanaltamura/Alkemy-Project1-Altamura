import "./Item.css"
import {Link} from "react-router-dom"

export const Item = ({movie})=>{
    return(
        
            <div className="col col-xs-12 col-md-6 col-xl-4 col-xxl-3 itemBody"  >
                <div className="card" style={{"width": "18rem"}}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="card-img-top" alt="..." />
                    <div className="card-body cardBodyStyles">
                        <h5 className="card-title cardStyles">{movie.original_title}</h5>
                        <p className="textStyles card-text ">{movie.overview}</p>
                    </div>
                    <Link className="detailsButton" to={`/movie/${movie.id}`}>See Details</Link>
                </div>
            </div>
        
    )
} 