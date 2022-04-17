import React from "react";
import "./styles/TopStore.css";

function TopStore(props) {
    return(
        <div className="topSelectPerPage">
            <select className="selectPerPage roboto-style" name="todosPerPage" id="todosPerPage" value={props.todosPerPage} onChange={props.handleChange}>
                <option value="10">10</option>
                <option value="6">6</option>
            </select>            
            <p className="text-totalregisters roboto-style">Total Registro: {props.totalRegisters}</p>
        </div>
    );
}

export default TopStore;