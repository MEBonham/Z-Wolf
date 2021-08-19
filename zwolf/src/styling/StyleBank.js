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
    background-color: #302315;

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
                    border: 1px solid rgba(50, 168, 82, 0.4);
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
    section.tab.main {
        display: flex;

        > table {
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
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    section.tab.inventory {
        > header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
    }
    section.tab.configure {
        line-height: 1.3;

        div.specialConfig span.levelBubble {
            padding: 3px 8px 4px;
            border-radius: 50%;
            background-color: rgba(50, 168, 82, 0.3);
        }
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