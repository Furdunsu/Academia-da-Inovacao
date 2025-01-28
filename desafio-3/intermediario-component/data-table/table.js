class DataTable extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow ({mode: 'open'})
    }
}
customElements.define('data-table', DataTable) 