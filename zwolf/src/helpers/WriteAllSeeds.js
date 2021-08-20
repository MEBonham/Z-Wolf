import fb from '../fbConfig';
import { seedsList } from './GameConstants';

const writeAllSeeds = () => {
    const db = fb.db;
    seedsList.forEach((seedName) => {
        const slug = (`${seedName}seed`).toLowerCase();
        const data = {
            delta: (`{"ops":[{"insert":"Acid Seed"},{"attributes":{"header":2},"insert":"\n"},{"attributes":{"bold":true},"insert":"Prerequisites:"},{"insert":" none.\nBenefits:"},{"attributes":{"header":3},"insert":"\n"},{"insert":"As an Action, you can enable yourself to cast your Spells using the Acid Seed. This lasts until you activate another Seed of magic or become unconscious."},{"attributes":{"list":"bullet"},"insert":"\n"}]}`).replace(/Acid/g, seedName),
            name: `${seedName} Seed`,
            tags: [
                "Core",
                "Seed"
            ],
            verb: [
                {
                    activity: "Action",
                    bullet: "1"
                }
            ]
        };
        db.collection("talents").doc(slug).set(data);
    });
}
export default writeAllSeeds;