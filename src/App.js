import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home";
import FormCreator from "./pages/FormCreator";
import DataTransfer from "./pages/DataTransfer";
import History from "./pages/History";

const App = () => {
	return (
		<div className="app">
			<Router>
				<header className="app-header">
					<img src="./logo_lot_en.svg" />
					<div className="app-navigation">
						<ul>
							<li>
								<NavLink exact to="/">
									<i className="fas fa-search" />
									Query Builder
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/forms">
									<i className="fas fa-hammer" />
									Form Creator
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/transfer">
									<i className="fas fa-download" />
									Data Transfer
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/history">
									<i className="fas fa-history" />
									History
								</NavLink>
							</li>
						</ul>
					</div>
                    <div className="user-section">
                        

                    </div>
				</header>

                <img  className="background-image" src="./clouds.png"/>
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
