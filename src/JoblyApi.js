import axios from "axios";

const BASE_API_URL = "http://localhost:3001";

class JoblyApi {

    // Gets from path
    static async getFromPath( path, secondPath ){
      const result = await axios.get(`${BASE_API_URL}/${path}${secondPath}`);
      if( secondPath !== '' ){
        return result.data.company;
      }
      return result.data[path];
    }
    
    // Post from path for login
    static async loginOnPath( path, user ){
      const result = await axios.post(
        `${BASE_API_URL}/auth/${path}`, 
        user);
      return result.data.token;
    }

    // Get user
    static async getUser( username, token ){
      const result = await axios.get(
        `${BASE_API_URL}/users/${username}`, 
        {headers: {
          'authorization': token
        }});
      return result.data.user;
    }

    static async patchUser( user, token ){
      let newUser = {...user};
      delete newUser.username;
      const result = await axios.patch(`${BASE_API_URL}/users/${user.username}`, 
      newUser,
      {headers: {
        'authorization': token
      }});
      return result.data.user;
    }
  }
  
  export default JoblyApi;
  