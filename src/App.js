import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home";
import { FormCreator } from "./pages/FormCreator";
import DataTransfer from "./pages/DataTransfer";
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
<<<<<<< HEAD
						<i className="fa fa-user"></i>
						<span>
							Login
                        </span>
=======
						<i class="fa fa-user"></i>
						<span>Login</span>
>>>>>>> 2d157a68e663d0687395029ef36785f37fe4e275
					</div>
				</header>

				<img className="background-image" src="./clouds.png" />
				<section className="app-content">
					<Route path="/" exact component={Home} />
					<Route path="/forms" exact component={FormCreator} />
					<Route path="/transfer" exact component={DataTransfer} />
					<Route path="/history" exact component={History} />
				</section>
			</Router>
		</div>
	);
};

export default App;
