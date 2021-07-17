import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Home() {
    return (
        <div className="Home">
            <div className="title">
                <h1>
                    <p>
                        hi
                    </p>
                    <p>
                        I am Adarsh
                    </p>
                    <p>
                        Software developer
                    </p>

                </h1>
                <Link to="/about">
                    <button>More information</button>

                    <Link to='/service'>
                    <button>service</button>

                    
                    </Link>

                </Link>
            </div>
            <div className="person">
                {/* <img src={}
    alt="person picture"/> */}
            </div>

        </div>

    )
}
export default Home