import React, {useState,useEffect} from "react";
import "./index.scss";

const History = () => {
	const [data, setData] = useState();

	useEffect(() => {
	    // const response = await fetch('https://5ckmqqogri.execute-api.eu-central-1.amazonaws.com/development/mygetlambda');
		// const data = await response.json();
		// console.log(data);
	   const url = "https://5ckmqqogri.execute-api.eu-central-1.amazonaws.com/development/mygetlambda";
       fetch(url)
           .then(response => response.json())
		   .then(res => setData(res));
		  
	}, []);
	
	console.log(data);

	return (
		<div className="view view-history">
			<h2>History</h2>
			<div className="history-list">
				<ul>
					<li>
							<span>Purpose</span>
							<span>Age</span>
							<span>Climat</span>
							<span>Distance</span>
							<span>Price</span>
					</li>
					{data && data.Items.map(items=> (
						<li key={items.date}>
							<span>{items.answers[0]}</span>
							<span>{items.answers[1]}</span>
							<span>{items.answers[2]}</span>
							<span>{items.answers[3]}</span>
							<span>{items.answers[4]}</span>
							<span>{items.answers[5]}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default History;
