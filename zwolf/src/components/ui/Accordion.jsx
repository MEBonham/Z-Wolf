import React, { Children, cloneElement, useState, useEffect } from 'react';

const Accordion = ({ children, lsUniqueKey }) => {
    const [openIdx, setOpenIdx] = useState(-1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const saved = window.localStorage.getItem(lsUniqueKey);
            if (saved && parseInt(saved) !== openIdx) {
                setOpenIdx(parseInt(saved));
            };
        }
    }, []);

    const toggle = (ev) => {
        const clickedIdx = parseInt(ev.currentTarget.id.split("_")[3]);
        if (clickedIdx === openIdx) {
            if (typeof window !== "undefined") {
                window.localStorage.setItem(lsUniqueKey, -1);
            }
            setOpenIdx(-1);
        } else {
            if (typeof window !== "undefined") {
                window.localStorage.setItem(lsUniqueKey, clickedIdx);
            }
            setOpenIdx(clickedIdx);
        }
    }

    return (
        <div className="accordion">
            {Children.map(children, (child, idx) => (
                cloneElement(child, {
                    idx,
                    openIdx,
                    toggle,
                    lsUniqueKey
                })
            ))}
        </div>
    );
}

export default Accordion;