class HelloWorld extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'})

        const raiz = document.createElement('span')
        raiz.setAttribute('class', 'raiz')

        const text = document.createElement('span')
        text.setAttribute('class', 'text')
        text.textContent = this.getAttribute("text")

        raiz.appendChild(text)

        const style = document.createElement('style')
        style.textContent = `
            .raiz {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 200px;
                height: 200px;
                background-color: ${this.getAttribute("collor") || "black"};
            }

            .text {
            font-size:2rem;
            color: white;
            }
        `
        shadow.appendChild(raiz)
        shadow.appendChild(style)

    }
}

customElements.define('hello-world',HelloWorld)