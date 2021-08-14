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
    
    > section.sidebar {
        width: 34%;
        background-color: #302315;
    }
`;

export const PrimaryBar = styled.section`
    width: 66%;
    margin: 10px 12px 10px 10px;
    padding: 10px 30px;
    background-color: #2a2a2a;
    border-radius: 10px;
    box-shadow: 0 0 7px #32a852;
    overflow-y: auto;

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
        margin: 8px 0;
        line-height: 1.4;
        font-size: 1.4rem;
    }

    nav.toc, section.typicalList {
        font-size: 1.4rem;

        ul {
            list-style: none;
            
            li {
                margin: 4px 0;
            }
        }
    }


`;

export const SpecialBlock = styled.section`
    margin: 10px 0 20px;

    ul {
        margin-left: 24px;
        font-size: 1.4rem;

        li {
            margin: 4px 0;
        }
    }
    table {
        border-collapse: separate;
        border-spacing: 0 8px;
        font-size: 1.4rem;

        th {
            font-weight: bold;
        }
    }
`;