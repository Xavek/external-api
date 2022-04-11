import { FilterStarshipData } from "./apiDataFilter";
import { apiDetails } from "./apiDetails";
import { AttackDetails } from "./apiDataFilter";

export class HandleData{
    
    constructor(public starshipsURL: string, public peopleURL:string, public planetURL:string){

    }
    async getResponseFromStarshipURL():Promise<AttackDetails>{
        /**
         * Catching the Promise<object> directly from API details 
         */
        const apiResponse:object = await apiDetails.starshipAllDetails(this.starshipsURL)
        const peopleApiResponse = await apiDetails.peopleAllData(this.peopleURL)
        const {homeworld} = peopleApiResponse
        const filterData = new FilterStarshipData(apiResponse,homeworld === this.planetURL)
        /**
         * New Instance of apiDataFilter with providing the Promise<object> comming from apiDetails 
         * to constructor of FilterStarshipData
         */
      
        /**
         * Getting the Data from the filterData
         */
        const requiredData = filterData.getAttackDetails()
     
        return requiredData

    }

        
        




}

