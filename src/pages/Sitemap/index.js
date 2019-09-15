import React from "react";
import { Link } from 'react-router-dom';
import "./index.scss";

const Sitemap = () => {
    return (
        <div className="view view-sitemap">
            <h2>Sitemap</h2>
            <ul>
                <li>
                    <Link to="/">
                        Home
								</Link>
                </li>
                <li>
                    <Link to="/book-a-flight">
                        Book a flight
								</Link>
                </li>
                <li>
                    <Link to="/choose-a-seat">
                        Choose a seat
								</Link>
                </li>
                <li>
                    <Link to="/history">
                        History of bookings
								</Link>
                </li>
                <li>
                    <Link to="/thank-you-page">
                        Thank you page
								</Link>
                </li>

            </ul>
        </div>
    );
};

export default Sitemap;
