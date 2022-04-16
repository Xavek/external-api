
import express, { Application, Request, Response } from "express";
import { HandleData } from "./controller";
import { logger } from "./logger";



/**
 * Initialized the express app to app of type Application: provided by express
 */
const app: Application = express()

/**
 * Declared the PORT number on which our express App would listen for request
 * Provided 5000 for testing purpose else should always acess port from env files especially in prod.
 */
const PORT:number = 5000

/**
 * StarshipURL provided by the Docs
 */
const StarshipURL = "https://swapi.dev/api/starships/9/"
const PeopleURL = "https://swapi.dev/api/people/5/"
const PlanetURL = "https://swapi.dev/api/planets/2/"
const getData = new HandleData(StarshipURL, PeopleURL,PlanetURL)







/**
 *  Simple GET method route. Serving or send response mostly in json.
 *  NOTE: Must place the req: param before res in callback function, else it will cause TYPE Error
 */

app.get("/", async(req:Request ,res:Response )=>{
    logger.info({msg:"Request to home route"})
    const responseData = await getData.getResponseFromStarshipURL()    
    res.json(responseData)
})

app.get("/darthvadar", async(req:Request, res:Response)=>{
    res.json({"data":"comming soon"})
})

/**
 * App would listen at given port currently at "http://localhost/5000/"
 */

app.listen(PORT, ()=>{
    console.log("Listening at port:5000")

})