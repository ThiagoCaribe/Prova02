import { useState , useRef, useEffect } from 'react';
import { Container2 , Input , Text } from "./containe2Styled";
import Cabecalho from "../../compenentes/cabecalho";
import Test from "../../compenentes/titulo";
import { ButtonC } from "../../compenentes/botaoStyled";
import Api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar   from 'react-top-loading-bar'
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const api = new Api();


export default function Faixa2(){
    
    useEffect(() => {
        console.log('just one time');
        ListaProduto();
    }, [])

    // zona de teste acima 
    const [produto, setProduto] = useState([]);
    const [produton, setProduton] = useState('Novo Produto');
    const [btn, setBtn] = useState('Cadastrar');
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco_de, setPreco] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [estoque, setEstoque] = useState('');
    const [preco_por, setPrecop] = useState('');
    const [descricao, setDescricao] = useState('');
    const [img, setImg] = useState('');
    const [idalt, setIdalt] = useState(0);
    
    
    const carre = useRef(null);

    const ValidarR = (resp) =>{
        if(!resp.erro)
            return true;
        toast.error(`${resp.erro}`);
        return false;
    }

    
    const   ListaProduto = async () =>{
       
        carre.current.continuousStart();
        let r = await api.ListaProduto();
        setProduto(r);
        carre.current.complete();
    }
    const InseriProduto = async () => {
        
        if(idalt > 0){
            carre.current.continuousStart();
            let r = await api.EditarProduto(nome,categoria,preco_de,preco_por,avaliacao, descricao, estoque, img);
            setIdalt(0);
            limparCampos();
            if(!ValidarR('r')){
                limparCampos();
                return;}
            setProduton("Novo produto");
            setBtn("Cadastrar");
            ListaProduto();
            toast.dark('Produto alterado com sucesso');
            carre.current.complete();  
            return;
        }else{  
            carre.current.continuousStart();
            let  r = await api.AdicionarProduto(nome,categoria,preco_de,preco_por,avaliacao, descricao, estoque, img);
            limparCampos();
            if(!ValidarR(r)){
                limparCampos();
                return;}
            toast.dark('Produto inserido com sucesso');
            ListaProduto();
            carre.current.complete();  
        }
    }
    function limparCampos(){
        setCategoria('');
        setEstoque('');
        setNome('');
        setPreco('');
        setPrecop('');
        setAvaliacao('');
        setDescricao('');
        setImg('');

        
    }
    const AlterarProduto = async (item) => {
        
        setCategoria(item.ds_categoria);
        setEstoque(item.qtd_estoque);
        setNome(item.nm_produto);
        setPreco(item.vl_preco_de);
        setPrecop(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setDescricao(item.ds_produto);
        setImg(item.img_produto);     
        
        setProduton("Alterando produto " + item.nm_produto);
        setBtn("alterar");
        setIdalt(item.id_produto);  
        console.log(item);
        return;
    }
    const apagarProduto = async (id) => {
        confirmAlert({
            title : 'Excluindo Produto',
            message : `Quer mesmo remove o Produto ${id} ?`,
            buttons : [
                {
                    label : 'sim',
                    onClick : async () => {
                      await api.apagarProduto(id);
                        toast.dark("Produto removido !!");
                        ListaProduto();
                        return;
                    }
                },
                {
                    label : 'não'
                }
            ]
        });
    }
    return(
        <Container2> 
            <LoadingBar color='pink' ref={carre} />
            <Cabecalho teste={ListaProduto} />
                <div className='novo-aluno'>
                    <Test aluno={produton}/>
                    <div className='inputC'>
                        <div className='inputF'>
                            <label>Nome:</label>
                            <Input type="text" id='nome' value={nome} onChange={e =>setNome(e.target.value)}/>
                        </div>
                        <div className='inputF'>
                            <label style={{'margin-left': '1.8em'}}>Preço DE:</label>
                            <Input type="text" id='curso' value={preco_de} onChange={e =>setPreco(e.target.value)}/>
                        </div>
                    </div>     
                    <div className='inputB'>
                        <div className='inputF'>
                            <label>Categoria:</label>
                            <Input type="text" id='Categoria'value={categoria} onChange={e =>setCategoria(e.target.value)} />
                        </div>
                        <div className='inputF'>
                            <label>Preço POR:</label>
                            <Input type="text" id='turma' value={preco_por} onChange={e =>setPrecop(e.target.value)}/>
                        </div>
                    </div>
                    <div className='inputB'>
                        <div className='inputF'>
                            <label>Avaliação:</label>
                            <Input type="text" id='Categoria'value={avaliacao} onChange={e =>setAvaliacao(e.target.value)} />
                        </div>
                        <div className='inputF'>
                            <label>Estoque:</label>
                            <Input type="text" id='turma' value={estoque} onChange={e =>setEstoque(e.target.value)}/>
                        </div>
                    </div>
                    <div className='inputF'>
                            <label>Imagem:</label>
                            <Input style={{width : "45%"}} type="text" id='imagen' value={img} onChange={e => setImg(e.target.value)} />
                    </div> 
                    <div className='inputB'>
                    <label style={{marginRight : "1em" }}>Descrição: </label>
                        <div className='textarea'>
                            <Text cols="60" rows="10" value={descricao} onChange={e =>setDescricao( e.target.value)}  />
                            <div className='cadastrar'>
                                <ButtonC style={{cursor: 'pointer'}} onClick={InseriProduto}>{btn}</ButtonC>
                            </div>
                        </div>
                        
                    </div>     
                </div>
                <div className='aluno-matriculado'>
                    <Test aluno={'Produtos Cadastrado'} />
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Produto</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                                <th>Estoque</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produto.map(x=>
                                <tr>
                                    <td><img src={x.img_produto} alt='' className='imgB '/></td>
                                    <td >{x.id_produto}</td>
                                    <td title={x.nm_produto}>{x.nm_produto > 30 ? x.nm_produto.substring(0,30 + '...') : x.nm_produto} </td>    
                                    <td>{x.ds_categoria}</td>
                                    <td>{x.vl_preco_por}</td>
                                    <td>{x.qtd_estoque}</td>
                                    <td><img src='./assets/imagens/edit.svg' style={{cursor : 'pointer'}} alt='' onClick={() => AlterarProduto(x) } /></td>
                                    <td><img src='./assets/imagens/delete.svg' style={{cursor : 'pointer'}} alt='' onClick={() => apagarProduto(x.id_produto)}  /></td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
        </Container2>
    )
}