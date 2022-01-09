import create from 'zustand';
import MersenneTwister from 'mersenne-twister';
import { nanoid } from 'nanoid';

import fb from '../fbConfig';

const useDice = create((set) => ({

    generator: new MersenneTwister(),
    nDs: (n, s, gen) => {
        return([...Array(n).keys()].map(() => (Math.floor(s * gen.random() + 1))));
    },

    db: fb.db,
    dbSave: async (dbRef, rollObj, uid) => {
        try {
            const id = nanoid();
            await dbRef.collection("rolls").doc(id).set({
                ...rollObj,
                time: Date.now(),
                shownTo: [ uid ]
            });
        } catch(err) {
            console.log("Error while saving Roll:", err);
        }
    },

    mode: "Normal",
    setMode: (newMode) => set((state) => ({ mode: newMode })),

    coasting: false,
    setCoast: (val) => set((state) => ({ coasting: val })),
    toggleCoast: () => set((state) => ({ coasting: !state.coasting })),

    rollHistory: [],
    addRoll: (rollObj, cNum=0, status={}, uid=null) => {
        set((state) => {
            let situational = 0;
            const tooltips = [];
            if (status.Wounded && rollObj.text.endsWith("Save")) {
                situational -= 2;
                tooltips.push("Wounded: -2")
            }
            const result = {};
            if (rollObj.sides === "usual") {
                if (state.mode === "Normal") {
                    const natRolls = state.nDs(3, 12, state.generator);
                    result.natRolls = natRolls;
                    result.keyNat = natRolls.slice().sort((a, b) => a - b)[1]
                } else if (state.mode === "Boost") {
                    const natRolls = state.nDs(2, 12, state.generator);
                    result.natRolls = natRolls;
                    result.keyNat = natRolls.slice().sort((a, b) => a - b)[1]
                } else if (state.mode === "Drag") {
                    const natRolls = state.nDs(2, 12, state.generator);
                    result.natRolls = natRolls;
                    result.keyNat = natRolls.slice().sort((a, b) => a - b)[0]
                } else {
                    const natRolls = state.nDs(1, 12, state.generator);
                    result.natRolls = natRolls;
                    result.keyNat = natRolls[0]
                }
                result.result = Math.max(state.coasting ? cNum : 0, result.keyNat) + rollObj.modifier + situational;
                if (rollObj.text.includes("Attack")) {
                    result.result = Math.max(result.result, 1);
                }
            } else {
                const natRolls = state.nDs(1, parseInt(rollObj.sides), state.generator);
                result.natRolls = natRolls;
                result.keyNat = natRolls[0];
                result.result = natRolls[0];
            }
            const details = {
                ...rollObj,
                ...result,
                coast: state.coasting ? cNum : false,
                tooltips
            };
            if (uid) {
                state.dbSave(state.db, details, uid);
            }
            return ({
                rollHistory: [
                    ...state.rollHistory,
                    details
                ],
                mode: "Normal",
                coasting: false
            });
        });
    },
    addRemoteRoll: (rollObj) => {
        set((state) => ({
            rollHistory: [
                ...state.rollHistory,
                rollObj
            ]
        }));
    }

}));

export default useDice;