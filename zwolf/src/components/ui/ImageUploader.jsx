// Basing this file on the tutorial at https://benmcmahen.com/uploading-images-with-firebase-and-react/, even though it's two years old
// and the libraries involved might have changed since then.

import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import fb from '../../fbConfig';
import 'filepond/dist/filepond.min.css';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

const ImageUploader = ({ path, slug, defaultPortrait }) => {
    const storage = fb.storage().ref();
    const [file, setFile] = useState(defaultPortrait);
    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

    const server = {
        process: (fieldName, inputFile, metadata, load, error, progress, abort) => {
            const task = storage.child(`${path}/${slug}`).put(inputFile, {
                contentType: "image"
            });
            task.on(
                fb.storage.TaskEvent.STATE_CHANGED,
                snap => {
                    progress(true, snap.bytesTransferred, snap.totalBytes)
                },
                err => {
                    error(error.message)
                },
                () => {
                    load(slug);
                }
            )
        },

        load: (source, load, error, progress, abort) => {
            progress(true, 0, 1024);
            storage.child(`${path}/${source}`)
                .getDownloadURL()
                .then((url) => {
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = (ev) => {
                        const blob = xhr.response;
                        load(blob);
                    }
                    xhr.open('GET', url);
                    xhr.send();
                }).catch(err => {
                    error(err.message);
                    abort();
                })
        }
    }

    return (
        <FilePond
            files={file}
            allowMultiple={false}
            maxFiles={1}
            onUpdateFiles={(fileItems) => {
                if (fileItems.length === 0) {
                    setFile(defaultPortrait);
                }
                setFile(fileItems.mamp((fileItem) => fileItem.file));
            }}
            server={server}
        />
    );
}

export default ImageUploader;