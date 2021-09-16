import React from "react";
import { Container1 } from "./container1Styled";

export default function FaixaL(){
    return(
        <Container1> 
            <div className="aux2">
                <div class="Img"><img src='./assets/imagens/fox.svg' /></div>
                <div className="aux">Dev</div>
                <div class="titulo">Store</div>
            </div>
            <div className="barra"></div>
            <div className="aux3">
                <div>Geraciamento</div>
                <div className="img2"><img src='./assets/imagens/Vector.svg' /></div>
            </div>
            <div className="botao-white">
                <div className="test">Produtos </div>
                <div className="test"></div>
            </div>
            
        </Container1>
    );
}