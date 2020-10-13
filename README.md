# SignRESTFulNode
Neste projeto foi utilizado:

* NodeJS;
* Express;
* JWT;
* MongoDB;
* Mongoose;

## Swagger

Para acessar a documentação da API:

```
https://signinup-rest-node.herokuapp.com/api-docs
```

## Getting Started

URL Base: `https://signinup-rest-node.herokuapp.com/`;<br>

Os métodos **públicos**, são:

* `/health` -> [**GET**] Mensagem para demonstrar o status da aplicação;

* `/signup` -> [**POST**] A partir de um body (exemplo abaixo), poderá ser salvo um usuário;

  ```json
  {
      "nome": "string",
      "email": "string",
      "senha": "string",
      "telefones": [
          {
              "numero": "string",
              "ddd": "string"
          }
      ]
  }
  ```

* `/sign`-> [**POST**] Retorna um Token **bearer** para ser passado aos métodos “privado”;

  ```json
  {
  	"email":"string",
  	"senha":"string"
  }
  ```

### Acessando método privado

Para os métodos privados, é necessário incluir no **header**, um `Authorization`, onde o valor será o `Bearer tokenCriptografado`;