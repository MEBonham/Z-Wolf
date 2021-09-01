import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { useForm } from 'react-hook-form';

import useChar from '../../hooks/CreatureStore';
import { MebEditBox } from '../../styling/StyleBank';

const EditBox = (props) => {
    const { attributePath, classes, inputType } = props;
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const [mebOpen, setMebOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const field = useRef(null);
    const { ref, ...rest } = register("newVal", { valueAsNumber: inputType === "number" });

    useEffect(() => {
        if (mebOpen) {
            field.current.focus();
        }
    }, [mebOpen]);

    const handleVal = (formData) => {
        reset();
        setMebOpen(false);
        const tempObj = { ...cur };
        _.set(tempObj, attributePath, formData.newVal);
        setCur(tempObj);
    }

    return (
        <MebEditBox>
            <span
                className={`clickable ${classes}`}
                onClick={() => setMebOpen(!mebOpen)}
            >
                {_.get(cur, attributePath, 0)}
            </span>
            <form
                className={`popout ${mebOpen ? "open" : "closed"}`}
                onSubmit={handleSubmit(handleVal)}
            >
                <input
                    type={inputType}
                    {...rest}
                    ref={(e) => {
                        ref(e);
                        field.current = e;
                    }}
                    className={inputType === "number" ? "short" : null}
                    defaultValue={_.get(cur, attributePath)}
                />
                <button type="submit">Enter</button>
            </form>
        </MebEditBox>
    );
}

export default EditBox;