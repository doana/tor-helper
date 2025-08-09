import React, { useState } from 'react';
import CasinoIcon from '@mui/icons-material/Casino';
import {Button, InputLabel, Select, MenuItem, FormControl} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select';

import WeatherEvent from './WeatherEvent';
import data from '../data/weather-data.json';

const conditions = data.conditions;
const condition_distributions = data.condition_distribution;
const changes = data.changes;

/**
 * A weather generator component that allows users to select a season and starting weather condition, then generates and shifts weather conditions based on predefined rules.
 * This component is based on the "Weather on Journeys" rules by Aiden Harrison from the Circle of Noms suppliment collection. 
 */
const WeatherGenerator: React.FC = () => {
  const [currentSeason, setCurrentSeason] = useState("spring");
  const [currentWeather, setCurrentWeather] = useState("");
  const [startingWeather, setStartingWeather] = useState("random");

  const handleSeasonChange = (event: SelectChangeEvent) => {
    setCurrentSeason(event.target.value);
  };

  const handleStartingWeatherChange = (event: SelectChangeEvent) => {
    if (event.target.value === "random") {
      setStartingWeather(event.target.value);
      setCurrentWeather("");
    }
    else {
      setStartingWeather(event.target.value);
      setCurrentWeather(getWeatherDetails(currentSeason, event.target.value));
    }
  };

  /**
   * Click handler for the "Next Event" button.
   * Generates a random event, updates the current event state, and adds the event to the log.
   */
  const handleRandomize = () => {

    const season_data = data[currentSeason];

    if (!currentWeather) {
      console.log('Generating initial weather...');

      // If no starting conditions have been selected, randomly select one.
      if (startingWeather === "random") {
        const condition = randomCondition();
        setCurrentWeather(getWeatherDetails(currentSeason, condition));
      }
    }
    else {
      console.log("The weather shifts...");
      setCurrentWeather(shiftWeather());
    }
   
  };

  /**
   * Randomly selects a weather condition from the condition distributions.
   * @returns A random weather condition.
   */
  const randomCondition = () => {
    const change_index = Math.floor(Math.random() * condition_distributions.length);
    return condition_distributions[change_index];
  }

  /**
   * Shifts the current weather condition.
   * @returns an object containing the new weather condition, description, and effect.
   */
  const shiftWeather = () => {
    const current_index = conditions.indexOf(currentWeather.condition);

    const change_index = Math.floor(Math.random() * changes.length);
    let change_value = parseInt(changes[change_index]);

    /***
     * The default behaviour as defined in the suppliment tends to get "stuck" at the extremes since so many values result in a change of 0.
     */
    if ((current_index == 0 && change_value < 0) || (current_index == conditions.length - 1 && change_value > 0)) {
      change_value *= -1;
    }

    let new_index = current_index + change_value;

    // Make sure we're within the bounds of the conditions array. 
    if (new_index < 0) {
      new_index = 0;
    }
    if (new_index >= conditions.length) {
      new_index = conditions.length - 1;
    }

    const new_condition = conditions[new_index];

    return getWeatherDetails(currentSeason, new_condition);
  }

  /**
   * Retrieves the weather details for a given season and condition.
   * @param season - The current season (spring, summer, fall, winter).
   * @param condition - The weather condition to retrieve details for.
   * @returns An object containing the weather condition, description, and effect.
   */
  const getWeatherDetails = (season: string, condition: string) => {
    const season_data = data[currentSeason];
    const index = conditions.indexOf(condition);
    return season_data[index];
  }

  return (
    <div>
      <div id="journey-form" className="d-flex flex-column justify-content-center align-items-center flex-grow-1 gap-1">
        <span className="region-wrapper d-flex flex-row align-items-center gap-1">
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="season-label">Season</InputLabel>
            <Select
              labelId="season-label"
              id="season"
              value={currentSeason}
              label="Season"
              onChange={handleSeasonChange}
              >
              <MenuItem value={"spring"}>Spring</MenuItem>
              <MenuItem value={"summer"}>Summer</MenuItem>
              <MenuItem value={"fall"}>Fall</MenuItem>
              <MenuItem value={"winter"}>Winter</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="starting-weather-label">Start</InputLabel>
            <Select
              defaultValue={""}
              labelId="staring-weather-label"
              id="starting-weather"
              value={startingWeather}
              label="Start"
              onChange={handleStartingWeatherChange}
              >
              <MenuItem value={"random"}>Random</MenuItem>
              <MenuItem value={"terrible"}>Terrible</MenuItem>
              <MenuItem value={"poor"}>Poor</MenuItem>
              <MenuItem value={"normal"}>Normal</MenuItem>
              <MenuItem value={"fair"}>Fair</MenuItem>
              <MenuItem value={"ideal"}>Ideal</MenuItem>
            </Select>
          </FormControl>
          
        </span>
        <Button variant="contained" onClick={handleRandomize} startIcon={<CasinoIcon />}>
          Weather Change
        </Button>
      </div>
      
      <WeatherEvent {...currentWeather} />
  
    </div>
  );

  
};

export default WeatherGenerator;
