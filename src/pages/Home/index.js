import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./index.scss";

const quizQuestions = [
	{
		question: "What is the purpose of your flight?",
		answers: ["Business trip", "City break", "Holidays"]
	},
	{
		question: "What age are you?",
		answers: ["<18", "18-25", ">25"]
	},
	{
		question: "What climate do you prefer?",
		answers: ["Tropical", "Continental", "Not relevant"]
	},
	{
		question: "How far would you like to go",
		answers: ["Close", "Medium", "Far away"]
	},
	{
		question: "What is the preferred price range?",
		answers: ["$ - $$ ", "$$ - $$$", "$$$ - $$$$"]
	}
];

const profile = [];

const Home = () => {
	const [quizCounter, setQuizCounter] = useState(0);
	const [quizShow, setQuizShow] = useState(true);

	const quizAnswer = e => {
		console.log(quizCounter, quizQuestions.length - 1);
		if (e.target.classList.contains("ans") && quizShow - 1) {
			profile.push(e.target.text);
		} else if (
			e.target.classList.contains("ans") &&
			quizCounter == quizQuestions.length - 1
		) {
			setQuizShow(false);

			// Make post here
			console.log(profile);
		}
		if (quizShow) {
			setQuizCounter(quizCounter + 1);
		}
	};

	return (
		<div className="view view-home">
			<div className={`user-quiz ${!quizShow ? "done" : "in-progress"} `}>
				{quizShow ? (
					<div>
						<span>
							Answer those questions to help us find you a
							destination
						</span>
						<h2>{quizQuestions[quizCounter].question}</h2>
					</div>
				) : (
					<h3>Destinations that match your preferences the best:</h3>
				)}

				{quizShow && (
					<div className="answers">
						<ul onClick={e => quizAnswer(e)}>
							<li>
								<a id="ans-1" class="ans">
									{quizQuestions[quizCounter].answers[0]}
								</a>
							</li>
							<li>
								<a id="ans-2" class="ans">
									{quizQuestions[quizCounter].answers[1]}
								</a>
							</li>
							<li>
								<a id="ans-3" class="ans">
									{quizQuestions[quizCounter].answers[2]}
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
			{quizCounter != 0 ? (
				<div className={`results ${quizCounter % 2 == 0 ? "even" : "odd"}`}>
					<h3>Top results:</h3>
					<div className="results-list">
						<ul>
							<li>
								<div>
									<img src="./MIA.jpg" />
									<span>Miami</span>
								</div>

								<NavLink to="/forms?city=Miami">Check prices</NavLink>
							</li>
							<li>
								<div>
									<img src="./LAX.jpg" />
									<span>Los Angeles</span>
								</div>

								<NavLink to="/forms?city=Los%20Angeles">Check prices</NavLink>
							</li>
							<li>
								<div>
									<img src="./JFK.jpg" />
									<span>New York</span>
								</div>

								<NavLink to="/forms?city=New%20York">Check prices</NavLink>
							</li>
                            {!quizShow && (<>
                            <li>
								<div>
									<img src="./DEL.jpg" />
									<span>New Delhi</span>
								</div>

								<NavLink to="/forms?city=New%20Delhi">Check prices</NavLink>
							</li>
                            <li>
								<div>
									<img src="./NRT.jpg" />
									<span>Tokyo</span>
								</div>

								<NavLink to="/forms?city=Tokyo">Check prices</NavLink>
							</li> </>)}
						</ul>
					</div>
				</div>
			) : (
				""
			)}

			<div className="standard-search">
				<span>or use a </span>
				<a>standard search</a>
			</div>
		</div>
	);
};

export default Home;
