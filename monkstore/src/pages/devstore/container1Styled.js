import styled from "styled-components";

const Container1 = styled.div`
    background-color: #2B3031;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    width: 20vw ;
    height: 100vh;
    //text-align: center;
    .aux{
        color:#10EAEA;
        font-size: 1.5em;
        margin-left: 0.5em;

    }
    .aux2{
        display: flex;
        flex-direction: row;
        padding: 1em;
        text-align: center;
        align-items: center;
        
    }
    .aux3{
        display: flex;
        flex-direction: row;
        padding: 1em;
        text-align: center;
        color: white;
        margin-left: 3em ;
        justify-content: space-between;
    }
    .titulo{
        
        font-size: 1.5em;
        margin:none;
        color: white;
        display: flex;
        flex-direction: row ;
       
    }
    .barra{
        background-color: #262626;
        height: 3em;
    }
    .botao-white{
            color: black;
            height: 3em;
            background-color: white;
            padding-top: 0.5em;
            border-left-color: salmon;
            justify-content: space-around ;
            display: flex;
            flex-direction: row;
    }
    .test{
        margin: none;
    }

`;
export {Container1}