import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome Joe Bloggs!';

  static get styles() {
    return [
      styles,
      css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('Pixelcode PWA home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'Pixelcode PWA Demo',
        text: 'Check out the Pixelcode PWA Demo App!',
        url: 'https://github.com/ramyavr/pwa-hello',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the Pixelcode PWA web app, check out the
              <a href="https://pixelcodetech.com">
                website for our services</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pixelcodetech.com">Pixelcode WebApp</a>
              ! Be sure to head back to our
              <a href="https://pixelcodetech.com/#service">Services Page</a>
            </p>

            ${'share' in navigator
              ? html`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`
              : null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Links to Pixelcode website</h2>

            <ul>
              <li>
                <a href="https://pixelcodetech.com/#about">About</a>
              </li>

              <li>
                <a href="https://pixelcodetech.com/#service">Services</a>
              </li>

              <li>
                <a href="https://pixelcodetech.com/career.html">Careers</a>
              </li>

              <li>
                 <a href="https://pixelcodetech.com/index.html#contact">Contact</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${(import.meta as any).env.BASE_URL}about" variant="primary">Navigate to About</sl-button>
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </main>
    `;
  }
}
