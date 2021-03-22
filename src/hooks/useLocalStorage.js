
const useLocalStorage = () =>{

    const TOKEN = 'token';
    const USERNAME = 'username';
    
    const getLocalUser =() => {
        const user = window.localStorage.getItem( USERNAME );
        if( user ){
            return user;
        }
        return undefined;
    }
    const getLocalToken = ( UNAUTHORIZED ) => {
        const token = window.localStorage.getItem( TOKEN );
        if( token ){
            return token;
        }
        return UNAUTHORIZED;
    }

    const setLocalToken = ( username, token ) => {
        window.localStorage.setItem( TOKEN, token );
        window.localStorage.setItem( USERNAME, username );
    }

    const removeLocalToken = () => {
        window.localStorage.clear();
    }

    return [ getLocalToken, setLocalToken, getLocalUser, removeLocalToken ];
}

export default useLocalStorage;