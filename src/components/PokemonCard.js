import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, frontImgUrl, backImgUrl }) {
  const [imageDirection, setImageDirection] = useState("front");

  function toggleImageDirection() {
    const newDirection = imageDirection === "front" ? "back" : "front";
    setImageDirection(newDirection);
  }

  const imageUrl = imageDirection === "front" ? frontImgUrl : backImgUrl;

  return (
    <Card onClick={toggleImageDirection}>
      <div>
        <div className="image">
          <img src={imageUrl} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
