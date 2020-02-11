import React from "react";

const Main = (props) => {
    return(
        <section className="main">
            <h1 className="main-title">
                {props.text.title} <br/>
                By <span>{props.text.author}</span>
            </h1>
            <div>
                <input type="search" className="main-input" placeholder={props.text.placeholder}/>
                <button className="main-button"></button>
            </div>
            <div>
                <button className="main-submit">{props.text.button}</button>
            </div>
            <div className="main-border"></div>
            <a href="#dist" className="main-scroll">{props.text.scroll}</a> 
        </section>
    );
}

export default Main;