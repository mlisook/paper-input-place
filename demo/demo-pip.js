import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
import './demo-show-object.js';

import '../paper-input-place.js';
import '@polymer/paper-input/paper-input.js';

/**
 * `demo-pip`
 * Demonstrate paper-input-place
 */
class DemoPip extends PolymerElement {

  static get template() {
    return html `
    <style>
      :host {
        display: block;
        width: 100%;
      }

      paper-input-place {
        --paper-input-place-icon-mixin: {
          color: green;
        };

        --paper-input-place-prefix-icon-mixin: {
          margin-right: 1em;
        };

        --paper-input-place-postfix-icon-mixin: {
          margin-left: 1em;
        };
      }
    </style>

    <template is="dom-if" if="{{!apiKey}}">
      <p>
        The control requires a valid Google API key to provide the Places Autocomplete service. To view the demo, enter your API Key below and click Set Key.
      </p>
      <paper-input label="Enter your google api key" value="{{userApiKey}}"></paper-input>
      <button raised="" on-click="setApiKey" disabled\$="[[!allowSet]]">Set Key</button>
    </template>

    <template is="dom-if" if="{{apiKey}}">
      <paper-input-place value="{{val}}" place="{{place}}" invalid="{{inv}}" api-key="[[apiKey]]" label="Pick a place, any place"></paper-input-place>
      <br>
      <h4>Is Input Invalid?</h4>
      <span hidden\$="[[!inv]]" style="color:red;">True (entry is invalid)</span><span hidden\$="[[inv]]" style="color:green;">False (entry is valid)</span>
      <h4>Value</h4>
      <demo-show-object show-object="[[val]]"></demo-show-object>
      <h4>Place</h4>
      <demo-show-object show-object="[[place]]"></demo-show-object>
    </template>`;
  }

  static get properties() {
    return {
      val: {
        type: Object,
        notify: true,
        value: function () {
          return {
            search: "",
            place_id: "",
            latLng: {
              lat: 0,
              lng: 0
            }
          }
        }
      },
      place: {
        type: Object,
        notify: true
      },
      inv: {
        type: Boolean,
        notify: true
      },
      apiKey: {
        type: String,
        notify: true,
        value: ""
      },
      userApiKey: {
        type: String,
        notify: true,
        observer: "_userApiKeyChanged"
      },
      allowSet: {
        type: Boolean,
        notify: true,
        value: false
      }
    }
  }


  _userApiKeyChanged(newVal, oldVal) {
    this.allowSet = this.userApiKey && this.userApiKey.length > 20 ? true : false;
  }

  setApiKey() {
    this.apiKey = this.userApiKey;
  }
}
window.customElements.define('demo-pip', DemoPip);