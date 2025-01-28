class CustomCounter extends HTMLElement {
    constructor(){
        super()

        // Cria o Shadow DOM para o componente
        const shadow = this.attachShadow({ mode: 'open' });

        // Inicializa o contador
        this.counter = 0;

        //criando os botões
        const increment = document.createElement ('button');

        this.valueDisplay = document.createElement('span');
        this.valueDisplay.textContent = this.counter;
        
        const decrement = document.createElement ('button');

        increment.textContent = "Incrementar";
        decrement.textContent = "Decrementar";

        

        // Cria o HTML dentro do Shadow DOM
        const style = document.createElement ('style');
        style.textContent =`
                button {
                    padding: 10px;
                    font-size: 16px;
                    cursor: pointer;
                    border: none;
                    background-color: #007bff;
                    color: white;
                    border-radius: 5px;
                }
                button:hover {
                    background-color: #0056b3;
                }
                span{
                    font-size: 24px;
                    margin-left: 10px;
                }
        `;
        shadow.appendChild(style)
        shadow.appendChild(increment)
        shadow.appendChild(decrement)
        shadow.appendChild(this.valueDisplay);

        // Adiciona os eventos de clique
        increment.addEventListener('click', () => this.increment('button'));
        decrement.addEventListener('click', () => this.decrement('button'));
    }

    // Função para incrementar o contador
    increment() {
        this.counter++;
        this.updateValue();
    }

    // Função para decrementar o contador
    decrement() {
        this.counter--;
        this.updateValue();
    }

    // Atualiza o valor exibido no componente
    updateValue() {
        this.valueDisplay.textContent = this.counter;
    
     }
    
    
}

customElements.define('custom-counter', CustomCounter)