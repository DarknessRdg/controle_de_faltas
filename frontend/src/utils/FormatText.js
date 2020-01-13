function firstUpper(string) {
    if (!string)
        return ''
    else if (string.length === 1)
        return string.toUpperCase()
    else
        return string[0].toUpperCase() + string.slice(1)
}


function capitalize(string) {
    if (!string.includes(' '))
        return firstUpper(string)
    
    let split = string.split(' ')
    
    let stringFormated = ''
    split.forEach(sub => {
        stringFormated += " " + firstUpper(sub)
    });

    return stringFormated
}


export default {
    capitalize,
    firstUpper
}