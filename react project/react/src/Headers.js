import React, { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import api from './Api';

function Headers() {
    const navigate = useNavigate()
    const [active, setActive] = useState("")

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" >Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            {
                                api.map(({ name, li }, index) => (
                                    <li key={"api" + index}
                                        className={active === name ? "nav-link text-danger" :
                                            "nav-link"} style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            setActive(name)
                                            navigate(li)
                                        }}


                                    >
                                        {name}

                                    </li>

                                ))
                            }

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search" />

                            <button className="btn btn-primary" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Headers;

//function add(a){
//     return a+a
// }
// add (5)