class Pessoa{
    /* FUNÇÃO CONSTRUTORA DE OBJETOS */
    constructor(){
        /* this REFERENCIA O OBJETO ATUAL, data & top keys DO OBJETO */
        this.data = [];
        this.top = -1;
    }

    /* METODOS QUE REALIZAM AS OPERAÇÕES ESPECIFICAS EM PILHAS  */

    /* METODO PUSH - ADICIONA UM NOVO ELEMENTO NA STACK */
    push(value){
        /*QUANDO push É EXECUTADO É INCREMENTADO A PROPRIEDADE top  */
        this.top++;
        /* O ARRAY data RECEBE O VALUE DO PARAMETRO DO push E ADICIONA ESSE VALOR NO ÍNDICE DO ARRAY QUE TEM O MESMO VALOR DO TOP QUE FOI INCREMENTADO */
        this.data[this.top] = value;

        return this.data;
    }

    /* MÉTODO PUSH - REMOVE O ELEMENTO DO TOPO DA PILHA  */
    pop(){
        /* QUANDO A FUNÇÃO É EXECUTADO É VERIFICADO SE A PROPRIEDADE top DESSE OBJETO É MENOR QUE ZERO RETORANDO undefined INDICANDO QUE NAO HA 
        ELEMENTO NO TOPO DA PILHA PARA SER REMOVIDO */
        if(this.top < 0) return undefined;
        const poppedTop = this.data[this.top];
        /* SE ESSA CONDIÇÃO FOR FALSA O delete IRÁ REMOVER DO ARRAY data O ELEMENTO QUE ESTÁ NO TOPO DA PILHA DE ACORDO CDOM O top QUE É O INDICE ATUAL 
        DO ARRAY */
        delete this.data[this.top];
        /* DECREMENTAÇÃO NA PROPRIEDADE top */
        this.top--;
        return poppedTop;

      /*   if(this.data.length === 0) return undefined; */
     /*    delete this.data[this.top]; */
      /*   this.data.splice(this.top, 1);
        this.top-- 
    return this.data.pop();*/
    }

    /* METODO PEEK - UTILIZADO PARA VISUALIZAR  O ELEMENTO DO TOPO DA STACK */
    peek(){
        /* QUANDO A FUNÇAO peek É EXECUTADA É RETORNADO O VALOR DESSA CONDIÇÃO
        SE A PROPRIEDADE top TIVER VALOR MAIOR OU IGUAL A ZERO (INDICA QUE O ARRAY data POSSUI ALGUM ELEMENTO), ENTÃO É RETORNADO O ELEMENTO 
        DO ARRAY data DE ACORDO COM O VALOR DE top QUE REFERENCIA O ÍNDICE DO ARRAY, CASO CONTRARIO INDICA QUE O ARRAY NAO POSSUI ELEMENTOS E undefinded 
        É RETORNADO */
       return this.top >= 0 ? this.data[this.top] : undefined;
    }
}

const pessoa1 = new Pessoa();

pessoa1.push("teste0");
pessoa1.push("teste1");
pessoa1.push("teste2");
pessoa1.pop();
console.log(pessoa1.peek());