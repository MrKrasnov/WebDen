import React from "react";

const Main = (props) => {
    return(
        <section className="main">
            <h1 className="main-title">
                {props.text.title} <br/>
                By <span>{props.text.author}</span>
            </h1>
        </section>
    );
}

export default Main;