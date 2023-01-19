const express = require('express')
const bancoDados = require('./bancoDados')
const app = express()
const port = 5995

app.use(express.urlencoded({extended:true}))

app.get('/produtos',(req, res, next)=>{
    res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next)=>{
    res.send(bancoDados.getProdutoById(req.params.id))
})

app.post('/produtos',(req, res, next)=> {
    const produto = bancoDados.salvarProduto({
        desc : req.body.desc,
        preco : req.body.preco,
        quant : req.body.quant
    })
    res.send(produto)
})

app.put('/produtos/:id',(req, res, next)=> {
    const produto = bancoDados.salvarProduto({
        id : req.params.id,
        desc : req.body.desc,
        preco : req.body.preco,
        quant : req.body.quant
    })
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})