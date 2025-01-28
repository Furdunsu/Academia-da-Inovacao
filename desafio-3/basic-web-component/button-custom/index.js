class CustomButton extends HTMLElement {
    constructor() {
        super();

        // Cria o Shadow DOM para encapsular os estilos
        const shadow = this.attachShadow({ mode: 'open' });

        // Cria o botão
        const button = document.createElement('button');
        
        // Estilos encapsulados
        const style = document.createElement('style');
        style.textContent = `
            button {
                background-color: #4CAF50;
                color: white;
                border: none;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                cursor: pointer;
                border-radius: 12px;
                transition: background-color 0.3s;
            }
            button:hover {
                background-color: #45a049;
            }
        `;

        // Adiciona o estilo e o botão ao Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(button);

        // Adiciona o evento de clique
        button.addEventListener('click', () => {
            console.log('Botão clicado!');
        });
    }

    // Método para observar o atributo label
    static get observedAttributes() {
        return ['label'];
    }

    // Quando o atributo label mudar, atualizar o conteúdo do botão
    attributeChangedCallback(name, newValue) {
        if (name === 'label') {
            this.shadowRoot.querySelector('button').textContent = newValue;
        }
    }

    // Quando o elemento é conectado ao DOM, define o texto inicial do botão
    connectedCallback() {
        const label = this.getAttribute('label') || 'Clique aqui';
        this.shadowRoot.querySelector('button').textContent = label;
    }
}

customElements.define('custom-button', CustomButton);