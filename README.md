# Tech-radar
This module is for the UI of the Tech-Radar. It lists the technologies, frameworks, tools, and methods complemented by an assessment result.

## Current State of Development
Ongoing

## Running with Docker
 - Build the image 
   docker build -t tech-radar .

 - Run the container 
   docker run -it -p 3000:3000 -p 3001:3001 -v `pwd`:/app tech-radar 

 - Open tech-radar in the browser window 
   http://localhost:3000

 - Open Browser-sync in the browser window 
   http://localhost:3001

## Setup for Development

### Prerequisites
 - Node.js - Consider using nvm 
 - [Yarn](https://yarnpkg.com/)

### Installation
 - Clone the repo
 - `yarn` - for dependencies installation
