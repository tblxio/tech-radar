<img align='right' src="docs/media/tblx.png" width="88">

# tb.lx Tech Radar
tb.lx Tech Radar is a visualization tool designed to help track and manage technology adoption and innovation within our company. It provides an overview of the technologies, tools, platforms, and practices we're exploring, using, or phasing out across various stages of maturity.

Our Tech Radar concept draws inspiration from ThoughtWorks, and their well-known [Technology Radar](https://www.thoughtworks.com/radar). In addition, our project builds upon the open-source [tech-radar](https://github.com/zalando/tech-radar) project originally developed by Zalando under the MIT license. 

While we've retained some foundational elements of the Zalando project, we've expanded it significantly to meet our unique requirements, adding new automation features providing an enhanced collaboration experience.

You can access a preview of the radar [here](https://tblxio.github.io/tech-radar/).

## Workflow
The tech radar is built predicated on data entries specified in `/docs/data`

Entries are positioned automatically so that they don't overlap. 

The quadrants of the radar, and the order of the rings inside the radar will be drawn in the order as shown below:

| number    | ring       | quadrant               |
|-----------|------------|------------------------|
| 0         | Adopt      | Languages              |
| 1         | Trial      | Tools                  |
| 2         | Assess     | Frameworks & Libraries |
| 3         | Hold       | Platforms              |

### Setting up new data
For a new Technology Radar release, create a folder under /docs/data with the name of the release. In each release folder create a file in Markdown format (.md) with the same name and place the information there.

The data must conform to the format below for the radar to be generated correctly. Each file has a [front-matter](https://github.com/jxson/front-matter) header where the attributes of the item are listed and are passed down to the radar.

```
---
label: Item name
quadrant: 2
ring : 1
moved: 0
---

# Item name

Description text goes here.
```

Following front-matter attributes are possible:

- label: Name of the Item
- quadrant: 0,1,2,3 (counting clockwise, starting from bottom right) 
- ring: 0,1,2,3 (starting from inside)
- moved:
  - -1 = moved out (triangle pointing down)
  -  0 = not moved (circle)
  -  1 = moved in  (triangle pointing up)

The name of the Markdown file acts as item identifier and may overwrite items with the same name from older releases.

If an item is overwritten in a new release, the attributes from the new item are merged with the old ones and a new history entry is created for that item.

After setting up your data you need to run `yarn parse` to output the data to the radar.

## Setup

  ### Prerequisites
  - [Node.js](https://nodejs.org/en/)
  - [yarn](https://classic.yarnpkg.com/en/docs/install/)
  - [Docker](https://www.docker.com/)

  ### Installation
  - clone the repo
  - `yarn` for dependencies installation

  ### Commands
  - `yarn start` for webpack-dev-server
  - `yarn parse` to convert markdown data to JSON

  ### Running with Docker 
  - `docker-compose up` to run the container
  - Open local dev server in http://localhost:3000
  - Open Browser-sync in http://localhost:3001

## Versioning
  
We use [SemVer](http://semver.org/) for versioning.


## Licensing
This project is released under the MIT License. It incorporates code and ideas from the Zalando tech-radar project © Zalando SE, as well as substantial additional work © 2020 tb.lx by Daimler Truck.


