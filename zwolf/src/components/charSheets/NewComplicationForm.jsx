import React from 'react';
import { useForm } from 'react-hook-form';

import useChar from '../../hooks/CreatureStore';

const NewComplicationForm = () => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const { register, handleSubmit, reset, setFocus } = useForm();

    const handleCompSave = (formData) => {
        setCur({
            ...cur,
            complications: [
                ...cur.complications,
                {
                    ...formData,
                    weakness: (formData.weakness === "false" ? false : true),
                    invokes: 0
                }
            ]
        });
        reset();
        setFocus("category");
    }
    
    return(
        <form onSubmit={handleSubmit(handleCompSave)}>
            <input type="text" placeholder="Type" {...register("category", { required: true })} />
            <input type="text" placeholder="Description" {...register("spellOut", { required: true })} className="long" />
            <input type="hidden" {...register("weakness")} value={true} />
            <button type="submit">Save Complication</button>
        </form>
    );
}

export default NewComplicationForm;