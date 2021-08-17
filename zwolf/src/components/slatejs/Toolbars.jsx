import React, { useCallback } from 'react';
// import Select from 'react-select';
import { useSlateStatic } from "slate-react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { getActiveStyles, getTextBlockStyle, toggleStyle, toggleBlockType } from '../../helpers/EditorUtils';

const PARAGRAPH_STYLES = ["h1", "h2", "h3", "h4", "paragraph", "multiple"];
const PARAGRAPH_STYLES_LABELS = ["Header 1", "Header 2", "Header 3", "Header 4", "Paragraph", "Multiple"];
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
    const editor = useSlateStatic();

    function getLabelForBlockStyle(style) {
        switch (style) {
            case "h1":
                return "Heading 1";
            case "h2":
                return "Heading 2";
            case "h3":
                return "Heading 3";
            case "h4":
                return "Heading 4";
            case "paragraph":
                return "Paragraph";
            case "multiple":
                return "Multiple";
            default:
                throw new Error(`Unhandled style in getLabelForBlockStyle: ${style}`);
        }
    }

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

    const onBlockTypeChange = useCallback((targetType) => {
        console.log(targetType);
        if (targetType === "multiple") {
            return;
        }
        toggleBlockType(editor, targetType);
    }, [editor]);

    const blockType = getTextBlockStyle(editor);

    return (
        <div className="slateToolbar">
        {/* Dropdown for paragraph styles */}
        <DropdownButton
            className={"block-style-dropdown"}
            disabled={blockType == null || blockType === ""}
            id="block-style"
            title={getLabelForBlockStyle(blockType ?? "paragraph")}
            onSelect={onBlockTypeChange}
        >
            {PARAGRAPH_STYLES.map((blockType) => (
            <Dropdown.Item eventKey={blockType} key={blockType}>
                {getLabelForBlockStyle(blockType)}
            </Dropdown.Item>
            ))}
        </DropdownButton>
        {/* Buttons for character styles */}
        {CHARACTER_STYLES.map((style) => (
            <ToolBarButton
                key={style}
                icon={getIcon(style)}
                isActive={getActiveStyles(editor).has(style)}
                onMouseDown={(ev) => {
                    ev.preventDefault();
                    toggleStyle(editor, style);
                }}
            />
        ))}
        </div>
    );
}

export default Toolbar;