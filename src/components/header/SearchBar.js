
import { FiX } from "react-icons/fi"
import { useContext, useRef, useEffect } from "react"
import { headerSearchModeContext } from "../../context/headerSearchModeContext"
import { useNavigate } from "react-router-dom"



import "./SearchBar.css"

export const SearchBar = ()=>{
    const { setHeaderSearchMode } = useContext(headerSearchModeContext)
    const inputElement = useRef(null)
    const history = useNavigate()
    
    
    const searchSubmitHandler = (e)=>{
        e.preventDefault()
        setHeaderSearchMode(false)
        history(`/results/${e.target.input.value}`)
        inputElement.current.value = ""
    }
    

    useEffect(()=>{
        inputElement.current.focus() 
    },[])


    return(
        <div className="seachBarContainer">
            <form onSubmit={searchSubmitHandler} autocomplete="off"> 
                <input name= "input" ref={inputElement} placeholder="Search Movies" className="searchInput"></input>
            </form>
            <FiX className="closeSearchIcon" onClick={()=>setHeaderSearchMode(false)}/>
        </div> 
    )
}