import React from "react"
import { Link } from 'react-router-dom';
import SearchBar from "../components/searchbar";




export default function NavBar() { 

    return (
        <nav >
            <div >
                
            <Link to= "/activity"><button >Crear actividad turistica</button> </Link>

                 

                 <SearchBar/>

                 </div>
               
                
            
        </nav>
    )
}