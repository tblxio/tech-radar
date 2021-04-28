<img align='right' src="docs/media/tblx.png" width="88">

# Tech Radar UI
This module is for the UI of the Tech-Radar.
It lists the technologies, frameworks, tools, and methods complemented by an assessment result.

You can access a preview of the radar [here](https://pages.git.daimler.com/tblx/tech-radar-ui).

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

## Contributing
  
Please ensure your pull requests adheres to our [Code of Conduct](https://gsep.daimler.com/confluence/display/TDH/%28FE%29+-+Code+of+Conduct)
  
## Versioning
  
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://git.daimler.com/tdh/tech-radar-ui/tags).
  
## License
  
Licensed under [Daimler Inner Source License (ISL)](LICENSE.md)
  
For more info, see [Daimler FOSS](https://git.daimler.com/daimler-foss/daimler-inner-source-license)
