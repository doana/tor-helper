import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CasinoIcon from '@mui/icons-material/Casino';
import ExploreIcon from '@mui/icons-material/Explore';
import {Button, InputLabel, Select, MenuItem, FormControl} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select';


import JourneyEvent from './JourneyEvent';
import data from '../data/journey-data.json';

const journeyEventsList = data.events;
const targets = data.roles;
const event_types = data.event_types;

const JourneyEventGenerator: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState({});
  const [log, setLog] = useState([journeyEventsList[0]]);
  const [eventCount, setEventCount] = useState(0)
  const [region, setRegion] = useState("border");

  /**
   * Generate a random event based on the current region.
   * - Selects a random target (Scout, Lookout, or Hunter).
   * - Selects a random event type based on the region (Border, Wild, or Dark).
   * - Filters the events to find those that match the target and event type.
   * - Randomly selects one of the filtered events.
   * @returns 
   */
  const getRandomEvent = (): object => {
    const target = getRandomTarget();
    const event_type = getRandomEventType();
    const targeted_events = getRoleEvents(target, event_type);
    const idx = Math.floor(Math.random() * targeted_events.length);
    return targeted_events[idx];
  };

  /**
   * Filter events by a role (the event target) and the event type.
   * @param target String One of: Scout, Lookout, or Hunter
   * @param type String - One of Terrible Misfortune, Dispair, Ill Choices, Mishap, Short Cut, Chance Meeting, or Joyful Sight
   * @returns A filtered list of events that match the target and type.
   */
  const getRoleEvents = (target: string, type: string) => {
    return journeyEventsList.filter((event: object) => event.target == target && event.event == type )
  }

  /**
   * Randomly roll to determine the type of event based on the region. 
   * - Borderland rolls are favoured
   * - Wildland rolls are straight
   * - Darkland rolls are ill-favoured
   * @returns A random event type based on the region.
   */
  const getRandomEventType = () => {
    let event_type_idx1;
    let event_type_idx2;
    let event_type_idx;
    let event_type;

    switch (region) {
      case "border": 
        console.log('favoured event roll');
        event_type_idx1 = Math.floor(Math.random() * event_types.length);
        event_type_idx2 = Math.floor(Math.random() * event_types.length);
        event_type_idx = Math.max(event_type_idx1, event_type_idx2)
        event_type = event_types[event_type_idx];
        return event_type;

      case "wild":
        console.log('straight event roll');
        event_type_idx = Math.floor(Math.random() * event_types.length);
        event_type = event_types[event_type_idx];
        return event_type;

      case "dark":
        console.log('ill-favoured event roll');
        event_type_idx1 = Math.floor(Math.random() * event_types.length);
        event_type_idx2 = Math.floor(Math.random() * event_types.length);
        event_type_idx = Math.min(event_type_idx1, event_type_idx2)
        event_type = event_types[event_type_idx];
        return event_type
    }
  }

  /**
   * Randomly select a target from the list of targets (Scout, Hunter, or Lookout).
   * @returns A random target object from the targets list.
   */
  const getRandomTarget = () => {
    const target_idx = Math.floor(Math.random() * targets.length);
    const target = targets[target_idx];
    return target;
  }

  /**
   * Click handler for the "Next Event" button.
   * Generates a random event, updates the current event state, and adds the event to the log.
   */
  const handleRandomize = () => {
    const event = getRandomEvent();
    setCurrentEvent(event);
    setLog(prev => [event, ...prev]);
    setEventCount(log.length);
  };

  /**
   * Click handler for the "New Journey" button.
   * Resets the event count, current event, and log.
   */
  const handleNewJourney = () => {
    setEventCount(0);
    setCurrentEvent({})
    setLog([]);
  }

  const handleRegionChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  }

  return (
    <div>
      <div id="journey-form" className="d-flex flex-column justify-content-center align-items-center flex-grow-1 gap-1">
        <span className="region-wrapper d-flex flex-row align-items-center gap-1">
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="region-label">Region</InputLabel>
            <Select
              labelId="region-label"
              id="region"
              value={region}
              label="Region"
              onChange={handleRegionChange}
              >
              <MenuItem value={"border"}>Border Land</MenuItem>
              <MenuItem value={"wild"}>Wild Land</MenuItem>
              <MenuItem value={"dark"}>Dark Land</MenuItem>
            </Select>
          </FormControl>
          
        </span>
        <Button variant="contained" onClick={handleRandomize} startIcon={<CasinoIcon />}>
          Next Event
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
              <div key={idx} style={{ marginBottom: 16, borderBottom: '1px solid #ccc', paddingBottom: 8 }}>
                <JourneyEvent {...event} />
              </div>
            ))
          )}
        </AccordionDetails>
      </Accordion>

      <div className="mt-4 d-flex flex-row justify-content-end gap-1">
        <Button variant="contained" onClick={handleNewJourney} startIcon={<ExploreIcon />}>
          New Journey
        </Button>  
      </div>
    </div>
  );

  
};

export default JourneyEventGenerator;
