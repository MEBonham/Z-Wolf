import React, { useState, useEffect, useRef } from 'react';
import SimpleBarReact from 'simplebar-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import fb from '../../fbConfig';
import { SpecialBlock } from '../../styling/StyleBank';
import useSidebar from '../../hooks/SidebarStore';

const LibPreview = () => {
    const previewType = useSidebar((state) => state.previewType);
    const previewSlug = useSidebar((state) => state.previewSlug);
    const [libEntry, setLibEntry] = useState(null);
    const [text, setText] = useState(null);
    const quill = useRef(null);
    const db = fb.db;
    useEffect(() => {
        const unsubscribe = db.collection(previewType).doc(previewSlug)
            .onSnapshot((doc) => {
                setLibEntry(doc.data());
        });
        return (() => unsubscribe());
    }, [previewType, previewSlug]);
    
    useEffect(() => {
        if (libEntry && quill.current) {
            const rawDelta = JSON.parse(libEntry.delta).ops;
            let typeTitle;
            switch(previewType) {
                case "kits":
                    typeTitle = "Kit";
                    break;
                case "feats":
                    typeTitle = "Feat";
                    break;
                case "talents":
                    typeTitle = "Talent";
                    break;
                default:
                    console.log("type error in switch");
            }
            const tagString = libEntry.tags.length ?
                `[${libEntry.tags.join("] [")}] ${typeTitle}` :
                typeTitle;
            
            quill.current.getEditor().setContents([
                ...rawDelta.slice(0, 2),
                {
                    insert: tagString
                },
                {
                    attributes: { header: 4 },
                    insert: "\n"
                },
                ...rawDelta.slice(2)
            ]);
        }
    }, [libEntry]);

    return(
        <div className="sidePane">
            <h4>Library Spotlight</h4>
            <SimpleBarReact style={{ width: '100%', height: 'calc(100% - 60px)', paddingRight: '20px' }}>
                <SpecialBlock>
                    <ReactQuill
                        readOnly={true}
                        ref={quill}
                        className="sidebarMode"
                    />
                </SpecialBlock>
            </SimpleBarReact>
        </div>
    );
}

export default LibPreview;