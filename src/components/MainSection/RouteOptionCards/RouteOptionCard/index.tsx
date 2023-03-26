import React from "react";
import { RouteInfo } from "../RouteOptionCards.type";
import "./RouteOptionCard.css";

interface RouteOptionCardProps {
  routeInfo: RouteInfo;
  onChooseRoute: (id: number) => void;
}

const RouteOptionCard = ( { routeInfo, onChooseRoute }: RouteOptionCardProps) => {
  
  const { id, start_time, end_time, transportation, estimated_price } = routeInfo;

  const handleClick = () => {
    onChooseRoute(id);
    };
  
    return (
      <li className="route-option-card card">
        <div>
          <div className="card-header">
            <div className="card-title">{`${start_time} - ${end_time}`}</div>
            <div className="card-transportation">{transportation.join(" + ")}</div>
          </div>
          <div className="card-body">
            <div className="card-price">${estimated_price.toFixed(2)}</div>
          </div>
        </div>
        <button className="card-btn" onClick={handleClick}>
          Choose
        </button>
      </li>
    );
};

export default RouteOptionCard;
