import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid'

import fb from '../../fbConfig';
import useChar from '../../hooks/CreatureStore';

const EquipAdder = ({ buy }) => {
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const [lib, setLib] = useState({});
    const { register, handleSubmit, reset } = useForm();

    const db = fb.db;
    useEffect(() => {
        const tempLib = {};
        db.collection("items").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    tempLib[doc.id] = doc.data();
                });
                setLib(tempLib);
            }).catch((error) => {
                console.log("Error getting library: ", error);
            });
    }, []);

    const acquire = (formData) => {
        if (formData.selection !== "(none)" && !formData.buy) {
            setCur({
                ...cur,
                equipment: [
                    ...cur.equipment,
                    {
                        ...lib[formData.selection],
                        quantity: parseInt(formData.quantity),
                        id: nanoid(),
                        location: "available",
                        slug: formData.selection
                    }
                ]
            });
        } else if (formData.selection !== "(none)") {
            const buyResult = buy(lib[formData.selection]);
            if (buyResult !== false) {
                setCur({
                    ...cur,
                    equipment: [
                        ...cur.equipment,
                        {
                            ...lib[formData.selection],
                            quantity: parseInt(formData.quantity),
                            id: nanoid(),
                            location: "available",
                            slug: formData.selection
                        }
                    ],
                    wealth: buyResult
                });
            }
        }
        reset();
    }
    
    return(
        <form onSubmit={handleSubmit(acquire)} className="acquire">
            <select {...register("selection")}>
                <option value="(none)">(none)</option>
                {Object.keys(lib).sort((a, b) => lib[a].name - lib[b].name)
                    .map((libSlug) => (
                        <option value={libSlug} key={libSlug}>({lib[libSlug].price}) {lib[libSlug].name}</option>
                ))}
            </select>
            <span>
                <label className="above">Qty</label>
                <input type="number" {...register("quantity")} defaultValue={1} className="short" />
            </span>
            <span>
                <input type="checkbox" {...register("buy")} defaultChecked={true} className="checkbox" />
                <label>Spend Wealth (once)?</label>
            </span>
            <button type="submit">Acquire</button>
        </form>
    );
}

export default EquipAdder;