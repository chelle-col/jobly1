

function formatError ( errorMessage ) {
    if( !errorMessage ){
        return;
    }
    const [ _instance, message ] = errorMessage.split('.');
    const arrayMessage = message.split(' ');
    return {
        name: arrayMessage[0],
        message: message
    }
}

export default formatError;