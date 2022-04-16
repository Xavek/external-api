import { logger } from "./logger";

export interface Starship{
    name:string;
    classs:string;
    model:string;
  
}

export interface AttackDetails{
    starship:Starship
    crew:number
    isLeiaOnPlanet: boolean
}

export class FilterStarshipData{
    name:string;
    classs:string;
    model:string;
    crew: number;
    isLeiaOnPlanet :boolean;
    /**
     * @param apiResponse : response from the API <data> from Controller.
     *
     */
    constructor(apiResponse:any, homeWorld:boolean){
        this.name = apiResponse.name
        this.classs = apiResponse.starship_class
        this.model = apiResponse.model
        this.crew = apiResponse.crew
        this.isLeiaOnPlanet = homeWorld

    }

    private getStarshipDetails():Starship{
      let  starshipdetails:Starship = {  
            name: this.name,
            classs: this.classs,
            model: this.model
        
        }
        return starshipdetails
        
  

        }
    public getAttackDetails(): AttackDetails{
        let fullAttackDetails: AttackDetails={
            starship: this.getStarshipDetails(),
            crew: this.crew,
            isLeiaOnPlanet: this.isLeiaOnPlanet
     
            
        } 
        logger.info({msg:"Filtered the Required Data", fullAttackDetails})
        return fullAttackDetails
    }
    
    

 


    






}





