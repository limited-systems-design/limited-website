import { LitElement, html } from 'lit-element';
export class AppContainer extends LitElement {
    static get properties() {
        return {
            name: {
              type: String,
              value: 'Limited Systems Design'
            },
            expanded: {
                type: Boolean,
            },
            logo: {
                type: String,
                value: 'LSD'
            }

        };
    }
    constructor () {
        super();
        this.name = 'Limited\nSystems\nDesign';
        this.upcase = this.name.toUpperCase();
        this.expanded = false;
        this.logo = 'LSD';
        this.downcase = this.logo.toLowerCase();
    }
    handleClick () {
        this.expanded = !this.expanded; 
        
    }


    render() {
    return html `
        <style>
            :host {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-weight: 100;
                font-size: 2em;
                grid-column: 3;
                justify-self: center;
                align-self: center;
                grid-row: 3;
                white-space: pre-wrap;
                text-align: center;
                pointer-events: fill;
                cursor: pointer;
                
            }
            :host > svg {
                justify-self: center;
                align-self: center;
            }
        </style>
        <div @click="${this.handleClick}">
        ${this.expanded?
            html`<div>${this.name}</div>`:
            html `<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg></div>`
        }
        </div>
        `;
        
    }
}

customElements.define('app-container', AppContainer);