const express = require('express');
const app = express();
const port = 3000;

// Array para armazenar as pessoas
let pessoas = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Oliveira' },
    { id: 3, nome: 'Carlos Souza' },
    { id: 4, nome: 'Ana Costa' },
    { id: 5, nome: 'Pedro Santos' },
    { id: 6, nome: 'Juliana Pereira' },
    { id: 7, nome: 'Ricardo Almeida' },
    { id: 8, nome: 'Fernanda Rocha' },
    { id: 9, nome: 'Lucas Ferreira' },
    { id: 10, nome: 'Sofia Martins' }
  ];
// Middleware para interpretar o corpo das requisições em formato JSON
app.use(express.json());

// Rota GET para listar todas as pessoas
app.get('/pessoas', (req, res) => {
    res.json(pessoas)
});


app.get('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id == id);
    
    if (pessoa)
        res.json(pessoa);
    else
        res.json(404, { mensagem: 'Pessoa não encontrada' });
});


app.post('/pessoas', (req, res) = {
    const { nome } = req.body;
    const id = pessoas.length ? pessoas[pessoas.length - 1].id + 1 : 1;
    const novaPessoa = {id, nome};
    pessoas.push(novaPessoa);
    res.status(201).json(novaPessoa);
});


app.put('/pessoa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome } = req.body;
    const index = pessoas.find(p => p.id == id);

    if (index != -1)
    {
        pessoas[index].nome = nome;
        res.json(pessoas[index])
    }
    else
        res.status(404).json({'message': 'Pessoa não encontrada'});
});


app.delete('/pessoa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const len =  pessoas.length;
    for (let i = 0; i< len; i++)
    {
        if (pessoas[i].id == id)
        {
            const pessoaRemovida = pessoas.splice(pessoaIndex, 1);
            res.json(pessoaRemovida);    
        } 
        else
            res.status(404).json({"message": "Pessoa não encontrada"});
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
});
