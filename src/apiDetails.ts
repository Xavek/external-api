import axios from "axios"
/**
 * Function of Class Details is to leverage the GET the data for various defined class methods
 */
class Details {
    /**
     * 
     * @param url takes the starship provided url i.e.https://swapi.dev/api/starships/9/
     * @returns Promise<any> or Prmoise<Object> in the form of data
     */
    async starshipAllDetails(url:string){
        try {
            const {data} = await axios.get(url)
            return data
        } catch (error) {
            console.log(error)
            
        }
 
        
    
    }

    async peopleAllData(url:string):Promise<any>{
        try{
            const {data} = await axios.get(url)
            return data

        } catch(err){
            console.log(err)
        }

    }
    
}

export const apiDetails = new Details()
