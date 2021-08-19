

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