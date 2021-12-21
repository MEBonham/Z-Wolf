import React, { Children } from 'react';

const AccordionSection = (props) => {
    const open = (props.openIdx === props.idx);
    const childArr = Children.toArray(props.children);
    const classes = open ? "toggle open" : "toggle";

    return (
        <section>
            <div onClick={props.toggle} id={`${props.lsUniqueKey}_${props.idx}`} className="title">
                {childArr[0]}
            </div>
            <div className={classes}>
                {childArr[1]}
            </div>
        </section>
    );
}

export default AccordionSection;