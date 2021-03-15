import axios from "axios";

const BASE_API_URL = "http://localhost:3001";

class JoblyApi {

    // Gets from path
    static async getFromPath( path, secondPath ){
      console.log(secondPath);
      const result = await axios.get(`${BASE_API_URL}/${path}${secondPath}`);
      if( secondPath !== '' ){
        return result.data.company;
      }
      return result.data[path];
    }
  
  }
  
  export default JoblyApi;
  