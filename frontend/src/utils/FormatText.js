function capitalize(string) {
    let split = string.split(' ')
    
    let stringFormated = ''
    split.forEach(string => {
        stringFormated += string[0].toUpperCase() + string.slice(1).toLowerCase() + ' '
    });

    return stringFormated.trim()
}


function firstUpper(string) {
    return string[0].toUpperCase() + string.slice(1)
}



export default {
    capitalize,
    firstUpper
}