# Nosso Mini Insta

## O que o usário pode fazer

- Fazer login
- Fazer cadastro
- Ver os dados do perfil
- Editar os dados do seu perfil
- Ver postagens de outras pessoas
    - Ver quantidades de curtidas numa postagem
    - Ver os comentários em uma postagem
- Curtir postagens de outras pessoas
- Comentar em postagens

## O que não será possível fazer

- Ver a localização de uma postagem
- Ver pessoas que curtiram uma postagem
- Cutir um comentário
- Comentar em outros comentários

## Endpoints


### POST - Login

#### Dados enviados
- username
- senha

#### Dados retornandos
- sucesso / erro
- token

#### Onjetivos gerais
- Validar username e a senha
- Buscar o usuario no banco de dados
- Varificar se a senha informada está correta
- Gerar o token de autenticação
- Retornar os dados do usuario e o token

---

### POST - Cadastro

#### Dados enviados
- username
- senha

#### Dados retornados
- sucesso / erro

#### Objetivos gerais
- Validar username e senha
- Verificar se o username já existe no banco de dados
- Criptografar a senha
- Cadastrar o usuario no banco de dados
- Retornar sucesso ou erro

---

### GET - Perfil

#### Dados enviados
- token (que terá id ou username)

#### Dados retornados
- URL da foto
- Nome
- Username
- Site
- Bio
- Email
- Telefone
- Gênero

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Retornar os dados do usuario

---

### PUT - Perfil

#### Dados enviados
- token (que terá id ou username)
- URL da foto
- Nome
- Username
- Site
- Bio
- Email
- Telefone
- Gênero
- Senha

#### Dados retornados
- sucesso / erro

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Exigir, ao menos, um campo para atualizar
- Criptografar a senha se for informada
- Varificar se o email e o username já existe no banco de dados se for informado
- Atualizar o registro do usuario no banco de dados
- retornar sucesso ou erro

---

### GET - Postagens

#### Dados enviados
- token
- offset

#### Dados retornados
- Postagens [] 
    - id
    - foi curtido por mim
    - Usuário
        - URL da foto
        - username
        - é perfil oficial
    - Fotos [] 
    - Quantidade de curtidas
    - Comentários
        - username
        - texto
    - Data

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Retornar postagens de outras pessoas

---

### POST - Postagens

#### Dados enviados
- token
- texto
- array com fotos

#### Dados retornados
- sucesso ou erro

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Exigir que seja informado ao menos uma foto no array
- Cadastrar postagem para o usuario logado
- Cadastro das fotos da postagem
- Retornar sucesso ou erro

---

### POST - Curtir

#### Dados enviados
- token (contem username ou id do usuário)
- id da postagem

#### Dados retornados
- sucesso ou erro

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Buscar o cadastro da postagem com o id informado
- Verificar se o usuario já curtiu a postagem
- Cadastrar curtida da postagem no banco de dados
- Retornar sucesso ou erro

---

### POST - Comentar

#### Dados enviados
- token (contem username ou id do usuário)
- id da postagem
- texto do comentário

#### Dados retornados
- sucesso ou erro

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Validar o texto
- Buscar a postagem pelo id informado
- Cadastrar comentário da postagem
- Retornar sucesso ou erro