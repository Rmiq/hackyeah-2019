import React, { useState, useEffect, useRef } from "react";
import "./index.scss";

const QueryBuilder = () => {
	const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState("#customValue2 = :value2");
    const [APIKey, setAPIKey] = useState('API001');
	const [results, setResults] = useState([]);
	const [resultsMetadata, setResultsMetadata] = useState({
		executionTime: 0,
		resultsNumber: 0
    });
    const userAccessAPIKeyParent = ['DTC', 'Pharma'];
    const userAccessAPIKey = ['API001', 'API002'];
	const queryInput = useRef(null);

	const URL =
		"https://hqmiumn3m7.execute-api.eu-central-1.amazonaws.com/development/users";

	const fetchData = async () => {
        console.log("here",filter);
		let response = await fetch(`${URL}?API_KEY=${APIKey}&filter=${encodeURIComponent(filter)}`, {
			method: "GET",
			headers: {
				"Content-type": "application/json"
			}
		});
		let data = await response.json();
		return data;
	};

	const sendQuery = async () => {
		if (!isLoading) {
			setIsLoading(true);
			let data = await fetchData();
			console.log(data);
            setResults(data.body);
            setResultsMetadata(data.metadata);
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	};

	const listResults = results.map((row, index) => {
		return (
			<li key={`results_${index}`}>
				<div
					className="header"
					onClick={e => {
						e.currentTarget.parentNode
							.querySelector(".details")
							.classList.toggle("visible");
					}}
				>
					<i className="fas fa-plus-circle" />
					<h3>{row.UserID}</h3>
				</div>
				<div className={`details`}>
					{Object.keys(row).map(key => {
						return (
							<div key={`results_${key}`}>
								<span>{key}</span>
								<p>{row[key]}</p>
							</div>
						);
					})}
				</div>
			</li>
		);
	});

	useEffect(() => {}, [filter]);

	return (
		<div className="view view-queryBuilder">
			<h2>Query builder</h2>
			<div className="query-section">
                <select>
                    {/* <option value="" disabled selected>Select API key parent</option> */}
                    {userAccessAPIKeyParent.map(i=> {
                        return <option key={`option-api-key-parent_${i}`} value={i}>{i}</option>
                    })}
                </select>
                <select onChange={e=>setAPIKey(e.target.options[e.target.selectedIndex].value)}>
                    {/* <option value="" disabled selected>Select API key</option> */}
                    {userAccessAPIKey.map(i=> {
                        return <option key={`option-api-key_${i}`} value={i}>{i}</option>
                    })}
                </select>
                {/* <label htmlFor={'query-input'}>Filter expression</label> */}
				<input
					id="query-input"
					autoComplete="off"
					value={filter}
                    ref={queryInput}
					onChange={e => setFilter(e.target.value)}
				/>
				<button id="query-submit" onClick={sendQuery}>
					Search
				</button>
			</div>
			<div className="results-section">
				<h3>Metadata:</h3>
				<div className="metadata">
					<p>
						Execution Time:{" "}
						<span>{resultsMetadata.executionTime}</span>
					ms</p>
					<p>
						Total Results:{" "}
						<span>{resultsMetadata.resultsNumber}</span>
					</p>
				</div>
				<h3>Results:</h3>
				{isLoading ? "Loading..." : ""}
				{results.length && !isLoading ? (
					<div>
						<ul>{listResults}</ul>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default QueryBuilder;
