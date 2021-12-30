import create from 'zustand';
import MersenneTwister from 'mersenne-twister';

const useDice = create((set) => ({

    generator: new MersenneTwister(),
    nDs: (n, s, gen) => {
        return([...Array(n).keys()].map(() => (Math.floor(s * gen.random() + 1))));
    },

    mode: "Normal",
    setMode: (newMode) => set((state) => ({ mode: newMode })),

    coasting: false,
    setCoast: (val) => set((state) => ({ coasting: val })),
    toggleCoast: () => set((state) => ({ coasting: !state.coasting })),

    rollHistory: [],
    addRoll: (rollObj, cNum=0) => {
        set((state) => {
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
                result.result = Math.max(state.coasting ? cNum : 0, result.keyNat) + rollObj.modifier;
            } else {
                const natRolls = state.nDs(1, parseInt(rollObj.sides), state.generator);
                result.natRolls = natRolls;
                result.keyNat = natRolls[0];
                result.result = natRolls[0];
            }
            return ({
                rollHistory: [
                    ...state.rollHistory,
                    {
                        ...rollObj,
                        ...result,
                        coast: state.coasting ? cNum : false
                    }
                ],
                mode: "Normal",
                coasting: false
            });
        });
    }

}));

export default useDice;