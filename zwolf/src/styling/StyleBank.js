import styled from 'styled-components';

export const HeaderEnvelope = styled.header`
    width: 100%;
    background-color: #222222;
    display: flex;
    justify-content: center;
    padding: 6px 0;

    h1 {
        font-size: 4rem;

        a {
            color: #32a852;
        }
    }
`;

export const FooterEnvelope = styled.footer`
    width: 100%;
    height: ${(props) => props.height}px;
    background-color: #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;

    p {
        position: relative;
        top: -1px;
        color: #32a852;
    }
`;

export const MainEnvelope = styled.section`
    width: 86%;
    height: calc(100% - ${(props) => props.headerFooterHeight}px);
    max-width: 1400px;
    display: flex;
    justify-content: center;
    color: #cccccc;

    a {
        color: #cccccc;
    }
`;

export const PrimaryBar = styled.section`
    width: 66%;
    margin: 10px 12px 10px 10px;
    padding: 10px 8px 10px 30px;
    background-color: #2a2a2a;
    border-radius: 10px;
    box-shadow: 0 0 7px #32a852;
    transform: scale(1, 1);

    h1 {
        margin: 14px 0 8px;
        font-size: 3rem;
    }
    h2 {
        margin: 8px 0;
        font-size: 2.4rem;
    }
    h3 {
        margin: 8px 0;
        font-size: 2rem;
    }
    h4 {
        margin: 8px 0;
        font-size: 1.6rem;
    }
    p {
        margin: 12px 0;
        line-height: 1.5;
        font-size: 1.4rem;
    }

    nav.toc, section.typicalList {
        font-size: 1.4rem;

        ul {
            list-style: none;
            
            li {
                margin: 6px 0;
            }
        }
    }
`;

export const Sidebar = styled.section`
    width: 34%;
    background-color: #17110a;
    background-image: url("/wood-texture.png");

    > header {
        height: 60px;
        background-color: rgba(255, 255, 255, 0.05);
        font-size: 2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    div.sidePane {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            margin: 14px 0 8px;
            font-size: 2.4rem
        }
        h4 {
            margin: 8px 0;
            font-size: 1.6rem;
        }
        p {
            margin: 12px 0;
            line-height: 1.5;
            font-size: 1.4rem;
        }
        p.small {
            font-size: 1.2rem;
        }
        > button {
            margin: 10px 0 8px;
        }
    }
`;

export const MainNavStyle = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 12px 0;
        font-size: 2.4rem;
    }
    p {
        margin: 8px 0;
        font-size: 1.6rem;
    }
`;

export const SpecialBlock = styled.section`
    display: flex;

    table {
        border-collapse: separate;
        border-spacing: 0 8px;
        font-size: 1.4rem;

        th {
            font-weight: bold;
        }
    }
    div.quill {
        border: 0;

        div.ql-toolbar {
            display: none;
        }
        div.ql-container {
            border: 0;

            h2 {
                margin: 24px 0 4px;
                font-size: 2.4rem;
            }
            h3 {
                margin: 8px 0 4px;
                font-weight: bold;
            }
            h4 {
                margin: 0;
            }
            p {
                margin: 6px 0;
            }
            ul {
                font-size: 1.4rem;
        
                li {
                    margin: 4px 0;
                    padding-left: 0;
                }
            }
        }
    }
    div.quill.sidebarMode {
        div.ql-container {
            padding-left: 10px;

            h2 {
                margin: 4px 0;
            }
        }
    }
    div.filterBox {
        position: fixed;
        right: 10px;
        top: 10px;
        z-index: 1;
        padding: 8px 12px;
        border-radius: 6px;
        background-color: #333333;
        box-shadow: 0 0 5px #32a852;
        font-size: 1.4rem;
        display: flex;
        flex-direction: column;

        div {
            margin: 4px 0;

            img {
                height: 14px;
                position: relative;
                top: 2px;
            }
            select {
                margin: 2px 0 0;
            }
        }
        div.disabled {
            opacity: 0.3;

            img.clickable {
                cursor: default;
            }
        }
    }
