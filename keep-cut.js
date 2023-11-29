function cutFirst(str) {
    return str.substring(2)
}

function cutLast(str) {
    return str.substring(0, str.length - 2)
}

function cutFirstLast(str) {
    if (str.length <= 4) {
        return ''
    }
    return str.substring(2, str.length - 2)
}

function keepFirst(str) {
    return str.substring(0, 2)
}

function keepLast(str) {
    return str.substring(str.length - 2)
}

function keepFirstLast(str) {
    return str.substring(0, 2) + str.substring(str.length - 2)
}
