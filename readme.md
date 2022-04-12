## This is the Simple external API call project.

### Pre-requisites

- Node.js v14.x
- NPM
- Docker and Docker-Compose

### Installation

```bash
$ git clone git@github.com: gautam2002/external-api.git
$ cd external-api
$ npm install
$ docker-compose -f docker-compose.dev.yml up
```

### Endpoints

GET|`http://localhost:5000/`|JSON data format

```
{
"starship":
    {
    "name":"Death Star",
    "classs":"Deep Space Mobile Battlestation",
    "model":"DS-1 Orbital Battle Station"
    },
"crew":"342,953",
"isLeiaOnPlanet":true
}
```
