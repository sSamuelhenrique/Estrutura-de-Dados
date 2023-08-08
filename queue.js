//MODALAGEM
class Queue{
    /* CONSTRUCAO DO OBJETO */
    constructor(){
        this.data = [];
    }

    /* METODO QUE ADICIONA UM ELEMENTO NO FINAL DA FILA - QUANDO EXECUTADA E item PASSADO COM ARGUMENTO RECEBE O VALOR O 
    PUSH ADICIONA O ELEMENTO NO ARRAY data */
    enqueue(item){
        this.data.push(item);
        console.log(`O ${item} chegou na fila`);
    }

    /* MÉTODO QUE REMOVE O PRIMEIRO ELEMENTO A ENTRAR NA FILA - QUANDO EXECUTADA A CONSTANTE item RECEBE O PRIMEIRO ITEM DO ARRAY ATRAVES DO shift*/
    dequeue(){
        /* FUNCIONALIDADE shift UTILIZADA PARA ARRAYS (REMOVE O PRIMEIRO ITEM DO ARRAY) */
        const item = this.data.shift();
        console.log(`${item} saiu da fila`);
    }
}

const fila = new Queue();
/* ADICIONANDO ELEMENTO  NA FILA */
fila.enqueue("Samuel");
fila.enqueue("Givanildo");

/* REMOVENDO O PRIMEIRO ELEMENTO ADICIONADO NA FILA */
fila.dequeue();