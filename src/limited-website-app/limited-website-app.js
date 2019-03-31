import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../components/app-container.js'

/**
 * @customElement
 * @polymer
 */
class LimitedWebsiteApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: grid;
          grid-template-columns: auto auto auto auto auto;
          grid-template-rows: auto auto auto auto auto;
          height: 100vh;
        }
      </style>
      <app-container></app-container>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'limited-website-app'
      }
    };
  }
}

window.customElements.define('limited-website-app', LimitedWebsiteApp);
