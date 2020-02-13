import React from "react";

const Footer = (props) => {
    return(
        <div>
            <h2 className="dist-title feedback">{props.feedback.feedback}</h2>
        </div>
    );
}

export default Footer;