import React, { Component } from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class Slider extends Component {
  
  render() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
      <div>
        <Slick {...settings}>
          
          <div>
            
            <div className="slider">
              
              <ul className="slider-list">
                <li>
                  <span className="slider-list-active">{this.props.text.list[0].id} </span>
                  <span className="slider-list-span"></span>  
                  <span className="debug active-mobile"> {this.props.text.list[0].text}</span>
                </li>
                <li>
                  <span>{this.props.text.list[1].id} </span>
                  <span className="slider-list-span"></span>  
                  <span> {this.props.text.list[1].text}</span>
                </li>
                <li>
                  <span>{this.props.text.list[2].id} </span>
                  <span className="slider-list-span"></span>  
                  <span> {this.props.text.list[2].text}</span>
                </li>
                <li>
                  <span>{this.props.text.list[3].id} </span>
                  <span className="slider-list-span"></span> 
                  <span> {this.props.text.list[3].text}</span>
                </li>
              </ul>
              
              <div className="slider-content">
                <div>
                  <div className="slider-content-image">
                  </div>
                </div>
                <div>
                  <h3>{this.props.text.list[0].text}</h3>
                  {this.props.text.distribution}
                </div>

              </div>
              
            </div>
            <div className="slider-id">01/04</div>

          </div>
         
          <div>
          <div className="slider">
              
              <ul className="slider-list">
                <li>
                  <span>{this.props.text.list[0].id} </span>
                  <span className="slider-list-span"></span>  
                  <span className="debug"> {this.props.text.list[0].text}</span>
                </li>
                <li>
                  <span className="slider-list-active">{this.props.text.list[1].id} </span>
                  <span className="slider-list-span"></span>  
                  <span className="active-mobile"> {this.props.text.list[1].text}</span>
                </li>
                <li>
                  <span>{this.props.text.list[2].id} </span>
                  <span className="slider-list-span"></span>  
                  <span> {this.props.text.list[2].text}</span>
                </li>
                <li>
                  <span>{this.props.text.list[3].id} </span>
                  <span className="slider-list-span"></span> 
                  <span> {this.props.text.list[3].text}</span>
                </li>
              </ul>
              
              <div className="slider-content">
                <div>
                  <div className="slider-content-image">
                  </div>
                </div>
                <div>
                  <h3>{this.props.text.list[1].text}</h3>
                  {this.props.text.distribution}
                </div>

              </div>
              
            </div>
            <div className="slider-id mobile-id">02/04</div>
          </div>
          <div>
          <div className="slider">
              
              <ul className="slider-list">
                <li>
                  <span >{this.props.text.list[0].id} </span>
                  <span className="slider-list-span"></span>  
                  <span className="debug"> {this.props.text.list[0].text}</span>
                </li>
                <li>
                  <span>{this.props.text.list[1].id} </span>
                  <span className="slider-list-span"></span>  
                  <span> {this.props.text.list[1].text}</span>
                </li>
                <li>
                  <span className="slider-list-active">{this.props.text.list[2].id} </span>
                  <span className="slider-list-span"></span>  
                  <span className="active-mobile"> {this.props.text.list[2].text}</span>
                </li>
                <li>
                  <span>{this.props.text.list[3].id} </span>
                  <span className="slider-list-span"></span> 
                  <span> {this.props.text.list[3].text}</span>
                </li>
              </ul>
              
              <div className="slider-content">
                <div>
                  <div className="slider-content-image">
                  </div>
                </div>
                <div>
                  <h3>{this.props.text.list[2].text}</h3>
                  {this.props.text.distribution}
                </div>

              </div>
              
            </div>
            <div className="slider-id mobile-id iph4">03/04</div>
          </div>
          <div>
          <div className="slider">
              
              <ul className="slider-list">
                <li>
                  <span >{this.props.text.list[0].id} </span>
                  <span className="slider-list-span"></span>  
                  <span className="debug"> {this.props.text.list[0].text}</span>
                </li>
                <li>
                  <span>{this.props.text.list[1].id} </span>
                  <span className="slider-list-span"></span>  
                  <span> {this.props.text.list[1].text}</span>
                </li>
                <li>
                  <span>{this.props.text.list[2].id} </span>
                  <span className="slider-list-span"></span>  
                  <span> {this.props.text.list[2].text}</span>
                </li>
                <li>
                  <span className="slider-list-active">{this.props.text.list[3].id} </span>
                  <span className="slider-list-span"></span> 
                  <span className="active-mobile"> {this.props.text.list[3].text}</span>
                </li>
              </ul>
              
              <div className="slider-content">
                <div>
                  <div className="slider-content-image">
                  </div>
                </div>
                <div>
                  <h3>{this.props.text.list[3].text}</h3>
                  {this.props.text.distribution}
                </div>

              </div>
              
            </div>
            <div className="slider-id mobile-id iph4">04/04</div>
          </div>
        </Slick>
      </div>
    );
  }
}