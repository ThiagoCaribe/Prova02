import { Cabecalho } from "./cabecalhoStyled";
import { Button } from "./botaoStyled";
export default function Cabcalho(props){
    return(
        <Cabecalho>
            <div className='titulo'>
                <div className='imgP'><img src='./assets/imagens/User.svg' alt='' /></div>
                <div className='usu'><p> ola, usuario  </p></div>
            </div>
            <div className='btns'>
                <Button onClick={props.teste} style={{'cursor' : 'pointer'}}><img src={'./assets/imagens/relaod.svg' } alt='' /></Button>
                <Button><img src='./assets/imagens/back1.svg' alt='' /></Button>
            </div>
        </Cabecalho>
    );
}   