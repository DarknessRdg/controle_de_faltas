function fromString(string) {
    const dateSplit = string.split('/')
    const day = parseInt(dateSplit[0])
    const month = parseInt(dateSplit[1]) - 1
    const year = parseInt(dateSplit[2])

    return new Date(year, month, day)
}

function compare(first, second) {
    if (first.getTime() > second.getTime())
        return 1
    else if (first.getTime() < second.getTime())
        return - 1
    else
        return 0
}


export default {
    fromString,
    compare
}