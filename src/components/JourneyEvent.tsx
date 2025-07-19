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
    <div className="d-flex flex-column">
      <span className="d-flex flex-row gap-1">
        <span className="label fw-bold">Target:</span>
        <span>{target}</span>
      </span>
      <span className="d-flex flex-row gap-1">
        <span className="label fw-bold">Event:</span>
        <span>{event}</span>
      </span>
      <span className="d-flex flex-row gap-1">
        <span className="label fw-bold">Details:</span>
        <span>{details}</span>
      </span>
      <span className="d-flex flex-row gap-1">
        <span className="label fw-bold">Result:</span>
        <span>{result}</span>
      </span>
    </div>
  );
};

export default JourneyEvent;
