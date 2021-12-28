import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

import useChar from '../../hooks/CreatureStore';
import { expunge } from '../../helpers/CalcStats';
import { formatInventory, ultimateLoc } from '../../helpers/EquipOrg';
import EquipAdder from './EquipAdder';
import Accordion from '../ui/Accordion';
import AccordionSection from '../ui/AccordionSection';

import MersenneTwister from 'mersenne-twister';
import ItemSummary from './ItemSummary';
import ItemManagement from './ItemManagement';
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
    const sell = (itemObj) => {
        const roll = nd6(cur.wealth);
        const maxGain = Math.ceil(itemObj.price / 2);
        const gain = _.clamp(itemObj.price - failures(roll), 0, maxGain);
        if (typeof window !== "undefined" && window.confirm(
                `This sale would profit you ${gain} Wealth for a total of ${cur.wealth + gain}. Proceed?`)) {
            const i = cur.equipment.findIndex((quarry) => quarry.id === itemObj.id);
            let tempInv;
            let purgedBlock = { ...cur };
            if (itemObj.quantity > 1) {
                tempInv = _.set(cur.equipment, `${i}.quantity`, itemObj.quantity - 1);
            } else {
                tempInv = [
                    ...cur.equipment.slice(0, i),
                    ...cur.equipment.slice(i + 1)
                ];
                const defaultLoc = ultimateLoc(cur.equipment[i], cur.equipment);
                for (let j = 0; j < tempInv.length; j++) {
                    if (tempInv[j].location === itemObj.id) {
                        tempInv[j].location = defaultLoc;
                    }
                }
                purgedBlock = expunge(purgedBlock, itemObj.id);
            }
            setCur({
                ...purgedBlock,
                equipment: formatInventory(tempInv),
                wealth: cur.wealth + gain
            });
        }
    }
    const lose = (ev) => {
        ev.preventDefault();
        const roll = nd6(cur.wealth);
        const newWealth = cur.wealth - Math.max(0, (wealthQty ? wealthQty : 0) - successes(roll));
        if (newWealth >= 0 || (typeof window !== "undefined" && window.confirm(
                `That is more Wealth than you have to lose. Set to zero Wealth anyway?`
        ))) {
            setCur({
                ...cur,
                wealth: Math.max(0, newWealth)
            });
        }
        reset();
    }
    const buy = (itemObj) => {
        const roll = nd6(cur.wealth);
        const loss = Math.max(0, itemObj.price - successes(roll));
        if (loss > cur.wealth) {
            if (typeof window !== "undefined") {
                window.alert(`You can't afford that right now! Purchase cancelled.`);
            }
            return false;
        } else if (typeof window !== "undefined") {
            if (window.confirm(`This purchase would cost you ${loss} Wealth for a remainder of ${cur.wealth - loss}. Proceed?`)) {
                return (cur.wealth - loss);
            } else {
                return false;
            }
        } else return false;
    }

    useEffect(() => {
        const formatted = formatInventory(cur.equipment);
        if (cur && !_.isEqual(formatted, cur.equipment)) {
            setCur({
                ...cur,
                equipment: formatted
            });
        }
    }, [cur]);

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
                <Accordion lsUniqueKey={`zWolfCharInvAccordion_${slug}_inv`}>
                    {cur.equipment.map((equipObj, i) => {
                        return(<AccordionSection key={i}>
                            <ItemSummary item={equipObj} sell={sell} />
                            <ItemManagement item={equipObj} />
                        </AccordionSection>);
                    })}
                </Accordion>
                <div className="bulkSummary">
                    <span />
                    <span>
                        Total Bulk Carried: {cur.stats.totalEffBulk} / {cur.stats.capacity}
                    </span>
                </div>
            </section>
            <EquipAdder buy={buy} />
        </section>
    );
}

export default CharSheetInventory;