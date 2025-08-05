import React from 'react';

interface JourneyEventProps {
  target: string;
  event: string;
  details: string;
  result: string;
}

const JourneyEvent: React.FC<JourneyEventProps> = ({ target, event, details, result }) => {
  if(!target) {
    return <></>
  }
  
  return (
    <div className="journey-event d-flex flex-column">
      <span className="property d-flex flex-row gap-2">
        <span className="label fw-bold">Target:</span>
        <span className="value text-left">{target}</span>
      </span>
      <span className="property d-flex flex-row gap-2">
        <span className="label fw-bold">Event:</span>
        <span className="value text-left">{event}</span>
      </span>
      <span className="property d-flex flex-row gap-2">
        <span className="label fw-bold">Details:</span>
        <span className="value text-left">{details}</span>
      </span>
      <span className="property d-flex flex-row gap-2">
        <span className="label fw-bold">Result:</span>
        <span className="value text-left">{result}</span>
      </span>
    </div>
  );
};

export default JourneyEvent;
