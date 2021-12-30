import _ from 'lodash';

export const addClassName = (element, newClass) => {
    const result = [ ...element.className.split(" "), newClass ].join(" ");
    element.className = result;
    return result;
};

export const deleteLastClassName = (element) => {
    const result = element.className.split(" ").slice(0, -1).join(" ");
    element.className = result;
    return result;
};

export const clumpObjectsByProperty = (objArr, propertyName) => {
    const clumps = {};
    objArr.forEach((obj) => {
        clumps[obj[propertyName]] = [
            ...(clumps[obj[propertyName]] ? clumps[obj[propertyName]] : []),
            obj
        ];
    });
    let result = _.cloneDeep(clumps);
    Object.keys(clumps).forEach((propertyVariant) => {
        if (clumps[propertyVariant].length < 2 || propertyVariant === "undefined") {
            delete result[propertyVariant];
        }
    });
    return result;
}