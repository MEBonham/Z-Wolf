import React from 'react';

// Make these into a useEditorConfig hook?

// Define a rendering function based on the element passed to `props`.
export const renderElement = (props) => {
    const { element, children, attributes } = props;
    switch (element.type) {
        case 'thead':
            return (<thead {...attributes}>{children}</thead>);
        case 'tbody':
            return (<tbody {...attributes}>{children}</tbody>);
        case 'table':
            return (<table {...attributes}>{children}</table>);
        case 'table-row':
            return (<tr {...attributes}>{children}</tr>);
        case 'table-cell':
            return (<td {...attributes}>{children}</td>);
        case 'table-cell-header':
            return (<th {...attributes}>{children}</th>);
        case 'header':
            return (<header {...attributes}>{children}</header>);
        case 'footer':
            return (<footer {...attributes}>{children}</footer>);
        case 'section':
            return (<section {...attributes}>{children}</section>);
        case 'block-quote':
            return (<blockquote {...attributes}>{children}</blockquote>);
        case 'code':
            return (<pre>
                <code {...attributes}>{children}</code>
            </pre>);
        case 'bulleted-list':
            return (<ul {...attributes}>{children}</ul>);
        case 'heading1':
            return (<h1 {...attributes}>{children}</h1>);
        case 'heading2':
            return (<h2 {...attributes}>{children}</h2>);
        case 'heading3':
            return (<h3 {...attributes}>{children}</h3>);
        case 'heading4':
            return (<h4 {...attributes}>{children}</h4>);
        case 'heading5':
            return (<h5 {...attributes}>{children}</h5>);
        case 'heading6':
            return (<h6 {...attributes}>{children}</h6>);
        case 'list-item':
            return (<li {...attributes}>{children}</li>);
        case 'numbered-list':
            return (<ol {...attributes}>{children}</ol>);
        case 'link':
            return (<a href={element.url} {...attributes}>{children}</a>);
        // case 'image':
        //     return <ImageElement {...props} />
        default:
            return (<p {...attributes}>{children}</p>);
    }
};

export const renderLeaf = (props) => {
    const { leaf, children, attributes } = props;
    let el = <>{children}</>;
    if (leaf.bold) {
      el = <strong>{el}</strong>;
    }
    if (leaf.code) {
      el = <code>{el}</code>;
    }
    if (leaf.italic) {
      el = <em>{el}</em>;
    }
    if (leaf.underline) {
      el = <u>{el}</u>;
    }
    return <span {...attributes}>{el}</span>;
  }