import React, { useEffect } from "react";
import "./index.scss";

const History = () => {

	useEffect(() => {
		// const response = await fetch('https://5ckmqqogri.execute-api.eu-central-1.amazonaws.com/development/mygetlambda');
		// const data = await response.json();
		// console.log(data);
		const url = "https://5ckmqqogri.execute-api.eu-central-1.amazonaws.com/development/mygetlambda";
		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({ dataPlaces: data.body }));
	}, []);



	return (
		<div className="view view-history">
			<h2>History</h2>
			<div className="history-list">
				<ul>
					<li>
						<div>
							<span>14-09-2019 20:00:01</span>
							<span>User Name</span>
							<span>Read</span>
							<span>Query search for API001 with filter expression for customValue 2</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default History;
