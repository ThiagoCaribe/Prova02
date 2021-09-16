import db from './db.js';
import express from 'express'
import cors from 'cors'



const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async (req, resp) =>{
     var r = await db.tb_produto.findAll();
     resp.send(r);
})

app.post('/produto', async (req, resp) =>{
    let info = req.body;
    let check = await db.tb_produto.findOne({where : {nm_produto : info.nome}});
    if(check != null ){
        resp.send({erro : "Nesta lista ja tem esse produto"})
    }
    if(isNaN(info.avaliacao) || isNaN(info.preco_de) || isNaN(info.preco_pe) || isNaN(info.estoque)){
        resp.send({erro : 'Nos campo estoque, preço e avaliçao deve ser coloca um numero'})
    }
    if(info.nome == null || info.nome == '' || info.categoria == null || info.categoria == '' ||  info.preco_de == null ||info.preco_de == ''  ||  info.avaliacao == null || info.avaliacao== '' ||  info.descricao == null || info.descricao== '' ||  info.estoque == null|| info.estoque == '' ||  info.img == null|| info.img == '')
        resp.send({erro:'algum campos esta vazio por favor preencher todos campos'})
    else{
        var r = {
            nm_produto : info.nome,
            ds_categoria : info.categoria,
            vl_preco_de : info.preco_de,
            vl_preco_por : info.preco_pe,
            vl_avaliacao : info.avaliacao,
            ds_produto : info.descricao,
            qtd_estoque : info.estoque,
            img_produto : info.img,
            bt_ativo : info.bt,
            dt_inclusao : info.data
        };
    }
    let res = await db.tb_produto.create(r);
    resp.send('Produto inserido');

})

app.put('/produto/:id', async (req, resp) =>{
    let {nome, categoria, preco_de,preco_pe,avaliacao,descricao,estoque,img,bt,data} = req.body;
    let check = await db.tb_produto.findOne({where : {nm_produto : nome}});
  
    if(isNaN(avaliacao) || isNaN(preco_de) || isNaN(preco_pe) || isNaN(estoque)){
        resp.send({erro : 'Nos campo estoque, preço e avaliçao deve ser coloca um numero'})
    }
    if(nome == null || nome == '' || categoria == null || categoria == '' ||  preco_de == null ||preco_de == ''  ||avaliacao == null ||avaliacao== '' || descricao == null || descricao== '' || estoque == null|| estoque == '' || img == null|| img == '')
        resp.send({erro:'algum campos esta vazio por favor preencher todos campos'})
    
    var alt = await db.tb_produto.update({ nm_produto : nome, ds_categoria : categoria,vl_preco_de : preco_de, vl_preco_por : preco_pe , vl_avaliacao : avaliacao, ds_produto : descricao , qtd_estoque : estoque , img_produto : img, bt_ativo : bt, dt_inclusao : data }, {where : {id_produto :  req.params.id}});
     resp.send('Produto alterado');



})
 app.delete('/produto/:id', async (req, resp) =>{
     
    let t = await db.tb_produto.destroy({where: {id_produto : req.params.id}});
    resp.send(200);
 })

app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))