`;

export const CharSheetStyling = styled.div`
    padding-top: 4px;

    > header {
        display: flex;
        justify-content: space-between;

        div.headerStats {
            // flex-grow: 20;
        }
        header {
            padding-bottom: 2px;
            border-bottom: 1px solid #32a852;
        }
        div.pools {
            margin-top: 10px;
            display: flex;
            justify-content: space-around;

            div.pool {
                width: 74px;
                padding: 4px 0;
                border-radius: 8px;
                border: 1px solid #32a852;
                background-color: rgba(255, 255, 255, 0.07);
                display: flex;
                flex-direction: column;
                align-items: center;

                div.poolMax {
                    margin-bottom: 4px;
                    font-size: 1.2rem;
                }
                div.bar {
                    width: 100%;
                    height: 12px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    background-color: #444444;

                    div.innerBar {
                        height: 3px;
                    }
                }
                div.mainPoolVal {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    p:first-child {
                        margin: 0;
                        font-weight: bold;
                        font-size: 2rem;
                    }
                    p:nth-child(2) {
                        margin: 0;
                        font-size: 1.2rem;
                    }
                }
            }
        }
        div.basics {
            display: flex;

            div.defVals {
                margin: 4px 14px 0 0;
                display: flex;
                flex-direction: column;
                align-items: center;

                p {
                    margin: 2px 0;
                    font-size: 1.6rem;
                }
            }
            div.pseudoTable {
                margin: 3px 0 0;
                flex-grow: 1;

                > div {
                    width: 100%;
                    padding: 6px;
                    display: flex;

                    span {
                        padding: 0 8px;
                        flex-grow: 1;
                        font-size: 1.6rem;
                    }
                }
                div.saves {
                    border-radius: 4px;
                    border: 1px solid rgba(50, 168, 82, 0.2);
                    box-shadow: 0 0 2px rgba(50, 168, 82, 0.4);
                }
            }
        }
    }
    nav.charSheetTabs {
        width: 100%;
        margin: 10px 0;
        border-top: 1px solid #32a852;
        border-bottom: 1px solid #32a852;
        padding: 6px 0;
        display: flex;
        justify-content: space-around;
        font-size: 1.6rem;

        span.active {
            font-weight: bold;
        }
    }
    section.tab {
        padding-bottom: 12px;
    }
    section.tab.main {
        display: flex;
        align-items: flex-start;

        > table {
            width: 20rem;
            font-size: 1.6rem;
            border-collapse: separate;
            border-spacing: 0 4px;

            td:first-child {
                padding-right: 8px;
            }
            td:nth-child(2) {
                width: 100%;
                text-align: center;
            }
        }
        section.verbs {
            width: calc(100% - 20rem);
            padding-left: 24px;
            display: flex;
            flex-direction: column;

            h2 {
                width: 100%;
                text-align: center;
            }
        }
    }
    section.tab.inventory {
        .short {
            width: 60px;
        }
        .checkbox {
            position: relative;
            top: 2px;
        }
        > header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        form.floatRight {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;
        }
        h4.itemSummary {
            width: 100%;

            > span.nameQty {
                display: inline-block;
                width: 54%;

                img {
                    width: 12px;
                    margin-right: 2px;
                }
            }
            span.bulk {
                display: inline-block;
                width: 20%;
            }
        }
        form.acquire {
            margin-top: 2.4rem;

            > span {
                margin-right: 6px;
                position: relative;

                label {
                    font-size: 1.4rem;
                }
                label.above {
                    position: absolute;
                    bottom: 2rem;
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
    section.tab.configure {
        line-height: 1.3;
        transform: scale(1, 1);

        strong {
            font-size: 1.6rem;
        }
        div.checklist {
            position: absolute;
            top: 4px;
            right: 0;
            z-index: 2;
            max-width: 300px;
            border: 2px solid #333333;
            padding: 4px 8px;
            border-radius: 4px;
            background-color: #555555;
            
            h4 {
                width: 100%;
                margin: 4px 0;
                font-size: 1.4rem;
                text-align: center;
            }
            > div {
                margin: 4px 0;
                display: flex;
                align-items: center;
                font-size: 1.2rem;

                img {
                    height: 14px;
                    margin-right: 4px;
                }
            }
        }
        > div div.bufferBox {
            display: flex;

            div.training select,
            div.choices select,
            div.archetypes button {
                margin-left: 4px;
                position: relative;
                top: 2px;
            }
        }
        > div.notKits {
            margin: 6px 0;
            display: flex;
            flex-wrap: wrap;

            strong {
                margin-right: 4px;
            }
            span.levelBubble {
                margin-right: 2px;
            }
        }
        div.specialConfig {
            margin-right: 2px;
            padding: 2px 3px 3px 2px;
        }
        div.specialConfig.bonus {
            margin-right: 4px;
            border: 2px solid rgba(255, 255, 100, 0.2);
            box-shadow: 0 0 4px rgba(255, 255, 100, 0.4);
        }
        div.specialConfig span.levelBubble {
            padding: 3px 8px 4px;
            border-radius: 50%;
            background-color: rgba(50, 168, 82, 0.3);
        }
        table.skillRankSelections td:first-child {
            padding-right: 4px;
        }
        section.synergies {
            > div {
                display: flex;
                flex-wrap: wrap;

                > span {
                    margin-right: 12px;
                }
            }
            strong {
                margin-right: 4px;
            }
        }
    }
    .accordion {
        width: 100%;
        border-radius: 10px;
        overflow-y: hidden;
        background-color: hsla(136, 54%, 43%, 0.1);

        .title {
            cursor: pointer;
            padding: 3px 20px;
            background-color: hsla(136, 54%, 43%, 0.3);

            h4 {
                margin: 4px 0 5px;
            }
        }
        .toggle {
            display: none;
        }
        .toggle.open {
            width: 100%;
            border-left: 2px solid hsla(136, 54%, 43%, 0.3);
            border-right: 2px solid hsla(136, 54%, 43%, 0.3);
            border-bottom: 2px solid hsla(136, 54%, 43%, 0.3);
            padding: 0 20px 2px;
            display: flex;

            p {
                margin: 0 0 4px;
            }
        }
        section:last-child .toggle.open {
            border-radius: 0 0 9px 9px;
        }
    }
    .editParent {
        display: flex;
    }
`;

export const PortraitDiv = styled.div`
    width: calc(100% - ${(props) => props.headerStatsWidth}px);
    padding-left: 10px;
    position: relative;

    img {
        width: 100%;
    }
    img.exRemind {
        width: 80px;
        height: 80px;
        position: absolute;
        right: 10px;
        bottom: 70px;
    }
`;

export const LibraryAdd = styled.form`
    label {
        font-size: 1.4rem;
    }
    div.cols {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    div.rows {
        display: flex;
        flex-direction: column;
    }
    div.labelPair {
        margin: 4px 0;
        label {
            margin: 0 6px 0 0;
        }
    }
    div.bottomRight {
        margin: 14px 0 0;
        display: flex;
        justify-content: flex-end;
    }
    input.shortenBit {
        width: 141px;
    }
    select.fitFive {
        height: 88px;
    }
    select.fitSix {
        height: 106px;
    }
    div.quill {
        margin: 12px 0;
        background-color: rgba(255, 255, 255, 0.04);

        div.ql-toolbar {
            border-radius: 8px 8px 0 0;
        }
        div.ql-container {
            border-radius: 0 0 8px 8px;
        }
    }
    section.mods {
        margin: 6px 0;
        font-size: 1.4rem;

        > div {
            margin: 4px 0;

            input.short {
                width: 50px;
                height: 19px;
            }
        }
    }
`;

export const MebEditBox = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(1, 1);

    > span.clickable {
        text-shadow: 1px 1px 12px #3dcc63;
    }

    > form.popout.closed {
        display: none;
    }
    > form.popout.open {
        padding: 0 1px;
        display: flex;
        background-color: #666666;
        border: 2px solid #444444;
        border-radius: 2px;
        position: absolute;
        bottom: -2.6rem;
        z-index: 2;

        input.short {
            width: 60px;
        }
    }
`;

export const HzSpace = styled.span`
    width: 0.8rem;
`;