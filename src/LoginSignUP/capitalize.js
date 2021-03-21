
// Capitalizes the first letter in a string
function capitalize (str)  {
    const orgFirstLetter = str.charAt(0);
    const newFirstLetter = orgFirstLetter.toUpperCase();
    return str.replace(orgFirstLetter, newFirstLetter);
}

export default capitalize;