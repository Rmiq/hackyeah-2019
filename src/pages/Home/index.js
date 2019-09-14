import React, { useState, useEffect, useRef } from "react";
import "./index.scss";

const Home = () => {

	return (
		<div className="view view-home">
            <div className="user-quiz">
                <h2>1. What is your destination?</h2>
                <div className="answers">
                    <ul>
                        <li><a>Business Trip</a></li>
                        <li><a>City break</a></li>
                        <li><a>Holidays</a></li>
                    </ul>
                </div>
            </div>
            <div className="standard-search">
                <a>Use standard search</a>
            </div>
		</div>
	);
};

export default Home;
