import React from "react";
import "./styles/TextDevelopment.css";

function TextDevelopment({textDevelopment}) {
    return(
        <React.Fragment>
            <p className="text-development roboto-style">{textDevelopment}</p>
        </React.Fragment>
    );

}

export default TextDevelopment;