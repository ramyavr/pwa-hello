import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main>
        <h2>Pixelcode</h2>

        <sl-card>
          <h2>Pixelcode PWA Demo App</h2>

          <p>This is a sample demo of the PWA web app made by Pixelcode technologies
          </p>

          <p>Check out <a
              href="https://pixelcodetech.com/#about">Pixelcode Technologies</p>
        </sl-card>
  </main>
    `;
  }
}
