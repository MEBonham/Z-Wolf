import { Editor, Transforms } from 'slate';

export const getActiveStyles = (editor) => {
    return new Set(Object.keys(Editor.marks(editor) ?? {}));
};

export const toggleStyle = (editor, style) => {
    const activeStyles = getActiveStyles(editor);
    if (activeStyles.has(style)) {
        Editor.removeMark(editor, style);
    } else {
        Editor.addMark(editor, style, true);
    }
};

export const getTextBlockStyle = (editor) => {
    const selection = editor.selection;
    if (selection == null) {
        return null;
    }

    const topLevelBlockNodesInSelection = Editor.nodes(editor, {
        at: editor.selection,
        mode: "highest",
        match: (n) => Editor.isBlock(editor, n),
    });

    let blockType = null;
    let nodeEntry = topLevelBlockNodesInSelection.next();
    while (!nodeEntry.done) {
        const [node, _] = nodeEntry.value;
        if (blockType == null) {
            blockType = node.type;
        } else if (blockType !== node.type) {
            return "multiple";
        }
        nodeEntry = topLevelBlockNodesInSelection.next();
    }

    return blockType;
};

export const toggleBlockType = (editor, blockType) => {
    const currentBlockType = getTextBlockStyle(editor);
    const changeTo = currentBlockType === blockType ? "paragraph" : blockType;
    Transforms.setNodes(
        editor,
        { type: changeTo },
        { at: editor.selection, match: (n) => Editor.isBlock(editor, n) }
    );
}
