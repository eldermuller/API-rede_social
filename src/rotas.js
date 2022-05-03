const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();

// cadastro de usuario
rotas.post('/cadastro', usuarios.cadastrarUsuario);

//login
rotas.post('/login', login.login);

//filtro para verificar usuario logado
rotas.use(verificaLogin);

//obter e atualizar perfil do usuario
rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.atualizarPerfil);

//postagens

module.exports = rotas;