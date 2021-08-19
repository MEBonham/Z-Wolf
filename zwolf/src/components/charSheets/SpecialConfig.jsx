import React from 'react';
import _ from 'lodash';

import BufferDot from '../ui/BufferDot';

const SpecialConfig = (props) => {
    const { terminal } = props;
    const { level, type } = props.data;
    return(
        <span className="specialConfig">
            <span className="levelBubble">{level}</span>
            <span> </span>
            <span>{_.get(props.data, "name", "(none)")}{!terminal && <BufferDot />}</span>
        </span>
    );
}

export default SpecialConfig;