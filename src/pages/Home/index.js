import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./index.scss";

const quizQuestions = [
	{
		question: "What is the purpose of your flight?",
		answers: ["Business trip", "City break", "Holidays"]
	},
	{
		question: "2nd questions",
		answers: ["1", "2", "3"]
	},
	{
		question: "3rd questions",
		answers: ["1", "2", "3"]
	}
];

const profile = [];

const Home = () => {
	const [quizCounter, setQuizCounter] = useState(0);
	const [quizShow, setQuizShow] = useState(true);

	const quizAnswer = e => {
        console.log(quizCounter,quizQuestions.length - 1);
		if (
			e.target.classList.contains("ans") &&
			quizCounter < quizQuestions.length -1
		) {
			profile.push(e.target.text);
		} else if (
            e.target.classList.contains("ans") &&
			quizCounter == quizQuestions.length -1
        ){
            setQuizShow(false);
            profile.push(e.target.text);
            
            // Make post here
            console.log(profile);
		}
		if (quizCounter < quizQuestions.length - 1) {
			setQuizCounter(quizCounter + 1);
		}
	};

	return (
		<div className="view view-home">
			<div className="user-quiz">
				<span>
					Answer those questions to help us find you a destination
				</span>
				<h2>{quizQuestions[quizCounter].question}</h2>
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
			</div>
			{quizCounter != 0 ? (
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
