import React, { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const ItemManagement = ({ item }) => {
    const quill = useRef(null);

    useEffect(() => {
        if (quill.current) {
            quill.current.getEditor().setContents(JSON.parse(item.delta).ops.slice(2));
        }
    }, []);

    return (
        <>
            <ReactQuill
                readOnly={true}
                ref={quill}
                theme="bubble"
            />
        </>
    );
}

export default ItemManagement;