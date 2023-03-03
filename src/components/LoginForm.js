import "./LoginForm.css"
import { React, useState, useEffect } from "react" 
import swal from '@sweetalert/with-react';
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const LoginForm = () => { 

   

    const history = useNavigate()
   
    const [userNameAlert, setUserNameAlert] = useState("")
    const [passwordAlert, setPasswordAlert] = useState("")
            
    const handleKeyDownUserName = (e) => {  
        setUserNameAlert("");
    } 

    const handleKeyDownPassword = (e) => { 
        setPasswordAlert("");
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()

        const userName = e.target.username.value
        const password =  e.target.password.value

        if (userName == "" && password == ""){
            setUserNameAlert("Ingrese un correo electronico")
            setPasswordAlert("Ingrese su password")
            return
        } 

        if (userName == ""){
            setUserNameAlert("Ingrese un correo electronico")
            return
        } 

        if (password == ""){
            setPasswordAlert("Ingrese su password")
            return
        } 

        const twoDotsRegExp = /\.{2,}/
        if(twoDotsRegExp.test(userName)){
            setUserNameAlert("No puede haber dos puntos (..) seguidos")
            return
        }  

        const dotAtStart = /^\.{1}/
        const dotAtEnd = /\.{1}@{1}/
        if(dotAtStart.test(userName) || dotAtEnd.test(userName)){
            setUserNameAlert("La direccion no puede empezar ni preceder al @ con un punto (.)")
            return
        }  

        const multiplesAt = /@.*@/
        if(multiplesAt.test(userName)){
            setUserNameAlert("No puede haber mas de un @")
            return
        }  
        
        const regExpUserName = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
        if(!regExpUserName.test(userName)){
            setUserNameAlert("Ingresar una direccion de email valida")
            return
        }  
        
        if (userName !== "challenge@alkemy.org" || password !== "react"){
            swal(
                    <h1>Nombre de usario y/o contraseña incorrectos</h1>
                )
            return
        }
        
        
        axios
            .post("http://challenge-react.alkemy.org", { email:userName, password:password })
            .then(res=>{
                localStorage.setItem("token",res.data.token)
                history("/listado")
            })
        
       
    }


    
    return (       
        <div className="loginContainer">
            <div className="form-container"> 
                <form action="/action_page.php" onSubmit={handleSubmit}> 
                    <span className="subtitle">USERNAME:</span>  
                    <input type="text" name="username" onKeyUp={handleKeyDownUserName} />
                    <span className="inputAlerts">{userNameAlert}</span>
                    <span className="subtitle">PASSWORD:</span>
                    <input type="password" name="password" onKeyUp={handleKeyDownPassword} />
                    <span className="inputAlerts">{passwordAlert}</span>
                    <button type="submit"  className="submit-btn">SIGN IN</button>
                </form>
            </div> 
        </div>
    ) 
}