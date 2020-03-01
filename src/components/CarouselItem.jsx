import React from "react";
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="gente"/>
        <div className="carousel-item__details">
            <div>
                <img src="images/play-icon.png" alt="play"/>
                <img src="images/plus-icon.png" alt="plus"/>
            </div>
            <p className="carousel-item__details--title">Titulo descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
    </div>
);

export default CarouselItem;