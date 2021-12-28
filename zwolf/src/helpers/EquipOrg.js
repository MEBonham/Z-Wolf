import { MAX_EQUIP_NEST } from './SiteConstants';

const objFromId = (itemId, equipArr) => {
    for (let i = 0; i < equipArr.length; i++) {
        if (equipArr[i].id === itemId) return equipArr[i];
    }
    return {};
}

export const isInSomething = (itemObj) => {
    if (itemObj.location === "available") return false;
    if (itemObj.location === "equipped") return false;
    if (itemObj.location === "notCarried") return false;
    return true;
}

export const isLoopNested = (itemId, equipArr, n=0) => {
    if (n > MAX_EQUIP_NEST) return true;
    const itemObj = objFromId(itemId, equipArr);
    if (!isInSomething(itemObj)) return false;
    return isLoopNested(itemObj.location, equipArr, n + 1);
}

export const ultimateLoc = (itemObj, equipArr, n=0) => {
    if (n > MAX_EQUIP_NEST) return false;
    if (!isInSomething(itemObj)) return itemObj.location;
    const wrapObj = objFromId(itemObj.location, equipArr);
    return ultimateLoc(wrapObj, equipArr, n + 1);
}

export const formatInventory = (equipArr) => {
    let result = [];
    let indent = 0;

    let pool = equipArr.filter((itemObj) => !isInSomething(itemObj));
    pool.forEach((itemObj, i) => {
        result.push({
            ...itemObj,
            depth: indent,
            i,
            outOf: pool.length
        });
    });

    let prevLen = 0;
    while (result.length > prevLen) {
        prevLen = result.length;
        let newResult = [];
        result.forEach((itemObj) => {
            newResult.push(itemObj);
            if (itemObj.depth === indent) {
                pool = equipArr.filter((contents) => contents.location === itemObj.id);
                pool.forEach((contents, i) => {
                    newResult.push({
                        ...contents,
                        depth: indent + 1,
                        i,
                        outOf: pool.length
                    });
                })
            }
        });
        result = newResult;
        indent += 1;
    }
    return result;
}