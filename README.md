# Tech-radar

This module is for the UI of the Tech-Radar. It lists the technologies, frameworks, tools, and methods complemented by an assessment result.

## Current State of Development

Ongoing


## Setup

# Prerequisites
 - Docker
 - Node.js - v14.15-alpine
 - Yarn
 - nvm


# Installation

 - Install NVM
 ```
 brew install nvm
 ```

 - Install and switch the Node.js versions
 ```
 nvm install 14.15-alpine
 nvm use 14.15
 nvm alias default 14.15
 ```

 - Clone the repo
 - yarn for package install


# Run application locally

 - Build the image 
 ```
 docker build -t tech-radar .
 ```

 - Run the container 
 ```
 docker run -it -p 3000:3000 -v `pwd`:/app tech-radar 
 ```

 - Open
 ```
 localhost:3000
 ```


