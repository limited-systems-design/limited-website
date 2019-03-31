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
                font-family: source-code-pro, monospace;
                font-weight: 200;
                font-size: 2em;
                grid-column: 3;
                justify-self: center;
                align-self: center;
                grid-row: 3;
                white-space: pre-wrap;
                text-align: left;
                pointer-events: fill;
                cursor: pointer;
                width: 50vw;
                
            }
            :host > svg {
                justify-self: center;
                align-self: center;
            }
        </style>
        <div @click="${this.handleClick}">
        ${this.expanded?
            html`<div>${this.name}</div>`:
            html `<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183.5 101"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><title>6Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M133.5,1a49,49,0,1,1-49,49,49.06,49.06,0,0,1,49-49m0-1a50,50,0,1,0,50,50,50,50,0,0,0-50-50Z"/><path d="M98.5,2a49,49,0,1,1-49,49,49.06,49.06,0,0,1,49-49m0-1a50,50,0,1,0,50,50,50,50,0,0,0-50-50Z"/><path d="M50.5,1a49,49,0,1,1-49,49,49.06,49.06,0,0,1,49-49m0-1a50,50,0,1,0,50,50,50,50,0,0,0-50-50Z"/><path d="M84,53A11.5,11.5,0,1,1,72.5,64.5,11.51,11.51,0,0,1,84,53m0-1A12.5,12.5,0,1,0,96.5,64.5,12.5,12.5,0,0,0,84,52Z"/><path d="M106,13A11.5,11.5,0,1,1,94.5,24.5,11.51,11.51,0,0,1,106,13m0-1a12.5,12.5,0,1,0,12.5,12.5A12.5,12.5,0,0,0,106,12Z"/><path class="cls-1" d="M50.5,74.5A24.5,24.5,0,1,1,75,50,24.53,24.53,0,0,1,50.5,74.5Z"/><path d="M50.5,26a24,24,0,1,1-24,24,24,24,0,0,1,24-24m0-1a25,25,0,1,0,25,25,25,25,0,0,0-25-25Z"/><path d="M133.5,26a24,24,0,1,1-24,24,24,24,0,0,1,24-24m0-1a25,25,0,1,0,25,25,25,25,0,0,0-25-25Z"/><line class="cls-2" x1="115" y1="3.5" x2="115" y2="96.5"/><line class="cls-2" x1="25" y1="6.5" x2="25" y2="100"/><line class="cls-2" x1="183" y1="100.5" y2="100.5"/></g></g></svg></div>`
        }
        </div>
        `;
        
    }
}

customElements.define('app-container', AppContainer);