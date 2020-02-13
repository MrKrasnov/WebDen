import React from "react";
import Slider from "./slider";
import Footer from "./footer";
const Dist = (props) => {
    return(
        <section className="dist">
            <div className="container">
                {/* нужен контент внутри якоря, причину не знаю */}
                <a href="/" name="dist"> </a>
                <h2 className="dist-title">{props.content.title}</h2>
                <Slider text={props.content} />
                <Footer feedback={props.content}/>
            </div>
        </section>
    );
}

export default Dist;