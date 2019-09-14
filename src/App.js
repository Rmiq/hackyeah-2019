import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.scss";
import './pages/placeAndLuggageBooker/bookPlaceAndLuggage.scss'

import Home from "./pages/Home";
import { FormCreator } from "./pages/FormCreator";
import DataTransfer from "./pages/DataTransfer";
import bookPlaceAndLuggage from "./pages/placeAndLuggageBooker/bookPlaceAndLuggage";
import History from "./pages/History";

const App = () => {
	return (
		<div className="app">
			<Router>
				<header className="app-header">
					<a className="menu-button">
						<i className="fa fa-bars"></i>
					</a>
					<NavLink exact to="/">
						<img src="./logo_lot_en.svg" />
					</NavLink>
					<div className="app-navigation">
						<ul>
							<li>
								<NavLink exact to="/forms">
									Book a flight
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/transfer">
									Deals & offers
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/history">
									Prepare for travel
								</NavLink>
							</li>
							<li>
								<a>Customer service</a>
							</li>
							<li>
								<a>Miles & More</a>
							</li>
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
					<Route path="/forms" exact component={FormCreator} />
                    <Route path="/transfer" exact component={bookPlaceAndLuggage} />
					<Route path="/history" exact component={History} />
				</section>
			</Router>
		</div>
	);
};

export default App;
