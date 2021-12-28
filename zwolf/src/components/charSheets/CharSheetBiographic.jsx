import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useChar from '../../hooks/CreatureStore';
import Accordion from '../ui/Accordion';
import AccordionSection from '../ui/AccordionSection';
import ComplicationSummary from './ComplicationSummary';
import NewComplicationForm from './NewComplicationForm';

const CharSheetBiographic = () => {
    const { slug } = useParams();
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const { register, handleSubmit, reset } = useForm();

    const handleMiscSave = (formData) => {
        setCur({
            ...cur,
            complications: [
                ...cur.complications,
                {
                    ...formData,
                    weakness: (formData.weakness === "false" ? false : true)
                }
            ]
        });
        reset();
    }

    return (
        <section className="tab biographic">
            <section>
                <h2>Complications</h2>
                <Accordion lsUniqueKey={`zWolfCharCompAccordion_${slug}_bio`}>
                    {cur.complications.filter((compObj) => compObj.weakness)
                            .map((compObj, i) => {
                        return(<AccordionSection key={i}>
                            <ComplicationSummary compObj={compObj} index={i} />
                            <p>{compObj.spellOut}</p>
                        </AccordionSection>);
                    })}
                </Accordion>
                <NewComplicationForm />
            </section>
            <section>
                <h2>Miscellaneous</h2>
                <p><em>E.g. appearance, positive personality traits, NPC notes about ecological role or positive combat tactics.</em></p>
                {cur.complications.filter((compObj) => !compObj.weakness)
                        .map((compObj, i) => (
                    <p key={i}>
                        <strong>{compObj.category}:</strong> {compObj.spellOut}
                    </p>
                ))}
                <form onSubmit={handleSubmit(handleMiscSave)}>
                    <input type="text" placeholder="Type" {...register("category", { required: true })} />
                    <input type="text" placeholder="Description" {...register("spellOut", { required: true })} className="long" />
                    <input type="hidden" {...register("weakness")} value={false} />
                    <button type="submit">Save Trait</button>
                </form>
            </section>
        </section>
    );
}

export default CharSheetBiographic;