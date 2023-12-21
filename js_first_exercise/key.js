function findNestedValue(obj, key) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] === 'object') {
                if (key in obj[prop]) {
                    return obj[prop][key];
                } else {
                    const foundValue = findNestedValue(obj[prop], key);
                    if (foundValue !== undefined) {
                        return foundValue;
                    }
                }
            }
        }
    }
    return undefined; 
}


const inputObject = {
    a: {
        b: {
            c: 123,
            d: {
                e: 456,
                f: {
                    g: 789
                }
            }
        }
    }
};

const result = findNestedValue(inputObject, 'a');
console.log('The value corresponding to the key "a" is:', result);
