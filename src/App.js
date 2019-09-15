import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.scss";
import './pages/placeAndLuggageBooker/bookPlaceAndLuggage.scss'

import Home from "./pages/Home";
import { FormCreator } from "./pages/FormCreator";
import DataTransfer from "./pages/DataTransfer";
import bookPlaceAndLuggage from "./pages/placeAndLuggageBooker/bookPlaceAndLuggage";
import History from "./pages/History";
import Sitemap from "./pages/Sitemap";

const App = () => {
	const [active, setActive] = useState(false);

	const toggleActive = () => {
		active ? setActive(false) : setActive(true);
	};

	return (
		<div className="app">
			<Router>
				<header className="app-header">
					<a className="menu-button" onClick={e => toggleActive()}  >
						<i className="fa fa-bars"></i>
					</a>
					<NavLink exact to="/" onClick={e => setActive(false)}>
						<img src="./logo_lot_en.svg" />
					</NavLink>
					<div id='app-navigation' className={`app-navigation ${active ? 'activeNav' : ''}`}>
						<ul onClick={e => setActive(false)}>
							<li>
								<NavLink exact to="/">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/book-a-flight">
									Book a flight
								</NavLink>
							</li>
							{/* 	<li>
								<NavLink exact to="/choose-a-seat">
									Deals & offers
								</NavLink>
							</li> */}
							<li>
								<NavLink exact to="/history">
									Data
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/sitemap">
									Sitemap
								</NavLink>
							</li>
							{/* <li>
								<a>Customer service</a>
							</li>
							<li>
								<a>Miles & More</a>
							</li> */}
						</ul>
					</div>
					<div className="user-section">
						<i className="fa fa-user"></i>
						<span>
							Login
                        </span>
					</div>
				</header>

				<img className="background-image" src="./clouds.png" />
				<section className="app-content">
					<Route path="/" exact component={Home} />
					<Route path="/book-a-flight" exact component={FormCreator} />
					<Route path="/choose-a-seat" exact component={bookPlaceAndLuggage} />
					<Route path="/history" exact component={History} />
					<Route path="/sitemap" exact component={Sitemap} />
				</section>
			</Router>
		</div>
	);
};

export default App;
