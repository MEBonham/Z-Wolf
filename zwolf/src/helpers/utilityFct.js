

export const clamp = (main, minVal, maxVal) => {
    const inter = Math.max(main, minVal);
    return Math.min(inter, maxVal);
}

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
    const tempClumps = objArr.sort((a, b) => a[propertyName] - b[propertyName]);
    const tempOverlaps = [];
    const breakAt = [0];
    for (let i = 0; i < tempClumps.length - 1; i++) {
        if (tempClumps[i].overlap !== tempClumps[i+1].overlap) {
            breakAt.push(i + 1);
        }
    }
    for (let i = 0; i < breakAt.length - 1; i++) {
        if (breakAt[i+1] - breakAt[i] > 1) {
            tempOverlaps.push(tempClumps.slice(breakAt[i], breakAt[i+1]));
        }
    }
    if (tempClumps.length - breakAt[breakAt.length - 1] > 1) {
        tempOverlaps.push(tempClumps[breakAt[breakAt.length - 1]]);
    }
    return tempOverlaps;
}