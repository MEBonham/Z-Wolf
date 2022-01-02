import React from 'react';
import { useParams } from 'react-router-dom';

import { dialogues } from './dialogues';
import kelani from '../../media/example-playgroup/KelaniAvatar.png';
import tim from '../../media/example-playgroup/TimAvatar.png';
import megan from '../../media/example-playgroup/MeganAvatar.png';
import jasmine from '../../media/example-playgroup/JasmineAvatar.png';
import pedro from '../../media/example-playgroup/PedroAvatar.png';

const ExampleScene = () => {
    const { chapter } = useParams();
    const portraitIndex = { kelani, tim, megan, jasmine, pedro };

    return(
        <>
            {dialogues[chapter].map((line) => {
                let imgBlock;
                if (line.speaker === "title") {
                    return(<h2 className="title">{line.text}</h2>);
                } else if (line.speaker === "dice") {
                    imgBlock = <span className="dice" />
                } else if (line.speaker) {
                    imgBlock = <img src={portraitIndex[line.speaker]} alt={line.speaker} className="speaker" />;
                } else {
                    imgBlock = <span className="noSpeaker" />
                }
                return(
                    <p className="demoLine">
                        {imgBlock}
                        {line.text}
                    </p>
                );
            })}
        </>
    );
}

export default ExampleScene;