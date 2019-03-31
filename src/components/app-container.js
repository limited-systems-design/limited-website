import { LitElement, html } from 'lit-element';
export class AppContainer extends LitElement {
    constructor () {
        super();
        this.name = 'LSD'

    }


    render() {
    return html `<div>${this.name}</div>`;
        
    }
}

customElements.define('app-container', AppContainer);