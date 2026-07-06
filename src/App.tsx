import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import JourneyEventGenerator from './components/JourneyEventGenerator';
import WeatherGenerator from './components/WeatherGenerator';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <h1 className="title text-center">TOR Helper</h1>
      <div className="card w-8">
        <Accordion id="journeys">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="journey-content"
            id="journey-header"
          >
            <Typography component="span">Journey Events</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h2 className="text-center">Journey Events</h2>
            <JourneyEventGenerator />

          </AccordionDetails>
        </Accordion>
        <Accordion id="weather">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="weather-content"
            id="weather-header"
          >
            <Typography component="span">Weather</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h2 className="text-center">Weather on Journeys</h2>
            <WeatherGenerator />
          </AccordionDetails>
      </Accordion>
      </div>
    </ThemeProvider>
  )
}

export default App
