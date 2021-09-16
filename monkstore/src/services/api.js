import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api{
    async ListaProduto(){
        let dados = await api.get(`/produto/`);
        return dados.data;
    }

    async AdicionarProduto(nome, categoria, precoD, precoP,avaliacao,descricao,estoque,img){
        
        let info = {
            nome : nome,
            categoria : categoria,
            preco_de : precoD,
            preco_pe : precoP,
            avaliacao: avaliacao,
            descricao : descricao,
            estoque : estoque,
            img : img,
            bt : 1,
            data : new Date()
        }
        let  r = await api.post(`/produto`, info);
        return r.data;
    }
    async EditarProduto(id,nome, categoria, preco_de,preco_pe,avaliacao,descricao,estoque,img,){
        
        let r = await api.put(`/produto/${id}`, { nome : nome, categoria : categoria, preco_de : preco_de, preco_pe: preco_pe, avaliacao : avaliacao, descricao : descricao,estoque : estoque, img : img, bt : 1, data : new Date()});
        return r.data;
    }
    async apagarProduto(id){
        let r = await api.delete(`/produto/`+id )
        return r.data;

    }
}