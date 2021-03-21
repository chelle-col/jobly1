
const useLocalStorage = () =>{
    const getLocalToken = ( UNAUTHORIZED ) => {
        console.log('getting local token')
        const token = window.localStorage.getItem( 'token' );
        if( token ){
            return token;
        }
        return UNAUTHORIZED;
    }

    const setLocalToken = ( username, token ) => {
        console.log('setting local token')
        window.localStorage.setItem( username, token);
    }

    const removeLocalToken = () => {
        console.log('removing local token')
        window.localStorage.clear();
    }

    return [ getLocalToken, setLocalToken, removeLocalToken ];
}

export default useLocalStorage;