import styled from "styled-components";

const Cabecalho =styled.div`
    height: 10vh;
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
    padding: 0.5em;

    .titulo{
        display:flex;
        flex-direction: row ;
        align-content: center;
        

    }
    .imgP{
        padding: 0.6em;
        border: 1px solid white;
        border-radius: 50%;
        background-color: grey;
        margin-right: 0.5em;
    }
    .btns{
        display:flex;
        flex-direction: row ;
        align-items: center;
    }

`;

export { Cabecalho }