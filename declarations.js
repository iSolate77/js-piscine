const escapeStr = (str) => str.replace(/([`\\\/'"])/g, '\\$1')

const arr = [4, '2']

const obj = {
    str: 'string',
    num: 1,
    bool: true,
    undef: undefined,
}

const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'string',
        num: 1,
        bool: true,
    },
}
