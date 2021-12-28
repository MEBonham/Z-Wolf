import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { useForm } from 'react-hook-form';

import useChar from '../../hooks/CreatureStore';
import { MebEditBox } from '../../styling/StyleBank';

const EditVPBox = () => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const [mebOpen, setMebOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const field = useRef(null);
    const { ref, ...rest } = register("newVal");

    useEffect(() => {
        if (mebOpen) {
            field.current.focus();
        }
    }, [mebOpen]);

    const handleVal = (formData) => {
        reset();
        setMebOpen(false);
        let newResult;
        if (formData.newVal[0] === "+") {
            const increase = parseInt(formData.newVal.slice(1));
            newResult = _.clamp(cur.vp + increase, 0, cur.stats.vpMax);
        } else if (formData.newVal[0] === "-") {
            const decrease = parseInt(formData.newVal.slice(1));
            newResult = _.clamp(cur.vp - decrease, 0, cur.stats.vpMax);
        } else {
            newResult = _.clamp(parseInt(formData.newVal), 0, cur.stats.vpMax);
        }
        const tempObj = { ...cur };
        _.set(tempObj, "vp", newResult);
        setCur(tempObj);
    }

    return (
        <MebEditBox>
            <span
                className={`clickable vpEdit`}
                onClick={() => setMebOpen(!mebOpen)}
            >
                {_.get(cur, "vp", 0)}
            </span>
            <form
                className={`popout ${mebOpen ? "open" : "closed"}`}
                onSubmit={handleSubmit(handleVal)}
            >
                <input
                    type="text"
                    {...rest}
                    ref={(e) => {
                        ref(e);
                        field.current = e;
                    }}
                    className="short"
                    defaultValue={_.get(cur, "vp")}
                />
                <button type="submit">Enter</button>
            </form>
        </MebEditBox>
    );
}

export default EditVPBox;