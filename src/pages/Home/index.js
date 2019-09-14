import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./index.scss";

const quizQuestions = [
	{
		question: "2nd questions",
		answers: ["1", "2", "3"]
	},
	{
		question: "2nd questions",
		answers: ["1", "2", "3"]
	},
	{
		question: "2nd questions",
		answers: ["1", "2", "3"]
	}
];

const Home = () => {
	const { quizCounter, setQuizCounter } = useState(0);

	return (
		<div className="view view-home">
			<div className="user-quiz">
				<span>
					Answer those questions to help us find you a destination
				</span>
				<h2>What is the purpose of your flight?</h2>
				<div className="answers">
					<ul>
						<li>
							<a>Business Trip</a>
						</li>
						<li>
							<a>City break</a>
						</li>
						<li>
							<a>Holidays</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="results">
				<h3>Top results:</h3>
				<div className="results-list">
					<ul>
						<li>
							<div>
								<img src="./MIA.jpg" />
								<span>Miami</span>
							</div>

							<button>Check prices</button>
						</li>
						<li>
							<div>
								<img src="./LAX.jpg" />
								<span>Los Angeles</span>
							</div>

							<button>Check prices</button>
						</li>
						<li>
							<div>
								<img src="./JFK.jpg" />
								<span>New York</span>
							</div>

							<button>Check prices</button>
						</li>
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
