import React from "react";
import "./index.scss";


export function Checkbox(props) {


    return (

        <div className="container coloured">

            <div className="checkbox">
                <label className="label-wrapper">
                    <input type="checkbox" /><span className="checkbox-material" ><span className="check"></span></span> One-way
        </label>
            </div>
        </div>
    );
};

