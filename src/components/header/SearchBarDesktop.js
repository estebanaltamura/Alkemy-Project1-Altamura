import "./SearchBarDesktop.css"
import { BsSearch } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBarDesktop = ()=>{

const inputElement = useRef(null)
const history = useNavigate()

useEffect(()=>{
    inputElement.current.focus()
},[])

const searchSubmitHandler = (e)=>{
    e.preventDefault()
    history(`/results/${e.target.input.value}`)
    inputElement.current.value = ""
}

const searchIconCickHandler = (e)=>{
    history(`/results/${e.target.previousElementSibling.childNodes[0].value}`)
    inputElement.current.value = ""  
}

    return(
        <div className="searchBarDesktopContainer"> 
            <form onSubmit={searchSubmitHandler} autocomplete="off"> 
                <input ref={inputElement} name= "input" placeholder="Search Movies" className="searchInputDesktop"></input>
            </form>
            <BsSearch className="searchIconDesktop" onClick={searchIconCickHandler}/>
        </div>
    )
}