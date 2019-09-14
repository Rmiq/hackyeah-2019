import React, { useState, useEffect } from "react";
import "./index.scss";

const History = () => {
	const [data, setData] = useState();

	useEffect(() => {
		const url = "https://5ckmqqogri.execute-api.eu-central-1.amazonaws.com/development/mygetlambda";
		fetch(url)
			.then(response => response.json())
			.then(res => setData(res));

	}, []);

	return (
		<div className="view view-history">
			<h2>History</h2>
			<div className="history-list">
				<table>
					<tr>
						<th>Purpose</th>
						<th>Age</th>
						<th>Climate</th>
						<th>Distance</th>
						<th>Price</th>
						<th>City</th>
					</tr>
					{data && data.Items.map(items => (
						<tr key={items.date}>
							<th>{items.answers[0]}</th>
							<th>{items.answers[1]}</th>
							<th>{items.answers[2]}</th>
							<th>{items.answers[3]}</th>
							<th>{items.answers[4]}</th>
							<th>{items.city}</th>	
						</tr>
					))}
				</table>
			</div>
		</div>
	);
};
export default History;
