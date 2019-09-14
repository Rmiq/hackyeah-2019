import React, { useState, useEffect, useRef } from "react";
import "./index.scss";

const Home = () => {

	return (
		<div className="view view-home">
            <div className="user-quiz">
                <span>Let us help you find a flight</span>
                <h2>What is your purpose of the flight?</h2>
                <div className="answers">
                    <ul>
                        <li><a>Business Trip</a></li>
                        <li><a>City break</a></li>
                        <li><a>Holidays</a></li>
                    </ul>
                </div>
            </div>
            <div className="standard-search">
                <span>or use a </span>
                <a>standard search</a>
            </div>
		</div>
	);
};

export default Home;
