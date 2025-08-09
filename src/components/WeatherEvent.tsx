import React from 'react';

interface WeatherEventProps {
  condition: string;
  description: string;
  effect: string;
}

const WeatherEvent: React.FC<WeatherEventProps> = ({ condition, description, effect }) => {
  
  if (!description || !effect) {
    return <></>;
  }

  return (
    <div className="journey-event d-flex flex-column">
      <span className="property d-flex flex-row gap-2">
        <span className="label fw-bold">Description:</span>

        <span className="condition text-left">({condition})</span>
        <span className="description text-left">{description}</span>
        
      </span>
      <span className="property d-flex flex-row gap-2">
        <span className="label fw-bold">Effect:</span>
        <span className="value text-left">{effect}</span>
      </span>
    </div>
  );
};

export default WeatherEvent;
