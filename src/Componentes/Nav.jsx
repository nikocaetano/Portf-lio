import React from "react";

export default function Nav({rota1, rota2, rota3}){
    return(
        <nav>
            <ul>
                <li to="/">{rota1}</li>
                <li to="/AboutMe">{rota2}</li>
                <li to="/Works">{rota3}</li>
            </ul>
        </nav>
    )
}