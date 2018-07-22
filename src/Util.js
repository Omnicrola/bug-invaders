export function immutable(object, property, value) {
    Object.defineProperties(object,
        {
            [property]: {
                writeable: false,
                enumerable: true,
                value: value

            }
        });
}

export function isNum(value) {
    return !(isNaN(value) ||
        value === undefined ||
        value === null);
}

export function autobind(clazz, self) {
    Object.getOwnPropertyNames(clazz)
        .forEach(prop => {
            self[prop] = self[prop].bind(self);
        });
}

export function loadArray(length, defaultValue) {
    let newArray = [];
    for (let i = 0; i <= length; i++) {
        newArray.push(defaultValue);
    }
    return newArray;
}