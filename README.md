# TOR Helper

A Vite + React app to provide helpful tools for the Loremaster in [The One Ring 2e](https://freeleaguepublishing.com/games/the-one-ring/), a TTRPG published by Free League Publishing. This application asserts no ownership over The One Ring trademark, or any of the content in the game.

You can access this on the web at: https://doana.github.io/tor-helper/

## Setup
This app was built using nodejs v22.17.1. 

## Running the development server
Run `npm run dev`. The site will be available at http://localhost:5173/

## Building the production app
Run `npm run build` followed by `npm run preview` to build and run the app.

## Deploying
Run `npm run deploy`. This will build the app and push tot he gh-pages branch on GitHub. The app should then be available at https://doana.github.io/tor-helper/

## Owlbear Rodeo
While you can use this app as a standalone webapp, it was designed to be used as an extension in the Owlbear Rodeo VTT. To add it to your room:
1. Click the pencil icon to edit your room
2. Scroll to the bottom and click the "Manage" button under "Extensions"
3. Click the plus button in the top right. 
4. In the Install Link field, enter: "https://doana.github.io/tor-helper/manifest.json"
5. Click the "Add" button.
6. Edit your room again, and make sure that the TOR Helper extension is enabled.
7. Click the "Save" button.