import styled from "styled-components";

const Container2 = styled.div`
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 80vw ;
    height: 100vh;

    .novo-aluno{
        display: flex;
        flex-direction: column;
        background-color: white;
        margin: 1em;
        padding: 1em;
        height: 80vh;
    }
    .inputC{
        display:flex ;
        flex-direction: row;
        align-content:center ;
    }
    .inputB{
        display:flex ;
        flex-direction: row;
        align-content:center ;
    }
    .aluno-matriculado{
        margin: 1em;
        padding: 1em;
        
        display: flex;
        flex-direction: column;
        background-color: white;
        

    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
       
        }
            
    thead{
        background-color: #6CC3DF;
        
        
    }
    th{
        font-size: 1em;
        color: white;
        padding: 0.8em;
        
       
    }
    tr{
        text-align: center;
    }
    
    td{
        font-size: 1em;
        padding: 0.5em;
        text-align: center;
        
    }
    .textarea{
        display:flex ;
        flex-direction: row;
        align-content:center ;
    }
    .imgB{
        padding: 1em;
        border:none;
        border-radius: 50%;
        width: 5em;
        height: 5em;
    }
`
const Input = styled.input`
    border: 1px solid #d3d3d3;
    border-radius: 0.5em;
    height: 2.5em;
    margin: 0.5em 0.5em 0.5em 0.5em;


`
const Text = styled.textarea`
    resize: none;
    border: none;
    border: 1px solid #d3d3d3;
    border-radius: 0.5em;

`
export { Container2, Input, Text }


