import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useChar from '../../hooks/CreatureStore';
import EquipAdder from './EquipAdder';
import Accordion from '../ui/Accordion';
import AccordionSection from '../ui/AccordionSection';

import MersenneTwister from 'mersenne-twister';
import ItemSummary from './ItemSummary';
let gen = new MersenneTwister();

const CharSheetInventory = () => {
    const { slug } = useParams();
    const cur = useChar((state) => state.cur);
    const setCur = useChar((state) => state.setCur);
    const { register, watch, reset } = useForm();
    const wealthQty = watch("wealthQty");

    const d6 = () => {
        return Math.floor(6 * gen.random() + 1)
    }
    const nd6 = (n) => {
        return [...Array(n).keys()].map(() => d6());
    }
    const failures = (rollArr) => {
        return rollArr.filter((num) => num < 4).length;
    }
    const successes = (rollArr) => {
        return rollArr.filter((num) => num > 4).length;
    }

    const gain = (ev) => {
        ev.preventDefault();
        const roll = nd6(cur.wealth);
        const newWealth = cur.wealth + Math.max(0, (wealthQty ? wealthQty : 0) - failures(roll));
        reset();
        setCur({
            ...cur,
            wealth: newWealth
        });
    }
    const lose = (ev) => {
        ev.preventDefault();
        const roll = nd6(cur.wealth);
        const newWealth = Math.max(0, cur.wealth - Math.max(0, (wealthQty ? wealthQty : 0) - successes(roll)));
        reset();
        setCur({
            ...cur,
            wealth: newWealth
        });
    }

    return (
        <section className="tab inventory">
            <header>
                <h2>Inventory</h2>
                <div>
                    <h3>Wealth: {cur.wealth}</h3>
                </div>
            </header>
            <form className="floatRight">
                <button onClick={gain}>Gain Wealth</button>
                <input type="number" className="short" {...register("wealthQty")} />
                <button onClick={lose}>Lose Wealth</button>
            </form>
            <section>
                <Accordion lsUniqueKey={`zWolfCharInvAccordion_${slug}_main`}>
                    {cur.equipment.map((equipObj, i) => {
                        return(<AccordionSection key={i}>
                            <ItemSummary item={equipObj} index={i} />
                            <p>{equipObj.delta}</p>
                        </AccordionSection>);
                    })}
                </Accordion>
            </section>
            <EquipAdder />
        </section>
    );
}

export default CharSheetInventory;