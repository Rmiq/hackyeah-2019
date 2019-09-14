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
                        <i class="fa fa-bars"></i>
                    </a>
					<img src="./logo_lot_en.svg" />
					<div className="app-navigation">
						<ul>
							<li>
								<NavLink exact to="/">
									Query Builder
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/forms">
									Form Creator
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/transfer">
									Data Transfer
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/history">
									History
								</NavLink>
							</li>
						</ul>
					</div>
<<<<<<< HEAD
					<div className="user-section">


					</div>
=======
                    <div className="user-section">
                    <i class="fa fa-user"></i>
                        <span>
                            Login
                        </span>
                    </div>
>>>>>>> 17734a88718b9178848f5b241e63bf2e603d80a0
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
