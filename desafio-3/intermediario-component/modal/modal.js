class CustomModal extends HTMLElement {
    constructor() {
        super();
        
        // Criar Shadow DOM
        const shadow = this.attachShadow({mode: 'open'});

         // Criação dos elementos do modal
         const modal = document.createElement('div');
         modal.setAttribute('class', 'modal');
 
         const modalContent = document.createElement('div');
         modalContent.setAttribute('class', 'modal-content');
         
         const closeButton = document.createElement('button');
         closeButton.textContent = 'Fechar';
         closeButton.setAttribute('class', 'close-btn');
         
         // Criar o slot para conteúdo customizado
         const slot = document.createElement('slot');

        // Criar o estilo para o modal
        const style = document.createElement('style');
        style.textContent = `
            .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                justify-content: center;
                align-items: center;
            }
            .modal-content {
                background-color: white;
                padding: 20px;
                border-radius: 10px;
                min-width: 300px;
                box-sizing: border-box;
            }
            .modal.show {
                display: flex;
            }
            .close-btn {
                background: red;
                color: white;
                border: none;
                padding: 5px 10px;
                cursor: pointer;
                border-radius: 5px;
                float: right;
            }
        `;
        
        // Adicionar o slot e o botão de fechar dentro do conteúdo do modal
        modalContent.appendChild(closeButton);
        modalContent.appendChild(slot);
        modal.appendChild(modalContent);
        
        // Adicionar o modal e o estilo ao Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(modal);
        
        // Lógica de abertura e fechamento do modal
        this._modal = modal;
        this._closeButton = closeButton;
        this._open = false;

        closeButton.addEventListener('click', () => {
            this.close();
        });
    }

    // Método para abrir o modal
    open() {
        this._modal.classList.add('show');
        this._open = true;
    }

    // Método para fechar o modal
    close() {
        this._modal.classList.remove('show');
        this._open = false;
    }

    // Acessor para verificar se o modal está aberto
    get isOpen() {
        return this._open;
    }
}

// Registrar o Custom Element
customElements.define('custom-modal', CustomModal);
