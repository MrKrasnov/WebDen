import React from "react";

const Main = (props) => {
    return(
        <section className="main">
            <h1 className="main-title">
                {props.text.title} <br/>
                By <span>{props.text.author}</span>
            </h1>
            <input type="search" className="main-input" placeholder={props.text.placeholder}/>
            <button className="main-button"></button>
        </section>
    );
}

export default Main;