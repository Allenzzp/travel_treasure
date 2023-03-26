import React from "react";
import RouteOptionCard from "./RouteOptionCard";
import { RouteInfo } from "./RouteOptionCards.type";
import "./RouteOptionCards.css";

interface RouteOptionCardsProps {
  routeInfoCollection: RouteInfo[];
  onChooseRoute: (id: number) => void;
}

const RouteOptionCards: React.FC<RouteOptionCardsProps> = ({ routeInfoCollection, onChooseRoute }) => {
  return (
    <div className="route-option-cards-container container">
      <ul className="route-option-cards">
        {routeInfoCollection.map( routeInfo => (
          <RouteOptionCard 
            key={ routeInfo.id } 
            routeInfo={ routeInfo }
            onChooseRoute={ onChooseRoute }
          />
        ))}
      </ul>
    </div>
  );
};

export default RouteOptionCards;
