import React from "react";

function Cards(props){
  return(
  <>
    <div className="cards">
        <div className="card">
            <img src= {props.imgsrc} alt="Myimg" className="card__img" />
            <div className="card__info">
            <h3 className="card__title">{props.title}</h3>
            <span className="card__category">{props.director}</span><br />
            <span className="card__category">{props.writer}</span><br />
            <span className="card__category">{props.star}</span>
                <a href={props.link}>
                    <button className="button">More Review</button>
                </a>
            </div>
        </div>
    </div>
  </>
  );
}



export default Cards;
