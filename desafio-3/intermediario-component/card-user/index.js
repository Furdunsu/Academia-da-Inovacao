class CardUser extends HTMLElement {
    constructor() {
        super();

        //Shadow DOM para o componentes
        const shadow = this.attachShadow ({mode: 'open'});

        const container = document.createElement ('div');
        container.setAttribute('class', 'container');

        const name = document.createElement('span');
        name.setAttribute ('class', 'name')
        name.textContent = this.getAttribute("name")

        const email = document.createElement('span');
        email.setAttribute('class', 'email'); 
        email.textContent = this.getAttribute("email");

        const img = document.createElement('img');
        const imgSrc = 'https://picsum.photos/200';  // URL de uma imagem aleatória
        img.src = imgSrc;
        img.alt = 'Imagem Aleatória';

        const button = document.createElement('button')
        button.textContent = 'Detalhes no log';

        const style = document.createElement ('style');
        style.textContent =`
                .container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 200px;
                    height: 200px;
                    flex-direction: column;
                }
                button {
                    padding: 10px;
                    font-size: 16px;
                    cursor: pointer;
                    border: none;
                    background-color:rgb(22, 252, 14);
                    color: white;
                    border-radius: 5px;
                }
                button:hover {
                    background-color:rgb(29, 78, 36);
                }
                span{
                    font-size: 24px;
                    margin-left: 10px;
                }
                
        `;
        
        //Adicionar esilo e os elementos ao Shadow
        shadow.appendChild(style);
        shadow.appendChild(container);
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(email);
        container.appendChild(button);

        //Evento no console log
        button.addEventListener('click', () => {
            console.log(`${name.textContent}, ${email.textContent}, ${img.src}`);
        });
    }
}

customElements.define('card-user', CardUser);