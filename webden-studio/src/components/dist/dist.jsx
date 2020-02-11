import React from "react";

const Dist = (props) => {
    return(
        <section className="dist">
            <div className="container">
                {/* нужен контент внутри якоря, причину не знаю */}
                <a href="/" name="dist"> </a>
                <h2 className="dist-title">{props.content.title}</h2>
            </div>
        </section>
    );
}

export default Dist;