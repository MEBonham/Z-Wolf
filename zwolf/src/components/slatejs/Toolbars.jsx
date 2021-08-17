import React, { Fragment } from 'react';
import Select from 'react-select';
// import { Editor } from 'slate';
// import { useSlate } from 'slate-react';

const PARAGRAPH_STYLES = ["h1", "h2", "h3", "h4", "paragraph"];
const PARAGRAPH_STYLES_LABELS = ["Header 1", "Header 2", "Header 3", "Header 4", "Paragraph"];
const CHARACTER_STYLES = ["bold", "italic", "underline", "code"];

const ToolBarButton = (props) => {
    const { icon, isActive, ...otherProps } = props;
    return (
        <button
            className={`toolbarButton ${isActive ? "pushed" : null}`}
            {...otherProps}
        >
            {icon}
        </button>
    );
}

const Toolbar = (props) => {
    const { selection, previousSelection } = props;

    const options = PARAGRAPH_STYLES.map((style, i) => {
        return({
            value: style,
            label: PARAGRAPH_STYLES_LABELS[i]
        });
    });
    const getIcon = (style) => {
        switch (style) {
            case "bold":
                return (<img src="https://img.icons8.com/ios-glyphs/30/000000/bold.png"/>);
            case "italic":
                return (<img src="https://img.icons8.com/ios-glyphs/30/000000/italic.png"/>);
            case "underline":
                return (<img src="https://img.icons8.com/ios-glyphs/30/000000/underline.png"/>);
            case "code":
                return (<img src="https://img.icons8.com/ios-glyphs/30/000000/code.png"/>);
            default:
                return null;
        }
    }

    return (
        <div className="slateToolbar">
        {/* Dropdown for paragraph styles */}
        <Select
            className="paragraphStyleDropdown"
            classNamePrefix="dropOption"
            options={options}
        />
        {/* Buttons for character styles */}
        {CHARACTER_STYLES.map((style) => (
            <ToolBarButton
                key={style}
                icon={getIcon(style)}
                isActive={false}
            />
        ))}
        </div>
    );
}

export default Toolbar;

// export const Toolbar = () => {
//     const editor = useSlate();
//     // console.log(editor);

//     const isFormatActive = (editor, format) => {
//         const [match] = Editor.nodes(editor, {
//             match: n => n[format] === true,
//             mode: 'all'
//         });
//         return !!match;
//     }

//     return (
//         <div className="slateToolbar">
//             <button className={isFormatActive(editor, "bold") ? "pushed" : null}><strong>B</strong></button>
//             <button className={isFormatActive(editor, "italic") ? "pushed" : null}><em>I</em></button>
//         </div>
//     );
// }