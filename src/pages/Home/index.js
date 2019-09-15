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

const answers = [];
const valueMap = [];

const Home = () => {
	const [quizCounter, setQuizCounter] = useState(0);
	const [quizShow, setQuizShow] = useState(true);
	const [data, setData] = useState();
	const resultsList = useRef(null);

	const adjustAnswers = () => {
		const keyWord = answers[answers.length - 1];
		data.Items && data.Items.forEach(item => {
			item.answers.forEach(answer => {
				if (answer == keyWord) {
					valueMap.push(item.city);
				}
			});
		});

		var counts = {};
		valueMap.forEach(function (x) {
			counts[x] = (counts[x] || 0) + 1;
		});

		const finalRes = Array.from(resultsList.current.children).sort(
			(a, b) => {
				if (counts[a.getAttribute("id")] == undefined) {
					counts[a.getAttribute("id")] = 0;
				}
				if (counts[b.getAttribute("id")] == undefined) {
					counts[b.getAttribute("id")] = 0;
				}
				return counts[a.getAttribute("id")] >
					counts[b.getAttribute("id")]
					? -1
					: 1;
			}
		);

		Array.from(resultsList.current.children).forEach(li => {
			li.querySelector(".value").innerHTML = `
               Relevancy factor: ${counts[li.getAttribute("id")]}
            `;
		});

		resultsList.current.innerHTML = "";

		finalRes.forEach(el => {
			resultsList.current.appendChild(el);
		});
	};
	const quizAnswer = e => {
		if (
			e.target.classList.contains("ans") &&
			quizCounter < quizQuestions.length - 1
		) {
			answers.push(e.target.text);
		} else if (
			e.target.classList.contains("ans") &&
			quizCounter == quizQuestions.length - 1
		) {
			answers.push(e.target.text);
			setQuizShow(false);
		}
		if (quizShow) {
			setQuizCounter(quizCounter + 1);
		}
	};
	const selectCity = e => {
		e.preventDefault();
		const city = e.target.getAttribute("data");
		if (city != "" && e.target.tagName == "A") {
			const url =
				"https://5ckmqqogri.execute-api.eu-central-1.amazonaws.com/development/mypostlambda";
			const data = { answers, city };

			fetch(url, {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(response =>
					console.log("Success:", JSON.stringify(response))
				)
				.catch(error => console.error("Error:", error));
		}
	};

	useEffect(() => {
		const url =
			"https://5ckmqqogri.execute-api.eu-central-1.amazonaws.com/development/mygetlambda";
		fetch(url)
			.then(response => response.json())
			.then(res => setData(res));
	}, []);

	useEffect(() => {
		if (quizCounter > 0) {
			adjustAnswers();
		}
	}, [quizCounter]);

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
								<a id="ans-1" className="ans">
									{quizQuestions[quizCounter].answers[0]}
								</a>
							</li>
							<li>
								<a id="ans-2" className="ans">
									{quizQuestions[quizCounter].answers[1]}
								</a>
							</li>
							<li>
								<a id="ans-3" className="ans">
									{quizQuestions[quizCounter].answers[2]}
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
			{quizCounter != 0 ? (
				<div
					className={`results ${
						quizCounter % 2 == 0 ? "even" : "odd"
						}`}
				>
					<h3>Top results:</h3>
					<div className={`results-list ${!quizShow ? "done" : "in-progress"}`}>
						<ul ref={resultsList} onClick={e => selectCity(e)}>
							<li id="Miami">
								<div>
									<img src="./MIA.jpg" />
									<div>
										<span>Miami</span>
										<span className="value"></span>
									</div>
								</div>

								<NavLink to="/book-a-flight?city=Miami" data="Miami">
									Check prices
								</NavLink>
							</li>
							<li id="Los Angeles">
								<div>
									<img src="./LAX.jpg" />
									<div>
										<span>Los Angeles</span>
										<span className="value"></span>
									</div>
								</div>

								<NavLink
									to="/book-a-flight?city=Los%20Angeles"
									data="Los Angeles"
								>
									Check prices
								</NavLink>
							</li>
							<li id="New York">
								<div>
									<img src="./JFK.jpg" />
									<div>
										<span>New York</span>
										<span className="value"></span>
									</div>
								</div>

								<NavLink
									to="/book-a-flight?city=New%20York"
									data="New York"
								>
									Check prices
								</NavLink>
							</li>
							<li id="New Delhi">
								<div>
									<img src="./DEL.jpg" />
									<div>
										<span>New Delhi</span>
										<span className="value"></span>
									</div>
								</div>

								<NavLink
									to="/book-a-flight?city=New%20Delhi"
									data="New Delhi"
								>
									Check prices
								</NavLink>
							</li>
							<li id="Tokyo">
								<div>
									<img src="./NRT.jpg" />
									<div>
										<span>Tokyo</span>
										<span className="value"></span>
									</div>
								</div>

								<NavLink to="/book-a-flight?city=Tokyo" data="Tokyo">
									Check prices
								</NavLink>
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
