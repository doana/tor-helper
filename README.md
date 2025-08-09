# TOR Helper

A Vite + React app to provide helpful tools for the Loremaster in [The One Ring 2e](https://freeleaguepublishing.com/games/the-one-ring/), a TTRPG published by Free League Publishing. This application asserts no ownership over The One Ring trademark, or any of the content in the game.

You can access this on the web at: https://doana.github.io/tor-helper/

## Credits and Thanks
Much of the game systems built into this app are not my creation. I've just codified those rulesets into an easy to use app that can be integrated as an extension into the Owlbear Rodeo VTT.

 - The various Journey event types and descriptions were drawn from the Detailed Journey Events suppliment created by Dennis Detwiller.
 - The weather system was inspired by the Weather on Journeys suppliment written by Aiden Harrison.

I found both of these inside of the fabulous compendium of homebrewed suppliments: [The One Ring 2e Homebrew Materieals AKA Circle of Noms Homebrew Collection](https://bright-sun-games.itch.io/the-one-ring-2e-homebrew-materials).

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