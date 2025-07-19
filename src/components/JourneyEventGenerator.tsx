import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import JourneyEvent from './JourneyEvent';

const journeyEventsList = [
  {
    target: 'Scout',
    event: 'Landslide',
    details: 'A landslide blocks the path.',
    result: 'Detour required.'
  },
  {
    target: 'Hunter',
    event: 'Bridge Collapse',
    details: 'The bridge has collapsed overnight.',
    result: 'Find alternate crossing.'
  },
  {
    target: 'Lookout',
    event: 'Wildlife Sighting',
    details: 'A bear is spotted near the trail.',
    result: 'Wait until safe.'
  },
];

const getRandomEvent = () => {
  const idx = Math.floor(Math.random() * journeyEventsList.length);
  return journeyEventsList[idx];
};

const JourneyEventGenerator: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState({});
  const [log, setLog] = useState([journeyEventsList[0]]);
  const [eventCount, setEventCount] = useState(0)

  const handleRandomize = () => {
    const event = getRandomEvent();
    setCurrentEvent(event);
    setLog(prev => [event, ...prev]);
    setEventCount(eventCount + 1);
  };

  const handleNewJourney = () => {
    setEventCount(0);
    setCurrentEvent({})
    setLog([]);
  }

  return (
    <div>
      <div className="d-flex flex-row justify-content-center gap-1">
        <Button variant="contained" onClick={handleRandomize} sx={{ mb: 2 }}>
          Next Event
        </Button>
        <Button variant="contained" onClick={handleNewJourney} sx={{ mb: 2 }}>
          New Journey
        </Button>  
      </div>
      
      <JourneyEvent {...currentEvent} />
      <Accordion sx={{ mt: 3 }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="log-content"
          id="log-header"
        >
          <Typography component="span">Event Log ({eventCount})</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {log.length === 0 ? (
            <Typography>No past events.</Typography>
          ) : (
            log.map((event, idx) => (
              <div key={idx} style={{ marginBottom: 16 }}>
                <JourneyEvent {...event} />
              </div>
            ))
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default JourneyEventGenerator;
