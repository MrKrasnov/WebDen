import React from "react";

const Footer = (props) => {
    return(
        <div>
            <h2 className="dist-title feedback">{props.feedback.feedback}</h2>
            <div className="feedback-content">
                <div>
                    <h4>КОНТАКТЫ</h4>
                    <h5>E-MAIL:</h5>
                    <p>{props.feedback.email}</p>
                    <div className="feedback-content-flex">
                        <div>
                            <h5>Teлефон</h5>
                            <p>{props.feedback.phone}</p>
                        </div>
                        <div>
                            <h5>Наш Skype:</h5>
                            <div className="feedback-content-flex-skype">
                                <div className="feedback-content-flex-skype-img"></div>
                                <div>{props.feedback.skype}</div>
                            </div>
                        </div>
                    </div>
                    <div className="feedback-content-sociale">
                        <h5 className="feedback-content-sociale-title">
                            CОЦИАЛЬНЫЕ СЕТИ
                        </h5>
                        
                        <div className="feedback-content-sociale-icon"><a href="/"></a></div>
                        <div className="feedback-content-sociale-icon"><a href="/"></a></div>
                        <div className="feedback-content-sociale-icon"><a href="/"></a></div>
                        <div className="feedback-content-sociale-icon"><a href="/"></a></div>
                        <div className="feedback-content-sociale-icon"><a href="/"></a></div>
                        <div className="feedback-content-sociale-icon"><a href="/"></a></div>
                        
                    </div>
                    <p className="feedback-content-author">
                        {props.feedback.defence}
                    </p>
                </div>
                <div className="feedback-content-form">
                    <form action="/">
                        <div className="feedback-content-form-flex">
                            <input />
                            <input />
                        </div>
                        <input />
                        <button></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;