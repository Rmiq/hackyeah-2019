import React, { useState, useEffect } from "react";
import "./index.scss";

const History = () => {
	const [data, setData] = useState();

    const getDate = (time) => {
        return new Date(parseInt(time)).toLocaleString();
    }

    const sortByDate = (a,b) => {
        return a.date < b.date ? 1 : -1;
    }
	useEffect(() => {
		const url =
			"https://5ckmqqogri.execute-api.eu-central-1.amazonaws.com/development/mygetlambda";
		fetch(url)
			.then(response => response.json())
			.then(res => setData(res));
	}, []);

	return (
		<div className="view view-history">
			<h2>History</h2>
			<div className="history-list">
				<table>
					<thead>
						<tr>
                            <th>Date</th>
							<th>Purpose</th>
							<th>Age</th>
							<th>Climate</th>
							<th>Distance</th>
							<th>Price</th>
							<th>City</th>
						</tr>
					</thead>
					<tbody>
						{data &&
							data.Items.sort(sortByDate).map(items => (
								<tr key={items.date}>
                                    <th>{getDate(items.date)}</th>
									<th>{items.answers[0] != undefined? items.answers[0] : "-"}</th>
									<th>{items.answers[1] != undefined? items.answers[1] : "-"}</th>
									<th>{items.answers[2] != undefined? items.answers[2] : "-"}</th>
									<th>{items.answers[3] != undefined? items.answers[3] : "-"}</th>
									<th>{items.answers[4] != undefined? items.answers[4] : "-"}</th>
									<th>{items.city}</th>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default History;
